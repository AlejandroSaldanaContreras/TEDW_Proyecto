'use strict'
const Recipe=use('App/Models/Recipe');
class RecipeController {
    async index(){
        return await Recipe.all();
    }
    
    async create({request}){
        const {recipe,id_user,id_consultation,id_medicine}=request.all();
        const _recipe=new Recipe();
        _recipe.fill({
            recipe,
            id_user,
            id_consultation,
            id_medicine,
        });
        await _recipe.save();
        return _recipe();
    }
    
    async update({ request, params }){
        const {id} = params;
        const recipe = await Recipe.find(id);
        recipe.merge(request.all(['recipe'], ['id_user']['id_consultation']['id_medicine']));
        await recipe.save();
        return recipe;
    }
    
    async destroy ({ params }) {
        const{ id } = params
        const recipe = await Recipe.find(id)
        await recipe.delete();
        return recipe;
    }
}

module.exports = RecipeController
