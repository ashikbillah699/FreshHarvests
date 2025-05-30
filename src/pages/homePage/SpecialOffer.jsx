import { useEffect, useState } from "react";


const SpecialOffer = () => {
    const [time, setTime] = useState(259200);

    useEffect(() => {
        const timer = setInterval(() => setTime((t) => (t > 0 ? t - 1 : 0)), 1000);
        return () => clearInterval(timer);
    }, []);

    const d = Math.floor(time / 86400);
    const h = Math.floor((time % 86400) / 3600);
    const m = Math.floor((time % 3600) / 60);
    const s = time % 60;

    return (
        <div
            className="bg-cover bg-center mt-28"
            style={{ backgroundImage: "url('https://img.freepik.com/free-photo/plant-leaves-with-fresh-tropical-fruits_23-2148122243.jpg?semt=ais_hybrid&w=740')" }}>
            <div className="w-full max-w-[1200px] mx-auto px-4 py-16 items-center " >
                {/* text */}
                <div >
                    <span className="badge bg-gray-200 text-green-600 mb-3">Special Offer</span>
                    <h2 className="text-4xl md:text-6xl font-bold mb-3 leading-tight">
                        Seasonal Fruit<span className="text-primary"> Bundle</span>
                    </h2>
                    <p className="text-xl md:text-3xl font-semibold mb-6">
                        Discount up to <span className="text-orange-500">80% OFF</span>
                    </p>

                    {/* countdown */}
                    <div className="flex gap-4 mb-6">
                        {[["Days", d], ["Hour", h], ["Min", m], ["Second", s]].map(
                            ([label, val]) => (
                                <div
                                    key={label}
                                    className="bg-white rounded-xl px-5 py-6 text-center"
                                >
                                    <p className="text-2xl font-bold leading-none">
                                        {String(val).padStart(2, "0")}
                                    </p>
                                    <p className="text-xs mt-1">{label}</p>
                                </div>
                            )
                        )}
                    </div>

                    <div className='mt-8'>
                        <span className='text-lg md:text-2xl font-bold px-4 py-2 bg-[#176d38] text-white rounded-3xl'>CODE : <span className='text-[#fac714]'>FRESH28</span></span>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SpecialOffer;
