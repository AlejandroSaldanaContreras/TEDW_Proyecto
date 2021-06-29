'use strict'

const User = use('App/Models/User');

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
}

module.exports = UserController
