'use strict'
 const Medicine=use('App/Models/Medicine');

class MedicineController {
async index(){
    return await Medicine.all();
}

async create({request}){
    const {name}=request.all();
    const _medicine=new Medicine();
    _medicine.fill({
        name,
    });
    await _medicine.save();
    return _medicine;
}

async update({ request, params }){
    const {id} = params;
    const medicine = await Medicine.find(id);
    medicine.merge(request.all(['name']));
    await medicine.save();
    return medicine;
}

async destroy ({ params }) {
    const{ id } = params
    const medicine = await Medicine.find(id)
    await medicine.delete();
    return medicine;
}
async  getMedicineById({ params }) {
    const{ id } = params
    const medicine = await Medicine.find(id)
    return medicine;
}
}

module.exports = MedicineController
