import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

declare global {
  interface Window {
    __env: any;
  }
}

export interface Order {
  id: number;
  item: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private backendUrl = window.__env?.backendUrl || 'http://localhost:8080/orders';

  constructor(private http: HttpClient) { }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.backendUrl);
  }
}