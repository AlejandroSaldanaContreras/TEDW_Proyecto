'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SurveyQuestionSchema extends Schema {
  up () {
    this.create('survey_questions', (table) => {
      table.integer('id_survey').unsigned().references('id').inTable('surveys')
      table.integer('id_question').unsigned().references('id').inTable('questions')
      table.timestamps()
    })
  }

  down () {
    this.drop('survey_questions')
  }
}

module.exports = SurveyQuestionSchema
