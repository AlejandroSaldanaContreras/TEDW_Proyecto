'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MultimediaSchema extends Schema {
  up () {
    this.create('multimedias', (table) => {
      table.increments()
      table.string('multimedia',50).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('multimedias')
  }
}

module.exports = MultimediaSchema
