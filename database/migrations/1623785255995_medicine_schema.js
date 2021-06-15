'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MedicineSchema extends Schema {
  up () {
    this.create('medicines', (table) => {
      table.increments()
      table.integer('quantity').unsigned().notNullable()
      table.integer('schedule').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('medicines')
  }
}

module.exports = MedicineSchema
