export class Proveedores {
  id: number = 0;
  nombre: string = "";
  apellido: string = "";
  direccion: string = "";
  celular: string = "";
  productos: string[] = [];
  edad: number = 0;
  fechaRegistro: Date = new Date();
  fotografia: string = "";
  redSocial: string = "";

  constructor(id: number, nombre: string, apellido: string, direccion: string, celular: string, productos: string[], edad: number, fechaRegistro: Date, fotografia: string, redSocial: string) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.direccion = direccion;
    this.celular = celular;
    this.productos = productos;
    this.edad = edad;
    this.fechaRegistro = fechaRegistro;
    this.fotografia = fotografia;
    this.redSocial = redSocial;
  }
}