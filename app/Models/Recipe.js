'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Recipe extends Model {
    user () {
        return this.hasOne('App/Models/User')
    }

    consultation () {
        return this.hasOne('App/Models/PrivateConsultation')
    }

    medicines () {
        return this.hasMany('App/Models/Medicine')
    }
}

module.exports = Recipe
