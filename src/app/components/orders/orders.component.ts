import { Component, OnInit } from '@angular/core';
import { OrdersService, Order } from '../../services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [];
  loading = true;
  error: string | null = null;

  constructor(private ordersService: OrdersService) { }

  ngOnInit(): void {
    this.ordersService.getOrders().subscribe({
      next: (data) => {
        console.log('Órdenes recibidas:', data); // útil para debugging
        this.orders = data;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.error = 'No se pudieron cargar las órdenes.';
        this.loading = false;
      }
    });
  }
}