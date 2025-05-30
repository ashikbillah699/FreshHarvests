import Login from '../authentication/Login';
import Register from '../authentication/Register';
import About from './About';
import Banner from './Banner';
import FreshProducts from './FreshProducts';
import SpecialOffer from './SpecialOffer';

const Home = () => {
    return (
        <div>
            <Register></Register>
            <Login></Login>
            <Banner></Banner>
            <FreshProducts></FreshProducts>
            <About></About>
            <SpecialOffer></SpecialOffer>

        </div>
    );
};

export default Home;