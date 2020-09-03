
import React, { useState, useEffect} from "react";
import axios from "axios";
import DateAndTitle from "./Date_and_Title";
import PhotoAndDes from './Photo_and_description';
import styled from 'styled-components';


//building out styled component
const WrapperDiv = styled.div`
    font-family: cursive;
    text-align: center;
    padding: 2px;
   
    // nesting image styling
    
    img{
        max-width: 70%;
        height: auto;
        margin: 30px;
    }
`;




export default function PhotoInfo() {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        axios
        .get('https://api.nasa.gov/planetary/apod?api_key=wimELLEq4Q598nHUaVITgDR2m69O1NAhe7qtfIGe&date=2020-03-14')
            .then ((res) => {
                console.log("list from NASA", res);
                console.log(res.data);
                setData(res.data);
            })
            .catch(err => {
                console.log(err);
            });

    },[])

    return (

        <WrapperDiv className="App">
            <div>
            <DateAndTitle
            date={data.date}
            title={data.title}
            />

            <PhotoAndDes
                photo={data.url}
                desc ={data.explanation}
                />


        </div>

        </WrapperDiv>
        
    )

}