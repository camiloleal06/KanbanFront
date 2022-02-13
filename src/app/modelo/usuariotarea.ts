export class Usuariotarea {
   id?: number;
	 title : string;
	 description : string;
   user_id : number;
   fullname : string ;

constructor(title:string ,description : string,  user_id : number, fullname : string){
this.fullname=fullname;
this.title=title;
this.description=description;
this.user_id=user_id;
}

}
