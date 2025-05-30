import { useState } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import testimonialA from '../../assets/Testimonial.jpg'
import testimonialb from '../../assets/testi3.jpg'
import testimonialc from '../../assets/testi4.jpg'

const testimonials = [
    {
        id: 1,
        name: "Jane Doe",
        role: "Professional chef",
        image: testimonialb,
        feedback:
            "I absolutely love Fresh Harvest! The quality of their produce is outstanding. It's always fresh, flavorful, and delicious. The convenience of ordering online and having it delivered to my doorstep saves me so much time. Fresh Harvest has become my go-to for all my fruit and vegetable needs.",
    },
    {
        id: 2,
        name: "John Smith",
        role: "Nutritionist",
        image: testimonialA,
        feedback:
            "As a nutritionist, I recommend Fresh Harvest to all my clients. Their vegetables and fruits are always top quality, organic, and safe. A fantastic service!",
    },
    {
        id: 3,
        name: "Emily Johnson",
        role: "Fitness Coach",
        image: testimonialc,
        feedback:
            "Fresh Harvest helps me maintain a healthy diet. The produce is always crisp and fresh. Their delivery is timely and customer support is great!",
    },
];

const Testimonial = () => {
    const [current, setCurrent] = useState(0);

    return (
        <div className="bg-white pt-24 px-4 md:px-8 lg:px-0 flex justify-center">
            <div className="max-w-3xl mx-auto  text-center relative">
                {/* Top Section */}
                <div className="mb-12">
                    <span className="text-sm text-green-600 font-semibold bg-green-50 px-3 py-1 rounded-full">
                        Testimonial
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-4">
                        What Our Customers Say
                    </h2>
                    <p className="text-gray-500 mt-2 max-w-xl mx-auto text-sm">
                        Don’t just take our word for it—here’s what some of our customers have to say about their experience with Fresh Harvest:
                    </p>
                </div>

                {/* Testimonial Card */}
                <div className="flex flex-col md:flex-row items-center gap-10 px-4">
                    <div className="flex-shrink-0 w-1/5">
                        <img
                            src={testimonials[current].image}
                            alt={testimonials[current].name}
                            className="w-36 h-52 rounded-full object-cover border-4 border-green-200"
                        />
                    </div>
                    <div className="w-4/5 bg-gray-100 p-6 rounded-xl text-left shadow-md relative">
                        <FaQuoteLeft className="absolute text-orange-300 text-3xl -top-5 -left-5" />
                        <p className="text-sm text-gray-700 mb-4">
                            “{testimonials[current].feedback}”
                        </p>
                        <p className="font-bold">{testimonials[current].name} <span className="font-normal text-gray-500">– {testimonials[current].role}</span></p>
                    </div>
                </div>

                {/* Dots */}
                <div className="mt-14 flex justify-center items-center gap-3">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`w-3 h-3 rounded-full transition ${
                                current === index ? 'bg-green-600' : 'bg-gray-300'
                            }`}
                        ></button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
