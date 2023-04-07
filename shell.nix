with import <nixpkgs> {};
let
  nix_pkgs_with_hugo_106 = import (builtins.fetchGit {
         # Descriptive name to make the store path easier to identify                
         name = "nix_pkgs_with_singularity";                                                 
         url = "https://github.com/NixOS/nixpkgs/";                       
         ref = "refs/heads/nixos-22.11";                     
         rev = "6adf48f53d819a7b6e15672817fa1e78e5f4e84f";                                           
     }) {};
in stdenv.mkDerivation {
    name = "node";
    buildInputs = [
        nodejs
        yarn
        nix_pkgs_with_hugo_106.hugo
    ];
    shellHook = ''
        export PATH="$PWD/node_modules/.bin/:$PATH"
        mkdir -p $PWD/node_modules/.bin/hugo 
        ln -s ${nix_pkgs_with_hugo_106.hugo}/bin/hugo $PWD/node_modules/.bin/hugo/hugo
        cat <<EOT > $PWD/node_modules/.bin/hugo/version.json
{
  "arch": "x64",
  "extended": true,
  "os": "linux",
  "version": "0.106.0"
}
EOT
    '';
}
