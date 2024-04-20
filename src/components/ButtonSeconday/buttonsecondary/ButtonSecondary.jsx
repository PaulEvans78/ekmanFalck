import React, {useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Card';


const ButtonSecondary = () => {
    const [buttonsecondaryData, setButtonSecondaryData] = useState([])
    

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'contents.json',
            );
            setButtonSecondaryData(result.data.buttonsecondary);
        };
        fetchData();

       }, []);


    return (
        <>
            {buttonsecondaryData.map(buttonsecondary => <Card key={buttonsecondary.id} {...buttonsecondary} />)}
        </>

    )
}

export default ButtonSecondary;