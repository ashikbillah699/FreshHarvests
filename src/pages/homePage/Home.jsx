import Login from '../authentication/Login';
import Register from '../authentication/Register';
import Banner from './Banner';
import FreshProducts from './FreshProducts';

const Home = () => {
    return (
        <div>
            <Register></Register>
            <Login></Login>
            <Banner></Banner>
            <FreshProducts></FreshProducts>

        </div>
    );
};

export default Home;