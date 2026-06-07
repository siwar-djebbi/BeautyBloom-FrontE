import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product, CartItem, Order } from '../models/product.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'  
})
export class CartService {
  private items: CartItem[] = [];
  private itemsSubject = new BehaviorSubject<CartItem[]>([]);
  items$ = this.itemsSubject.asObservable();
  
  private apiUrl = `${environment.apiUrl}/orders`;

  constructor(private http: HttpClient) {
    // Charger le panier depuis localStorage
    this.loadCart();
  }

  // ✅ AJOUTER AU PANIER
  addToCart(product: Product): void {
    const existing = this.items.find(i => i.product.id === product.id);

    if (existing) {
      existing.quantity++;
    } else {
      this.items.push({ product, quantity: 1 });
    }

    this.saveCart();
    this.itemsSubject.next([...this.items]);
  }

  getItems(): CartItem[] {
    return this.items;
  }
 
  getTotal(): number {
    return this.items.reduce(
      (sum, item) => sum + (item.product.price * item.quantity),
      0
    );
  }

  updateQuantity(productId: number, qty: number): void {
    const item = this.items.find(i => i.product.id === productId);
    if (item && qty > 0) {
      item.quantity = qty;
      this.saveCart();
      this.itemsSubject.next([...this.items]);
    }
  }

  removeFromCart(productId: number): void {
    this.items = this.items.filter(item => item.product.id !== productId);
    this.saveCart();
    this.itemsSubject.next([...this.items]);
  }

  // ✅ VIDER LE PANIER
  clear(): void {
    this.items = [];
    localStorage.removeItem('cart');
    this.itemsSubject.next([]);
  }

  // ✅ SAUVEGARDER DANS LOCALSTORAGE
  private saveCart(): void {
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

  // ✅ CHARGER DEPUIS LOCALSTORAGE
  private loadCart(): void {
    const saved = localStorage.getItem('cart');
    if (saved) {
      try {
        this.items = JSON.parse(saved);
        this.itemsSubject.next([...this.items]);
      } catch (e) {
        console.error('Erreur chargement panier:', e);
      }
    }
  }

  // ✅ ENVOYER LA COMMANDE AU BACKEND
  checkout(order: Order): Observable<Order> {
    return this.http.post<Order>(this.apiUrl, order);
  }
}