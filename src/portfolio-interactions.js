export function initializePortfolio(container, data) {
  const controller = new AbortController();
  const { signal } = controller;
  const root = document.documentElement;
  const query = (selector) => container.querySelector(selector);
  const queryAll = (selector) => [...container.querySelectorAll(selector)];
  const listen = (target, type, listener) => {
    target.addEventListener(type, listener, { signal });
  };
  let disposed = false;

  const themeButton = query('#theme-toggle');
  function setTheme(theme) {
    root.dataset.theme = theme;
    themeButton.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    try {
      localStorage.setItem('vikrant-portfolio-theme', theme);
    } catch {
      // Theme switching still works when browser storage is unavailable.
    }
  }
  let initialTheme = root.dataset.theme === 'light' ? 'light' : 'dark';
  try {
    const saved = localStorage.getItem('vikrant-portfolio-theme');
    if (saved === 'light' || saved === 'dark') initialTheme = saved;
  } catch {
    // Use the document theme when browser storage is unavailable.
  }
  setTheme(initialTheme);
  listen(themeButton, 'click', () => setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));

  const reliabilityStages = {
    reason: {
      caption: '01 / Reasoning under uncertainty',
      question: 'What assumptions is the agent making?',
      description: 'I study how agents reason when a scientific problem leaves information unspecified.',
    },
    tools: {
      caption: '02 / From reasoning to action',
      question: 'Does the action match the intent?',
      description: 'Tool choices and execution traces help reveal where an agent’s reasoning breaks down.',
    },
    check: {
      caption: '03 / Evidence and evaluation',
      question: 'Does the evidence support the answer?',
      description: 'Evaluating reliability means looking beyond a plausible answer to how the agent used the evidence.',
    },
    revise: {
      caption: '04 / Learning from failures',
      question: 'Can the agent improve after an error?',
      description: 'I work on training methods aimed at reducing errors and hallucinations across multi-turn tasks.',
    },
  };
  const reliabilityTabs = queryAll('[data-reliability]');
  const reliabilityPanel = query('#reliability-panel');
  const reliabilityArt = query('.reliability-art');
  const motionButton = query('#agent-motion');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const activity = {
    reason: 'Reasoning', tools: 'Using tools', check: 'Checking evidence', revise: 'Updating the plan',
  };
  let animationPaused = reducedMotion.matches;
  let diagramVisible = true;
  let activeStage = Math.max(0, reliabilityTabs.findIndex((tab) => tab.getAttribute('aria-selected') === 'true'));
  let stageTimer;
  function selectReliability(button, moveFocus = false) {
    const stage = reliabilityStages[button.dataset.reliability];
    activeStage = reliabilityTabs.indexOf(button);
    reliabilityTabs.forEach((tab) => {
      tab.setAttribute('aria-selected', String(tab === button));
      tab.tabIndex = tab === button ? 0 : -1;
    });
    reliabilityArt.dataset.stage = button.dataset.reliability;
    reliabilityPanel.setAttribute('aria-labelledby', button.id);
    query('#stage-caption').textContent = stage.caption;
    query('#stage-question').textContent = stage.question;
    query('#stage-description').textContent = stage.description;
    query('#agent-activity').textContent = activity[button.dataset.reliability];
    if (moveFocus) button.focus();
  }
  function syncAgentMotion() {
    window.clearTimeout(stageTimer);
    if (disposed) return;
    const running = !animationPaused && diagramVisible && !document.hidden;
    reliabilityArt.dataset.running = String(running);
    motionButton.dataset.paused = String(animationPaused);
    motionButton.setAttribute('aria-label', animationPaused ? 'Play agent stages' : 'Pause agent stages');
    if (running) {
      stageTimer = window.setTimeout(() => {
        if (disposed) return;
        selectReliability(reliabilityTabs[(activeStage + 1) % reliabilityTabs.length]);
        syncAgentMotion();
      }, 3400);
    }
  }
  function pauseAgentMotion() {
    animationPaused = true;
    syncAgentMotion();
  }
  reliabilityTabs.forEach((button, index) => {
    listen(button, 'click', () => { pauseAgentMotion(); selectReliability(button); });
    listen(button, 'keydown', (event) => {
      let next = index;
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % reliabilityTabs.length;
      else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index - 1 + reliabilityTabs.length) % reliabilityTabs.length;
      else if (event.key === 'Home') next = 0;
      else if (event.key === 'End') next = reliabilityTabs.length - 1;
      else return;
      event.preventDefault();
      pauseAgentMotion();
      selectReliability(reliabilityTabs[next], true);
    });
  });
  listen(reliabilityArt, 'focusin', (event) => {
    if (event.target.closest('[role="tab"], [role="tabpanel"]')) pauseAgentMotion();
  });
  listen(motionButton, 'click', () => { animationPaused = !animationPaused; syncAgentMotion(); });
  listen(reducedMotion, 'change', (event) => { animationPaused = event.matches; syncAgentMotion(); });
  listen(document, 'visibilitychange', syncAgentMotion);
  const diagramObserver = new IntersectionObserver((entries) => {
    if (disposed || !entries.length) return;
    diagramVisible = entries[0].isIntersecting;
    syncAgentMotion();
  }, { threshold: 0.15 });
  diagramObserver.observe(reliabilityArt);
  selectReliability(reliabilityTabs[activeStage]);
  syncAgentMotion();

  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }
  function tags(list) {
    const node = element('div', 'experience-tags');
    list.forEach((text) => node.append(element('span', '', text)));
    return node;
  }

  const dialog = query('#project-dialog');
  const dialogBody = query('#dialog-body');
  let opener = null;
  let savedOverflow = null;
  function lockPageScroll() {
    if (savedOverflow !== null) return;
    savedOverflow = {
      value: document.body.style.getPropertyValue('overflow'),
      priority: document.body.style.getPropertyPriority('overflow'),
    };
    document.body.style.setProperty('overflow', 'hidden');
  }
  function restorePageScroll() {
    if (savedOverflow === null) return;
    if (savedOverflow.value) {
      document.body.style.setProperty('overflow', savedOverflow.value, savedOverflow.priority);
    } else {
      document.body.style.removeProperty('overflow');
    }
    savedOverflow = null;
  }
  function openProject(id, button) {
    const project = data.projects[id];
    if (!project || disposed) return;
    opener = button;
    dialogBody.replaceChildren();
    query('#dialog-eyebrow').textContent = project.eyebrow;
    const title = element('h2', '', project.title);
    title.id = 'dialog-title';
    dialogBody.append(title);
    if (project.image) {
      const figure = element('figure', 'dialog-figure');
      const img = element('img');
      img.src = project.image;
      img.alt = project.imageAlt || project.imageCaption;
      img.decoding = 'async';
      if (project.imageWidth && project.imageHeight) {
        img.width = project.imageWidth;
        img.height = project.imageHeight;
      }
      const caption = element('figcaption');
      caption.append(element('span', '', project.imageCaption));
      if (project.showFullImage !== false) {
        const fullImage = element('a', 'dialog-image-link', 'View full size ↗');
        fullImage.href = project.image;
        fullImage.target = '_blank';
        fullImage.rel = 'noopener';
        fullImage.setAttribute('aria-label', `View image for ${project.title} at full size in a new tab`);
        caption.append(fullImage);
      }
      figure.append(img, caption);
      dialogBody.append(figure);
    }
    dialogBody.append(element('p', 'dialog-summary', project.summary));
    [
      ['The question', project.question],
      ['What I built', project.built],
      [project.focusLabel || (id === 'twoworlds' ? 'Current focus' : 'What we learned'), project.learned],
    ].forEach(([label, text]) => {
      const row = element('section', 'dialog-info');
      row.append(element('h3', '', label), element('p', '', text));
      dialogBody.append(row);
    });
    if (id === 'qwen' || id === 'cnn') {
      const evidence = element('section', 'project-evidence');
      evidence.append(element('h3', 'eyebrow', id === 'qwen' ? 'Team evaluation · Accuracy (%)' : 'Team experiment · Classification accuracy (%)'));
      const rows = id === 'qwen'
        ? [['Base test set', 52, 61], ['BioMedQA', 46.4, 58.3], ['PubMedQA', 43, 57.2]]
        : [['Tiny ImageNet', 65.2, 73.4]];
      const labels = id === 'qwen' ? ['SFT baseline', 'SFT + GRPO'] : ['Baseline CNN', 'OD-CNN'];
      const legend = element('div', 'evidence-legend');
      labels.forEach((label, index) => legend.append(element('span', index ? 'method-new' : 'method-base', label)));
      evidence.append(legend);
      rows.forEach(([label, base, improved]) => {
        const row = element('div', 'evidence-row');
        row.append(element('p', '', label));
        [base, improved].forEach((value, index) => {
          const track = element('div', 'evidence-track');
          track.setAttribute('role', 'img');
          track.setAttribute('aria-label', `${label}, ${labels[index]}: ${value}%`);
          const bar = element('div', index ? 'evidence-bar improved' : 'evidence-bar');
          bar.style.width = value + '%';
          bar.append(element('span', '', String(value)));
          track.append(bar);
          row.append(track);
        });
        evidence.append(row);
      });
      evidence.append(element('p', 'evidence-caption', id === 'qwen'
        ? 'Gemini 2.0 Flash-judged accuracy, as reported in the team project. Bars use a 0–100% scale.'
        : 'Reported Tiny ImageNet result. Bars use a 0–100% scale.'));
      dialogBody.append(evidence);
    }
    dialogBody.append(tags(project.tags));
    if (project.links.length) {
      const links = element('div', 'dialog-links');
      project.links.forEach((link) => {
        const anchor = element('a', '', link.label + ' ↗');
        anchor.href = link.href;
        anchor.target = '_blank';
        anchor.rel = 'noopener noreferrer';
        links.append(anchor);
      });
      dialogBody.append(links);
    }
    if (!dialog.open) dialog.showModal();
    dialog.scrollTop = 0;
    lockPageScroll();
  }

  const projects = queryAll('[data-project]');
  projects.forEach((button) => listen(button, 'click', () => openProject(button.dataset.project, button)));
  listen(query('#close-dialog'), 'click', () => dialog.close());
  listen(dialog, 'click', (event) => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) {
      dialog.close();
    }
  });
  listen(dialog, 'close', () => {
    // A queued close event may outlive a cleanup/setup cycle or a quick reopen.
    if (disposed || dialog.open || savedOverflow === null) return;
    restorePageScroll();
    const focusTarget = opener;
    opener = null;
    if (focusTarget?.isConnected && !focusTarget.hidden) focusTarget.focus({ preventScroll: true });
  });

  const filterButtons = queryAll('[data-filter]');
  filterButtons.forEach((button) => {
    listen(button, 'click', () => {
      filterButtons.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
      const filter = button.dataset.filter;
      let count = 0;
      projects.forEach((project) => {
        project.hidden = filter !== 'all' && project.dataset.category !== filter;
        if (!project.hidden) count++;
      });
      query('#filter-status').textContent = `Showing ${count} ${filter === 'all' ? '' : filter + ' '}project${count === 1 ? '' : 's'}.`;
    });
  });

  const companyTabs = queryAll('[data-company]');
  const panel = query('#experience-panel');
  function selectCompany(button, moveFocus = false) {
    const company = data.experience[button.dataset.company];
    companyTabs.forEach((item) => {
      item.setAttribute('aria-selected', String(item === button));
      item.tabIndex = item === button ? 0 : -1;
    });
    panel.setAttribute('aria-labelledby', button.id);
    panel.replaceChildren(
      element('p', 'eyebrow', company.eyebrow + ' / ' + company.period),
      element('h3', '', company.title),
      element('p', '', company.description),
    );
    const list = element('ul');
    company.highlights.forEach((text) => list.append(element('li', '', text)));
    panel.append(list, tags(company.tags));
    if (moveFocus) button.focus();
  }
  companyTabs.forEach((button, index) => {
    listen(button, 'click', () => selectCompany(button));
    listen(button, 'keydown', (event) => {
      let next = index;
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % companyTabs.length;
      else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index - 1 + companyTabs.length) % companyTabs.length;
      else if (event.key === 'Home') next = 0;
      else if (event.key === 'End') next = companyTabs.length - 1;
      else return;
      event.preventDefault();
      selectCompany(companyTabs[next], true);
    });
  });
  selectCompany(companyTabs.find((tab) => tab.getAttribute('aria-selected') === 'true') || companyTabs[0]);

  return function cleanupPortfolio() {
    if (disposed) return;
    disposed = true;
    controller.abort();
    window.clearTimeout(stageTimer);
    diagramObserver.disconnect();
    reliabilityArt.dataset.running = 'false';
    opener = null;
    // Aborting first prevents the close handler from focusing an old project card.
    if (dialog.open) dialog.close();
    restorePageScroll();
  };
}
