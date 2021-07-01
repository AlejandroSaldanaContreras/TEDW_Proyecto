'use strict'
const PrivateConsultation=use('App/Models/PrivateConsultation');
const Database = use("Database");
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
        return _privateConsultation;
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
    async selectByUser({params}){
        const{ id } = params
        return await PrivateConsultation.query('select * from private_consultation').where('id_user','=',id)
        .fetch();
    }

    async dataTableConsultation() {
        return await Database.from("users as u").innerJoin(
            "private_consultations as p",
            "p.id_user",
            "u.id"
        ).innerJoin(
          "type_consultations as t",
          "p.id_type_consultation",
          "t.id"
        )
      }
}

module.exports = PrivateConsultationController
