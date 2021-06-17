'use strict'

const Order = use('App/Models/Order');

class OrderController {
    async index () {
        return await Order.all();
    }

    async create ({ request }) {
        const{ id_user, id_test_type, result } = request.all()
        const order = new Order();
        order.fill({
            id_test_type,
            result,
            id_user,
        });

        await order.save();
        return order;
    }

    async destroy ({ params }) {
        const{ id } = params
        const order = await Order.find(id)
        await order.delete();
        return order;
    }

    async update({ request, params }){
        const {id} = params;
        const order = await Order.find(id);
        order.merge(request.all(['id_test_type'], ['result'], ['id_user']));
        await order.save();
        return order;
    }
}

module.exports = OrderController
