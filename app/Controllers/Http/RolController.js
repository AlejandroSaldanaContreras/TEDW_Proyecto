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

    async destroy ({ params }) {
        const{ id } = params
        const rol = await Rol.find(id)
        await rol.delete();
        return rol;
    }

    async update({ request, params }){
        const {id} = params;
        const rol = await Rol.find(id);
        rol.merge(request.only(['rol']));
        await rol.save();
        return rol;
    }

}

module.exports = RolController
