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

We created this tool to support the protest against the EU initiative to scan indiscriminately all private and public communication of citizens online. This Chat Control bill (Regulation to prevent and combat child sexual abuse online 2022/0155 (COD)) has led to many different campaigns in Europe which try to organize citizens in protests against this direct attack on encryption and other foundations of our online world. DearMEP is user-agnostic and can be implemented by all groups who want to use it.

## Integrate
Integrate the campaign in your Website

**Simple integration:**
```html
<link rel="stylesheet" href="http://stopscanning.me/fonts.css" type="text/css" />
<dear-mep host="https://stopscanning.me/api/" />
<script src="https://stopscanning.me/dear-mep.js"></script>
```
1. Include the fonts CSS
2. Create the dear-mep Element with Parameters
3. Include the dear-mep JS

**Parameters for dear-mep Element**
| Parameter | Description         |
|-----------|---------------------|
| host      | URL to dear-mep api |

**Integration with optional parameters:**
```html
<link rel="stylesheet" href="http://stopscanning.me/fonts.css" type="text/css">
<dear-mep
  host="https://stopscanning.me/api/"
/>
<script src="https://stopscanning.me/dear-mep.js"></script>
```

## Integrations
{{< bs-row >}}
  {{< card src="header.png" title="Reference 1" href="/docs" >}}
  {{< card src="header.png" title="Reference 2" href="https://chatcontrol.de" >}}
{{< /bs-row >}}
