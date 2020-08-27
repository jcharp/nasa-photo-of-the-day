import React ,{ useState, useEffect} from "react";
import axios from "axios";

export default function PhotoInfo() {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        axios
        .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2020-07-06")
            .then (res => {
                console.log("list from NASA", res);
                
            })
            .catch(err => {
                console.log(err);
            });

    },[])

    return (
        <div>

        </div>
    )

}