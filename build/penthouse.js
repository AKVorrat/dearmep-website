const penthouse = require('penthouse')
const xml2js = require('xml2js');
const toml = require('toml');
const fs = require('fs');
const parser = new xml2js.Parser({ attrkey: "ATTR" });
const { spawn } = require('child_process');

// load baseurl
const environment = process.env.HUGO_ENVIRONMENT;
let config = toml.parse(fs.readFileSync('./config/_default/config.toml', 'utf-8'));
let baseurl = config.baseurl.replace(/\/$/, '');
if (fs.existsSync('./config/' + environment + '/config.toml')) {
  let config = toml.parse(fs.readFileSync('./config/' + environment + '/config.toml', 'utf-8'));
  if (config.baseurl) {
    baseurl = config.baseurl.replace(/\/$/, '');
  }
}

let xml_file = fs.readFileSync("public/sitemap.xml", "utf8");
const urls = [];

// Load urls
parser.parseString(xml_file, (error, result) => {
  if (error === null) {
    result.sitemapindex.sitemap.forEach(sitemap => {
      let sitemap_xml_file = fs.readFileSync("public" + sitemap.loc[0].replace(baseurl, ''));
      parser.parseString(sitemap_xml_file, (error, result) => {
        if (error === null) {
          result.urlset.url.forEach(url => {
            urls.push(url.loc[0].replace(baseurl, 'http://localhost:1313'));
          });
        }
        else {
          console.log(error);
        }
      });
    });
  }
  else {
    console.log(error);
  }
});

// Load CSS
let css = "";
files = fs.readdirSync('./public/', {});
files.forEach(file => {
  if (file.endsWith('.css')) {
    let css_file = fs.readFileSync('./public/' + file, "utf8");
    css = css + css_file;
  }
});


const penthouseOptions = {
  cssString: css,
  forceInclude: [
    /^\.col/,
    /^\.row/,
  ]
}

// recursively generates critical css for one url at the time,
// until all urls have been handled
function startNewJob() {
  const url = urls.pop() // NOTE: mutates urls array
  if (!url) {
    // no more new jobs to process (might still be jobs currently in process)
    return Promise.resolve()
  }
  return penthouse({
    url,
    ...penthouseOptions
  })
    .then(criticalCss => {
      let filepath = './public/' + decodeURI(url.replace('http://localhost:1313/', '')) + 'index.html';
      let html_file = fs.readFileSync(filepath, "utf8");

      if (fs.existsSync(filepath.replace("index.html", "index.php"))) {
        console.log(decodeURI(url) + " has php file");
        fs.unlinkSync(filepath);
        filepath = filepath.replace("index.html", "index.php");
        html_file = fs.readFileSync(filepath, "utf8");
      }

      html_file = html_file.replace('</head>', '<style>' + criticalCss + '</style></head>');
      fs.writeFileSync(filepath, html_file);
      console.log(decodeURI(url) + " crawled and critical css inserted");

      // do something with your criticalCSS here!
      // Then call to see if there are more jobs to process
      return startNewJob()
    })
}


// Start hugo server
const hugo = spawn('node_modules/.bin/hugo/hugo', ['server', '--bind=0.0.0.0', '--disableFastRender']);
hugo.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
  if (data.toString().includes('Web Server is available')) {
    // how many jobs do we want to handle in paralell?
    // Below, 5:
    Promise.all([
      startNewJob(),
    ])
      .then(() => {
        console.log('all done!');
        hugo.kill('SIGHUP');
        process.exit(0);
      });
  }
});
hugo.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});
hugo.on('close', (code) => {
  console.log(`hugo exited with code ${code}`);
});
