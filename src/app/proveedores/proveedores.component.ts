import { Component, OnInit } from '@angular/core';
import { Proveedores } from './proveedores';
import { proveedores } from './proveedores.json';
import { ProveedoresService } from './proveedores.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
})

export class ProveedoresComponent implements OnInit {
  proveedores: Proveedores[] = [];
  constructor(private proveedoresservice: ProveedoresService) {
  }

  ngOnInit(): void {
    this.proveedoresservice.getproveedores().subscribe(
      proveedores => this.proveedores = proveedores
    );
  }
}
