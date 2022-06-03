import trashCanIcon from './../images/trash-solid.svg';

const OrderItem = ({name, desc, price, imgSrc, imgAlt, addItem}) => {
    console.log(trashCanIcon)
    return (
        <article className="order-item">
            <div className="img-box-order">
                <img src={imgSrc} alt={imgAlt} />
            </div>
            <div>
                <p>{name}</p>
                <p>{`$${price}`}</p>
            </div>
            <button className="trash-can" type="button">
                <img src={trashCanIcon} alt="trash can icon" />
            </button>
        </article>
    )
}

export default OrderItem;