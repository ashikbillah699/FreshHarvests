import React, { useEffect, useState } from 'react';

const useProducts = () => {
    const [products, setProducts] = useState([]);
        const productsData = async () => {
            try {
                const res = await fetch("https://code-commando.com/api/v1/products")
                const data = await res.json();
                setProducts(data.data)
            }
            catch (err) {
                console.log(err.message);
            }
        }
    
        useEffect(() => {
            productsData()
        }, [])
    
        return [products];
};

export default useProducts;