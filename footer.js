document.addEventListener('DOMContentLoaded', function() {
    const footer = `
    <footer class="site-footer" id="myfooter">
      <div class="footer-content">
        <div class="footer-section">
          <img
            src="./images/wide-logo.png"
            alt="Papurus Logo"
            class="footer-logo"
          />
          <p style="margin-top: 2px">Email: info@papurus.com</p>
          <p>Phone: +20 100 123 4567</p>
          <div class="social-icons">
            <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
            <a href="#" aria-label="TikTok"><i class="fab fa-tiktok"></i></a>
            <a href="#" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
            <a href="#" aria-label="Telegram"><i class="fab fa-telegram-plane"></i></a>
          </div>
        </div>

        <div class="footer-section">
          <h4>Explore</h4>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="products.html">Products</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#myfooter">Contact</a></li>
            <li><a href="#myfooter">About</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h4>Join Our Community</h4>
          <p>
            Join the Papurus community and be the first to unlock ancient
            wisdom, exclusive discounts, and book releases you won't find
            anywhere else
          </p>
          <form action="register.html">
            <input type="email" placeholder="Your email" class="email-input" />
            <button type="submit" class="subscribe-btn">Join</button>
          </form>
        </div>
      </div>

      <div class="footer-bottom">
        <p>© 2025 Papurus House. All rights reserved.</p>
      </div>
    </footer>
    `;
    document.body.insertAdjacentHTML('beforeend', footer);
});
