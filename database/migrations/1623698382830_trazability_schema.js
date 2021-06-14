'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TrazabilitySchema extends Schema {
  up () {
    this.create('trazabilities', (table) => {
      table.increments()
      table.boolean('alerted')
      table.integer('id_user').unsigned().references('id').inTable('users')
      table.integer('id_usercontact').unsigned().references('id').inTable('users') 
      table.timestamps()
    })
  }

  down () {
    this.drop('trazabilities')
  }
}

module.exports = TrazabilitySchema
