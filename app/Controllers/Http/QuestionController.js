'use strict'
const Question = use('App/Models/Question');

class QuestionController {
    async create({ request }){
        const{question} = request.all();
        const _question = new Question();
        _question.fill({
            question,
        });
        await _question.save();
        return _question;
    }

    async index () {
        return await Question.all()
    }

    async destroy ({ params }) {
        const{ id } = params
        const question = await Question.find(id)
        await question.delete();
        return question;
    }

    async update({ request, params }){
        const {id} = params;
        const question = await Question.find(id);
        question.merge(request.only(['question']));
        await question.save();
        return question;
    }
}

module.exports = QuestionController
