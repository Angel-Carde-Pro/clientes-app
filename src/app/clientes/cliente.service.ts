import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { CLIENTES } from './clientes.json';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  getCIientes(): Observable<Cliente[]> {
    return of(CLIENTES)
  }
}
