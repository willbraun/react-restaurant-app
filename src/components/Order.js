import OrderItem from './OrderItem';

const Order = ({state}) => {

    const orders = state.selection.map(order => <OrderItem key={order.id} {...order}/>);
    const total = state.selection.reduce((acc, i) => acc + i.price, 0).toFixed(2);

    return (
        <section className="order">
            {orders}
            <button className="checkout" type="button">
                <div>Checkout</div>
                <div>{`$${total}`}</div>
            </button>
        </section>
    )
}

export default Order;