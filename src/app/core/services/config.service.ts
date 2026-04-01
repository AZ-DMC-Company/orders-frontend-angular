import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ConfigService {
  private config: { backendUrl: string } = { backendUrl: '' };

  constructor(private http: HttpClient) {}

  async load(): Promise<void> {
    const data = await firstValueFrom(
      this.http.get<{ backendUrl: string }>('/assets/config.json')
    );
    this.config = data;
  }

  get apiUrl(): string {
    return this.config.backendUrl;
  }
}