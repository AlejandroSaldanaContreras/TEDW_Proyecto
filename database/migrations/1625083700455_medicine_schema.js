'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MedicineSchema extends Schema {
  up () {
    this.table('medicines', (table) => {
      table.dropColumn('quantity')
      table.dropColumn('schedule')
    })
  }

  down () {
    this.table('medicines', (table) => {
      // reverse alternations
    })
  }
}

module.exports = MedicineSchema
