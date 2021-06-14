'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Trazability extends Model {
    users_contact () {
        return this.hasMany('App/Models/Users')
    }
}

module.exports = Trazability
