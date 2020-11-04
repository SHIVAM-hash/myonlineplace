import React from 'react'

const ImageHelper = ({product}) => {
    const imageurl = product ? product.image : `https://bitsofco.de/content/images/2018/12/broken-1.png` 
    return (
        <div className="rounded border border-success p-2">
        <img src={imageurl} style={{maxHeight:"100%", maxWidth: "100%"}}
        className="mb-3 rounded"
        alt=""/>
        </div>
    )
}


export default ImageHelper
