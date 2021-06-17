'use strict'

const Alert = use('App/Models/Alert');

class AlertController {

    async index () {
        return await Alert.all();
    }

    async create ({ request }) {
        const{ alert, email, id_user } = request.all()
        const _alert = new Alert();
        _alert.fill({
            alert,
            email,
            id_user,
        });

        await _alert.save();
        return _alert;
    }

    async destroy ({ params }) {
        const{ id } = params
        const alert = await Alert.find(id)
        await alert.delete();
        return alert;
    }

    async update({ request, params }){
        const {id} = params;
        const alert = await Alert.find(id);
        alert.merge(request.all(['email'], ['alert'], ['id_user']));
        await alert.save();
        return alert;
    }
}

module.exports = AlertController
