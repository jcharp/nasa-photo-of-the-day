import React ,{ useState, useEffect} from "react";
import axios from "axios";
import DateAndTitle from "./Title_and_Date";
import PhotoAndDesc from "./Photo_and_description";

export default function PhotoInfo() {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        axios
        .get('https://api.nasa.gov/planetary/apod?api_key=wimELLEq4Q598nHUaVITgDR2m69O1NAhe7qtfIGe&date=2020-08-25')
            .then ((res) => {
                console.log("list from NASA", res);
                setData(res.Data);
                
            })
            .catch(err => {
                console.log(err);
            });

    },[])

    return (
        <div>
            // return (
    //     <div>
                <DateAndTitle
                date ={data.date}
                title = {data.title}
            />
             <PhotoAndDesc
                 photo = {data.url}
                 desc = {data.explanation}
             /></div>

        </div>
    )

}