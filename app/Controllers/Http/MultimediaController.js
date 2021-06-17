'use strict'
const Multimedia=use('App/Models/Multimedia');

class MultimediaController {
    async index(){
        return await Multimedia.all();
    }

    async create({request}){
        const {multimedia}=request.all();
        const _multimedia=new Multimedia();
        _multimedia.fill({
            multimedia,
        });
        await _multimedia.save();
        return _multimedia();
    }

    async update({ request, params }){
        const {id} = params;
        const multimedia = await Multimedia.find(id);
        multimedia.merge(request.only(['multimedia']));
        await multimedia.save();
        return multimedia;
    }
    async destroy ({ params }) {
        const{ id } = params
        const multimedia = await Multimedia.find(id)
        await multimedia.delete();
        return multimedia;
    }
}

module.exports = MultimediaController
