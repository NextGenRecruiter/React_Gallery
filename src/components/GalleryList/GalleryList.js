import React, { Component } from 'react'
import GalleryItem from '../GalleryItem/GalleryItem'

class GalleryList extends Component{
    render(){
        const pictureList = this.props.gallery.map((Item, i) => {
            return (
                <div className="col-md-3">
                <GalleryItem individualData={Item} i={i} key={i} updateLike={this.props.updateLike} />
                </div>
            )
        })
        return(

            <div>
                {pictureList}
            </div>
        )
        
    }
}

 export default GalleryList;