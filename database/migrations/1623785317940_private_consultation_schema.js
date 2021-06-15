'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PrivateConsultationSchema extends Schema {
  up () {
    this.create('private_consultations', (table) => {
      table.increments()
      table.string('symptoms',200).notNullable()
      table.date('date').notNullable()
      table.datetime('hour').notNullable()
      table.integer('id_type_consultation').notNullable().references('id').inTable('type_consultations')
      table.integer('id_user').notNullable().references('id').inTable('users')
      table.timestamps()
    })
  }

  down () {
    this.drop('private_consultations')
  }
}

module.exports = PrivateConsultationSchema
