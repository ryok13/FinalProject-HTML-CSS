function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
}

const allHeader = document.querySelector('#header-section');
const allFooter = document.querySelector('#footer-section');


allHeader.innerHTML = `
    <div class="compname">
            <h1>Company name</h1>
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
                    <li><a href="/index.html">Home</a></li>
                    <li><a href="/pages/about.html">About Us</a></li>
                    <li><a href="/pages/contact.html">Contact Us</a></li>
                </ul>
            </nav>
        </div>
`;

allFooter.innerHTML = `
    <p id="copy">&copy; Copyright</p>
`;