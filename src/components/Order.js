import OrderItem from './OrderItem';

const Order = ({state}) => {

    const orders = state.selection.map(order => <OrderItem key={order.id} {...order}/>);

    return (
        <section className="order">
            {orders}
        </section>
    )
}

export default Order;