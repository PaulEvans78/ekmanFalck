import React, {useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Card';


const Contents = () => {
    const [contentData, setContentsData] = useState([])
    

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'contents.json',
            );
            setContentsData(result.data.productionservice);
        };
        fetchData();

       }, []);


    return (
        <>
            {contentData.map(content => <Card key={content.id} {...content} />)}
        </>

    )
}

export default Contents;