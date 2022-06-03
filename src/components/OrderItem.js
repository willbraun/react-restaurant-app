const OrderItem = ({name, desc, price, imgSrc, imgAlt, addItem}) => {

    console.log(imgSrc);
    return (
        <article className="order-item">
            <div className="img-box-order">
                <img src={imgSrc} alt={imgAlt} />
            </div>
            <div>
                <p>{name}</p>
                <p>{price}</p>
            </div>
            <div>
                Icon
            </div>
        </article>
    )
}

export default OrderItem;