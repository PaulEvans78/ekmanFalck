import React, {useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Card';


const ProductionText = () => {
    const [productionTextData, setProductionTextData] = useState([])
    

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'contents.json',
            );
            setProductionTextData(result.data.productiontext);
        };
        fetchData();

       }, []);


    return (
        <>
            {productionTextData.map(productionTextData => <Card key={productionTextData.id} {...productionTextData} />)}
        </>

    )
}

export default ProductionText;