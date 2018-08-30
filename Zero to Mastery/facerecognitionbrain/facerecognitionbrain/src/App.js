import React, { Component } from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import Logo from './Components/Logo/Logo';
import Register from './Components/Register/Register';
import Signin from './Components/Signin/Signin';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

const app = new Clarifai.App ({
  apiKey: 'c81f0d45df244a0baf613abb96fa0619'
});

const particlesOptions = {
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 800
        }
      }
  
      }
    }

class App extends Component {
  constructor(){
    super();
    this.state={
      input: '',
      imageURL: '',
      box: {},
      route: 'signin',
      isSignedIn: false,
    }
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box
    const image = document.getElementById('inputimage')
    const width = Number(image.width)
    const height = Number(image.height)
    console.log(width,height)

    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height),
    }
  }

  displayFaceBox = (box) => {
    console.log(box)
    this.setState({box: box})
    
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});

    
  }

  //"https://samples.clarifai.com/face-det.jpg"

  onButtonSubmit = () =>{
    this.setState({imageURL: this.state.input})
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input)
      .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
   
    .catch(err => console.log(err));  // there was an error


  }

onRouteChange = (route) => {
  if(route === 'signout'){
    this.setState({isSignedIn: false})
  }else if(route === 'home'){
    this.setState({isSignedIn:true})
  }
  this.setState({route: route})
}

  render() {
    
    return (
      <div className="App">
       <Particles className= 'particles'
              params= {particlesOptions}
            
            />
      <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>
      { this.state.route ==='home'
      ? <div>
      <Logo />
     <Rank />
     
    <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}  />
    
    
     <FaceRecognition  box={this.state.box} imageURL={this.state.imageURL}/> 
      </div> 
      : (
        this.state.route === 'signin' 
        ?<Signin  onRouteChange= {this.onRouteChange}/> 
        : <Register  onRouteChange= {this.onRouteChange}/> 
      ) 
      
       
    }
      </div>
    );
  }
}

export default App;
