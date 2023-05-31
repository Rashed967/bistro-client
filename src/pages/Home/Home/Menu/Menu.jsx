import { Helmet } from 'react-helmet-async';
import Cover from '../../../shared/Cover/Cover';
import menuImg from '../../../../assets/menu/banner3.jpg'
import desertImg from '../../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../../assets/menu/soup-bg.jpg'
import useMenu from '../../../../hooks/UseMenu';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu()
    const deserts = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    const offered = menu.filter(item => item.category === 'offered')

    return (
        <div>

            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
           <Cover img={menuImg}></Cover>
            <SectionTitle subHeading={"Don't miss"} heading={"Today's offer"}></SectionTitle>
            <MenuCategory items={offered} ></MenuCategory>

            {/* deserts menu  */}
            <MenuCategory items={deserts} title="dessert" coverImg={desertImg}></MenuCategory>

            {/* pizza menu  */}
            <MenuCategory items={pizza} title="pizza" coverImg={pizzaImg}></MenuCategory>

            {/* salads menu  */}
            <MenuCategory items={salad} title="salad" coverImg={saladImg}></MenuCategory>

            {/* soup menu  */}
            <MenuCategory items={soup} title="soup" coverImg={soupImg}></MenuCategory>

        </div>
    );
};

export default Menu;