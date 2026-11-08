$(function () {
  var LSK = 'cv-lang';

  var en = {
    'nav.about': 'About',
    'nav.experiences': 'Experiences',
    'nav.education': 'Education',
    'nav.certificates': 'Certificates',
    'nav.skills': 'Skills',
    'nav.download': 'Download CV',

    'intro.hi': 'Hi, I&#8217;m Muhamad Farhan Khuwais',
    'intro.live': 'I live in',
    'intro.roles': 'Odoo Developer | IT Programmer | IT Support | Admin &amp; Office',
    'intro.about': 'IT professional with 4+ years of experience as an Odoo Developer (Python), with a background in IT studies, data administration, and online store management. An Informatics graduate accustomed to solving user problems, tidying up work processes, and coordinating across teams. Ready to contribute as a programmer, IT support, or admin.',
    'contact.location': 'Bengkulu City, Bengkulu, Indonesia',

    'work.title': 'Work Experiences',

    'work.job1.date': '01/2024 - Present',
    'work.job1.company': 'Inovasia Systems, Cibitung',
    'work.job1.role': 'Odoo Developer',
    'work.job1.b1': 'Built new Odoo modules for tracking to make work processes more efficient.',
    'work.job1.b2': 'Handled reports from the support team, identified root causes, and fixed module errors and additional issues.',
    'work.job1.b3': 'Coordinated with other parties for application integration and provided user guidance for the developed modules.',

    'work.job2.date': '07/2022 - 04/2024',
    'work.job2.company': 'PT. Rumah Solusi Digital Internasional, South Jakarta',
    'work.job2.role': 'Odoo Developer',
    'work.job2.b1': 'Developed Odoo tracking modules that simplified users&#8217; work.',
    'work.job2.b2': 'Installed and configured Odoo on servers, including user management and access rights.',
    'work.job2.b3': 'Customized module issues and additional requests, and provided user guidance.',

    'work.job3.date': '05/2021 - 06/2022',
    'work.job3.company': 'Mitra10, Tangerang City',
    'work.job3.role': 'Social Media Officer',
    'work.job3.b1': 'Managed Mitra10&#8217;s online store on marketplaces and social media accounts (story, feed).',
    'work.job3.b2': 'Coordinated with admin, warehouse, and sales to keep customer orders running smoothly.',
    'work.job3.b3': 'Created and redesigned photo and video content for store promotion, sales, and events.',

    'work.job4.date': '01/2020 - 05/2021',
    'work.job4.company': 'Cahaya Digital Asia, South Jakarta',
    'work.job4.role': 'TIBCO Developer',
    'work.job4.b1': 'Kept the TIBCO Administrator system healthy (machine, engine, real time, multidim) via MobaXterm.',
    'work.job4.b2': 'Developed TIBCO BusinessWorks: file and database operations (DBC), XPath, schema, HTTP, error handling, REST API.',

    'work.other.title': 'IT Support &amp; Other Experiences',

    'work.other.o1.date': 'Feb 2016 - Apr 2016',
    'work.other.o1.company': 'IT Support Technician &mdash; Pengadilan Agama Depok',
    'work.other.o1.b1': 'Network and hardware troubleshooting.',
    'work.other.o1.b2': 'OS and software installation.',
    'work.other.o1.b3': 'Data entry.',

    'work.other.o2.date': 'Jan 2016 - Feb 2016',
    'work.other.o2.company': 'IT Support Technician &mdash; Gaanak Computer',
    'work.other.o2.b1': 'OS and software installation.',
    'work.other.o2.b2': 'Hardware troubleshooting.',

    'work.other.o3.date': 'Feb 2020',
    'work.other.o3.company': 'System Support Engineer &mdash; Apetnik Nurica Farma',
    'work.other.o3.b1': 'Built desktop-based programs.',

    'work.other.o4.date': '2018 - 2021',
    'work.other.o4.company': 'Graphic Designer &mdash; Freelance',
    'work.other.o4.b1': 'Product, banner, poster, logo, Instagram feed, and invitation design.',

    'edu.title': 'Educations',
    'edu.e1.date': '2016 - 2020',
    'edu.e1.degree': 'Bachelor of Informatics Engineering',
    'edu.e1.school': 'Universitas Indraprasta PGRI (UNINDRA)',
    'edu.e2.date': '2013 - 2016',
    'edu.e2.degree': 'Computer Network Engineering',
    'edu.e2.school': 'SMK Negeri 3 Depok',

    'cert.title': 'Certificates &amp; Publications',
    'cert.c1.date': '05/2021 - 01/2023',
    'cert.c1.name': 'General Class Gojek Program Digital Entrepreneur Academy',
    'cert.c1.issuer': 'Digital Talent Scholarship',
    'cert.c1.credential': 'Credential ID 07720105121-70/DTS.DEA/BLSDM.KOMINFO/05/2021',
    'cert.c2.date': '09/2019 - 09/2022',
    'cert.c2.name': 'Programming and Software Development - Junior Web Programmer',
    'cert.c2.issuer': 'National Professional Certification Agency (BNSP)',
    'cert.c2.credential': 'Credential ID No. Reg. ICT 294 00013634 2019',
    'cert.c3.date': '09/2019 - 09/2022',
    'cert.c3.name': 'Operation and System Tools - Junior Office Operator',
    'cert.c3.issuer': 'National Professional Certification Agency (BNSP)',
    'cert.c3.credential': 'Credential ID No. Reg. ICT 294 00015441 2019',
    'cert.pub.label': 'Publication',
    'cert.pub.title': 'Development of an Electronic Goods Sales Transaction System at Toko Aneka Jaya Sparepart',

    'skills.title': 'Skills',
    'skills.programmer.label': 'Programmer',
    'skills.programmer.items': 'Python, Odoo, Enterprise Resource Planning (ERP), module development and customization, Git, REST API, XPath.',
    'skills.support.label': 'IT Support',
    'skills.support.items': 'OS and software installation, hardware and network troubleshooting, Odoo server installation and configuration, user and access rights management, user guides.',
    'skills.admin.label': 'Admin &amp; Office',
    'skills.admin.items': 'Data entry, online store and customer order management, coordination with admin, warehouse, and sales, sales transaction systems.',
    'skills.ai.label': 'AI &amp; Automation',
    'skills.ai.items': 'Various AI models (LLM), AI API integration into code, using AI to speed up work.',
    'skills.design.label': 'Design &amp; Content',
    'skills.design.items': 'Inkscape, photo and video content, social media.',

    'quote.text': 'Every lesson is an opportunity to grow and develop.',
    'footer.rights': '&copy; 2026 All rights reserved'
  };

  // Cache Indonesian defaults (source of truth in index.html)
  var originals = {};
  $('[data-i18n], [data-i18n-html]').each(function () {
    var key = $(this).attr('data-i18n-html') || $(this).attr('data-i18n');
    if (!(key in originals)) originals[key] = $(this).html();
  });

  function setLang(lang) {
    $('[data-i18n], [data-i18n-html]').each(function () {
      var key = $(this).attr('data-i18n-html') || $(this).attr('data-i18n');
      var value = originals[key];
      if (lang === 'en' && en[key]) value = en[key];
      $(this).html(value);
    });
    document.documentElement.lang = lang;
    $('.lang-switch a').removeClass('active');
    $('.lang-switch a[data-setlang="' + lang + '"]').addClass('active');
    try { localStorage.setItem(LSK, lang); } catch (e) {}
  }

  $('.lang-switch a').on('click', function () {
    setLang($(this).attr('data-setlang'));
  });

  var saved = 'id';
  try { saved = localStorage.getItem(LSK) || 'id'; } catch (e) {}
  if (saved === 'en') setLang('en');
});
