---
permalink: /
title: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---


About Me
======

I am a Research Engineer at [Sprinklr](https://www.sprinklr.com/) working on Conversational AI chatbots. 

I graduated from IIIT-Hyderabad with a Dual (B.Tech + MS) Degree in Computer Science. I worked under  [Prof. Madhava Krishna](https://scholar.google.com/citations?user=QDuPGHwAAAAJ&hl=en) at the [Robotics Research Center](https://robotics.iiit.ac.in/), where I worked on the areas of Autonomous Driving along with [Prof. Arun K. Singh](https://scholar.google.com/citations?user=0zgDoIEAAAAJ&hl=en). Later, I also collaborated with [Dr. Krishna Murthy Jatavallabhula](https://krrish94.github.io/) and we studied application of some Vision-Language Models in Autonomous Driving. I also explored Swarm Robotics along with [Prof. Harikumar Kandath](https://www.researchgate.net/profile/Harikumar-Kandath). 

If you wish to connect, please drop an email to [**vikrant.dewangan@research.iiit.ac.in**](mailto:vikrant.dewangan@research.iiit.ac.in)

Research
======
My research is broadly in the following areas:

- Autonomous Driving - Uncertainty Estimation
- Foundational Models applications in Autonomous Driving
- Swarm Robotics


News
======

{% capture table_content %}
| Mar, 2024 | Served as a reviewer for [IROS-2024](https://iros2024-abudhabi.org/) |
| Jan, 2024 | Our paper on Vision-language models in Autonomous Driving titled ["Talk2BEV: Language-enhanced Bird's Eye View maps"](https://llmbev.github.io/talk2bev/) gets accepted into [ICRA-2024](https://2024.ieee-icra.org/) |
| Dec, 2023 | Defended my [Master's thesis](https://drive.google.com/file/d/1DdvOspjY5rZC4TLr590feoNLmlnSCMcv/view?usp=sharing) at IIIT-Hyderabad. |
| Nov, 2023 | Our paper on Swarm Robotics titled ["MPC-Based Obstacle Aware Multi-UAV Formation Control Under Imperfect Communication"](https://www.researchgate.net/publication/381526839_MPC-Based_Obstacle_Aware_Multi-UAV_Formation_Control_Under_Imperfect_Communication/citations) gets accepted into [ICARA-2024](https://www.icara.us/) |
| Oct, 2023 | Served as a reviewer for  [ICRA-2024](https://2024.ieee-icra.org/) and IEEE [ICGVIP-2024](https://icvgip.in/) |
| May, 2023 | Our paper on Uncertainty titled [UAP-BEV: Uncertainty Aware Planning in Bird's Eye View Representations](https://sites.google.com/view/uap-bev/home) accepted into [CASE-2024](https://case2023.org/)  |
| 2022 | Joined [Robotics Research Center](https://robotics.iiit.ac.in/) as a researcher |
| 2018 | Started at [IIIT Hyderabad](https://robotics.iiit.ac.in/) as an undergraduate student |
{% endcapture %}

{% include scrollable_table.html content=table_content %}




## Publications

<div class="publications-container">
  {% for pub in site.data.publications %}
    <div class="publication-item">
      <img src="{{ pub.image | default: '/path/to/default/image.jpg' }}" alt="{{ pub.title }}" class="publication-image">
      <div class="publication-content">
        <div class="publication-title">{{ pub.title }}</div>
        <div class="publication-authors">
          {% for author in pub.authors %}
            <a href="#">{{ author.name }}{% if author.superscript %}{{ author.superscript }}{% endif %}</a>{% unless forloop.last %},{% endunless %}
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

