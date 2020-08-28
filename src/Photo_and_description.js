import React from "react";

const PhotoAndDesc = ({photo, desc}) => {
    return (
        <div>
            <img src = {photo} />
            <p>
                {desc}
            </p>

        </div>

    );
};

export default PhotoAndDesc;