const MenuItem = ({name, desc, price, imgSrc, imgAlt}) => {

    return (
        
        <article className="col-xl-4 col-lg-6 col-md-12 mx-sm-0">
            <div className="menu-item">
                <div className="img-box">
                    <img src={imgSrc} alt={imgAlt} />
                </div>
                <div className="text-box">
                    <h3 className="item-name">{name}</h3>
                    <p className="desc">{desc}</p>
                    <p className="price">{`$${price.toString()}`}</p>
                </div>
            </div>
        </article>
    )
}

export default MenuItem;