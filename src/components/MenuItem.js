const MenuItem = ({name, desc, price, imgFileName, imgAlt}) => {
    console.log(`./../images/${imgFileName}`)
    return (
        
        <article className="col menu-item">
            <img src={`./../images/${imgFileName}`} alt={imgAlt} />
            <h3>{name}</h3>
            <p>{desc}</p>
            <p>{`$${price.toString()}`}</p>
        </article>
    )
}

export default MenuItem;