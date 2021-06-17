'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class SurveyQuestion extends Model {
    survey() {
        return this.hasOne('App/Models/Survey')
    }

    question() {
        return this.hasOne('App/Models/Question')
    }
}

module.exports = SurveyQuestion
