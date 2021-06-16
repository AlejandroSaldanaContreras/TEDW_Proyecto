'use strict'

const Rol = use('App/Models/Rol');


class RolController {
    async create({ request }){
        const{rol} = request.all();
        const _rol = new Rol();
        _rol.fill({
            rol,
        });
        await _rol.save();
        return _rol;
    }

    async index () {
        return await Rol.all()
    }
}

module.exports = RolController
