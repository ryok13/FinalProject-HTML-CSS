function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
}

const allHeader = document.querySelector('#header-section');
const allFooter = document.querySelector('#footer-section');

const isGithubPages = window.location.hostname.includes("github.io");
const repoName = "FinalProject-HTML-CSS";

// GitHub Pages では `/FinalProject-HTML-CSS/` がルート、ローカルでは `/`
const base = isGithubPages ? `/${repoName}/` : `/`;

// ページの階層が深い場合に備えて、前に `../` をつけるかどうか
const prefix = window.location.pathname.includes("/pages/") ? "../" : "";

allHeader.innerHTML = `
    <div class="compname">

            <div class="logo-img"><img src="${prefix}images/Georgian1.png" alt="Georgian Retro Games"></div>
            <p>Best retro game seller in Canada</p>
        </div>
        <div class="container">
            <nav>
                <div class="menu-icon" onclick="toggleMenu()">
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                </div>
                <ul class="nav-links" id="nav-links">
                    <li><a href="${base}index.html">Home</a></li>
                    <li><a href="${base}pages/about.html">About Us</a></li>
                    <li><a href="${base}pages/contact.html">Contact Us</a></li>
                </ul>
            </nav>
        </div>
`;

allFooter.innerHTML = `
  <div class="footer-left">
    <h3>Georgian Retro Games</h3>
    <p class="footer-links">
      <a href="${base}index.html" class="link-1">Home</a>
      |
      <a href="${base}pages/about.html">About</a>
      |
      <a href="${base}pages/contact.html">Contact</a>
    </p>
    <p class="footer-company-name">© 2024 Georgian Retro Games</p>
  </div>

  <div class="footer-center">
    <div>
      <i class="fa fa-map-marker"></i>
      <p><span>1 Georgian Dr</span> Barre, ON L4M 3X9</p>
    </div>
    <div>
      <i class="fa fa-phone"></i>
      <p>+1 234 567 890</p>
    </div>
    <div>
      <i class="fa fa-envelope"></i>
      <p><a href="mailto:support@georgianretrogames.com">support@georgianretrogames.com</a></p>
    </div>
  </div>

  <div class="footer-right">
    <div class="footer-icons">
      <a href="#"><div class="social"><img src="${prefix}images/s1.svg" alt=""></div></a>
        <a href="#"><div class="social"><img src="${prefix}images/s2.svg" alt=""></div></a>
        <a href="#"><div class="social"><img src="${prefix}images/s3.svg" alt=""></div></a>
    </div>
  </div>
`;