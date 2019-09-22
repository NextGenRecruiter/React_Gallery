import React, { Component } from 'react'

class GalleryList extends Component{
    render(){
        const gallery = this.props.gallery.map(picture => (
            (<div key ={picture.name}>{picture.path} <button>Likes</button></div>)
        ))
        return(

            <div>
                {gallery}
            </div>
        )
        
    }
}

 export default GalleryList;