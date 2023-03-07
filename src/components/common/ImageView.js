import React from 'react';

const ImageView = ({url, style}) => {

    if (url) {
        return <img
            style={style}
            src={url}
            onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/no_image_icon.png"
            }}
            alt="no_image"
        />
    }

    return <img style={style} src="/no_image_icon.png" alt="no_image"/>

}

export default ImageView;
