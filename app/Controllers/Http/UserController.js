'use strict'

const User = use('App/Models/User');
const Database = use("Database");
class UserController {
    async register({ request }){
        const{email, password, name, department, id_rol, id_status} = request.all();
        const user = await User.create({
            email,
            password,
            username: email, 
            name, 
            department,
            id_rol,
            id_status
        });
        return this.login(...arguments);
    }

    async login({ request, auth }){
        const{email, password} = request.all();
        const token = await auth.attempt(email, password);
        return token;
    }

    async index(){
        return await User.all()
    }

    async get_user({ request }){
        const { username } = request.all();
        return await User.findBy('username', username);
    }
    async get_user_by_id({params}){
         const{ id } = params;
         const user = await User.findBy('id',id)
         return user;
    }
    async getMedicos(){
        return await Database.from("users as u").innerJoin(
            "rols as r",
            "r.id",
            "u.id_rol"
        ).where("rol","=","Medico")
    }
    async getPersonal(){
        return await Database.from("users as u").innerJoin(
            "rols as r","r.id","u.id_rol"
        ).whereIn("r.rol",['Personal','Estudiante'])
    }
}

module.exports = UserController
