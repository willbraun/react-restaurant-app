import DATA from './../data.js'
import MenuItem from "./MenuItem";

const MenuList = () => {

    const items = DATA.map(entry => <MenuItem key={entry.id} {...entry}/>)

    return (
        <section className="row menu-list">
            {items}
        </section>
    )
}

export default MenuList;