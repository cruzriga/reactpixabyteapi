import React from 'react';
const Img = function({img}){
    const {largeImageURL, likes, previewURL, tags, views} = img;
    return(
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card" >
               <img src={previewURL} alt={tags} className="card-img-top"/> 
               <div className="card-body">
                    <p className="card-text">
                        <span className="badge badge-light mr-1">{likes} Likes</span> <span className="badge badge-light">{views} Vistas</span> </p>
               </div>
               
               <div className="card-footer">
                   <a href={largeImageURL} target="_blank" className="btn btn-primary btn-block" rel="noopener noreferrer"> Ver Imagen</a>
               </div>
            </div>
        </div>
    )
}
export default Img;