'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Question extends Model {
    surveys () {
        return this.belongsToMany('App/Models/Survey')
    }
}

module.exports = Question
