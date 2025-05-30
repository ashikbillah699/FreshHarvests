import Login from '../authentication/Login';
import Register from '../authentication/Register';
import About from './About';
import Banner from './Banner';
import Blog from './Blog';
import FreshProducts from './FreshProducts';
import SpecialOffer from './SpecialOffer';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Register></Register>
            <Login></Login>
            <Banner></Banner>
            <FreshProducts></FreshProducts>
            <About></About>
            <SpecialOffer></SpecialOffer>
            <Testimonial></Testimonial>
            <Blog></Blog>
        </div>
    );
};

export default Home;