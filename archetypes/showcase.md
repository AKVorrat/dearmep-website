---
title: "{{ replace .Name "-" " " | title }}"
description: ""
lead: ""
date: {{ .Date }}
lastmod: {{ .Date }}
draft: true
weight: 50
headerimage: header.png
images: ["{{ .Name | urlize }}.jpg"]
contributors: []
---
