import React, { Component } from 'react';
import './App.css';
import GalleryItem from '../GalleryItem/GalleryItem'
import GalleryList from '../GalleryList/GalleryList'
import axios from 'axios'

class App extends Component {

  state = {
    gallery: [],
  };


  componentDidMount = () => {
    this.getRequest();
}

  getRequest = () => {
    console.log('get Request');
    axios({
        method: 'GET',
        url: '/gallery'
    }).then((response) => {
      console.log(response.data);
  
        this.setState({
          gallery:response.data
        })
      
        
        
    }).catch((error) => {
        console.log('error from get', error);
    })
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <p>Gallery goes here</p>
        <GalleryItem />
        <GalleryList />
        <img src="images/goat_small.jpg"/>
      </div>
    );
  }
}

export default App;
