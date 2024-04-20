import React, {useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Card';


const Text = () => {
    const [textData, setTextData] = useState([])
    

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'contents.json',
            );
            setTextData(result.data.abouttext);
        };
        fetchData();

       }, []);


    return (
        <>
            {textData.map(textData => <Card key={textData.id} {...textData} />)}
        </>

    )
}

export default Text;