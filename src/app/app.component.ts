import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from './order.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  orders: Order[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Cambia la URL al backend Container App cuando despliegues en Azure
    this.http.get<Order[]>('http://localhost:8080/orders')
      .subscribe(data => this.orders = data);
  }
}