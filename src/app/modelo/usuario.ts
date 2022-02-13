export class Usuario {

  id! :number;
  username :String;
  password : String;
  fullname : String;

  constructor( username: String,  password:String,   fullname : String ){
this.username=username;
this.fullname=fullname;
this.password=password;
  }
}
