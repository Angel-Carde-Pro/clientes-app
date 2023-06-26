import { Injectable } from '@angular/core';
import { proveedores } from './proveedores.json';
import { Proveedores } from './proveedores';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  constructor() { }
  getproveedores(): Observable<Proveedores[]> {
    return of(proveedores);

  }
}
