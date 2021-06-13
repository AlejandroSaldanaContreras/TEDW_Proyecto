'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SurveyModalitySchema extends Schema {
  up () {
    this.create('survey_modalities', (table) => {
      table.increments()
      table.string('modality', 50).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('survey_modalities')
  }
}

module.exports = SurveyModalitySchema
