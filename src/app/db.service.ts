import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { BookInterface } from '../app/models/book-interface';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class DbService {

  db : SQLiteObject = null;
  sitios: Observable<any>;
  sitio: Observable<any>;
  constructor(public sqlite: SQLite) {
    console.log('Hello Db Provider');
  }
  /*
  public selectedBook: BookInterface = {
    id: null,
    lat: '',
    lng: '',
    descripcion: '',
    foto: ''
  };

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    //Authorization: this.authService.getToken()
  });
*/
  public openDb(){
    return this.sqlite.create({
        name: 'data.db',
        location: 'default' // el campo location es obligatorio
    })
    .then((db: SQLiteObject) => {
      this.db =db;
    })
    .catch(error =>{
      console.error(error);
    });
}

public createTableSitios(){
  return this.db.executeSql("create table if not exists sitios( id INTEGER PRIMARY KEY AUTOINCREMENT, lat FLOAT, lng FLOAT, description TEXT, foto TEXT )",[])
}

public addSitio(sitio){
  let sql = "INSERT INTO sitios (lat, lng, description, foto) values (?,?,?,?)";
  return this.db.executeSql(sql,[sitio.lat,sitio.lng,sitio.description,sitio.foto]);
}

public getSitios(){
  let sql = "SELECT * FROM sitios";
  return this.db.executeSql(sql,[]);
}
/*
  saveBook(book: BookInterface) {
    // TODO: obtener token
    // TODO: not null
    //const token = this.authService.getToken();
    const url_api = `mongodb+srv://root:pruebaproy123@cluster0-rkof1.mongodb.net/test?retryWrites=true&w=majority`;
    return this.http
      .post<BookInterface>(url_api, book, { headers: this.headers })
      .pipe(map(data => data));
  }
*/


}
