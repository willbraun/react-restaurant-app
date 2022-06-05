const MenuItem = ({name, desc, price, imgSrc, imgAlt, addItem}) => {

    return (
        <article className="menu-item">
            <div className="img-box">
                <img src={imgSrc} alt={imgAlt} />
            </div>
            <div className="content-box">
                <h3 className="item-name">{name}</h3>
                <p className="desc">{desc}</p>
                <div className="bottom">
                    <p className="price">{`$${price.toString()}`}</p>
                    <button type="button" className="btn btn-primary" onClick={() => addItem({name, desc, price, imgSrc, imgAlt})}>+ Add</button>
                </div>
            </div>
            
        </article>
    )
}

export default MenuItem;