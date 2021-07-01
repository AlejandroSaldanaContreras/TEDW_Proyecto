'use strict'
const Survey = use('App/Models/Survey');
const Database = use("Database");

class SurveyController {
    async create({ request }){
        const{id_user, id_modality, date} = request.all();
        const _survey = new Survey();
        _survey.fill({
            id_user,
            id_modality,
            date,
        });
        await _survey.save();
        return _survey;
    }

    async index () {
        return await Survey.all()
    }

    async destroy ({ params }) {
        const{ id } = params
        const survey = await Survey.find(id)
        await survey.delete();
        return survey;
    }

    async update({ request, params }){
        const {id} = params;
        const survey = await Survey.find(id);
        survey.merge(request.only(['id_user', 'id_modality', 'date']));
        await survey.save();
        return survey;
    }

    async dataTableSurvey() {
        return await Database.from("surveys as s").innerJoin(
            "survey_modalities as m",
            "s.id_modality",
            "m.id"
        ).innerJoin(
          "users as u",
          "s.id_user",
          "u.id"
        )
      }
}

module.exports = SurveyController
