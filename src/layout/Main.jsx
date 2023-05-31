import { Outlet, useLocation } from 'react-router-dom';
import NavBar from '../pages/shared/NavBar/NavBar'
import Footer from '../pages/shared/Footer/Footer'

const Main = () => {
    const location = useLocation()
    const pathName = location.pathname.includes(`login`) || location.pathname.includes(`signup`)
    console.log(pathName)
    return (
        <div>

        {pathName || <NavBar></NavBar>}
        <Outlet></Outlet>
        {pathName || <Footer />}
            
        </div>
    );
};

export default Main;