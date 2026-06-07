import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { ToastService } from '../../services/toast.service';
import { CartItem, Order } from '../../models/product.model';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  fullName = '';
  phone = '';
  address = '';
  items: CartItem[] = [];
  total = 0;
  submitting = false;

  constructor(
    private cartService: CartService,
    private toastService: ToastService,
    private router: Router
  ) {}

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.total = this.cartService.getTotal();

    if (this.items.length === 0) {
      this.router.navigate(['/cart']);
    }
  }

  submitOrder() {
    if (!this.fullName || !this.phone || !this.address) {
      this.toastService.warning('Veuillez remplir tous les champs');
      return;
    }

    this.submitting = true;

    const order: Order = {
      fullName: this.fullName,
      phone: this.phone,
      address: this.address,
      items: this.items,
      total: this.total + 7
    };

    this.cartService.checkout(order).subscribe({
      next: (response) => {
        console.log('Commande créée:', response);
        this.cartService.clear();
        this.toastService.success('✓ Commande envoyée avec succès !');
        setTimeout(() => this.router.navigate(['/']), 1500);
      },
      error: (error) => {
        console.error('Erreur:', error);
        this.toastService.error('Erreur lors de la création de la commande');
        this.submitting = false;
      }
    });
  }

  sendWhatsApp() {
  if (!this.fullName || !this.phone || !this.address) {
    this.toastService.warning('Veuillez remplir tous les champs');
    return;
  }

  let message = `*Nouvelle commande*%0A%0A`;
  message += `*Nom:* ${this.fullName}%0A`;
  message += `*Téléphone:* ${this.phone}%0A`;
  message += `*Adresse:* ${this.address}%0A%0A`;
  message += `*Produits:*%0A`;

  this.items.forEach(item => {
    message += `• ${item.product.name} x${item.quantity} - ${item.product.price * item.quantity} TND%0A`;
  });

  message += `%0A*Total: ${this.total + 7} TND* ( 7 TND livraison)`;

  const whatsappNumber = '21690569579';
  const url = `https://wa.me/${whatsappNumber}?text=${message}`;

  window.open(url, '_blank');
  this.cartService.clear();
  this.toastService.success('Commande envoyée ! Nous vous contacterons sur WhatsApp.');
  setTimeout(() => this.router.navigate(['/']), 1500);
}
}