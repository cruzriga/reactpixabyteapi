import React from 'react';
import Img from './Img'
const ImgLists = function({imgs}){
    return (
        <div className="col-12 p-5 row">
            {imgs.map(img =>(
                <Img key={img.id} img= {img} />
            ))}
        </div>
    );

}

export default ImgLists;