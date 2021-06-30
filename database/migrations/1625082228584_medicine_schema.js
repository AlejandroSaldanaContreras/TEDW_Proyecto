'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MedicineSchema extends Schema {
  up () {
    this.alter('medicines', (table) => {
      table.string('name', 100)
    })
  }

  down () {
    this.table('medicines', (table) => {
      // reverse alternations
    })
  }
}

module.exports = MedicineSchema
