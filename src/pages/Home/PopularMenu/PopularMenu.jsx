
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/UseMenu";


const PopularMenu = () => {
    
    const [menu] = useMenu()
    const popularMenu = menu.filter(item => item.category === 'popular')
    // const [popularItem, setPopularItem] = useState([])
    // useEffect(() => {
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         const item = data.filter(menu => menu.category === "popular")
    //         setPopularItem(item)
    //     })
    // }, [])
    // console.log(popularItem)
    return (
        <section className="mb-10">
            <SectionTitle
            subHeading="From our menu"
            heading="Popular items"
            ></SectionTitle>
           <div className="grid md:grid-cols-2 gap-10">
           {
                popularMenu.map(item => <MenuItem 
                key={item._id}
                item={item}
                ></MenuItem>)
            }
           </div>
        </section>
    );
};

export default PopularMenu;