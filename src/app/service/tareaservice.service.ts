import { creaTarea } from './../modelo/creaTarea';
import { Observable } from 'rxjs';
import { Tarea } from './../modelo/tarea';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareaserviceService {

  constructor(private http : HttpClient) { }
  URL : string = 'http://localhost:8080/kanban/api/';
/*  username= 'camiloleal';
  password='T3CN02020+-+';*/

  public saveTarea(tarea: creaTarea): Observable<any> {
   /// const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
   // return this.http.post<any>(this.URL + 'tarea', tarea,{headers});
   return this.http.post<any>(this.URL + 'tarea',tarea);
  }

  public listaTareas() : Observable<Tarea[]>{
   /* const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
    return this.http.get<Tarea[]>(this.URL+'tareas/',{headers});*/
    return this.http.get<Tarea[]>(this.URL+'tareas/');
  }

  public deleteTarea(id: number): Observable<any> {
   /* const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
    return this.http.delete<any>(this.URL + `tarea/${id}`,{headers});*/
    return this.http.delete<any>(this.URL + `tarea/${id}`);
  }

}
