'use strict'
const TypeConsultation=use('App/Models/TypeConsultation');
class TypeConsultationController {

    async index(){
        return await TypeConsultation.all();
    }
    
    async create({request}){
        const {type_consultation}=request.all();
        const _typeConsultation=new TypeConsultation();
        _typeConsultation.fill({
            type_consultation,
        });
        await _typeConsultation.save();
        return _typeConsultation();
    }
    
    async update({ request, params }){
        const {id} = params;
        const typeConsultation = await TypeConsultation.find(id);
        typeConsultation.merge(request.only(['type_consultation']));
        await typeConsultation.save();
        return typeConsultation;
    }
    
    async destroy ({ params }) {
        const{ id } = params
        const typeConsultation = await TypeConsultation.find(id)
        await typeConsultation.delete();
        return typeConsultation;
    }
}

module.exports = TypeConsultationController
