import React, {useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Card';


const Contents = () => {
    const [contentsData, setContentsData] = useState([])
    

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'contents.json',
            );
            setContentsData(result.data.case2);
        };
        fetchData();

       }, []);


    return (
        <>
            {contentsData.map(contents => <Card key={contents.id} {...contents} />)}
        </>

    )
}

export default Contents;