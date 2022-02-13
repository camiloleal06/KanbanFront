import { Usuariotarea } from './../modelo/usuariotarea';
import { Usuario } from './../modelo/usuario';
import { Message} from './../modelo/message';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UsuarioserviceService {
URL = environment.URL;
  constructor(private http : HttpClient) { }
   /* username= 'camiloleal';
  password='T3CN02020+-+';
   public login(username:string,password:string){
  const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
  return this.http.get(this.URL+'login/',{headers,responseType: 'text' as 'json'})
}
*/
  public listaUsuarios() : Observable<Usuario[]>{
   /* const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
    return this.http.get<Usuario[]>(this.URL+'usuarios',{headers});*/
    return this.http.get<Usuario[]>(this.URL+'usuarios');
  }

  public UsuariobyId(id : number) : Observable<Usuario>{
   /* const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
    return this.http.get<Usuario>(this.URL+`usuario/${id}`,{headers});*/
    return this.http.get<Usuario>(this.URL+`usuario/${id}`);
  }

  public saveUsuario(usuario: Usuario): Observable<any> {
  /*  const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
    return this.http.post<any>(this.URL + 'usuario', usuario,{headers});*/
    return this.http.post<any>(this.URL + 'usuario', usuario);
  }

  public listaUsuariosTareas(user_id : any) : Observable<Usuariotarea[]>{
  /*  const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
    return this.http.get<Usuariotarea[]>(this.URL+`usuariotareas/${user_id}`,{headers});*/
    return this.http.get<Usuariotarea[]>(this.URL+`usuariotareas/${user_id}`);
  }

  public delete(id: number): Observable<any> {
   /* const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
    return this.http.delete<any>(this.URL + `usuario/${id}`,{headers});*/
    return this.http.delete<any>(this.URL + `usuario/${id}`);
  }




}
