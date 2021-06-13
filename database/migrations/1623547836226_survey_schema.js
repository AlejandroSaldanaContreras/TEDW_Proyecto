'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SurveySchema extends Schema {
  up () {
    this.create('surveys', (table) => {
      table.increments()
      table.integer('id_user').unsigned().references('id').inTable('users')
      table.integer('id_modality').unsigned().references('id').inTable('survey_modalities')
      table.date().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('surveys')
  }
}

module.exports = SurveySchema
