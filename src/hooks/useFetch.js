import { useState, useEffect } from "react";
import paginate from './../utils/pagination';

const url = 'https://api.github.com/users/john-smilga/followers?per_page=100';

export const useFetch = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getProducts = async () => {
        const response = await fetch(url);
        const data = await response.json();

        // Paginacion
        paginate(data);

        setData(data);
        setLoading(false);
    }

    useEffect(() => {
        getProducts();
    }, []);


    return { loading, data }
}