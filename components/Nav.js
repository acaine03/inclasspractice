export default links => `
<nav>
    <i class="fas fa-bars"></i>
    <ul class="hidden--mobile nav-links">
      ${links.map(link => `<li><a>${link}</a></li>`).join}
    </ul>
  </nav>
  `;
