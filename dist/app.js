(() => {
  const config = window.REFLEXARC || {};
  const renderByline = (selector, entries, markerFirst = false) => {
    const target = document.querySelector(selector);
    if (!target) return;
    (entries || []).forEach(entry => {
      const item = document.createElement('span');
      const name = document.createTextNode(entry.name);
      const marker = document.createElement('sup');
      marker.textContent = entry.marker || '';
      item.append(...(markerFirst ? [marker, name] : [name, marker]));
      target.append(item);
    });
  };
  renderByline('#hero-authors', config.authors);
  renderByline('#hero-affiliations', config.affiliations, true);
  document.querySelectorAll('[data-resource]').forEach(resource => {
    const url = config[resource.dataset.resource];
    if (!url || !/^https:\/\//i.test(url)) return;
    const link = document.createElement('a');
    link.className = resource.className;
    link.dataset.resource = resource.dataset.resource;
    link.innerHTML = resource.innerHTML;
    link.querySelector('small')?.remove();
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.setAttribute('aria-label', `${resource.dataset.resource === 'arxiv' ? 'arXiv — paper' : 'GitHub — code'} (opens in a new tab)`);
    resource.replaceWith(link);
  });
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const films = {demo:'ReflexArc — Video', comparison:'Hardware comparison', ablation:'Component ablations'};
  const demos = {
    wholebody: ['One touch. A coordinated retreat.', 'Contact at the hands, arms, torso, and knee triggers local withdrawal and a coordinated retreat away from the collision.'],
    tracking: ['Keep the motion. Respond to contact.', 'Motion tracking meets thrown objects and repeated strikes. The policy sustains the reflex and carries the movement forward.'],
    teleop: ['Reflex protection for teleoperation.', 'Environmental collision: tactile withdrawal reduces collisions with the surroundings. Boxing: reflex protection reduces operator injury risk. Both add the reflex to a general motion tracker without retraining.'],
    traversal: ['Feel the obstacle. Take the next step.', 'Foot tactile sensing guides step-over and stair-climbing. Reflex-informed adaptation turns the initial withdrawal into forward progress.']
  };
  document.querySelectorAll('[data-tex]').forEach(el => {
    katex.render(el.dataset.tex, el, {displayMode:el.classList.contains('math-display'), throwOnError:true, trust:false});
  });
  if (config.bibtex) document.querySelector('#bibtex-content').textContent = config.bibtex;
  document.querySelectorAll('[data-scroll]').forEach(button => button.addEventListener('click', () => {
    const target = document.getElementById(button.dataset.scroll);
    if (!target) return;
    target.scrollIntoView({behavior:reducedMotion ? 'instant' : 'smooth', block:'start'});
    target.tabIndex = -1;
    target.focus({preventScroll:true});
  }));
  document.querySelectorAll('[data-arc]').forEach(button => button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') !== 'true';
    document.querySelectorAll('[data-arc]').forEach(card => {
      const active = open && card === button;
      card.setAttribute('aria-expanded', String(active));
      card.querySelector('.arc-expand').textContent = active ? '−' : '+';
      document.getElementById(card.getAttribute('aria-controls')).hidden = !active;
    });
    if (open && window.matchMedia('(max-width: 700px)').matches) {
      document.getElementById(button.getAttribute('aria-controls')).scrollIntoView({behavior:reducedMotion ? 'instant' : 'smooth', block:'start'});
    }
  }));
  const hero = document.querySelector('#hero-video');
  document.querySelectorAll('[data-foundation]').forEach(button => button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') !== 'true';
    document.querySelectorAll('[data-foundation]').forEach(card => {
      const active = open && card === button;
      card.setAttribute('aria-expanded', String(active));
      card.querySelector('.foundation-expand').textContent = active ? '−' : '+';
      const panel = document.getElementById(card.getAttribute('aria-controls'));
      panel.hidden = !active;
      if (!active) panel.querySelectorAll('video').forEach(video => video.pause());
    });
    if (open && window.matchMedia('(max-width: 700px)').matches) {
      document.getElementById(button.getAttribute('aria-controls')).scrollIntoView({behavior:reducedMotion ? 'instant' : 'smooth', block:'start'});
    }
  }));
  const heroToggle = document.querySelector('#hero-toggle');
  let manuallyPaused = reducedMotion;
  const updateHeroToggle = () => { if (!hero || !heroToggle) return; heroToggle.innerHTML = hero.paused ? '▶ <span>Play</span>' : 'Ⅱ <span>Pause</span>'; heroToggle.setAttribute('aria-label', hero.paused ? 'Play background video' : 'Pause background video'); };
  if (hero && heroToggle) {
    if (reducedMotion) { hero.pause(); heroToggle.hidden = true; }
    hero.addEventListener('play', updateHeroToggle); hero.addEventListener('pause', updateHeroToggle);
    heroToggle.addEventListener('click', () => { manuallyPaused = !hero.paused; if (hero.paused) hero.play().catch(updateHeroToggle); else hero.pause(); });
    new IntersectionObserver(entries => entries.forEach(entry => { if (!entry.isIntersecting) hero.pause(); else if (!manuallyPaused && !document.hidden && !document.querySelector('dialog[open]')) hero.play().catch(updateHeroToggle); }), {threshold:.15}).observe(hero);
  }
  const filmDialog = document.querySelector('#film-dialog');
  const modalVideo = document.querySelector('#modal-video');
  let lastPlaying = [];
  function suspendVideos() { lastPlaying = [...document.querySelectorAll('video')].filter(v => v !== modalVideo && !v.paused); lastPlaying.forEach(v => v.pause()); }
  function restoreVideos() { lastPlaying.forEach(v => { const r = v.getBoundingClientRect(); if (r.bottom > 0 && r.top < innerHeight && !reducedMotion) v.play().catch(() => {}); }); lastPlaying = []; }
  document.querySelectorAll('[data-film]').forEach(button => button.addEventListener('click', () => {
    const film = button.dataset.film; suspendVideos(); document.querySelector('#film-title').textContent = films[film];
    modalVideo.src = `assets/${film}.mp4`; modalVideo.poster = `assets/${film}.jpg`;
    filmDialog.showModal(); modalVideo.play().catch(() => {});
  }));
  document.querySelectorAll('dialog').forEach(dialog => {
    dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', event => { const r = dialog.getBoundingClientRect(); if (event.target === dialog && (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom)) dialog.close(); });
    dialog.addEventListener('close', () => { if (modalVideo) { modalVideo.pause(); modalVideo.removeAttribute('src'); modalVideo.load(); } restoreVideos(); });
  });
  let paperPage = 1;
  const paperStage = document.querySelector('.paper-reading-stage');
  function showPaperPage(page) {
    paperPage = Math.max(1, Math.min(8, page));
    const image = document.querySelector('#paper-page');
    image.src = `assets/paper/page-${paperPage}.webp`;
    image.alt = `ReflexArc paper, page ${paperPage} of 8`;
    document.querySelector('#paper-page-number').textContent = `${paperPage} / 8`;
    document.querySelector('#paper-prev').disabled = paperPage === 1;
    document.querySelector('#paper-next').disabled = paperPage === 8;
    paperStage.scrollTo(0, 0);
  }
  document.querySelector('#paper-prev').addEventListener('click', () => showPaperPage(paperPage - 1));
  document.querySelector('#paper-next').addEventListener('click', () => showPaperPage(paperPage + 1));
  document.querySelector('#paper-zoom').addEventListener('click', event => {
    const zoomed = paperStage.classList.toggle('is-zoomed');
    event.currentTarget.textContent = zoomed ? 'Fit page' : 'Zoom in';
    event.currentTarget.setAttribute('aria-pressed', String(zoomed));
  });
  document.querySelector('#paper-open')?.addEventListener('click', () => {
    if (config.arxiv && /^https:\/\//i.test(config.arxiv)) {
      window.open(config.arxiv, '_blank', 'noopener,noreferrer');
      return;
    }
    suspendVideos();
    showPaperPage(paperPage);
    document.querySelector('#paper-dialog').showModal();
  });
  document.querySelector('#paper-dialog').addEventListener('keydown', event => {
    if (event.key === 'ArrowRight' && !paperStage.classList.contains('is-zoomed')) { event.preventDefault(); showPaperPage(paperPage + 1); }
    if (event.key === 'ArrowLeft' && !paperStage.classList.contains('is-zoomed')) { event.preventDefault(); showPaperPage(paperPage - 1); }
  });
  const showcase = document.querySelector('#showcase-video');
  const tabs = [...document.querySelectorAll('[data-demo]')];
  function selectDemo(tab, play = true) {
    const name = tab.dataset.demo;
    tabs.forEach(t => { t.setAttribute('aria-selected', String(t === tab)); t.tabIndex = t === tab ? 0 : -1; });
    document.querySelector('#demo-panel').setAttribute('aria-labelledby', tab.id);
    document.querySelector('#demo-title').textContent = demos[name][0];
    document.querySelector('#demo-description').textContent = demos[name][1];
    document.querySelector('#demo-index').textContent = `0${tabs.indexOf(tab)+1} — 04`;
    showcase.poster = `assets/${name}.jpg`; showcase.src = `assets/${name}.mp4`; showcase.load();
    if (play) showcase.play().catch(() => {});
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectDemo(tab));
    tab.addEventListener('keydown', event => {
      let next = null;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next !== null) { event.preventDefault(); tabs[next].focus(); selectDemo(tabs[next], false); }
    });
  });
  // Load demonstration media as it approaches the viewport; visitors retain playback control.
  const lazyVideos = [...document.querySelectorAll('video[preload="none"]')].filter(v => v !== modalVideo);
  const mediaObserver = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.preload = 'metadata'; mediaObserver.unobserve(entry.target); } }), {rootMargin:'300px'});
  lazyVideos.forEach(v => mediaObserver.observe(v));
  document.addEventListener('visibilitychange', () => { if (document.hidden) document.querySelectorAll('video').forEach(v => v.pause()); });
})();
