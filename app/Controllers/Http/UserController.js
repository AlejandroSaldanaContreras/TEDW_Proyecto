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

    async login({ rquest, auth }){
        const{email, password} = reques.all();
        const token = await auth.attempt(email, password);
        return token;
    }
}

module.exports = UserController
