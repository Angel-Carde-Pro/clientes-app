import { Component } from "@angular/core";

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html'
})

export class FooterComponent {
    // Los atributos de tipo any son genéricos, es decir que puede tomar cualquier valor. 
    // Así el objeto no esta asociado a un tipo de una clase en particular
    autor: any = { nombre: 'Angel', apellido: 'Cárdenas' }
}