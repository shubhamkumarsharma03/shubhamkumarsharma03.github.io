// Update footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Dynamically load recent GitHub repositories
const GITHUB_USERNAME = 'shubhamkumarsharma03';
const EXCLUDE_REPOS = new Set([
  'shubhamkumarsharma03.github.io', // this site
  'expanse-tracker', // already featured above
  'AI-email-writer', // already featured above
  'Intelligent-Document-Querying-System' // already featured above
]);

async function loadRepos() {
  const grid = document.getElementById('repo-grid');
  try {
    const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=pushed&per_page=12`);
    if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
    const repos = (await res.json())
      .filter(r => !r.fork && !EXCLUDE_REPOS.has(r.name))
      .slice(0, 6);
    if (!repos.length) {
      grid.innerHTML = '<div class="repo-card">No repositories to show yet.</div>';
      return;
    }
    grid.innerHTML = repos.map(r => {
      const lang = r.language ? `<span class=repo-lang>${r.language}</span>` : '';
      const stars = r.stargazers_count ? `⭐ ${r.stargazers_count}` : '';
      const demo = r.homepage ? `<a href="${r.homepage}" target="_blank" rel="noopener">Live</a>` : '';
      let desc = r.description ? r.description.replace(/</g,'&lt;') : 'No description available';
      // Truncate long descriptions
      if (desc.length > 100) {
        desc = desc.substring(0, 100) + '...';
      }
      return `
        <article class="repo-card">
          <h5>${r.name}</h5>
          <p class="muted">${desc}</p>
          <div class="repo-meta">${lang} <span>${stars}</span></div>
          <p>
            <a href="${r.html_url}" target="_blank" rel="noopener">Repository</a> ${demo}
          </p>
          <a class="stretched-link" href="${r.html_url}" target="_blank" rel="noopener" aria-label="Open ${r.name} repository"></a>
        </article>
      `;
    }).join('');
  } catch (err) {
    grid.innerHTML = '<div class="repo-card error">Could not load repositories right now. Please try again later.</div>';
    console.error(err);
  }
}

loadRepos();

// Credly badges: render by badge IDs
const CREDLY_BADGE_IDS = [
  '917a930d-a814-4684-b6a0-390ca5ff0ec9',
  '2b58edc7-d7af-416b-87be-2122ade2baf5',
  '43e6fbd7-3901-48dc-a882-1e02b0900aef',
  'ca4c0d0d-6095-4aed-907c-3aa74c1a3a0f',
  'ae2ebdcd-ac08-4f66-87af-030fcd5204f2',
  '4b294454-649f-4568-9db1-74ed9fc38ca0'
];

(function renderCredly(){
  const container = document.getElementById('credly-badges');
  if(!container) return;
  if(!CREDLY_BADGE_IDS.length){
    return; // leave fallback message
  }
  container.innerHTML = CREDLY_BADGE_IDS.map(id => `
    <div class="badge-card">
      <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="${id}" data-share-badge-host="https://www.credly.com"></div>
    </div>
  `).join('');
  // load Credly embed once
  const s = document.createElement('script');
  s.async = true; 
  s.type = 'text/javascript'; 
  s.src = '//cdn.credly.com/assets/utilities/embed.js';
  document.body.appendChild(s);
})();

// Simple Lightbox for images
(function(){
  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.innerHTML = '<div class="lightbox-content"><img alt="Preview"/><button class="lightbox-close" aria-label="Close">×</button></div>';
  document.body.appendChild(overlay);
  const imgEl = overlay.querySelector('img');
  const closeBtn = overlay.querySelector('.lightbox-close');
  function open(src){ imgEl.src = src; overlay.classList.add('show'); }
  function close(){ overlay.classList.remove('show'); imgEl.src=''; }
  overlay.addEventListener('click', (e)=>{ if(e.target===overlay) close(); });
  closeBtn.addEventListener('click', close);
  document.addEventListener('keydown', (e)=>{ if(e.key==='Escape') close(); });
  document.addEventListener('click', (e)=>{
    const t = e.target.closest('[data-lightbox-src], a.lightbox');
    if(!t) return;
    const src = t.getAttribute('data-lightbox-src') || t.getAttribute('href');
    if(src){ e.preventDefault(); open(src); }
  });
})();

// Mobile / Quick menu toggle
(function(){
  const toggle = document.querySelector('.mobile-menu-toggle');
  const quickToggle = document.querySelector('.quick-nav-toggle');
  const nav = document.querySelector('.nav');
  const navLinks = document.querySelectorAll('.nav a');

  function setExpanded(isActive){
    if(toggle) toggle.setAttribute('aria-expanded', isActive);
    if(quickToggle) quickToggle.setAttribute('aria-expanded', isActive);
  }

  function toggleNav(force){
    if(!nav) return;
    const isActive = force !== undefined ? force : !nav.classList.contains('active');
    nav.classList.toggle('active', isActive);
    document.body.classList.toggle('nav-open', isActive);
    if(quickToggle) quickToggle.classList.toggle('show', isActive || (window.pageYOffset || document.documentElement.scrollTop) > 80);
    setExpanded(isActive);
    document.body.style.overflow = isActive ? 'hidden' : '';
  }
  
  if(toggle && nav){
    toggle.addEventListener('click', ()=> toggleNav());
  }

  if(quickToggle && nav){
    quickToggle.addEventListener('click', ()=> toggleNav());
  }
  
  // Close menu when clicking on a link
  navLinks.forEach(link => {
    link.addEventListener('click', ()=> toggleNav(false));
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', (e)=>{
    if(!nav.contains(e.target) && !toggle?.contains(e.target) && !quickToggle?.contains(e.target) && nav.classList.contains('active')){
      toggleNav(false);
    }
  });
})();

// Header hide on scroll down, show on scroll up
const header = document.querySelector('.site-header');
const quickToggle = document.querySelector('.quick-nav-toggle');

// Ensure header is always visible
header?.classList.remove('hidden');

window.addEventListener('scroll', function() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Keep header visible (no hide on scroll)
  header?.classList.remove('hidden');

  // Quick nav shows only when nav is open (optional helper)
  if(quickToggle){
    const navOpen = document.body.classList.contains('nav-open');
    const shouldShow = navOpen || scrollTop > 120; // keep available when scrolled a bit
    quickToggle.classList.toggle('show', shouldShow);
  }
}, { passive: true });
