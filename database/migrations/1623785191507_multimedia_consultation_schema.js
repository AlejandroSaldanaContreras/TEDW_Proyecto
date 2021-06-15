'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MultimediaConsultationSchema extends Schema {
  up () {
    this.create('multimedia_consultations', (table) => {
      table.integer('id_consultation').notNullable().references('id').inTable('private_consultations')
      table.integer('id_multimedia').notNullable().references('id').inTable('multimedias')
      table.timestamps()
      table.primary('id_consultation','id_multimedia')
    })
  }

  down () {
    this.drop('multimedia_consultations')
  }
}

module.exports = MultimediaConsultationSchema
