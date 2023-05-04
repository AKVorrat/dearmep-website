---
title: "{{ replace .Name "-" " " | title }}"
description: ""
lead: ""
date: {{ .Date }}
lastmod: {{ .Date }}
draft: false
weight: 50
headerimage: header.png
images: ["{{ .Name | urlize }}.jpg"]
contributors: []
---
