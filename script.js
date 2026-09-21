document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', () => {
  const primaryEmail = 'rayvancetechsolutions@gmail.com';
  const primaryPhone = '03700191147';
  const whatsappPhone = '923700191147';
  const mapDirectionsUrl = 'https://www.google.com/maps/dir/?api=1&destination=Karachi%2C%20Pakistan';
  const socialLinks = Object.freeze({
    linkedin: { url: 'https://www.linkedin.com/in/gen-z-coders-b3273b432/', label: 'Follow Ravance Tech Solutions on LinkedIn', icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 8.5V18M6.5 5.5v.01M10.5 18v-5.3a4.2 4.2 0 0 1 8.4 0V18M10.5 12.5V8.5"/></svg>' },
    instagram: { url: 'https://www.instagram.com/genzcoders51/', label: 'Follow Ravance Tech Solutions on Instagram', icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="4.5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.7" r=".8" fill="currentColor" stroke="none"/></svg>' },
    facebook: { url: 'https://www.facebook.com/profile.php?id=61593909993224', label: 'Follow Ravance Tech Solutions on Facebook', icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.5 20v-7h2.7l.4-3h-3.1V8.1c0-.9.2-1.5 1.5-1.5h1.7V3.9c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.2V10H8.5v3h2.8v7"/></svg>' },
    tiktok: { url: 'https://www.tiktok.com/@genzcoders51', label: 'Follow Ravance Tech Solutions on TikTok', icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 4v10.2a3.8 3.8 0 1 1-3.2-3.7M14 4c.8 2.4 2.3 3.7 4.5 3.9"/></svg>' }
  });

  const THEME_STORAGE_KEY = 'gen-z-coders-theme';

  const getInitialTheme = () => {
    try {
      const saved = window.localStorage.getItem(THEME_STORAGE_KEY);
      if (saved === 'dark' || saved === 'light') return saved;
    } catch {
      // Storage unavailable; fall back to the system preference below.
    }
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const applyTheme = (theme, persist = false) => {
    const isDark = theme === 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.classList.toggle('dark-mode', isDark);
    document.body.classList.toggle('dark-mode', isDark);
    if (persist) {
      try { window.localStorage.setItem(THEME_STORAGE_KEY, theme); } catch { /* Storage unavailable; keep theme for this session. */ }
    }
  };

  const isDarkTheme = () => document.documentElement.getAttribute('data-theme') === 'dark';

  applyTheme(getInitialTheme());

  // Keep contact details consistent across every shared footer and contact page.
  document.querySelectorAll('a[href^="mailto:"]').forEach((link) => {
    link.href = `mailto:${primaryEmail}`;
    link.textContent = primaryEmail;
  });

  document.querySelectorAll('a[href^="tel:"]').forEach((link) => {
    link.href = `tel:+923700191147`;
    link.textContent = primaryPhone;
  });

  const emailCta = document.querySelector('.cta a[href^="mailto:"]')?.closest('.cta');
  if (emailCta) {
    emailCta.querySelector('p').textContent = 'Use our primary inbox for new projects.';
    emailCta.querySelectorAll('a[href^="mailto:"]').forEach((link, index) => {
      if (index > 0) link.remove();
    });
  }

  document.querySelectorAll('[data-map-directions]').forEach((mapLink) => {
    mapLink.href = mapDirectionsUrl;
  });

  const addWhatsappButton = () => {
  const whatsappButton = document.createElement('a');
  whatsappButton.className = 'whatsapp-float';
  whatsappButton.href = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent('Hello Ravance Tech Solutions, I would like to discuss a project.')}`;
  whatsappButton.target = '_blank';
  whatsappButton.rel = 'noopener noreferrer';
  whatsappButton.setAttribute('aria-label', 'Chat with Ravance Tech Solutions on WhatsApp');
  whatsappButton.innerHTML = '<span class="whatsapp-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11.5a7.7 7.7 0 0 1-11.4 6.8L4 20l1.8-4.4A7.7 7.7 0 1 1 20 11.5Z"></path><path d="M9.1 8.1c.2-.4.4-.4.7-.4h.4c.2 0 .4.1.5.4l.8 1.8c.1.3.1.5-.1.7l-.5.6c.6 1.1 1.5 2 2.6 2.6l.6-.5c.2-.2.4-.2.7-.1l1.8.8c.3.1.4.3.4.5v.4c0 .3 0 .5-.4.7-.4.2-1.1.4-1.8.2-1.1-.3-2.4-1-3.5-2.1-1.1-1.1-1.8-2.4-2.1-3.5-.2-.7 0-1.4.2-1.8Z"></path></svg></span><span class="whatsapp-copy"><small><i></i>Online now</small><strong>Chat on WhatsApp</strong></span><span class="whatsapp-arrow" aria-hidden="true">↗</span>';
  document.body.append(whatsappButton);
  };

  // The floating contact button is helpful, but it is not needed for the
  // first render. Create it after the main page has had a chance to paint.
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(addWhatsappButton, { timeout: 1500 });
  } else {
    window.setTimeout(addWhatsappButton, 300);
  }

  const vectorIcons = {
    '⌘': '<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="13" rx="2"></rect><path d="M8 21h8M12 17v4M8 9h.01M11 9h5M8 12h.01M11 12h3"></path></svg>',
    '◇': '<svg viewBox="0 0 24 24"><path d="m12 3 2.6 6.4L21 12l-6.4 2.6L12 21l-2.6-6.4L3 12l6.4-2.6L12 3Z"></path><path d="m18 3 .7 1.8L21 5.5l-2.3.7L18 8.5l-.7-2.3-2.3-.7 2.3-.7L18 3Z"></path></svg>',
    '⚙': '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.1 2.1-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-3v-.2a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L6.6 17l.1-.1A1.7 1.7 0 0 0 7 15a1.7 1.7 0 0 0-1.6-1H5.2v-3h.2A1.7 1.7 0 0 0 7 10a1.7 1.7 0 0 0-.3-1.9l-.1-.1 2.1-2.1.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.6v-.2h3v.2a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 8l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v3H21a1.7 1.7 0 0 0-1.6 1Z"></path></svg>',
    '▣': '<svg viewBox="0 0 24 24"><rect x="6" y="2.5" width="12" height="19" rx="2.5"></rect><path d="M10 5h4M11 18.5h2"></path></svg>',
    '↗': '<svg viewBox="0 0 24 24"><path d="M7 17 17 7M9 7h8v8"></path></svg>',
    '✦': '<svg viewBox="0 0 24 24"><path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z"></path><path d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z"></path></svg>',
    '✓': '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"></circle><path d="m8.5 12 2.3 2.3 4.8-5"></path></svg>',
    '◎': '<svg viewBox="0 0 24 24"><path d="M20 11.5a7.5 7.5 0 0 1-8 7.5 8.7 8.7 0 0 1-3.4-.7L4 20l1.7-4.1A7.2 7.2 0 0 1 4 11.5 7.5 7.5 0 0 1 12 4a7.5 7.5 0 0 1 8 7.5Z"></path><path d="M8 11.5h.01M12 11.5h.01M16 11.5h.01"></path></svg>',
    '@': '<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="m3 7 9 6 9-6"></path></svg>',
    '☎': '<svg viewBox="0 0 24 24"><path d="M7 3.5 4.8 5.7c-.5.5-.7 1.2-.5 1.9 1.6 5.8 5.8 10 11.6 11.6.7.2 1.4 0 1.9-.5l2.2-2.2-3.5-3.5-2 1.3a13 13 0 0 1-4.7-4.7l1.3-2L7 3.5Z"></path></svg>',
    '⌖': '<svg viewBox="0 0 24 24"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"></path><circle cx="12" cy="10" r="2.5"></circle></svg>',
    '“': '<svg viewBox="0 0 24 24"><path d="M9.5 7.5C7 8.4 5.5 10.4 5.5 13.2c0 2.1 1.2 3.5 3.1 3.5 1.6 0 2.8-1.1 2.8-2.6 0-1.4-1-2.3-2.3-2.4.2-1.2 1.1-2.1 2.6-2.8L9.5 7.5Zm8 0c-2.5.9-4 2.9-4 5.7 0 2.1 1.2 3.5 3.1 3.5 1.6 0 2.8-1.1 2.8-2.6 0-1.4-1-2.3-2.3-2.4.2-1.2 1.1-2.1 2.6-2.8l-2.2-1.4Z"></path></svg>'
  };

  const replaceDecorativeIcons = () => {
    document.querySelectorAll('.icon-box').forEach((iconBox) => {
      const vectorIcon = vectorIcons[iconBox.textContent.trim()];
      if (vectorIcon) {
        iconBox.innerHTML = vectorIcon;
        iconBox.setAttribute('aria-hidden', 'true');
      }
    });
  };

  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(replaceDecorativeIcons, { timeout: 1200 });
  } else {
    window.setTimeout(replaceDecorativeIcons, 200);
  }

  const canUseCustomCursor = window.matchMedia('(pointer: fine)').matches
    && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const setupCustomCursor = () => {
  if (canUseCustomCursor) {
    document.documentElement.classList.add('has-custom-cursor');
    const dot = document.createElement('div');
    const ring = document.createElement('div');
    dot.className = 'cursor-dot';
    ring.className = 'cursor-ring';
    document.body.append(dot, ring);

    let pointerX = -100;
    let pointerY = -100;
    let ringX = -100;
    let ringY = -100;
    let animationFrame;

    const animateCursor = () => {
      ringX += (pointerX - ringX) * 0.18;
      ringY += (pointerY - ringY) * 0.18;
      dot.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0)`;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      if (Math.abs(pointerX - ringX) > 0.1 || Math.abs(pointerY - ringY) > 0.1) {
        animationFrame = requestAnimationFrame(animateCursor);
      } else {
        animationFrame = undefined;
      }
    };

    window.addEventListener('pointermove', (event) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      dot.classList.add('is-visible');
      ring.classList.add('is-visible');
      if (!animationFrame) animationFrame = requestAnimationFrame(animateCursor);
    }, { passive: true });

    document.querySelectorAll('a, button, input, textarea, select').forEach((element) => {
      element.addEventListener('pointerenter', () => ring.classList.add('is-active'));
      element.addEventListener('pointerleave', () => ring.classList.remove('is-active'));
    });

    document.addEventListener('pointerleave', () => {
      dot.classList.remove('is-visible');
      ring.classList.remove('is-visible');
    });
  }
  };

  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(setupCustomCursor, { timeout: 1800 });
  } else {
    window.setTimeout(setupCustomCursor, 400);
  }

  // Use the approved logo consistently in the header and footer.
  document.querySelectorAll('.brand img').forEach((logo) => {
    logo.src = 'assets/logo.png';
    logo.classList.add('brand-logo');
    logo.alt = 'RayVance Logo';
  });

  document.querySelectorAll('.footer-brand img').forEach((logo) => {
    logo.src = 'assets/logo.png';
    logo.classList.add('brand-logo');
    logo.alt = 'RayVance Logo';
  });

  // Keep primary navigation branding immediate and defer non-critical images.
  document.querySelectorAll('img').forEach((image) => {
    image.loading = image.closest('.site-header, .hero, .inner-hero') ? 'eager' : 'lazy';
    image.decoding = 'async';
  });

  document.querySelectorAll('a[href="index (1).html"]').forEach((link) => {
    link.href = 'index.html';
  });

  // Keep text and directional icons aligned in every button, including buttons
  // whose arrow was written as plain text in the original HTML.
  document.querySelectorAll('.btn').forEach((button) => {
    const directIcon = [...button.children].find((child) => (
      child.tagName === 'SPAN'
      && !child.classList.contains('btn-arrow')
      && /^[↗→➜]$/.test(child.textContent.trim())
    ));

    if (directIcon) directIcon.classList.add('button-icon');

    const textNode = [...button.childNodes].reverse().find((node) => (
      node.nodeType === Node.TEXT_NODE && /\s*[↗→➜]\s*$/.test(node.nodeValue)
    ));

    if (textNode) {
      const match = textNode.nodeValue.match(/\s*([↗→➜])\s*$/);
      textNode.nodeValue = textNode.nodeValue.slice(0, match.index);
      const icon = document.createElement('span');
      icon.className = 'button-icon';
      icon.textContent = match[1];
      button.append(icon);
    }
  });

  const currentPage = document.body.dataset.page;
  if (currentPage) {
    document.querySelectorAll('.nav-links [data-page]:not(.nav-cta)').forEach((link) => {
      link.classList.toggle('active', link.dataset.page === currentPage);
    });
  }

  // Add the complete service catalogue without disturbing the existing service cards.
  if (currentPage === 'pricing') {
    const pricingHero = document.querySelector('.pricing-hero');
    if (pricingHero && !document.querySelector('.pricing-grid')) {
      const pricingSection = document.createElement('section');
      pricingSection.className = 'section';
      pricingSection.innerHTML = `<div class="container"><div class="section-head reveal"><div><span class="eyebrow">Starting estimates</span><h2>Choose a starting point for your project.</h2></div><p class="lead">Prices are starting estimates and may vary depending on your requirements, content, integrations and timeline.</p></div><div class="pricing-grid"><article class="price-card reveal"><span class="eyebrow">Starter</span><h3>Starter website</h3><strong>Starting from PKR 25,000</strong><ul><li>Up to 5 pages</li><li>Responsive design</li><li>Contact form and WhatsApp</li><li>Basic SEO setup</li><li>Hosting and domain guidance</li></ul><a class="btn btn-outline" href="contact.html">Request a quote ↗</a></article><article class="price-card featured reveal delay-1"><span class="eyebrow">Recommended</span><h3>Business website</h3><strong>Starting from PKR 60,000</strong><ul><li>Up to 10 pages</li><li>Responsive custom design</li><li>Contact form and WhatsApp</li><li>Basic SEO and performance setup</li><li>Revision and launch plan</li></ul><a class="btn btn-primary" href="contact.html">Discuss your project ↗</a></article><article class="price-card reveal delay-2"><span class="eyebrow">Premium</span><h3>Custom project</h3><strong>Let's discuss</strong><ul><li>Custom features or web app</li><li>Advanced integrations</li><li>SEO, maintenance and support</li><li>Delivery plan based on scope</li><li>Dedicated project guidance</li></ul><a class="btn btn-outline" href="contact.html">Get a custom quote ↗</a></article></div></div>`;
      pricingHero.after(pricingSection);
    }
  }

  if (currentPage === 'contact') {
    const formGrid = document.querySelector('#contact-form .form-grid');
    if (formGrid && !formGrid.querySelector('#phone')) {
      const contactPreferences = document.createElement('div');
      contactPreferences.className = 'field full';
      contactPreferences.innerHTML = '<label for="phone">WhatsApp / phone number</label><input id="phone" name="phone" type="tel" inputmode="tel" autocomplete="tel" placeholder="Optional"><span class="error"></span>';
      const contactMethod = document.createElement('div');
      contactMethod.className = 'field';
      contactMethod.innerHTML = '<label for="contact-method">Preferred contact method</label><select id="contact-method" name="preferred_contact_method"><option value="WhatsApp">WhatsApp</option><option value="Email">Email</option><option value="Call">Call</option></select><span class="error"></span>';
      formGrid.querySelector('.field.full')?.before(contactPreferences);
      formGrid.append(contactMethod);
    }
  }

  if (currentPage === 'services') {
    const detailedServices = [
      ['SEO Services', 'Keyword research, on-page SEO, technical fixes and reporting.', 'Businesses that want to be found on Google.', 'seo'],
      ['Website Development', 'Responsive pages, contact forms, clear calls to action and speed-focused builds.', 'Businesses launching or improving their website.', 'web-development'],
      ['App Development', 'Planning, interface design and useful web or mobile app features.', 'Founders and teams improving a customer workflow.', 'app-development'],
      ['FYP Projects', 'Project planning, development guidance, documentation support and demo preparation.', 'Students creating a focused final-year project.', 'fyp-projects'],
      ['Social Media Marketing', 'Profile optimisation, content direction and campaign ideas.', 'Businesses building awareness and engagement.', 'social-media-marketing'],
      ['UI/UX Design', 'User flows, wireframes and clean interface designs.', 'Products that need a clearer and easier experience.', 'ui-ux-design'],
      ['Software Development', 'Custom systems, dashboards and internal business tools.', 'Teams replacing repetitive manual work.', 'software-development'],
      ['Hosting & Deployment', 'Domain connection, hosting configuration, secure deployment and launch checks.', 'Businesses ready to take a site or app live.', 'hosting-deployment'],
      ['API Integration', 'Secure connections between websites, apps, payments and business tools.', 'Teams whose systems need to share data.', 'api-integration'],
      ['CMS Development', 'An easy dashboard for updating website pages and content.', 'Businesses that want control of ongoing updates.', 'cms-development'],
      ['Software Updates', 'Feature improvements, security updates, bug fixes and compatibility checks.', 'Existing software that needs to remain reliable.', 'software-updates'],
      ['Website Maintenance', 'Backups, content changes, performance checks and issue fixes.', 'Website owners who want dependable support.', 'website-maintenance']
    ];

    const servicesGrid = document.querySelector('.services-grid');
    if (servicesGrid) {
      const serviceSection = document.createElement('section');
      serviceSection.className = 'section';
      serviceSection.setAttribute('aria-labelledby', 'complete-services-title');
      serviceSection.innerHTML = `
        <div class="container">
          <div class="section-head reveal"><div><span class="eyebrow">Complete service list</span><h2 id="complete-services-title">Digital services for every stage of growth.</h2></div><p class="lead">Choose one focused service or combine several into one clear project plan.</p></div>
          <div class="bento detailed-services-grid">${detailedServices.map(([name, deliverable, fit, slug], index) => `<article class="bento-card third reveal" id="${slug}" style="--reveal-delay:${Math.min(index, 5) * 75}ms"><span class="card-number">${String(index + 1).padStart(2, '0')}</span><div class="icon-box">✦</div><h3>${name}</h3><p><strong>Included:</strong> ${deliverable}</p><p><strong>Best for:</strong> ${fit}</p><a class="btn btn-outline" href="contact.html">Get a quote <span class="button-icon">↗</span></a></article>`).join('')}</div>
          <div class="faq-shell" style="margin-top:72px"><div class="faq-intro reveal"><span class="eyebrow">Service FAQs</span><h2>Clear answers before you start.</h2><p class="lead">Share your goal, deadline and budget range. We will help you choose the right next step.</p><a class="btn btn-outline" href="contact.html">Ask a question <span class="button-icon">↗</span></a></div><div class="faq-list"><details class="faq-item reveal"><summary>What is included in a project quote?</summary><p>We define the required pages, features, timeline and deliverables before giving a clear project scope.</p></details><details class="faq-item reveal delay-1"><summary>How long does a website or app take?</summary><p>A focused website can take a few weeks. Apps and software depend on features, integrations and review rounds.</p></details><details class="faq-item reveal delay-2"><summary>Can I combine multiple services?</summary><p>Yes. Clients often combine website development, SEO, hosting and maintenance in one project plan.</p></details><details class="faq-item reveal delay-3"><summary>Do you provide support after launch?</summary><p>Yes. We can help with updates, maintenance, content changes and future improvements.</p></details></div></div>
        </div>`;
      servicesGrid.closest('.section')?.after(serviceSection);
    }
  }

  if (currentPage === 'testimonials') {
    const primaryTestimonial = document.querySelector('.testimonial');
    if (primaryTestimonial) {
      primaryTestimonial.innerHTML = '<div class="quote">“The website Ravance Tech Solutions created for us looks good and matches what we needed.”</div><div class="person"><div class="avatar">H</div><div><strong>Hamza</strong><small>Client feedback</small></div></div>';
    }
    const testimonialGrid = document.querySelector('.bento');
    if (testimonialGrid) {
      testimonialGrid.innerHTML = '<article class="bento-card third reveal"><div class="avatar">U</div><h3>Good service and easy collaboration.</h3><p>“Their service was good and the team was easy to work with throughout the project.”</p><p style="margin-top:18px"><strong>Usman</strong><br><small>Client feedback</small></p></article><article class="bento-card third reveal delay-1"><div class="avatar">3</div><h3>Affordable for the required scope.</h3><p>“The pricing felt affordable for the scope of work we needed.”</p><p style="margin-top:18px"><strong>Client feedback</strong><br><small>Shared by three clients</small></p></article><article class="bento-card third dark reveal delay-2"><div class="icon-box">✓</div><h3>Want to share your experience?</h3><p>We value honest feedback from the businesses and people we work with.</p><a class="btn btn-outline" href="contact.html">Contact us ↗</a></article>';
    }
  }

  if (currentPage === 'blog') {
    const guides = [
      ['Karachi website development cost: what affects your budget', 'A practical guide to pages, features, content, hosting and support—the main choices that affect the cost of a business website in Karachi.', 'Website cost guide', 'website-development-cost-karachi.html'],
      ['Small-business website checklist before launch', 'A launch checklist covering your offer, contact details, mobile design, page speed, Google indexing and a clear enquiry path.', 'Website launch checklist', 'small-business-website-checklist.html'],
      ['How to get more enquiries from your website', 'Clear messaging, focused calls to action, trust signals and a simple contact journey help turn visitors into real business enquiries.', 'Conversion guide', 'how-to-get-more-website-enquiries.html'],
      ['What to prepare before starting a logo design project', 'Prepare your audience, business goals, competitors, preferred style and where the logo will be used before the design process begins.', 'Branding guide', 'logo-design-project-checklist.html'],
      ['Website or web app: which does your business need?', 'Use a website to explain and market your offer; choose a web app when users need to log in, manage data or complete repeat tasks.', 'Product planning guide', 'website-vs-web-app.html']
    ];
    const blogGrid = document.querySelector('.blog-grid');
    if (blogGrid) {
      const guideSection = document.createElement('section');
      guideSection.className = 'section faq-section';
      guideSection.innerHTML = `<div class="container"><div class="section-head reveal"><div><span class="eyebrow">Free business guides</span><h2>Useful answers for smarter digital decisions.</h2></div><p class="lead">Practical advice for businesses planning a website, a brand or a useful digital product.</p></div><div class="faq-list">${guides.map(([title, summary, label, url], index) => `<article class="faq-item reveal" style="--reveal-delay:${Math.min(index, 4) * 75}ms"><div style="padding:21px 0"><span class="eyebrow">${label}</span><h3 style="margin:10px 0">${title}</h3><p>${summary}</p><a class="btn btn-outline" style="margin-top:18px" href="${url}">Read guide <span class="button-icon">↗</span></a></div></article>`).join('')}</div></div>`;
      blogGrid.closest('.section')?.after(guideSection);
    }
  }

  if (currentPage === 'case-study') {
    const caseStudies = {
      'dentiva-dental-clinic': { title: 'Dentiva Dental Clinic', category: 'Dental care · Website', image: 'assets/dentiva-preview.jpg', url: 'https://dentiva-dental-clinic.vercel.app/', summary: 'A modern clinic website designed to make dental services easy to explore.', problem: 'The project needed a clear way for visitors to understand treatments and take the next step toward an enquiry.', solution: 'We focused the experience on easy service discovery, a polished visual system and a responsive layout for mobile visitors.', result: 'The result is a live, responsive clinic website with a clearer route from treatment discovery to enquiry.' },
      'jamia-sultania': { title: 'Jamia Sultania', category: 'Education · Website', image: 'assets/jamia-preview.jpg', url: 'https://jamia-sultania-chi.vercel.app/', summary: 'A clear digital home for a learning institution and its community.', problem: 'The institution needed an accessible online home for sharing information with students, families and its wider community.', solution: 'We created a clear structure that makes key information easy to find across screen sizes.', result: 'The result is a live website that gives the institution a focused digital presence for its community.' },
      'whatsapp-project': { title: 'WhatsApp Project', category: 'Product · Web app', image: 'assets/whatsapp-preview.jpg', url: 'https://whatsapp-project-oref.vercel.app/', summary: 'A responsive messaging product experience built for familiar, fast interaction.', problem: 'The product concept needed familiar interaction patterns and a responsive interface that feels fast to use.', solution: 'We designed the interface around recognisable messaging actions and a mobile-friendly layout.', result: 'The result is a live responsive product experience that demonstrates the main messaging journey.' },
      'lucy-isla-store': { title: 'Lucy Isla Store', category: 'E-commerce · Website', image: 'assets/lucy-preview.jpg', url: 'https://lucyislastore.netlify.app/', summary: 'A polished online storefront created for a fashion and clothing collection.', problem: 'The store needed a visual online space that helps visitors browse a fashion collection with confidence.', solution: 'We used a clean storefront layout that keeps product presentation and navigation easy to follow.', result: 'The result is a live e-commerce experience prepared to showcase a fashion collection online.' },
      'dental-care': { title: 'Dental Care', category: 'Dental care · Website', image: 'assets/dentalcare-preview.jpg', url: 'https://dentalcarecom.netlify.app/', summary: 'A service-led dental website with a clear path from treatment discovery to enquiry.', problem: 'Potential patients needed a simple way to explore dental services before deciding to make contact.', solution: 'We organised the experience around service information, trust-building content and clear enquiry paths.', result: 'The result is a live website that supports a clearer treatment-to-enquiry journey.' },
      'student-ims': { title: 'Student IMS', category: 'Education · Web app', image: 'assets/student-ims-preview.jpg', url: 'https://lms-students.web1337.net/auth/login.php', summary: 'A student information and learning-management experience for daily academic workflows.', problem: 'Students and academic teams needed a digital experience for handling regular learning-management tasks.', solution: 'We shaped a focused interface around routine student information and learning workflows.', result: 'The result is a live web application supporting day-to-day academic interaction.' },
      'dha-real-estate': { title: 'DHA Real Estate', category: 'Real estate · Website', image: 'assets/dha-preview.jpg', url: 'https://dha-real-state.vercel.app/', summary: 'A property-focused experience that makes listings and location details easier to explore.', problem: 'Property visitors needed a clearer starting point for exploring listings and relevant location information.', solution: 'We used a property-focused page structure that keeps key details easy to scan.', result: 'The result is a live real-estate experience designed for easier property exploration.' },
      'world-famous-bridges': { title: 'World Famous Bridges', category: 'Education · Website', image: 'assets/bridges-preview.jpg', url: 'https://worldfamousbridges.netlify.app/', summary: 'An informative visual website celebrating landmark bridges from around the world.', problem: 'The subject needed an engaging visual format that makes educational information enjoyable to explore.', solution: 'We combined clear content organisation with visual presentation for landmark bridge information.', result: 'The result is a live educational website that presents the topic in a more visual, accessible way.' }
    };
    const slug = new URLSearchParams(window.location.search).get('project');
    const study = caseStudies[slug];
    if (study) {
      document.title = `${study.title} Case Study | Ravance Tech Solutions`;
      document.querySelector('#case-category').textContent = study.category;
      document.querySelector('#case-title').textContent = study.title;
      document.querySelector('#case-summary').textContent = study.summary;
      document.querySelector('#case-image').src = study.image;
      document.querySelector('#case-image').alt = `${study.title} website preview`;
      document.querySelector('#case-problem').textContent = study.problem;
      document.querySelector('#case-solution').textContent = study.solution;
      document.querySelector('#case-result').textContent = study.result;
      document.querySelector('#case-live-link').href = study.url;
    }
  }

  if (currentPage === 'testimonials') {
    const testimonialGrid = document.querySelector('.bento');
    if (testimonialGrid && !testimonialGrid.dataset.demoTestimonials) {
      testimonialGrid.dataset.demoTestimonials = 'true';
      [
        ['E-commerce', 'Demo Client', 'E-commerce business', 'They helped us make the customer journey clearer and gave our store a more confident, organised look.', 'ecommerce'],
        ['Education', 'Demo Client', 'Education organisation', 'The process was easy to follow, and the final website made our information much simpler for visitors to find.', 'education']
      ].forEach(([industry, name, role, quote, color], index) => {
        const card = document.createElement('article');
        card.className = `bento-card third reveal delay-${index + 1}`;
        card.innerHTML = `<div class="avatar demo-avatar ${color}">${industry.slice(0, 1)}</div><h3>${quote}</h3><p style="margin-top:18px"><strong>${name}</strong><br><small>${role}</small></p>`;
        testimonialGrid.append(card);
      });
    }
  }

  // Replace concept work with the supplied live portfolio projects.
  if (currentPage === 'work') {
    const projects = [
      { title: 'Dentiva Dental Clinic', type: 'Dental care · Website', category: 'web healthcare', url: 'https://dentiva-dental-clinic.vercel.app/', image: 'assets/dentiva-preview.jpg', description: 'A modern clinic website designed to make dental services easy to explore.', mark: 'D' },
      { title: 'Jamia Sultania', type: 'Education · Website', category: 'web education', url: 'https://jamia-sultania-chi.vercel.app/', image: 'assets/jamia-preview.jpg', description: 'A clear digital home for a learning institution and its community.', mark: 'J' },
      { title: 'WhatsApp Project', type: 'Product · Web app', category: 'product web', url: 'https://whatsapp-project-oref.vercel.app/', image: 'assets/whatsapp-preview.jpg', description: 'A responsive messaging product experience built for familiar, fast interaction.', mark: 'W' },
      { title: 'Lucy Isla Store', type: 'E-commerce · Website', category: 'ecommerce web', url: 'https://lucyislastore.netlify.app/', image: 'assets/lucy-preview.jpg', description: 'A polished online storefront created for a fashion and clothing collection.', mark: 'L' },
      { title: 'Dental Care', type: 'Dental care · Website', category: 'web healthcare', url: 'https://dentalcarecom.netlify.app/', image: 'assets/dentalcare-preview.jpg', description: 'A service-led dental website with a clear path from treatment discovery to enquiry.', mark: 'C' },
      { title: 'Student IMS', type: 'Education · Web app', category: 'product education', url: 'https://lms-students.web1337.net/auth/login.php', image: 'assets/student-ims-preview.jpg', description: 'A student information and learning-management experience for daily academic workflows.', mark: 'S' },
      { title: 'DHA Real Estate', type: 'Real estate · Website', category: 'web realestate', url: 'https://dha-real-state.vercel.app/', image: 'assets/dha-preview.jpg', description: 'A property-focused experience that makes listings and location details easier to explore.', mark: 'R' },
      { title: 'World Famous Bridges', type: 'Education · Website', category: 'web education', url: 'https://worldfamousbridges.netlify.app/', image: 'assets/bridges-preview.jpg', description: 'An informative visual website celebrating landmark bridges from around the world.', mark: 'B' },
      { title: 'Taste Haven', type: 'Food & beverage · Website', category: 'ecommerce web', url: 'https://jansher-collab.github.io/Taste-Haven/index.html', image: 'assets/taste heaven.png', fit: 'contain', description: 'A welcoming food-focused website designed to make the menu and dining experience feel easy to explore.', mark: 'T' },
      { title: 'Prime Fitness', type: 'Fitness · Website', category: 'web', url: 'https://jansher-collab.github.io/Prime-Fitness-/cycling.html', image: 'assets/prime fitness.png', fit: 'contain', description: 'An energetic fitness experience focused on cycling, training and a clear route to getting started.', mark: 'P' },
      { title: 'Illusionati Studios', type: 'Creative studio · Website', category: 'product web', url: 'https://illusionatistudios.com/', image: 'assets/illusions.png', fit: 'contain', description: 'A bold studio portfolio built to present creative work with a distinctive visual identity.', mark: 'I' },
      { title: 'Path Seeker', type: 'Travel · Web app', category: 'product web', url: 'https://path-seeker-frontend.vercel.app/', image: 'assets/path seeker.png', fit: 'contain', description: 'A travel-focused digital experience that helps visitors discover routes and plan their next journey.', mark: 'P' }
    ];

    const workGrid = document.querySelector('.work-grid');
    if (workGrid) {
      workGrid.replaceChildren();
      projects.forEach((project, index) => {
        const card = document.createElement('article');
        const caseStudyFiles = {
          'Dentiva Dental Clinic': 'case-study-dentiva.html',
          'Jamia Sultania': 'case-study-jamia.html',
          'WhatsApp Project': 'case-study-whatsapp.html',
          'Lucy Isla Store': 'case-study-lucy-isla.html',
          'Dental Care': 'case-study-dental-care.html',
          'Student IMS': 'case-study-student-ims.html',
          'DHA Real Estate': 'case-study-dha-real-estate.html',
          'World Famous Bridges': 'case-study-world-famous-bridges.html'
        };
        const caseStudyUrl = caseStudyFiles[project.title];
        const size = index === 0 ? ' large' : index === 1 ? ' small' : '';
        card.className = `work-card${project.image ? ' live-project' : ''}${size} reveal`;
        card.dataset.category = project.category;
        if (project.image) card.style.setProperty('--project-image', `url("${project.image}")`);
        if (project.fit) card.dataset.fit = project.fit;
        card.innerHTML = `
          <div class="work-art" aria-hidden="true"><span class="project-mark">${project.mark}</span></div>
          <div class="work-overlay">
            <span class="pill">${project.type}</span>
            <div class="work-meta">
              <div><h3>${project.title}</h3><p>${project.description}</p></div>
              <span class="project-links">${caseStudyUrl ? `<a class="project-link" href="${caseStudyUrl}" aria-label="Read ${project.title} case study">Case study <span class="button-icon">&#8599;</span></a>` : ''}<a class="project-link" href="${project.url}" target="_blank" rel="noopener noreferrer" aria-label="Visit ${project.title} live website">Visit website <span class="button-icon">&#8599;</span></a></span>
            </div>
          </div>`;
        workGrid.append(card);
      });
    }

    const ecommerceFilter = document.querySelector('[data-filter="brand"]');
    if (ecommerceFilter) {
      ecommerceFilter.dataset.filter = 'ecommerce';
      ecommerceFilter.textContent = 'E-commerce';
    }
  }

  if (currentPage === 'home') {
    const homeProjects = [
      { title: 'Dentiva Dental Clinic', type: 'Dental care · Website', url: 'https://dentiva-dental-clinic.vercel.app/', image: 'assets/dentiva-preview.jpg', description: 'A modern clinic website designed to make dental services easy to explore.', mark: 'D' },
      { title: 'Jamia Sultania', type: 'Education · Website', url: 'https://jamia-sultania-chi.vercel.app/', image: 'assets/jamia-preview.jpg', description: 'A clear digital home for a learning institution and its community.', mark: 'J' },
      { title: 'Lucy Isla Store', type: 'E-commerce · Website', url: 'https://lucyislastore.netlify.app/', image: 'assets/lucy-preview.jpg', description: 'A polished online storefront created for a fashion and clothing collection.', mark: 'L' },
      { title: 'DHA Real Estate', type: 'Real estate · Website', url: 'https://dha-real-state.vercel.app/', image: 'assets/dha-preview.jpg', description: 'A property-focused experience that makes listings and location details easier to explore.', mark: 'R' }
    ];

    const workGrid = document.querySelector('.work-grid');
    if (workGrid) {
      const portfolioSlider = document.createElement('div');
      portfolioSlider.className = 'portfolio-slider reveal';
      portfolioSlider.dataset.carousel = 'portfolio';
      portfolioSlider.dataset.autoplay = '4500';
      portfolioSlider.setAttribute('aria-label', 'Selected projects carousel');
      portfolioSlider.setAttribute('aria-roledescription', 'carousel');
      portfolioSlider.innerHTML = `
        <div class="portfolio-viewport" data-carousel-viewport>
          <div class="portfolio-track" data-carousel-track>
            ${homeProjects.map((project) => `
              <article class="work-card live-project portfolio-slide" style="--project-image:url('${project.image}')">
                <div class="work-art" aria-hidden="true"><span class="project-mark">${project.mark}</span></div>
                <div class="work-overlay"><span class="pill">${project.type}</span><div class="work-meta"><div><h3>${project.title}</h3><p>${project.description}</p></div><a class="project-link" href="${project.url}" target="_blank" rel="noopener noreferrer" aria-label="Visit ${project.title} live website">Visit website <span class="button-icon">↗</span></a></div></div>
              </article>`).join('')}
          </div>
        </div>
        <div class="portfolio-controls"><button class="carousel-button" type="button" data-carousel-prev aria-label="Show previous projects">←</button><div class="carousel-dots" data-carousel-dots aria-label="Choose a project slide"></div><button class="carousel-button" type="button" data-carousel-next aria-label="Show next projects">→</button></div>`;
      workGrid.replaceWith(portfolioSlider);
    }

    const testimonialShell = document.querySelector('.testimonial-shell');
    if (testimonialShell) {
      const testimonials = [
        { quote: '“The website Ravance Tech Solutions created for us looks good and matches what we needed.”', initials: 'H', name: 'Hamza', role: 'Client feedback' },
        { quote: '“Their service was good and the team was easy to work with throughout the project.”', initials: 'U', name: 'Usman', role: 'Client feedback' },
        { quote: '“The pricing felt affordable for the scope of work we needed.”', initials: '3', name: 'Client feedback', role: 'Shared by three clients' }
      ];

      const testimonialSlider = document.createElement('div');
      testimonialSlider.className = 'testimonial-slider reveal';
      testimonialSlider.dataset.carousel = 'testimonials';
      testimonialSlider.dataset.autoplay = '5500';
      testimonialSlider.dataset.slidesDesktop = '1';
      testimonialSlider.setAttribute('aria-label', 'Client testimonials carousel');
      testimonialSlider.setAttribute('aria-roledescription', 'carousel');
      testimonialSlider.innerHTML = `
        <div class="testimonial-track" data-carousel-viewport><div class="testimonial-slides" data-carousel-track>${testimonials.map((testimonial) => `
          <article class="testimonial"><div class="quote">${testimonial.quote}</div><div class="person"><div class="avatar">${testimonial.initials}</div><div><strong>${testimonial.name}</strong><small>${testimonial.role}</small></div></div></article>`).join('')}</div></div>
        <div class="slider-controls"><button type="button" data-carousel-prev aria-label="Show previous testimonial">←</button><div class="dots" data-carousel-dots aria-label="Choose a testimonial"></div><button type="button" data-carousel-next aria-label="Show next testimonial">→</button></div>`;
      testimonialShell.replaceWith(testimonialSlider);
    }
  }

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('[data-carousel]').forEach((carousel) => {
    const track = carousel.querySelector('[data-carousel-track]');
    const slides = [...track.children];
    const previous = carousel.querySelector('[data-carousel-prev]');
    const next = carousel.querySelector('[data-carousel-next]');
    const dots = carousel.querySelector('[data-carousel-dots]');
    const desktopSlides = Number(carousel.dataset.slidesDesktop || 2);
    const autoplayDelay = Number(carousel.dataset.autoplay || 0);
    let index = 0;
    let timer;

    const slidesPerView = () => window.matchMedia('(max-width: 800px)').matches ? 1 : desktopSlides;
    const maxIndex = () => Math.max(slides.length - slidesPerView(), 0);

    const renderDots = () => {
      const total = maxIndex() + 1;
      dots.replaceChildren();
      for (let dotIndex = 0; dotIndex < total; dotIndex += 1) {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.setAttribute('aria-label', `Show slide ${dotIndex + 1}`);
        dot.setAttribute('aria-current', String(dotIndex === index));
        dot.classList.toggle('active', dotIndex === index);
        dot.addEventListener('click', () => {
          index = dotIndex;
          update();
        });
        dots.append(dot);
      }
    };

    const update = () => {
      index = Math.min(index, maxIndex());
      const slideWidth = slides[0]?.getBoundingClientRect().width || 0;
      const gap = Number.parseFloat(getComputedStyle(track).gap) || 0;
      track.style.transform = `translateX(-${index * (slideWidth + gap)}px)`;
      previous.disabled = maxIndex() === 0;
      next.disabled = maxIndex() === 0;
      renderDots();
    };

    const move = (direction) => {
      const limit = maxIndex();
      index = limit ? (index + direction + limit + 1) % (limit + 1) : 0;
      update();
    };

    const stopAutoplay = () => window.clearInterval(timer);
    const startAutoplay = () => {
      stopAutoplay();
      if (!prefersReducedMotion && autoplayDelay && maxIndex()) timer = window.setInterval(() => move(1), autoplayDelay);
    };

    previous.addEventListener('click', () => move(-1));
    next.addEventListener('click', () => move(1));
    carousel.addEventListener('focusin', stopAutoplay);
    carousel.addEventListener('focusout', (event) => {
      if (!carousel.contains(event.relatedTarget)) startAutoplay();
    });
    window.addEventListener('resize', update, { passive: true });
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) stopAutoplay(); else startAutoplay();
    });

    update();
    startAutoplay();
  });

  // Use the official social profiles in every shared footer.
  const socialProfiles = Object.values(socialLinks);

  document.querySelectorAll('.socials').forEach((socials) => {
    [...socials.querySelectorAll('a')].forEach((link, index) => {
      const profile = socialProfiles[index];
      if (!profile) return;
      link.href = profile.url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.setAttribute('aria-label', profile.label);
      link.innerHTML = profile.icon;
    });
  });

  // Keep essential legal information accessible from every existing footer.
  document.querySelectorAll('.footer-bottom').forEach((footerBottom) => {
    if (footerBottom.querySelector('.legal-links')) return;
    const legalLinks = document.createElement('nav');
    legalLinks.className = 'legal-links';
    legalLinks.setAttribute('aria-label', 'Legal links');
    legalLinks.innerHTML = '<a href="privacy-policy.html">Privacy</a><a href="terms-and-conditions.html">Terms</a><a href="refund-policy.html">Refunds</a>';
    footerBottom.append(legalLinks);
  });

  if (currentPage === 'contact') {
    const contactForm = document.querySelector('#contact-form');
    if (contactForm && !document.querySelector('.booking-request')) {
      const bookingRequest = document.createElement('div');
      bookingRequest.className = 'booking-request';
      bookingRequest.innerHTML = '<strong>Prefer a quick call?</strong><span>Request a free project call on WhatsApp and we will confirm a suitable time.</span><a class="btn btn-outline" target="_blank" rel="noopener noreferrer" href="https://wa.me/923700191147?text=Hello%20Gen%20Z%20Coders%2C%20I%20would%20like%20to%20book%20a%20free%20project%20call.">Book a free call <span class="button-icon">↗</span></a>';
      contactForm.after(bookingRequest);
    }
  }

  const header = document.querySelector('.site-header');
  const menuButton = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  const updateThemeToggle = (button) => {
    const isDark = isDarkTheme();
    button.setAttribute('aria-pressed', String(isDark));
    button.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    button.innerHTML = `<span class="theme-toggle-icon" aria-hidden="true">${isDark ? '☀' : '☾'}</span>`;
  };

  const navigation = header?.querySelector('nav');
  if (navigation) {
    const themeToggle = document.createElement('button');
    themeToggle.type = 'button';
    themeToggle.className = 'theme-toggle';
    updateThemeToggle(themeToggle);
    themeToggle.addEventListener('click', () => {
      applyTheme(isDarkTheme() ? 'light' : 'dark', true);
      updateThemeToggle(themeToggle);
    });
    navigation.prepend(themeToggle);
  }

  if (header) {
    const updateHeader = () => header.classList.toggle('scrolled', window.scrollY > 10);
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
  }

  // Apply a consistent staggered scroll reveal across every page.
  const revealSelectors = [
    '.inner-hero .container', '.section-head', '.bento-card', '.work-card',
    '.stat', '.price-card', '.blog-card', '.timeline-item', '.team-card',
    '.contact-panel', '.contact-form', '.map-placeholder', '.cta', '.testimonial', '.faq-item'
  ];

  document.querySelectorAll(revealSelectors.join(',')).forEach((element) => {
    if (!element.classList.contains('reveal') && !element.closest('.reveal')) {
      element.classList.add('reveal');
    }
  });

  document.querySelectorAll('.bento, .work-grid, .stats, .pricing-grid, .blog-grid, .team-grid').forEach((group) => {
    [...group.children].forEach((item, index) => {
      if (item.classList.contains('reveal') && !/\bdelay-\d\b/.test(item.className)) {
        item.style.setProperty('--reveal-delay', `${Math.min(index, 5) * 75}ms`);
      }
    });
  });

  const revealElements = document.querySelectorAll('.reveal');
  const revealElement = (element) => element.classList.add('in-view');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          revealElement(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6%' });

    revealElements.forEach((element) => revealObserver.observe(element));
  } else {
    revealElements.forEach(revealElement);
  }

  // Keep the navigation usable on smaller screens.
  if (header && menuButton && navLinks) {
    const closeMenu = () => {
      header.classList.remove('nav-open');
      document.body.classList.remove('nav-open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open navigation');
    };

    menuButton.addEventListener('click', () => {
      const isOpen = header.classList.toggle('nav-open');
      document.body.classList.toggle('nav-open', isOpen);
      menuButton.setAttribute('aria-expanded', String(isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
      if (isOpen) navLinks.querySelector('a')?.focus();
    });

    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && header.classList.contains('nav-open')) {
        closeMenu();
        menuButton.focus();
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 800) closeMenu();
    });
  }

  // Animate the statistics once they become visible.
  const counters = document.querySelectorAll('[data-count]');
  const animateCounter = (counter) => {
    const target = Number(counter.dataset.count);
    const duration = 1200;
    const startTime = performance.now();

    const update = (time) => {
      const progress = Math.min((time - startTime) / duration, 1);
      counter.textContent = `${Math.round(target * (1 - Math.pow(1 - progress, 3)))}${counter.dataset.suffix || ''}`;
      if (progress < 1) requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  };

  if ('IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('[data-count]').forEach(animateCounter);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.35 });

    document.querySelectorAll('.stats').forEach((stats) => counterObserver.observe(stats));
  } else {
    counters.forEach(animateCounter);
  }

  // Filter the work gallery without leaving the page.
  const filterButtons = document.querySelectorAll('[data-filter]');
  const workCards = document.querySelectorAll('.work-card[data-category]');
  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      filterButtons.forEach((item) => item.classList.toggle('active', item === button));
      workCards.forEach((card) => {
        const shouldShow = filter === 'all' || card.dataset.category.split(' ').includes(filter);
        card.hidden = !shouldShow;
      });
    });
  });

  // Validate and send contact enquiries without requiring the visitor's email app.
  const contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    contactForm.action = `https://formsubmit.co/${primaryEmail}`;
    contactForm.method = 'POST';

    const honeypot = document.createElement('input');
    honeypot.type = 'text';
    honeypot.name = '_honey';
    honeypot.tabIndex = -1;
    honeypot.autocomplete = 'off';
    honeypot.hidden = true;
    contactForm.append(honeypot);

    const validateField = (field) => {
      const error = field.closest('.field').querySelector('.error');
      const emailIsInvalid = field.type === 'email' && !/^\S+@\S+\.\S+$/.test(field.value);
      const message = !field.value.trim() ? 'This field is required.' : emailIsInvalid ? 'Enter a valid email address.' : '';
      error.textContent = message;
      field.setAttribute('aria-invalid', String(Boolean(message)));
      return !message;
    };

    contactForm.querySelectorAll('[required]').forEach((field) => {
      field.addEventListener('input', () => validateField(field));
      field.addEventListener('blur', () => validateField(field));
    });

    contactForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const requiredFields = [...contactForm.querySelectorAll('[required]')];
      const invalidField = requiredFields.find((field) => !validateField(field));
      const isValid = !invalidField;

      const status = contactForm.querySelector('.form-status');
      if (isValid) {
        const formData = new FormData(contactForm);
        formData.set('_subject', `New Ravance Tech Solutions enquiry from ${formData.get('name')}`);
        formData.set('_template', 'table');

        const submitButton = contactForm.querySelector('[type="submit"]');
        submitButton.disabled = true;
        submitButton.setAttribute('aria-busy', 'true');
        status.textContent = 'Sending your enquiry…';
        status.style.color = isDarkTheme() ? '#4ade80' : '#15803d';

        try {
          const response = await fetch(`https://formsubmit.co/ajax/${primaryEmail}`, {
            method: 'POST',
            headers: { Accept: 'application/json' },
            body: formData
          });
          const result = await response.json().catch(() => ({}));
          if (!response.ok || result.success === false) throw new Error('Submission failed');

          contactForm.reset();
          status.textContent = 'Thanks—your enquiry has been sent. We will reply within one business day.';
        } catch (error) {
          status.textContent = `We could not send your enquiry. Please email us at ${primaryEmail}.`;
          status.style.color = isDarkTheme() ? '#f87171' : '#dc2626';
        } finally {
          submitButton.disabled = false;
          submitButton.removeAttribute('aria-busy');
        }
      } else {
        status.textContent = 'Please correct the highlighted fields.';
        status.style.color = isDarkTheme() ? '#f87171' : '#dc2626';
        invalidField.focus();
      }
    });
  }
});
