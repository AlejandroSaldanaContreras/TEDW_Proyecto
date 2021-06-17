'use strict'
const SurveyModality = use('App/Models/SurveyModality');

class SurveyModalityController {
    async create({ request }){
        const{modality} = request.all();
        const _surveyModality = new SurveyModality();
        _surveyModality.fill({
            modality,
        });
        await _surveyModality.save();
        return _surveyModality;
    }

    async index () {
        return await SurveyModality.all()
    }

    async destroy ({ params }) {
        const{ id } = params
        const surveyModality = await SurveyModality.find(id)
        await surveyModality.delete();
        return surveyModality;
    }

    async update({ request, params }){
        const {id} = params;
        const surveyModality = await SurveyModality.find(id);
        surveyModality.merge(request.only(['modality']));
        await surveyModality.save();
        return surveyModality;
    }
}

module.exports = SurveyModalityController
