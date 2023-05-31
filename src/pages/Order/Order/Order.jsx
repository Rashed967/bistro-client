import { Helmet } from "react-helmet-async";
import orderImg from '../../../assets/shop/banner2.jpg'
import Cover from "../../shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../../hooks/UseMenu";
import OrderTabs from "../OrderTabs/OrderTabs";
import { useParams } from "react-router-dom";


const Order = () => {
    const categories = [ "salad", "pizza",   "soup", "dessert",  "drinks"]
    const {category} = useParams()
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex)
    const [menu] = useMenu()
    const deserts = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    // const offered = menu.filter(item => item.category === 'offered')
    const drinks = menu.filter(item => item.category === 'drinks')
    return (
        <div>
            <Helmet>
                <title>Bistro | Order</title>
            </Helmet>
            <Cover title="Order page" img={orderImg}></Cover>

            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTabs items={salad}></OrderTabs>
                </TabPanel>
                <TabPanel>
                    <OrderTabs items={pizza}></OrderTabs>
                </TabPanel>
                <TabPanel>
                    <OrderTabs items={soup}></OrderTabs>
                </TabPanel>
                <TabPanel>
                    <OrderTabs items={deserts}></OrderTabs>
                </TabPanel>
                <TabPanel>
                    <OrderTabs items={drinks}></OrderTabs>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default Order;