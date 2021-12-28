import { Component, OnInit, Input } from '@angular/core';
import { Contacto } from 'src/app/interfaces/contacto';


@Component({
  selector: 'detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})

export class DetalleComponent implements OnInit {

  @Input() contacto:Contacto;

  constructor() {
  }

  ngOnInit():void {
  }


}
