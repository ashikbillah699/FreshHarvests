import { FaLeaf } from 'react-icons/fa';
import leaf from '../../assets/leaf.png';
import aboutImg from '../../assets/about_img.png';
import musromImg from '../../assets/cardImg.JPG';

const About = () => {
    return (
       <div id='about' className=' max-w-[1200px] w-full mx-auto flex flex-col items-center md:flex-row mb-16'>
            <div className='w-full md:w-1/2 relative'>
                <div className='absolute right-10 top-10'>
                    <img src={leaf} alt=""  className='w-16'/>
                </div>
                <div>
                    <img src={aboutImg} alt=""  className='rounded-b-full'/>
                </div>
                <div className='absolute -bottom-8 md:-bottom-5 right-8 md:right-16'>
                    <img src={musromImg} alt="" className='w-28 md:w-40 rounded-lg'/>
                </div>
                <div className='absolute bottom-32 md:bottom-52 right-10 md:right-36'>
                    <FaLeaf className='w-36 rounded-lg'/>
                </div>
            </div>
            <div className='w-full p-4 md:p-14 md:w-1/2 space-y-4'>
                <span className='bg-green-100 text-[#749b3f] px-2 py-1 rounded-md font-semibold'>About Us</span>
                <h1 className="text-2xl md:text-5xl font-bold mt-4">About Fresh Harvest</h1>
                <p className=''>Welcome to Fresh Harvest, your premier destination for high-quality and fresh produce. We are passionate about providing you with the finest fruits, vegetables, and salad ingredients to nourish your body and delight your taste buds. With a commitment to excellence, sustainability, and customer satisfaction, Fresh Harvest is here to revolutionize your grocery shopping experience.</p>

                <button className='btn bg-white border-[#ff6900] text-[#ff6900] hover:bg-[#ff6900] hover:text-white transition duration-500'>Read More</button>
            </div>
        </div>
    );
};

export default About;