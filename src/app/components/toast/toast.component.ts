import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { ToastService, Toast } from '../../services/toast.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="toast-container">
      <div 
        *ngFor="let toast of toasts" 
        class="toast" 
        [ngClass]="'toast-' + toast.type"
        @slideIn
      >
        <div class="toast-content">
          <span class="toast-icon">
            <span *ngIf="toast.type === 'success'">✓</span>
            <span *ngIf="toast.type === 'error'">✕</span>
            <span *ngIf="toast.type === 'info'">ℹ</span>
            <span *ngIf="toast.type === 'warning'">⚠</span>
          </span>
          <p class="toast-message">{{ toast.message }}</p>
        </div>
        <button class="toast-close" (click)="close(toast.id)">×</button>
      </div>
    </div>
  `,
  styles: [`
    .toast-container {
      position: fixed;
      top: 100px;
      right: 20px;
      z-index: 9999;
      display: flex;
      flex-direction: column;
      gap: 16px;
      max-width: 420px;
      pointer-events: none;
    }

    .toast {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 14px;
      padding: 18px 22px;
      border-radius: 12px;
      font-weight: 500;
      pointer-events: auto;
      min-height: 60px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      font-size: 0.95rem;
      animation: none;
    }

    .toast-content {
      display: flex;
      align-items: center;
      gap: 14px;
      flex: 1;
    }

    .toast-icon {
      font-weight: 700;
      font-size: 1.4rem;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border-radius: 50%;
    }

    .toast-message {
      margin: 0;
      line-height: 1.4;
      word-break: break-word;
    }

    .toast-close {
      background: none;
      border: none;
      font-size: 1.6rem;
      cursor: pointer;
      padding: 0;
      opacity: 0.6;
      transition: opacity 0.2s;
      flex-shrink: 0;
    }

    .toast-close:hover {
      opacity: 1;
    }

    /* SUCCESS - Vert */
    .toast-success {
      background: linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%);
      border-color: #6b8e23;
      color: #1b5e20;
    }

    .toast-success .toast-icon {
      background: rgba(107, 142, 35, 0.2);
      color: #6b8e23;
    }

    .toast-success .toast-close {
      color: #6b8e23;
    }

    /* ERROR - Rouge */
    .toast-error {
      background: linear-gradient(135deg, #FFEBEE 0%, #FFCDD2 100%);
      border-color: #d32f2f;
      color: #b71c1c;
    }

    .toast-error .toast-icon {
      background: rgba(211, 47, 47, 0.2);
      color: #d32f2f;
    }

    .toast-error .toast-close {
      color: #d32f2f;
    }

    /* INFO - Bleu */
    .toast-info {
      background: linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%);
      border-color: #1976d2;
      color: #0d47a1;
    }

    .toast-info .toast-icon {
      background: rgba(25, 118, 210, 0.2);
      color: #1976d2;
    }

    .toast-info .toast-close {
      color: #1976d2;
    }

    /* WARNING - Jaune */
    .toast-warning {
      background: linear-gradient(135deg, #FFF3E0 0%, #FFE0B2 100%);
      border-color: #f57c00;
      color: #e65100;
    }

    .toast-warning .toast-icon {
      background: rgba(245, 124, 0, 0.2);
      color: #f57c00;
    }

    .toast-warning .toast-close {
      color: #f57c00;
    }

    @media (max-width: 480px) {
      .toast-container {
        right: 12px;
        left: 12px;
        max-width: none;
        top: 90px;
      }

      .toast {
        padding: 16px 18px;
        font-size: 0.9rem;
      }

      .toast-icon {
        width: 28px !important;
        height: 28px !important;
        font-size: 1.2rem !important;
      }
    }
  `],
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ 
          transform: 'translateX(450px)', 
          opacity: 0 
        }),
        animate('400ms ease-out', 
          style({ 
            transform: 'translateX(0)', 
            opacity: 1 
          })
        )
      ]),
      transition(':leave', [
        animate('300ms ease-in', 
          style({ 
            transform: 'translateX(450px)', 
            opacity: 0 
          })
        )
      ])
    ])
  ]
})
export class ToastComponent implements OnInit {
  toasts: Toast[] = [];

  constructor(private toastService: ToastService) {}

  ngOnInit(): void {
    this.toastService.toasts.subscribe({
      next: (toasts) => {
        console.log('Toasts reçus:', toasts);  // Debug
        this.toasts = toasts;
      },
      error: (error) => {
        console.error('Erreur toast:', error);
      }
    });
  }

  close(id: string): void {
    this.toastService.remove(id);
  }
}