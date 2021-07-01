'use strict'

const Order = use('App/Models/Order');
const Database = use("Database");

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

    async dataTableOrder() {
        return await Database.from("test_types as t").innerJoin(
            "orders as o",
            "o.id_test_type",
            "t.id"
        ).innerJoin(
          "users as u",
          "o.id_user",
          "u.id"
        )
      }
}

module.exports = OrderController
