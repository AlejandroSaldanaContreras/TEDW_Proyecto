'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RecipeSchema extends Schema {
  up () {
    this.alter('recipes', (table) => {
      table.dropColumn('id_user')
    })
  }

  down () {
    this.table('recipes', (table) => {
      // reverse alternations
    })
  }
}

module.exports = RecipeSchema
