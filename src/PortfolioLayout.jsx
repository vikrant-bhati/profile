const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

export default function PortfolioLayout() {
  return (
    <>
  <a className="skip" href="#work">Skip to projects</a>
  <header className="site-nav wrap">
    <a className="wordmark" href="#home" aria-label="Vikrant Bhati home">v<span>b</span><span className="brand-dot">.</span></a>
    <nav aria-label="Main navigation"><a href="#work">Work</a><a href="#journey">Journey</a><a href="#notes">Demos &amp; Blogs</a><a href="#about">About</a></nav>
    <div className="nav-actions"><button className="theme-button" type="button" aria-label="Switch to light theme" id="theme-toggle">◐</button><a className="contact-link" href="mailto:bhati.vikrant@outlook.com">Say hello <span aria-hidden="true">↗</span></a></div>
  </header>
  <main>
    <section className="hero wrap" id="home" aria-labelledby="hero-name">
      <div className="hero-copy">
        <h1 id="hero-name">Vikrant<br /><em>Bhati.</em></h1>
        <p className="intro">I’m currently an AI researcher at Virginia Tech, with more than seven years of software engineering experience. My research looks at how AI agents handle problems when the task is underspecified and there’s no clear feedback on whether they’re on the right track.</p>
        <div className="hero-person"><img src={asset("assets/profile.jpeg")} alt="Vikrant Bhati" width="56" height="56" /><p>M.S. in Computer Engineering · <strong>Virginia Tech</strong><br /><span>Thesis research in AI reliability</span></p></div>
        <a className="explore-link" href="#work">Take a look around <span aria-hidden="true">↘</span></a>
      </div>
      <section className="reliability-art" aria-labelledby="reliability-title" data-stage="reason" data-running="false">
        <div className="reliability-heading"><p className="research-label"><span></span> Currently working on</p><button className="agent-motion" id="agent-motion" type="button" aria-label="Play agent stages" data-paused="true"><svg viewBox="0 0 20 20" aria-hidden="true"><path className="pause-symbol" d="M7 5v10M13 5v10"/><path className="play-symbol" d="m7 5 8 5-8 5Z"/></svg></button></div>
        <h2 id="reliability-title">LLM agent <em>reliability.</em></h2>
        <p className="reliability-subtitle">Where does reasoning break down?</p>
        <div className="agent-loop" role="tablist" aria-label="Explore agent reliability">
          <svg className="loop-lines" viewBox="0 0 400 350" preserveAspectRatio="none" aria-hidden="true" focusable="false">
            <path className="loop-orbit" d="M72 49 C140 10 260 10 328 49 C396 100 396 250 328 301 C260 340 140 340 72 301 C4 250 4 100 72 49Z"/>
            <path className="loop-packet" pathLength="100" d="M72 49 C140 10 260 10 328 49 C396 100 396 250 328 301 C260 340 140 340 72 301 C4 250 4 100 72 49Z"/>
            <path className="orbit-arrow" d="m197 22 6 3-6 3M373 172l-3 6-3-6M203 328l-6-3 6-3M27 178l3-6 3 6"/>
          </svg>
          <div className="agent-character" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 230" fill="none" role="img" aria-label="An AI agent working at a laptop">
  <defs>
    <linearGradient id="vbAgentIvory" x1="91" y1="34" x2="169" y2="131" gradientUnits="userSpaceOnUse">
      <stop stopColor="#FFFCF0"/>
      <stop offset=".48" stopColor="#E8E5DA"/>
      <stop offset="1" stopColor="#A9ADB1"/>
    </linearGradient>
    <linearGradient id="vbAgentBody" x1="108" y1="107" x2="157" y2="179" gradientUnits="userSpaceOnUse">
      <stop stopColor="#ECEBE3"/>
      <stop offset="1" stopColor="#9AABB6"/>
    </linearGradient>
    <linearGradient id="vbAgentFace" x1="105" y1="45" x2="154" y2="97" gradientUnits="userSpaceOnUse">
      <stop stopColor="#394048"/>
      <stop offset="1" stopColor="#151A21"/>
    </linearGradient>
    <linearGradient id="vbAgentArm" x1="75" y1="116" x2="70" y2="166" gradientUnits="userSpaceOnUse">
      <stop stopColor="#F1EDE2"/>
      <stop offset="1" stopColor="#A9B1B7"/>
    </linearGradient>
    <linearGradient id="vbAgentShell" x1="68" y1="123" x2="197" y2="191" gradientUnits="userSpaceOnUse">
      <stop stopColor="#607795"/>
      <stop offset=".48" stopColor="#405571"/>
      <stop offset="1" stopColor="#273A51"/>
    </linearGradient>
    <linearGradient id="vbAgentScreen" x1="87" y1="133" x2="160" y2="190" gradientUnits="userSpaceOnUse">
      <stop stopColor="#17232F"/>
      <stop offset="1" stopColor="#25394C"/>
    </linearGradient>
    <linearGradient id="vbAgentBase" x1="130" y1="189" x2="130" y2="209" gradientUnits="userSpaceOnUse">
      <stop stopColor="#94A6BB"/>
      <stop offset=".4" stopColor="#647B96"/>
      <stop offset="1" stopColor="#3A4B63"/>
    </linearGradient>
    <linearGradient id="vbAgentCoral" x1="107" y1="58" x2="112" y2="72" gradientUnits="userSpaceOnUse">
      <stop stopColor="#FFB59B"/>
      <stop offset="1" stopColor="#FF765C"/>
    </linearGradient>
    <radialGradient id="vbAgentShadow">
      <stop stopColor="#060B14" stopOpacity=".33"/>
      <stop offset="1" stopColor="#060B14" stopOpacity="0"/>
    </radialGradient>
  </defs>

  <ellipse cx="131" cy="211" rx="98" ry="12" fill="url(#vbAgentShadow)"/>

  <path d="M117 96H146V121H117z" fill="#84909A"/>
  <path d="M120 100H143V114H120z" fill="#BEC6CA"/>
  <path d="M110 109C116 107 143 107 150 110C163 115 171 132 171 153V179H91V153C91 132 98 114 110 109Z" fill="url(#vbAgentBody)"/>
  <path d="M110 116C121 111 141 112 152 118" stroke="#FFFCF1" strokeOpacity=".72" strokeWidth="2" strokeLinecap="round"/>
  <path d="M116 124H146" stroke="#7B8E9D" strokeOpacity=".45" strokeWidth="1.4" strokeLinecap="round"/>
  <rect x="123" y="129" width="15" height="4" rx="2" fill="#6C8393"/>
  <rect x="124" y="129" width="5" height="4" rx="2" fill="#FF997B"/>

  <g className="agent-hand agent-hand-left">
    <path d="M98 118C89 112 81 114 77 123L62 152C60 157 60 166 66 170C72 174 79 172 83 166L103 135C107 128 105 122 98 118Z" fill="url(#vbAgentArm)"/>
    <path d="M88 122L74 148" stroke="#FFFBEF" strokeOpacity=".55" strokeWidth="3" strokeLinecap="round"/>
    <path d="M67 159C70 153 77 152 83 156L93 164C98 168 98 174 94 178C90 182 85 181 80 178L69 171C64 168 64 163 67 159Z" fill="#E8E3D7"/>
    <path d="M76 159L84 166M72 163L80 170" stroke="#A8B0B3" strokeWidth="1.5" strokeLinecap="round"/>
  </g>
  <g className="agent-hand agent-hand-right">
    <path d="M164 118C173 113 181 116 185 125L199 153C202 160 201 167 195 171C189 175 183 172 179 166L159 134C155 128 157 122 164 118Z" fill="url(#vbAgentArm)"/>
    <path d="M177 122L190 148" stroke="#FFFBEF" strokeOpacity=".45" strokeWidth="3" strokeLinecap="round"/>
    <path d="M194 159C190 153 183 153 178 157L169 165C164 169 164 175 168 179C172 183 177 181 182 178L193 171C197 168 198 164 194 159Z" fill="#E8E3D7"/>
    <path d="M185 159L177 166M190 163L182 170" stroke="#A8B0B3" strokeWidth="1.5" strokeLinecap="round"/>
  </g>

  <g className="agent-head" transform="rotate(-4 131 71)">
    <rect x="74" y="57" width="13" height="28" rx="6.5" fill="#7D8A95"/>
    <rect x="176" y="57" width="13" height="28" rx="6.5" fill="#9CA7AE"/>
    <rect x="76" y="60" width="4" height="21" rx="2" fill="#DADDD9"/>
    <rect x="183" y="60" width="4" height="21" rx="2" fill="#637482"/>
    <path d="M83 52C84 36 94 29 109 28H153C169 29 179 39 180 54V81C179 97 169 107 154 108H108C93 108 83 98 82 83L83 52Z" fill="url(#vbAgentIvory)"/>
    <path d="M92 44C99 35 108 34 122 34H151" stroke="#FFFFFF" strokeOpacity=".68" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M106 99H158" stroke="#717E89" strokeOpacity=".29" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M94 55C95 46 101 41 111 41H151C161 41 168 47 169 57V77C168 88 162 93 151 94H112C101 94 95 89 94 79V55Z" fill="url(#vbAgentFace)"/>
    <path d="M104 47C114 44 136 44 151 46" stroke="#AEBFC7" strokeOpacity=".13" strokeWidth="1.5" strokeLinecap="round"/>
    <g className="agent-eye agent-eye-left">
      <rect x="109" y="60" width="9" height="13" rx="4.5" fill="url(#vbAgentCoral)"/>
      <rect x="110.5" y="61.5" width="2" height="5" rx="1" fill="#FFD7BC" fillOpacity=".65"/>
    </g>
    <g className="agent-eye agent-eye-right">
      <rect x="145" y="60" width="9" height="13" rx="4.5" fill="url(#vbAgentCoral)"/>
      <rect x="146.5" y="61.5" width="2" height="5" rx="1" fill="#FFD7BC" fillOpacity=".65"/>
    </g>
    <path d="M126 81C129 83 134 83 138 80.5" stroke="#788F9C" strokeWidth="1.6" strokeLinecap="round"/>
    <circle cx="170" cy="88" r="2.3" fill="#FF8868"/>
  </g>

  <path d="M55 132C54 126 58 121 65 121H195C202 121 206 126 205 132L196 192H64L55 132Z" fill="url(#vbAgentShell)"/>
  <path d="M64 122H194" stroke="#C0CBDA" strokeOpacity=".36" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M63 133C62.7 130 64.5 128 67.5 128H192.5C195.5 128 197.3 130 197 133L190 183.5H70L63 133Z" fill="url(#vbAgentScreen)"/>
  <path d="M69 131H190" stroke="#A7C7DA" strokeOpacity=".11" strokeLinecap="round"/>

  <g className="screen-code" strokeLinecap="round">
    <path d="M79 143H88" stroke="#FF997B" strokeWidth="2.7"/>
    <path d="M94 143H117" stroke="#A9C3D8" strokeWidth="2.7"/>
    <path d="M122 143H140" stroke="#718BAC" strokeWidth="2.7"/>
    <path d="M84 152H99" stroke="#748FB2" strokeWidth="2.7"/>
    <path d="M105 152H143" stroke="#A5C8CD" strokeWidth="2.7"/>
    <path d="M84 161H109" stroke="#A5C8CD" strokeWidth="2.7"/>
    <path d="M115 161H132" stroke="#FF997B" strokeWidth="2.7"/>
    <path d="M138 161H160" stroke="#748FB2" strokeWidth="2.7"/>
    <path d="M81 170H91" stroke="#FF997B" strokeWidth="2.7"/>
    <path d="M98 170H126" stroke="#A9C3D8" strokeWidth="2.7"/>
    <path d="M134 168V172" stroke="#ECEDDF" strokeWidth="2"/>
  </g>

  <path d="M64 190H196L218 200C219.6 200.8 219 203 217 204H44C41.6 203 41 200.7 43 199.8L64 190Z" fill="url(#vbAgentBase)"/>
  <path d="M44 204H217C216 207 213 209 208 209H54C49 209 46 207 44 204Z" fill="#2B3B4E"/>
  <path d="M44 202.5H217" stroke="#B6C3D0" strokeOpacity=".55" strokeWidth="1"/>
  <path d="M109 193H150L158 198H102L109 193Z" fill="#40556D"/>
  <path d="M69 194H94M165 194H192" stroke="#B2BECA" strokeOpacity=".3" strokeWidth="1.2" strokeLinecap="round"/>
  <path d="M117 206H144" stroke="#6A7C8D" strokeWidth="1.2" strokeLinecap="round"/>
</svg>
            <span className="agent-activity" id="agent-activity">Reasoning</span>
          </div>
          <button type="button" className="loop-node node-reason" id="stage-reason" role="tab" aria-selected="true" aria-controls="reliability-panel" data-reliability="reason"><svg viewBox="0 0 36 36" aria-hidden="true"><path className="icon-paper" d="M10 4h14l5 5v23H10Z"/><path d="M24 4v6h5M14 15h10M14 20h5M14 25h8"/><circle className="icon-dot" cx="7" cy="9" r="4"/></svg><strong>Reason</strong></button>
          <button type="button" className="loop-node node-tools" id="stage-tools" role="tab" aria-selected="false" aria-controls="reliability-panel" tabIndex="-1" data-reliability="tools"><svg viewBox="0 0 36 36" aria-hidden="true"><rect className="icon-paper" x="3" y="5" width="30" height="26" rx="4"/><path d="M3 12h30m-23 6 4 4-4 4m9 0h6"/><path className="icon-dot" d="M7 9h1m3 0h1"/></svg><strong>Use tools</strong></button>
          <button type="button" className="loop-node node-check" id="stage-check" role="tab" aria-selected="false" aria-controls="reliability-panel" tabIndex="-1" data-reliability="check"><svg viewBox="0 0 36 36" aria-hidden="true"><rect className="icon-paper" x="6" y="4" width="23" height="28" rx="3"/><path d="m11 12 2 2 4-4m-6 11 2 2 4-4m4-7h4m-4 9h4M11 28h14"/></svg><strong>Check</strong></button>
          <button type="button" className="loop-node node-revise" id="stage-revise" role="tab" aria-selected="false" aria-controls="reliability-panel" tabIndex="-1" data-reliability="revise"><svg viewBox="0 0 36 36" aria-hidden="true"><path className="icon-paper" d="M27 10a12 12 0 0 0-21 7m3 9a12 12 0 0 0 21-7"/><path d="M27 4v7h-7M9 32v-7h7m-1-7h6m-3-3v6"/></svg><strong>Revise</strong></button>
        </div>
        <div className="reliability-panel" id="reliability-panel" role="tabpanel" aria-labelledby="stage-reason" tabIndex="0">
          <p className="stage-caption" id="stage-caption">01 / Reasoning under uncertainty</p>
          <h3 id="stage-question">What assumptions is the agent making?</h3>
          <p id="stage-description">I study how agents reason when a scientific problem leaves information unspecified.</p>
        </div>
      </section>
    </section>
    <nav className="profile-links wrap" id="profile-links" aria-label="Résumé and professional profiles">
      <a className="profile-link profile-link-resume" href="https://vikrant-bhati.github.io/Resume/" target="_blank" rel="noopener">
        <span className="profile-link-top" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6M8 13h8M8 17h6"/></svg><span>↗</span></span>
        <strong>Read my résumé</strong><span className="profile-link-note">Experience, education &amp; skills</span>
      </a>
      <a className="profile-link" href="https://github.com/vikrant-bhati" target="_blank" rel="noopener">
        <span className="profile-link-top" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="m16 5 6 7-6 7M8 5l-6 7 6 7m6-16-4 20"/></svg><span>↗</span></span>
        <strong>Browse my code</strong><span className="profile-link-note">Projects &amp; experiments</span>
      </a>
      <a className="profile-link" href="https://linkedin.com/in/vikrantbhati" target="_blank" rel="noopener">
        <span className="profile-link-top" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><rect x="4" y="3" width="17" height="19" rx="3"/><path d="M2 7h4M2 12h4M2 17h4m4 1v-1a3 3 0 0 1 6 0v1"/><circle cx="13" cy="9" r="2.5"/></svg><span>↗</span></span>
        <strong>LinkedIn</strong><span className="profile-link-note">My professional profile</span>
      </a>
    </nav>
    <section className="work-section wrap section-space" id="work" aria-labelledby="work-title">
      <div className="section-heading"><div><h2 id="work-title">Projects</h2></div><div className="work-filters" role="group" aria-label="Filter projects"><button type="button" data-filter="all" aria-pressed="true">All</button><button type="button" data-filter="research" aria-pressed="false">Research</button><button type="button" data-filter="experiment" aria-pressed="false">Experiments</button></div></div>
      <div className="project-grid" id="project-grid">
        <button type="button" className="project-card project-worlds" data-project="twoworlds" data-category="research" aria-label="Explore TwoWorlds research">
          <div className="project-art worlds-art" aria-hidden="true"><span className="art-meta">SCIENTIFIC REASONING / 01</span><div className="world-object world-left"><div></div></div><span className="world-bridge"></span><div className="world-object world-right"><div></div></div><span className="art-bottom">One problem.<br />Two views of the world.</span><span className="art-arrow">↗</span></div>
          <div className="project-caption"><div><h3>TwoWorlds</h3><p>Investigating failures in AI for science.</p></div><span className="project-type">Current research</span></div>
        </button>
        <button type="button" className="project-card project-optimization" data-project="optimization" data-category="research" aria-label="Explore Underspecified Math LLM Reasoning Pipeline">
          <div className="project-art optimization-art" aria-hidden="true"><span className="art-meta">OPTIMIZATION / 02</span><div className="constraint-sheet"><span>objective <b>min f(x)</b></span><span>constraints <b>?</b></span><span className="constraint-missing"></span></div><span className="art-bottom">Reasoning with<br />missing details.</span><span className="art-arrow">↗</span></div>
          <div className="project-caption"><div><h3>Underspecified Math LLM Reasoning Pipeline</h3><p>Training LLMs to handle incomplete optimization problems.</p></div><span className="project-type">Ongoing research</span></div>
        </button>
        <button type="button" className="project-card project-qwen" data-project="qwen" data-category="research" aria-label="Explore Qwen reasoning project">
          <div className="project-art qwen-art" aria-hidden="true"><span className="art-meta">LANGUAGE MODELS / 03</span><div className="token-stack"><span>question<span>?</span></span><span>reasoning<span>···</span></span><span>answer<span>↵</span></span></div><span className="art-bottom">Learning<br />to reason.</span><span className="art-arrow">↗</span></div>
          <div className="project-caption"><div><h3>Qwen + GRPO</h3><p>Training language models for medical reasoning.</p></div><span className="project-type">LLM post-training</span></div>
        </button>
        <button type="button" className="project-card project-cnn" data-project="cnn" data-category="research" aria-label="Explore CNN benchmarking project">
          <div className="project-art cnn-art" aria-hidden="true"><span className="art-meta">COMPUTER VISION / 04</span><div className="vision-grid"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><span className="art-bottom">Different tasks.<br />One study.</span><span className="art-arrow">↗</span></div>
          <div className="project-caption"><div><h3>Seeing across tasks</h3><p>Attention and dynamic CNNs, compared.</p></div><span className="project-type">Computer vision</span></div>
        </button>
        <button type="button" className="project-card project-asphalt" data-project="asphalt" data-category="experiment" aria-label="Explore Asphalt Reimagined">
          <div className="project-art asphalt-art" aria-hidden="true"><span className="art-meta">CREATIVE CODING / 05</span><div className="road"><span></span><span></span><span></span><span></span></div><div className="gesture-mark">↗</div><span className="art-bottom">A different way<br />to take control.</span><span className="art-arrow">↗</span></div>
          <div className="project-caption"><div><h3>Asphalt Reimagined</h3><p>Exploring gesture-based interaction.</p></div><span className="project-type">Side experiment</span></div>
        </button>
        <button type="button" className="project-card project-learning" data-project="learning" data-category="experiment" aria-label="Explore Deep Learning Journey">
          <div className="project-art learning-art" aria-hidden="true"><span className="art-meta">IMPLEMENTATIONS &amp; NOTES / 06</span><div className="learning-notebooks"><span>Vision</span><span>Sequences</span><span>Optimization</span></div><span className="art-bottom">Deep learning,<br />in practice.</span><span className="art-arrow">↗</span></div>
          <div className="project-caption"><div><h3>Deep Learning Journey</h3><p>ML implementations, experiments, and reports.</p></div><span className="project-type">Learning collection</span></div>
        </button>
      </div>
      <p className="filter-status sr-only" aria-live="polite" id="filter-status">Showing all 6 projects.</p>
      <a className="text-link more-code" href="https://github.com/vikrant-bhati" target="_blank" rel="noopener">More experiments on GitHub <span>↗</span></a>
    </section>
    <section className="journey-section section-space" id="journey" aria-labelledby="journey-title"><div className="wrap">
      <div className="section-heading"><div><h2 id="journey-title">A little <em>backstory.</em></h2></div></div>
      <div className="journey-grid"><div className="company-tabs" role="tablist" aria-label="Experience"><button type="button" id="tab-vt" role="tab" data-company="vt" aria-selected="true" aria-controls="experience-panel"><span>2025—NOW</span><strong>Virginia Tech</strong><span className="company-arrow">↗</span></button><button type="button" id="tab-viavi" role="tab" data-company="viavi" aria-selected="false" aria-controls="experience-panel" tabIndex="-1"><span>2025</span><strong>VIAVI Solutions</strong><span className="company-arrow">↗</span></button><button type="button" id="tab-fiserv" role="tab" data-company="fiserv" aria-selected="false" aria-controls="experience-panel" tabIndex="-1"><span>2017—2024</span><strong>Fiserv</strong><span className="company-arrow">↗</span></button></div><div id="experience-panel" role="tabpanel" tabIndex="0" aria-labelledby="tab-vt" className="experience-panel"><p className="eyebrow">Research, teaching &amp; IT</p><h3>Virginia Tech</h3><p>Studying AI reliability in SAGE Lab, teaching machine learning and software design, and helping build university applications.</p></div></div>
    </div></section>
    <section className="notes-section wrap section-space" id="notes" aria-labelledby="notes-title"><div className="section-heading"><div><h2 id="notes-title">Demos &amp; Blogs</h2></div></div><div className="writing-grid">
      <a className="writing-card" href="https://medium.com/@vikrant_bhati/claude-shannon-measured-the-english-language-by-playing-hangman-1ce201cfe869" target="_blank" rel="noopener"><div className="writing-image"><img src={asset("assets/shannon-blog.png")} alt="Illustration from Vikrant’s article about Claude Shannon and language prediction" loading="lazy" /></div><div><p className="eyebrow">Information theory · Jul 2026</p><h3>Shannon played hangman.<br />What is GPT playing?</h3><span className="text-link">Read the story ↗</span></div></a>
      <a className="writing-card" href="https://medium.com/@vikrant_bhati/n-gram-model-from-rules-to-statistical-language-models-72ea0d2090f9" target="_blank" rel="noopener"><div className="writing-image"><img src={asset("assets/ngram-blog.png")} alt="Illustration from Vikrant’s article on n-gram language models" loading="lazy" /></div><div><p className="eyebrow">Language models · Jul 2026</p><h3>From rules to<br />statistical language models.</h3><span className="text-link">Read the story ↗</span></div></a>
      <a className="writing-card" href="https://medium.com/@vikrant_bhati/tokenization-why-llms-cant-count-r-s-in-strawberry-059400c33ceb" target="_blank" rel="noopener"><div className="writing-image tokenization-cover"><img src={asset("assets/tokenization-blog.webp")} alt="Article illustration contrasting the letters in strawberry with the tokens straw and berry" loading="lazy" width="1400" height="735" /></div><div><p className="eyebrow">Tokenization · Jul 2026</p><h3>Why LLMs stumble<br />on strawberries.</h3><span className="text-link">Read the story ↗</span></div></a>
      <a className="writing-card" href="https://www.youtube.com/watch?v=jf9etWVmbEA" target="_blank" rel="noopener"><div className="writing-image video-thumbnail"><img src={asset("assets/asphalt-demo.png")} alt="Vikrant controlling Asphalt with hand gestures" loading="lazy" width="1390" height="604" /><span className="video-play" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></span></div><div><p className="eyebrow">Computer vision · Video demo</p><h3>Asphalt Reimagined:<br />driving with hand gestures.</h3><span className="text-link">Watch demo ↗</span></div></a>
    </div></section>
    <section className="about-section wrap section-space" id="about" aria-labelledby="about-title"><div className="about-photo"><img src={asset("assets/profile.jpeg")} alt="Vikrant outdoors in Virginia" loading="lazy" /><span>Outside the code editor.</span></div><div className="about-copy"><h2 id="about-title">Thanks for<br /><em>stopping by.</em></h2><p>I hope you enjoyed getting to know my work. If you’d like to collaborate, talk about AI, or just say hello, <a href="mailto:bhati.vikrant@outlook.com">get in touch</a>. I’d love to hear from you.</p><p>My thesis in AI reliability is advised by <a href="https://jinming.tech/" target="_blank" rel="noopener">Dr. Ming Jin</a> and co-advised by <a href="https://ruoxijia.net/" target="_blank" rel="noopener">Dr. Ruoxi Jia</a> and <a href="https://tuvllms.github.io/" target="_blank" rel="noopener">Dr. Tu Vu</a>.</p><details><summary>Education &amp; tools I use <span>+</span></summary><div className="about-detail"><p>M.S. in Computer Engineering (Software and Machine Intelligence), Virginia Tech · Expected December 2026.</p><p>Python, Java, C++, SQL · PyTorch, TensorFlow, Hugging Face · RAG, MCP, LLM post-training · Spring Boot, FastAPI · Google Cloud, Docker, Kubernetes.</p></div></details><details><summary>Teaching, recognition &amp; more <span>+</span></summary><div className="about-detail"><p>Mentored 45+ graduate students in Advanced Machine Learning and 130+ undergraduates in C++ software design and testing. My industry work has also received Clover hackathon recognition and Fiserv Living Proof awards.</p><a href="https://vikrant-bhati.github.io/Deep-learning/" target="_blank" rel="noopener">Explore my Deep Learning Journey ↗</a></div></details></div></section>
    <footer className="contact-section" id="contact"><div className="wrap"><p className="eyebrow">Have something interesting in mind?</p><a className="big-contact" href="mailto:bhati.vikrant@outlook.com">Let’s <em>talk.</em><span>↗</span></a><div className="footer-bottom"><span>Vikrant Bhati · Blacksburg, VA</span><div><a href="https://github.com/vikrant-bhati" target="_blank" rel="noopener">GitHub ↗</a><a href="https://linkedin.com/in/vikrantbhati" target="_blank" rel="noopener">LinkedIn ↗</a><a href="https://vikrant-bhati.github.io/Resume/" target="_blank" rel="noopener">Résumé ↗</a><button className="analytics-settings" id="analytics-settings" type="button" aria-controls="analytics-preferences" aria-expanded="false">Privacy &amp; analytics</button><a href="#home">Back to top ↑</a></div></div></div></footer>
  </main>
  <aside className="analytics-preferences" id="analytics-preferences" aria-labelledby="analytics-title" hidden>
    <div className="analytics-bar wrap">
    <div className="analytics-copy">
    <h2 className="sr-only" id="analytics-title" tabIndex="-1">Analytics cookies</h2>
    <p>I use Google Analytics cookies to understand visits to this site.</p>
    <details>
      <summary>Privacy details</summary>
      <p>With your permission, Google receives visit and interaction data, including page views, project opens, link clicks, and browser and device information. Reports may include approximate location and how you reached this site. I use these reports to improve the portfolio.</p>
      <p>Analytics stays off until you allow it. Advertising personalization is disabled. Your choice is saved in this browser for six months; you can change it here at any time. Declining does not affect the site. Withdrawing permission stops future tracking from this site; it does not delete data already sent.</p>
      <p>See <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">how Google uses data</a>. For privacy questions, <a href="mailto:bhati.vikrant@outlook.com">contact me</a>.</p>
    </details>
    <p className="analytics-status" id="analytics-status" aria-live="polite"></p>
    </div>
    <div className="analytics-actions"><button type="button" id="analytics-allow">Accept cookies</button><button type="button" id="analytics-decline">Reject</button></div>
    </div>
  </aside>
  <dialog id="project-dialog" aria-labelledby="dialog-title"><div className="dialog-toolbar"><span id="dialog-eyebrow" className="eyebrow">Project details</span><button id="close-dialog" type="button" aria-label="Close project details">Close <span>×</span></button></div><div id="dialog-body"></div></dialog>
    </>
  );
}
