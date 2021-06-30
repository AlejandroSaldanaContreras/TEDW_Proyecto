'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SurveyQuestionSchema extends Schema {
  up () {
    this.alter('survey_questions', (table) => {
      table.string('answer', 200).notNullable()
    })
  }

  down () {
    this.table('survey_questions', (table) => {
      // reverse alternations
    })
  }
}

module.exports = SurveyQuestionSchema
