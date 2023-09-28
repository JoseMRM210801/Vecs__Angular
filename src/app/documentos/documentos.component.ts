import { Component, OnInit } from '@angular/core';
import { Vecs } from '../interface/vecs';
import { VecsService } from '../service/vecs.service';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css']
})
export class DocumentosComponent implements OnInit {
  listadoVecs: Vecs[] = [];
  constructor(private _vecsservice: VecsService) {
  }

  ngOnInit(): void {
    this.getVecs();
  }
  convertBinaryToUrl(binaryValue: string): string | null {
    if (binaryValue === 'null' || binaryValue === "bnVsbA==") {
      return null;
    }
    const binaryData = atob(binaryValue);
    const bytes = new Uint8Array(binaryData.length);
    for (let i = 0; i < binaryData.length; i++) {
      bytes[i] = binaryData.charCodeAt(i);
    }
    const blob = new Blob([bytes], { type: 'application/pdf' });
    return URL.createObjectURL(blob);
  }

  getVecs() {
    this._vecsservice.getListDocumentos().subscribe(data => {
      this.listadoVecs = data;
    });
  }
}
