import { useEffect, useState } from 'react';

const useCategories = () => {
    const [categories, setCategories] = useState(null)
    const categoryData = async () => {
        try {
            const res = await fetch("https://code-commando.com/api/v1/category")
            const data = await res.json();
            setCategories(data.data)
        }
        catch (err) {
            console.log(err.message);
        }
    }

    useEffect(() => {
        categoryData()
    }, [])

    return [categories];
};

export default useCategories;