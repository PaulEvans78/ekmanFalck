import React, {useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Card';


const PlayerModal = () => {
    const [playermodalData, setPlayerModalData] = useState([])
    

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'contents.json',
            );
            setPlayerModalData(result.data.modalhomethree);
        };
        fetchData();

       }, []);


    return (
        <>
            {playermodalData.map(playermodal => <Card key={playermodal.id} {...playermodal} />)}
        </>

    )
}

export default PlayerModal;