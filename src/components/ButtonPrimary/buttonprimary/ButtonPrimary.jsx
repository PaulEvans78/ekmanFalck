import React, {useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Card';


const ButtonPrimary = () => {
    const [buttonprimaryData, setButtonPrimaryData] = useState([])
    

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'contents.json',
            );
            setButtonPrimaryData(result.data.buttonprimary);
        };
        fetchData();

       }, []);


    return (
        <>
            {buttonprimaryData.map(buttonprimary => <Card key={buttonprimary.id} {...buttonprimary} />)}
        </>

    )
}

export default ButtonPrimary;