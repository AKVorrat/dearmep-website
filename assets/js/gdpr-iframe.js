const wrappers = document.querySelectorAll('.gdpr-iframe-wrapper');
if (wrappers !== null) {
  const consents = loadConsents();
  for (let i = 0; i < wrappers.length; i++) {
    let iframe = wrappers[i].children[0];
    let consent = wrappers[i].getAttribute("consent");
    if (consent in consents) {
      iframe.setAttribute('src', iframe.getAttribute('data-src'));
      wrappers[i].children[1].remove();
    } else {
      let consentElements = wrappers[i].children[1].children;
      consentElements[consentElements.length -1].addEventListener("click", function(e) {
        const wrapper = e.target.parentElement.parentElement;
        all = wrapper.children[1].children[0].children[0].checked;
        consent = wrapper.getAttribute("consent");
        if(all === true) {
          let consents = loadConsents();
          consents[consent] = true;
          saveConsents(consents);
          loadIframes(consent);
        } else {
          let iframe = wrapper.children[0];
          iframe.setAttribute('src', iframe.getAttribute('data-src'));
          wrapper.children[1].remove();
        }
      });
    }
  }
}

function loadConsents() {
  let consents = localStorage.getItem("gdpr-iframe-consents");
  if (consents === null) {
    consents = {};
  } else {
    consents = JSON.parse(consents);
  }
  return consents;
}

function saveConsents(consents) {
  localStorage.setItem("gdpr-iframe-consents", JSON.stringify(consents));
}

function loadIframes(consent) {
  const wrappers = document.querySelectorAll('.gdpr-iframe-wrapper[consent="' + consent + '"]');
  for (let i = 0; i < wrappers.length; i++) {
    let iframe = wrappers[i].children[0];
      iframe.setAttribute('src', iframe.getAttribute('data-src'));
      if (wrappers[i].children.length > 1) {
        wrappers[i].children[1].remove();
      }
  }

}
