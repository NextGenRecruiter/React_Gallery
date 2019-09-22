import React, { Component } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList'
import axios from 'axios'

class App extends Component {

  state = {
    gallery: [],

  };


  componentDidMount = () => {
    this.getRequest();
}//end componentDidMount

  getRequest = () => {
    console.log('get Request');
    axios.get('/gallery')
      .then(( response ) => {
      console.log( response.data );

        this.setState({
          
          gallery:response.data,

        })//end this.setState
   
    }).catch((error) => {
        console.log('error from get', error);
    })//end catch
}//end getRequest

updateLike = ( event ) => {

  axios.put('/gallery/like/' + event.target.dataset.id)
    .then(( response ) => {
      this.getRequest();
    }).catch((error) => {
      console.log('error from update', error);
    })//end catch

}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <p>Gallery goes here</p>
        <GalleryList gallery = {this.state.gallery} updateLike = {this.updateLike}/>
      </div>
    );
  }
}

export default App;
