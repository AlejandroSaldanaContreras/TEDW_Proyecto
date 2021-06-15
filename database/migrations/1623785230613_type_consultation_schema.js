'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TypeConsultationSchema extends Schema {
  up () {
    this.create('type_consultations', (table) => {
      table.increments()
      table.string('type_consultation',100)
      table.timestamps()
    })
  }

  down () {
    this.drop('type_consultations')
  }
}

module.exports = TypeConsultationSchema
