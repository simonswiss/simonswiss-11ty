---
layout: layout/page.njk
---

<ul>
{%- for talk in collections.talk -%}
   {% teaser talk.data.title, talk.data.postdate, talk.data.intro, talk.url %}
{%- endfor -%}
</ul>
