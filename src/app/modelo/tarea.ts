export class Tarea {
id!:number;
title : string;
fullname :string;
description : string;
user_id : number;
constructor(id:number, title : string, description : string, fullname : string, user_id : number){
  this.id=id;
  this.description=description;
  this.title=title;
  this.fullname = fullname;
  this.user_id=user_id;

}


}
