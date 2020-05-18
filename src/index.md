---
title: Welcome to matter!
intro: "Intro snippet maybe"
layout: layout/page.njk
---

<ul>
{%- for post in collections.post -%}
   
   {% teaser post.data.title, post.data.postdate, post.data.intro, post.url %}
   
{%- endfor -%}
</ul>
