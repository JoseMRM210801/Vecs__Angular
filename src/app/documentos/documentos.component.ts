import { Component } from '@angular/core';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css']
})
export class DocumentosComponent {
  abrirArchivo() {
    const urlArchivo = '../../assets/archivos/Pago.jpg'; // Reemplaza con la URL real del archivo
    window.open(urlArchivo, '_blank');
  }
  abrirArchivo2() {
    const urlArchivo = '../../assets/archivos/catalogo.pdf'; // Reemplaza con la URL real del archivo
    window.open(urlArchivo, '_blank');
  }
  abrirArchivo3() {
    const urlArchivo = '../../assets/archivos/formato.pdf';
     // Reemplaza con la URL real del archivo
    window.open(urlArchivo, '_blank');
  }
}
