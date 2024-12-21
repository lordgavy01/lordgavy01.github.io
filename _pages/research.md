---
layout: archive
title: ""
permalink: /research/
author_profile: false
---

## Research
My research studies **Bird's Eye View (BEV)** perception methods in autonomous driving under the supervision of under  [Prof. Madhava Krishna](https://scholar.google.com/citations?user=QDuPGHwAAAAJ&hl=en). With [Dr. Krishna Murthy Jatavallabhula](https://krrish94.github.io/), I studied **vision-language models (VLMs)** for BEV methods in autonomous driving and extended the networks with _semantic understanding_ and _visual reasoning_ capabilities. Under [Prof. Arun K. Singh](https://scholar.google.com/citations?user=0zgDoIEAAAAJ&hl=en), I also devised novel _uncertainty-aware_ planners within end-to-end BEV frameworks. 

I briefly explored **distributed Model Predictive Control (MPC)** algorithms for **multi-UAV formation** control under [Prof. Harikumar Kandath](https://www.researchgate.net/profile/Harikumar-Kandath). Within the MPC framework, I integrated  **collision avoidance** and robustness to **imperfect communication**.

At [Sprinklr AI](https://www.sprinklr.com/products/customer-service/conversational-ai/), I studied methods efficient **tokenization** strategies to _adapt_ large-language models (LLMs) to **low-resource languages**.


## Publications

<hr class="strong-divider">
<div class="main-publications-container">
  {% for pub in site.data.publications %}
    <div class="publication-item">
      <img src="{{ pub.image | default: '/path/to/default/image.jpg' }}" alt="{{ pub.title }}" class="main-publication-image">
      <div class="publication-content">
        <div class="publication-title">{{ pub.title }}</div>
        <div class="publication-authors">
          {% for author_entry in pub.authors %}
            {% assign author = site.data.authors[author_entry.id] %}
            {% if author.link %}
              <a href="{{ author.link }}">{{ author.name }}{% if author_entry.superscript %}{{ author_entry.superscript }}{% endif %}</a>
            {% else %}
              {{ author.name }}{% if author_entry.superscript %}{{ author_entry.superscript }}{% endif %}
            {% endif %}
            {% unless forloop.last %},{% endunless %}
          {% endfor %}
        </div>
        <div class="publication-info">
          <em>{{ pub.journal }}</em> {{ pub.date | date: "%Y" }}
        </div>
        <div class="publication-links">
          <button class="rbtn" onclick="toggleAbstract('abstract{{ forloop.index }}')"><a class="pub-button">ABS</a></button>
          {% if pub.html_link %}<a href="{{ pub.html_link }}" class="pub-button">HTML</a>{% endif %}
          {% if pub.pdf_link %}<a href="{{ pub.pdf_link }}" class="pub-button">PDF</a>{% endif %}
          {% if pub.video_link %}<a href="{{ pub.video_link }}" class="pub-button">VIDEO</a>{% endif %}
        </div>
        <div id="abstract{{ forloop.index }}" class="abstract">
          {{ pub.abstract }}
        </div>
      </div>
    </div>
  {% endfor %}
</div>
