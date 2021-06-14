'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TestTypeSchema extends Schema {
  up () {
    this.create('test_types', (table) => {
      table.increments()
      table.String('test_type', 200).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('test_types')
  }
}

module.exports = TestTypeSchema
