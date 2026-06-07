import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <header class="header">
      <div class="container">
        <div class="logo">
          <img src="assets/images/logo.png" alt="Beauty Bloom" class="logo-image">
          <span class="logo-text">Beauty Bloom</span>
        </div>
        
        <nav class="nav">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Catalogue</a>
          <!-- <a routerLink="/" routerLinkActive="active">Our Story</a> -->
          <!-- <a routerLink="/" routerLinkActive="active">Sustainability</a> -->
<a
  href="https://www.instagram.com/beauty_bloom.tn?igsh=MW1taWFua2psZWg5eQ=="
  target="_blank"
  rel="noopener noreferrer"
>
  Contact
</a>        </nav>

        <div class="actions">
          <!-- <button class="search-btn" title="Search">
            <i class="fas fa-search"></i>
          </button>
          <button class="user-btn" title="Account">
            <i class="fas fa-user"></i>
          </button> -->
          <a routerLink="/cart" class="cart-btn" title="Shopping Cart">
            <i class="fas fa-shopping-bag"></i>
            <span class="badge" *ngIf="cartCount > 0">{{ cartCount }}</span>
          </a>
        </div>
      </div>
    </header>
  `,
  styles: [`
    .header {
      background: white;
      border-bottom: 1px solid #f0f0f0;
      position: sticky;
      top: 0;
      z-index: 100;
      padding: 28px 0;
    }

    .container {
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 14px;
      text-decoration: none;
      font-weight: 600;
    }

    .logo-image {
      height: 56px;
      width: 56px;
      object-fit: contain;
      background: white;
      border: 2px solid #7a8f4a;
      border-radius: 50%;
      padding: 5px;
    }

    .logo-text {
      font-size: 1.8rem;
      color: #4a3f5e;
      font-family: 'Georgia', serif;
    }

    .nav {
      display: flex;
      gap: 40px;
      flex: 1;
      justify-content: center;
    }

    .nav a {
      color: #7a7a7a;
      text-decoration: none;
      font-size: 1.05rem;
      transition: color 0.3s;
      position: relative;
    }

    .nav a:hover,
    .nav a.active {
      color: #7a8f4a;
    }

    .nav a.active::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      right: 0;
      height: 2px;
      background: #7a8f4a;
    }

    .actions {
      display: flex;
      gap: 28px;
      align-items: center;
    }

    button, .cart-btn {
      background: none;
      border: none;
      cursor: pointer;
      transition: all 0.3s;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #7a7a7a;
    }

    button:hover, .cart-btn:hover {
      color: #7a8f4a;
      transform: translateY(-2px);
    }

    button i, .cart-btn i {
      font-size: 1.4rem;
    }

    .cart-btn {
      position: relative;
      text-decoration: none;
    }

    .badge {
      position: absolute;
      top: -8px;
      right: -8px;
      background: #d4a574;
      color: white;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.75rem;
      font-weight: 600;
    }

    @media (max-width: 768px) {
      .nav {
        display: none;
      }

      .container {
        justify-content: space-between;
      }
    }
  `]
})
export class HeaderComponent implements OnInit {
  cartCount = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.items$.subscribe(items => {
      this.cartCount = items.reduce((sum, item) => sum + item.quantity, 0);
    });
  }
}0