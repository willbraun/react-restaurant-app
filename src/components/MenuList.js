import DATA from './../data.js'
import MenuItem from "./MenuItem";

const MenuList = ({addItem}) => {

    const items = DATA.map(entry => <MenuItem key={entry.id} {...entry} addItem={addItem}/>)

    return (
        <section className="menu-list">
            {items}
        </section>
    )
}

export default MenuList;