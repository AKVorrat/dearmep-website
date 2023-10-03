with import <nixpkgs> {};
let
  nix_pkgs_with_hugo_106 = import (builtins.fetchGit {
         # Descriptive name to make the store path easier to identify
         name = "nix_pkgs_with_singularity";
         url = "https://github.com/NixOS/nixpkgs/";
         ref = "refs/heads/nixos-22.11";
         rev = "6adf48f53d819a7b6e15672817fa1e78e5f4e84f";
     }) {};

  os = if pkgs.system == "x86_64-darwin"
    then "darwin"
    else "linux";
in stdenv.mkDerivation {
    name = "node";
    buildInputs = [
      git
      nodejs
      yarn
      nix_pkgs_with_hugo_106.hugo
    ];
    shellHook = ''
        export PATH="$PWD/node_modules/.bin/:$PATH"
        mkdir -p $PWD/node_modules/.bin/hugo
        if [ ! -f $PWD/node_modules/.bin/hugo/hugo ]
          then
            ln -s ${nix_pkgs_with_hugo_106.hugo}/bin/hugo $PWD/node_modules/.bin/hugo/hugo
        fi
        cat <<EOT > $PWD/node_modules/.bin/hugo/version.json
{
  "arch": "x64",
  "extended": true,
  "os": "${os}",
  "version": "0.106.0"
}
EOT
    '';
}
