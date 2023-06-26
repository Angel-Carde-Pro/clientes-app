import { Component, OnInit } from '@angular/core';
import { CLIENTES } from './clientes.json'
import { ClienteService } from './cliente.service';
import { Cliente } from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',

})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.getCIientes().subscribe (
      clientes => this.clientes = clientes
    );
  }
}
