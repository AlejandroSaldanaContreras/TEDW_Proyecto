'use strict'

const Test = use('App/Models/TestType');

class TestTypeController {
    async index () {
        return await Test.all();
    }

    async create ({ request }) {
        const{ test_type } = request.all()
        const _test_type = new Test();
        _test_type.fill({
            test_type,
        });

        await _test_type.save();
        return _test_type;
    }

    async destroy ({ params }) {
        const{ id } = params
        const test_type = await Test.find(id)
        await test_type.delete();
        return test_type;
    }

    async update({ request, params }){
        const {id} = params;
        const test_type = await Test.find(id);
        test_type.merge(request.only(['test_type']));
        await test_type.save();
        return test_type;
    }
}

module.exports = TestTypeController
