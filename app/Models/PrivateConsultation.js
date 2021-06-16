'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class PrivateConsultation extends Model {
    type () {
        return this.hasOne('App/Models/TypeConsultation')
    }

    user () {
        return this.hasOne('APP/Models/User')
    }

    multimedia () {
        return this.hasMany('App/Models/Multimedia')
    }
}

module.exports = PrivateConsultation
