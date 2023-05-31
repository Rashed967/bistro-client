import { Link } from "react-router-dom";
import Cover from "../../../../shared/Cover/Cover";
import MenuItem from "../../../../shared/MenuItem/MenuItem";

const MenuCategory = ({items, title, coverImg}) => {
    return (
        <div className="mt-11">
        {title && <Cover img={coverImg} title={title}></Cover>}
        <div className="grid md:grid-cols-2 gap-10 mt-12">
           {
                items.map(item => <MenuItem
                key={item._id}
                item={item}
                ></MenuItem>)
            }
           </div>
           <Link to={`/order/${title}`}>
           <button className="btn btn-outline border-0 border-b-4">Order now</button>
           </Link>
        </div>
    );
};

export default MenuCategory;