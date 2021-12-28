import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})

export class ListarcontactosService {

  constructor(private angularFirestore : AngularFirestore) { }

  /* En el método se indica el tipo de objeto - tipo_contacto - que se obtendrá de la base de datos */
  listaContactos<de_tipo_contacto>(limite_fecha:Date){

    return this.angularFirestore
               .collection<de_tipo_contacto>("contactos",
                            consulta => consulta.where("fechaCreacion", ">=", limite_fecha)
                                                .limit(200)
                                                .orderBy("fechaCreacion","desc"))
               .valueChanges();

  }

}
