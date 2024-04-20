import React, {useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Card';


const AboutPicture = () => {
    const [aboutpictureData, setAboutPictureData] = useState([])
    

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'contents.json',
            );
            setAboutPictureData(result.data.aboutpicture);
        };
        fetchData();

       }, []);


    return (
        <>
            {aboutpictureData.map(aboutpicture => <Card key={aboutpicture.id} {...aboutpicture} />)}
        </>

    )
}

export default AboutPicture;