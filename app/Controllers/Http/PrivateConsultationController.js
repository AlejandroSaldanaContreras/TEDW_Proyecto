'use strict'
const PrivateConsultation=use('App/Models/PrivateConsultation');
class PrivateConsultationController {

    async index(){
        return await PrivateConsultation.all();
    }
    
    async create({request}){
        const {symptoms,date,hour,id_type_consultation,id_user}=request.all();
        const _privateConsultation=new PrivateConsultation();
        _privateConsultation.fill({
            symptoms,
            date,
            hour,
            id_type_consultation,
            id_user,
        });
        await _privateConsultation.save();
        return _privateConsultation();
    }
    
    async update({ request, params }){
        const {id} = params;
        const privateConsultation = await PrivateConsultation.find(id);
        privateConsultation.merge(request.all(['symptoms'], ['date'],['hour'],['id_type_consultation'],['id_user']));
        await privateConsultation.save();
        return privateConsultation;
    }
    
    async destroy ({ params }) {
        const{ id } = params
        const privateConsultation = await privateConsultation.find(id)
        await privateConsultation.delete();
        return privateConsultation;
    }
}

module.exports = PrivateConsultationController
