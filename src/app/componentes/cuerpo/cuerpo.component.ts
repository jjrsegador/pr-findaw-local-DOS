import { Component, OnInit } from '@angular/core';
import { Contacto } from '../../interfaces/contacto';
import { ListarcontactosService } from 'src/app/servicios/listarcontactos.service';


@Component({
  selector: 'cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})

export class CuerpoComponent implements OnInit {

    /* Array de contactos */
    coleccionContactos : Contacto[] = [];
    contactoSeleccionado : Contacto;



    /* Para cálculo de la fecha límite sobre la que se obtendrán los resultados. Se obtendrán los últimos 30 días */
    fecha_actual = new Date();
    limite_fecha : Date;


    constructor (private listarcontactosService : ListarcontactosService) {
    }


    ngOnInit() {
      /* Obtenemos fecha límite de fecha para la consulta a través del método sumarDiasn */
      this.limite_fecha = this.sumarDias(this.fecha_actual, -30)

      /* Obtenemos lista de contactos*/
      this.listar_contactos()
    }

    /* Método para obtención de fecha resultante al sumar o restar días */
    sumarDias(fecha_recibida:Date, dias:number) :Date {
      fecha_recibida.setDate(fecha_recibida.getDate() + dias);
      return fecha_recibida;
    }

    /* Método para obtención de la lista de contactos de Firebase */
    listar_contactos(){

        this.listarcontactosService.listaContactos<Contacto>(this.limite_fecha).subscribe( respuesta => {

              /* Para poder mover la info respuesta a nuestra colección icontacto[] será necesario informar el tipo de objeto <Contactos> */
              /* al consumir la función lista_contactos para indicarle el tipo de información que se va a obtener de la base de datos.*/
              this.coleccionContactos = respuesta;

        });


    }

    /* Emitimos la información del contacto seleccionado */
    contactoDetalle(icontacto:Contacto){

        this.contactoSeleccionado=icontacto;


    }
}
