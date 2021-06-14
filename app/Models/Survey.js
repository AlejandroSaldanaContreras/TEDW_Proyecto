'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Survey extends Model {
    modality () {
        return this.hasOne('App/Models/SurveyModality')
    }

    questions () {
        return this.hasMany('App/Models/Questions')
    }
}

module.exports = Survey
