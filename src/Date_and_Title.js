import React from "react";

const DateAndTitle = ( {date, title}) => {

    return (
        <div>
            <h3>Photo for Today, {date}</h3>
            <p> Photograph Title: {title} </p>
        </div>
    )
};

export default DateAndTitle;