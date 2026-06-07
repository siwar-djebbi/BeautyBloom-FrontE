import { Component, Injectable, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { ToastService } from '../../services/toast.service';
import { CartItem } from '../../models/product.model';

@Injectable({
  providedIn: 'root'  // ← Add this
})
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items: CartItem[] = [];
  total = 0;

  constructor(
    private cartService: CartService,
    private toastService: ToastService,
    private router: Router
  ) {}

  ngOnInit() {
    this.cartService.items$.subscribe(items => {
      this.items = items;
      this.total = this.cartService.getTotal();
    });
  }

  updateQty(productId: number, qty: number) {
    if (qty > 0) {
      this.cartService.updateQuantity(productId, qty);
    }
  }

  remove(productId: number) {
    const product = this.items.find(i => i.product.id === productId)?.product;
    this.cartService.removeFromCart(productId);
    this.toastService.warning(`${product?.name} supprimé du panier`);
  }

  checkout() {
    if (this.items.length > 0) {
      this.router.navigate(['/checkout']);
    }
  }
}