import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-content">

          <!-- SECTION À PROPOS -->
          <div class="footer-section">
            <div class="footer-logo">
              <div class="logo-circle">B</div>
              <span>Beauty Bloom</span>
            </div>
            <p class="footer-description">Les secrets de beauté naturelle élaborés avec des figues biologiques, de l'huile d'olive et des plantes pures de Tunisie.</p>
            <div class="social-links">
              <a href="https://www.instagram.com/beauty_bloom.tn?igsh=MW1taWFua2psZWg5eQ==" target="_blank" title="Instagram" class="social-icon">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="https://wa.me/21690569579" target="_blank" title="WhatsApp" class="social-icon">
                <i class="fab fa-whatsapp"></i>
              </a>
              <a href="mailto:beautybloom552&#64;gmail.com" title="Email" class="social-icon">
                <i class="fas fa-envelope"></i>
              </a>
            </div>
          </div>

          <!-- SECTION BOUTIQUE -->
          <div class="footer-section">
            <h4>Boutique</h4>
            <ul class="footer-links">
              <li><a href="#/products">Soin du Visage</a></li>
              <li><a href="#/products">Soin du Corps</a></li>
              <li><a href="#/products">Soin Capillaire</a></li>
              <li><a href="#/products">Huiles Essentielles</a></li>
              <!-- <li><a href="#/products">Coffrets Cadeaux</a></li> -->
            </ul>
          </div>

          <!-- SECTION À PROPOS -->
          <!-- <div class="footer-section">
            <h4>À Propos</h4>
            <ul class="footer-links">
              <li><a href="#/story">Notre Histoire</a></li>
              <li><a href="#/sustainability">Durabilité</a></li>
              <li><a href="#">Nos Ingrédients</a></li>
              <li><a href="#">Certifications</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div> -->

          <!-- SECTION CONTACT -->
          <div class="footer-section">
            <h4>Nous Contacter</h4>
            <div class="contact-info">
              <!--<p>
                <i class="fas fa-map-marker-alt"></i>
                123 Avenue Méditerranée, Tunis
              </p> -->
              <p>
                <i class="fas fa-phone"></i>
                <a href="https://wa.me/21690569579">+216 90 569 579</a>
              </p>
              <p>
                <i class="fas fa-envelope"></i>
                beautybloom552&#64;gmail.com
              </p>
            </div>
          </div>

        </div>

        <!-- BAS DU FOOTER -->
        <div class="footer-bottom">
          <div class="footer-copyright">
            <p>© 2026 Beauty Bloom. Tous droits réservés. Fait avec amour en Tunisie.</p>
          </div>
          <div class="footer-bottom-links"></div>
        </div>

        <!-- BADGES -->
        <div class="footer-badges">
          <span><i class="fas fa-leaf"></i> 100% Bio</span>
          <span><i class="fas fa-recycle"></i> Emballage Recyclable</span>
          <span><i class="fas fa-heart"></i> Sans Cruauté</span>
        </div>

      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: #4a3f5e;
      color: white;
      padding: 60px 20px 20px;
      margin-top: 80px;
    }

    .footer-container {
      max-width: 1400px;
      margin: 0 auto;
    }

    .footer-content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 50px;
      margin-bottom: 40px;
    }

    .footer-section h4 {
      font-size: 1.1rem;
      margin-bottom: 25px;
      color: #d4a574;
      font-family: 'Georgia', serif;
      font-weight: 500;
    }

    .footer-logo {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 15px;
      font-size: 1.3rem;
      font-weight: 600;
      font-family: 'Georgia', serif;
    }

    .logo-circle {
      width: 40px;
      height: 40px;
      background: #7a8f4a;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
      color: white;
      font-weight: 700;
    }

    .footer-description {
      font-size: 0.9rem;
      line-height: 1.6;
      margin-bottom: 20px;
      opacity: 0.9;
    }

    .social-links {
      display: flex;
      gap: 20px;
      margin-top: 20px;
    }

    .social-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background: rgba(212, 165, 116, 0.2);
      color: #d4a574;
      border-radius: 50%;
      transition: all 0.3s ease;
      font-size: 1.2rem;
      text-decoration: none;
    }

    .social-icon:hover {
      background: #7a8f4a;
      color: white;
      transform: translateY(-3px);
    }

    .footer-links {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .footer-links li {
      margin-bottom: 12px;
    }

    .footer-links a {
      color: #e0e0e0;
      text-decoration: none;
      transition: color 0.3s;
      font-size: 0.9rem;
    }

    .footer-links a:hover {
      color: #d4a574;
    }

    .contact-info {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    .contact-info p {
      font-size: 0.9rem;
      line-height: 1.6;
      opacity: 0.9;
      display: flex;
      align-items: center;
      gap: 10px;
      margin: 0;
    }

    .contact-info i {
      color: #d4a574;
      width: 16px;
    }

    .contact-info a {
      color: #e0e0e0;
      text-decoration: none;
      transition: color 0.3s;
    }

    .contact-info a:hover {
      color: #d4a574;
    }

    .footer-bottom {
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      padding-top: 30px;
      margin-bottom: 30px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 30px;
      align-items: center;
    }

    .footer-copyright p {
      font-size: 0.85rem;
      opacity: 0.8;
      margin: 0;
    }

    .footer-bottom-links {
      display: flex;
      gap: 30px;
      justify-content: flex-end;
    }

    .footer-bottom-links a {
      font-size: 0.85rem;
      color: #e0e0e0;
      text-decoration: none;
      transition: color 0.3s;
    }

    .footer-bottom-links a:hover {
      color: #d4a574;
    }

    .footer-badges {
      text-align: center;
      font-size: 0.85rem;
      padding-top: 30px;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      display: flex;
      justify-content: center;
      gap: 40px;
      flex-wrap: wrap;
    }

    .footer-badges span {
      display: flex;
      align-items: center;
      gap: 8px;
      opacity: 0.9;
    }

    .footer-badges i {
      color: #7a8f4a;
    }

    @media (max-width: 768px) {
      .footer-bottom {
        grid-template-columns: 1fr;
        text-align: center;
      }

      .footer-bottom-links {
        justify-content: center;
      }

      .footer-content {
        gap: 30px;
      }

      .footer-badges {
        gap: 20px;
        flex-direction: column;
      }
    }
  `]
})
export class FooterComponent {}