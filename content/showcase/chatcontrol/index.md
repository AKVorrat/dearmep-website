---
title: "Chat Control"
description: "Introducing Doks, a Hugo theme helping you build modern documentation websites that are secure, fast, and SEO-ready — by default."
excerpt: "Introducing Doks, a Hugo theme helping you build modern documentation websites that are secure, fast, and SEO-ready — by default."
date: 2023-04-04T09:19:42+01:00
lastmod: 2023-04-04T09:19:42+01:00
draft: false
weight: 50
headerimage: header.png
images: []
pinned: false
homepage: false
---

We created this tool to support the protest against the EU initiative to scan indiscriminately all private and public communication of citizens online. This Chat Control bill (Regulation to prevent and combat child sexual abuse online 2022/0155 (COD)) has led to many different campaigns in Europe which try to organize citizens in protests against this direct attack on encryption and other foundations of our online world.

## Integrate
Integrate the campaign in your Website

**NOTE:** To be able to integrate DearMEP on your site, it is necessary to whitelist the URL of your site on the DearMEP server. Feel free to contact [team@epicenter.works](mailto:team@epicenter.works) if you would like to add DearMEP to your site.

**Simple integration:**
```html
<link rel="stylesheet" href="https://chatcontrol.dearmep.eu/static/dear-mep.css" type="text/css"/>
<dear-mep host="https://chatcontrol.dearmep.eu/"/></dear-mep>
<script src="https://chatcontrol.dearmep.eu/static/dear-mep.js"></script>
```
1. Include the CSS
2. Create the dear-mep Element with Parameters
3. Include the dear-mep JS

**Parameters for dear-mep Element**
| Parameter               | Description         |
|-------------------------|---------------------|
| host                    | The URL of the DearMEP-Server. This attribute is required! |
| api                     | The URL of the dear-mep API-Server. This attribute is used if the API-Server is hosted separately from the server that provides hosts static assets. |
| assets                  | The URL of the Assets-Server. This attribute is used if the static assets are hosted separately from the API-Server. |
| default&#8209;country         | If the user has not (yet) selected a country and the server cannot determine the country (because a VPN or TOR is used for example), this country will be used as fallback. It makes sense for a german campaign to use "DE" for example. Use two didgit country codes such as: "DE", "AT", ... . |
| disable&#8209;calling         | If this attribute is present the calling functionality is hidden. |
| disable&#8209;scheduling      | If this attribute is present the schedule-call functionality is hidden. NOTE: This functionality is not yet supported but it will be enabled by default as soon as it is. |

**Integration with optional parameters:**
```html
<link rel="stylesheet" href="https://chatcontrol.dearmep.eu/static/dear-mep.css" type="text/css"/>
<dear-mep
  host="https://chatcontrol.dearmep.eu/"
  default-country="DE"
  disable-scheduling
></dear-mep>
<script src="https://chatcontrol.dearmep.eu/static/dear-mep.js"></script>s
```

## Integrations
{{< bs-row >}}
  {{< card src="showcase1ref1.png" title="German Campaign" href="https://chat-kontrolle.eu/" >}}
  {{< card src="showcase1ref2.png" title="Portuguese Campaign" href="https://chatcontrol.pt/" >}}
{{< /bs-row >}}
