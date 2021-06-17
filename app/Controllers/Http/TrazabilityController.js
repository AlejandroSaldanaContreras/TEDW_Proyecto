'use strict'

const Trazability = use('App/Models/Trazability');

class TrazabilityController {
    async index () {
        return await Trazability.all();
    }

    async create ({ request }) {
        const{ id_user, id_usercontact, alerted } = request.all()
        const trazability = new Trazability();
        trazability.fill({
            id_usercontact,
            alerted,
            id_user,
        });

        await trazability.save();
        return trazability;
    }

    async destroy ({ params }) {
        const{ id } = params
        const trazability = await Trazability.find(id)
        await trazability.delete();
        return trazability;
    }

    async update({ request, params }){
        const {id} = params;
        const trazability = await Trazability.find(id);
        trazability.merge(request.all(['id_user'], ['id_usercontact'], ['alerted']));
        await trazability.save();
        return trazability;
    }
}

module.exports = TrazabilityController
