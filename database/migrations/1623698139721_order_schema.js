'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrderSchema extends Schema {
  up () {
    this.create('orders', (table) => {
      table.increments()
      table.String('result', 100).notNullable()
      table.integer('id_user').unsigned().references('id').inTable('users')
      table.integer('id_test_type').unsigned().references('id').inTable('test_types')
      table.timestamps()
    })
  }

  down () {
    this.drop('orders')
  }
}

module.exports = OrderSchema
