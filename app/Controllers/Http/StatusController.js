'use strict'

const Status = use('App/Models/Status');

class StatusController {
    async create ({ request }) {
        const{ status } = request.all()
        const _status = new Status();
        _status.fill({
            status,
        });

        await _status.save();
        return _status;
    }

    async index () {
        return await Status.all();
    }

    async destroy ({ params }) {
        const{ id } = params
        const status = await Status.find(id)
        await status.delete();
        return status;
    }

    async update({ request, params }){
        const {id} = params;
        const status = await Status.find(id);
        status.merge(request.only(['status']));
        await status.save();
        return status;
    }
}

module.exports = StatusController
