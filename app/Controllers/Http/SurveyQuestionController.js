'use strict'
const SurveyQuestion = use('App/Models/SurveyQuestion');

class SurveyQuestionController {
    async create({ request }){
        const{id_survey, id_question} = request.all();
        const _surveyq = new SurveyQuestion();
        _surveyq.fill({
            id_survey,
            id_question,
        });
        await _surveyq.save();
        return _surveyq;
    }

    async index () {
        return await SurveyQuestion.all()
    }

    async destroy ({ params }) {
        const{ id_survey, id_question } = params
        const surveyq = await SurveyQuestion.find(id_survey, id_question)
        await surveyq.delete();
        return surveyq;
    }

    async update({ request, params }){
        const {id_survey, id_question} = params;
        const surveyq = await SurveyQuestion.find(id_survey, id_question);
        surveyq.merge(request.only(['id_survey', 'id_question']));
        await surveyq.save();
        return surveyq;
    }
}

module.exports = SurveyQuestionController
