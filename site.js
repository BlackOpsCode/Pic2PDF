(() => {
  'use strict';

  const year = new Date().getFullYear();
  const path = (window.location.pathname || '/').split('/').pop() || '';
  const active = (file) => path === file;

  const tools = [
    { name: 'Clipr', href: 'https://clipr.runtime-hub.com/', note: 'Video trimmer' },
    { name: 'Sonic', href: 'https://sonic.runtime-hub.com/', note: 'Audio converter' },
    { name: 'Zippy', href: 'https://zippy.runtime-hub.com/', note: 'PDF studio' },
    { name: 'Squeezy', href: 'https://squeezy.runtime-hub.com/', note: 'Image compressor' },
    { name: 'HeiC!', href: 'https://heic.runtime-hub.com/', note: 'HEIC converter' },
    { name: 'Purify', href: 'https://purify.runtime-hub.com/', note: 'Metadata cleaner' },
    { name: 'PixelBoost', href: 'https://pixelboost.runtime-hub.com/', note: 'Image upscaler' },
    { name: 'PhotoLux', href: 'https://photolux.runtime-hub.com/', note: 'Photo editor' },
    { name: 'CV-Go-Fast', href: 'https://cv.runtime-hub.com/', note: 'Resume builder' },
    { name: 'LexyAI', href: 'https://lexyai.runtime-hub.com/', note: 'AI text detector' }
  ];

  const top = document.createElement('header');
  top.className = 'topbar';
  top.innerHTML = `
    <div class="topbar-inner">
      <a class="brand" href="/" aria-label="Pic2PDF home">
        <span class="brand-mark" aria-hidden="true"><span>PDF</span></span>
        <span class="brand-name">Pic2PDF</span>
      </a>
      <nav class="site-nav" aria-label="Primary navigation">
        <a class="site-link" href="${path === '' ? '#tool' : '/#tool'}">Tool</a>
        <a class="site-link" href="${path === '' ? '#faq' : '/#faq'}">FAQ</a>
        <a class="site-link${active('about.html') ? ' is-active' : ''}" href="/about.html">About</a>
        <a class="site-link runtime-button" href="https://runtime-hub.com/" rel="noopener noreferrer">Runtime Hub</a>
      </nav>
    </div>
  `;

  const bg = document.createElement('div');
  bg.className = 'site-bg';
  bg.setAttribute('aria-hidden', 'true');
  bg.innerHTML = `
    <span class="paint paint-blue paint-blue-1"></span>
    <span class="paint paint-orange paint-orange-1"></span>
    <span class="paint paint-blue paint-blue-2"></span>
    <span class="paint paint-orange paint-orange-2"></span>
    <span class="paint paint-dot paint-dot-1"></span>
    <span class="paint paint-dot paint-dot-2"></span>
  `;

  const footer = document.createElement('footer');
  footer.className = 'site-footer';
  footer.innerHTML = `
    <div class="footer-inner">
      <div class="footer-top">
        <div class="footer-brand">
          <strong>More tools</strong>
          <span>Focused tools from the RuntimeHub ecosystem.</span>
        </div>
      </div>

      <nav class="footer-tools" aria-label="More RuntimeHub tools">
        ${tools.map((tool, i) => `
          <a class="footer-tool blob-${(i % 5) + 1}" href="${tool.href}" rel="noopener noreferrer" aria-label="${tool.name} — ${tool.note}">
            <span>${tool.name}</span>
          </a>
        `).join('')}
      </nav>

      <div class="footer-bottom">
        <nav class="footer-links" aria-label="Footer navigation">
          <a href="/about.html">About</a>
          <a href="/terms.html">Terms</a>
          <a href="/privacy.html">Privacy</a>
        </nav>
        <div class="footer-meta">Copyright Pic2PDF <a class="footer-runtime" href="https://runtime-hub.com/" rel="noopener noreferrer">Runtime Hub</a></div>
      </div>
    </div>
  `;

  document.body.prepend(bg);
  document.body.prepend(top);
  document.body.append(footer);
})();
