'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RecipeSchema extends Schema {
  up () {
    this.create('recipes', (table) => {
      table.increments()
      table.string('recipe').notNullable()
      table.integer('id_user').notNullable().references('id').inTable('users')
      table.integer('id_consultation').notNullable().references('id').inTable('private_Consultations')
      table.integer('id_medicine').notNullable().references('id').inTable('medicines')
      table.timestamps()
    })
  }

  down () {
    this.drop('recipes')
  }
}

module.exports = RecipeSchema
