import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Toast {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
  duration?: number;
}

@Injectable({
  providedIn: 'root'  // ✅ IMPORTANT
})
export class ToastService {
  private toastsSubject = new BehaviorSubject<Toast[]>([]);
  toasts: Observable<Toast[]> = this.toastsSubject.asObservable();

  show(message: string, type: 'success' | 'error' | 'info' | 'warning' = 'info', duration = 3000) {
    const id = 'toast-' + Date.now() + '-' + Math.random();
    const toast: Toast = { id, message, type, duration };

    console.log('Toast créé:', toast);  // Debug

    const current = this.toastsSubject.getValue();
    this.toastsSubject.next([...current, toast]);

    if (duration > 0) {
      setTimeout(() => {
        console.log('Toast supprimé:', id);  // Debug
        this.remove(id);
      }, duration);
    }
  }

  success(message: string, duration?: number) {
    this.show(message, 'success', duration || 3000);
  }

  error(message: string, duration?: number) {
    this.show(message, 'error', duration || 4000);
  }

  info(message: string, duration?: number) {
    this.show(message, 'info', duration || 3000);
  }

  warning(message: string, duration?: number) {
    this.show(message, 'warning', duration || 3000);
  }

  remove(id: string) {
    const current = this.toastsSubject.getValue();
    const updated = current.filter(t => t.id !== id);
    this.toastsSubject.next(updated);
  }
}