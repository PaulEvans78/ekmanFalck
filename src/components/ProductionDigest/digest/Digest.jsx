import React, {useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Card';


const Digest = () => {
    const [digestData, setDigestData] = useState([])
    

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'contents.json',
            );
            setDigestData(result.data.productiondigest);
        };
        fetchData();

       }, []);


    return (
        <>
            {digestData.map(digest => <Card key={digest.id} {...digest} />)}
        </>

    )
}

export default Digest;