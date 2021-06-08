'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlertSchema extends Schema {
  up () {
    this.create('alerts', (table) => {
      table.increments()
      table.string('email', 254).notNullable()
      table.string('alert', 250).notNullable()
      table.integer('id_user').unsigned().references('id').inTable('users')
      table.timestamps()
    })
  }

  down () {
    this.drop('alerts')
  }
}

module.exports = AlertSchema
