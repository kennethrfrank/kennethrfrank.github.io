import logo from './logo.png'
import { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import _ from 'lodash'
import Slider from 'react-slick'
import { Grid, Image, Button} from 'semantic-ui-react'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"




class App extends Component{

  constructor(){
    super();

    this.state ={
      buttons: ["Media","Artists", "About"],
      settings: {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false
      }
    };

    console.log(this.state.settings)

  }




  render(){
    return (
      <div className="App">
        <Grid centered={true}>
          <Grid.Row className="navbar">
  
            <Grid.Column width="8"  className="navbarColumn" floated="left">
                <Image className="NclyneLogo" src={logo}></Image>
            </Grid.Column>
            <Grid.Column width="8" className="navbarColumn" floated="right">
              <h4 className="tagline">
              Helping creators take the next step.
              </h4>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row >
            {this.state.buttons.map((button)=>{
              return(
                <Grid.Column width="5" key={button} className="theButtons">
                  <div className="blackButton">{button}</div>
                </Grid.Column>
              );
            })}
          </Grid.Row>
          <Grid.Row>
            <Grid.Column className="slickSlider" width="16">
               
              <Slider {...this.state.settings}>
                <div key="1" className='goldBG'>
                </div>
                <div key="2" className='goldBG'>
                  <img src={logo} height={"50px"}/>
                </div>

              </Slider>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        
  
        
      </div>
    );
  }
}

export default App;
