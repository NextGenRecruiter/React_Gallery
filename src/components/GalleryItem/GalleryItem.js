import React, { Component } from 'react'

class GalleryItem extends Component{
    state = {
        click: true,
    }
    likePic = ( event ) => {
        this.setState({
            click: !this.state.click,
        })//end likePic
    }
    render(){
        let picture = <img
        src = {this.props.individualData.path}
        alt = {this.props.individualData.description}
        data-id={this.props.i}
        />

        if (this.state.click === false){
            picture = <p>{this.props.individualData.description}</p>;
        }  
        return(

            <div className="card" key={this.props.i}>
            <div onClick={this.likePic}>
                <div className="card-img-top">
                    {picture}
                </div>
             </div>
             <div className="card-body">
             <h5 className="card-title">
                Likes: {this.props.individualData.click}
             </h5>
            <br />
            <button className="btn btn-primary"
            data-id={this.props.individualData.id} 
            onClick={this.props.updateLike}>Love it!</button>
             </div>

        </div>
        )
        
    }
}

 export default GalleryItem;