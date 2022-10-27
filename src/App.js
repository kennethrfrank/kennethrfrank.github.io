import logo from './logo.png'
import { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import _ from 'lodash'
import Slider from 'react-slick'
import { Grid, Image, Button, Input} from 'semantic-ui-react'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"




class App extends Component{

  constructor(){
    super();

    this.state ={
      buttons: ["Media","Artists", "About"],
      settings: {
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true
      },
      nfts: [],
      nftSearch: ''
    };

    console.log(this.state.settings)

  }
  componentDidMount(){

 
     fetch('https://api.opensea.io/api/v1/assets?owner=0x848AE001e8378A7409337453C1D8f5B779945578&order_direction=desc&limit=200&include_orders=false').then(response => response.json()).then((assets) => this.setState(
           () => {
 
             
             return { nfts: assets.assets };
           },
           () => {
             console.log(this.state);
           },
     ));
   }



  render(){
    const nclyneNFTs = this.state.nfts.filter((nft)=>{
      if(nft.collection.external_url){
        var putEmIn = nft.collection.external_url.includes('nclyne')&& (nft.name.toLocaleLowerCase().includes(this.state.nftSearch) || nft.description.toLocaleLowerCase().includes(this.state.nftSearch));
      return putEmIn;
      }else{
        return false;
      }
    });
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
            <Grid.Column className="slickSlider" width="14">
              <Grid className="sliderFunctionality">
                <Grid.Column width='16'>
                  <Input fluid placeholder="Search Artists" onChange={
                    (event)=>{
                      const nftSearch = event.target.value.toLocaleLowerCase();
                      this.setState(()=>{
                        return { nftSearch };
                      });
                    }
                  }/>
                </Grid.Column>
              </Grid>
               
              <Slider className='goldBG' {...this.state.settings}>
                {nclyneNFTs.map((nft)=>{
                  console.log(nclyneNFTs);
                  

              
                return(
                <Grid  key={nft.id}>
                  
                  <Grid.Row centered={true} className="sliderContents"> 
                    <Grid.Column width="10">
                    <Image className="visualContent" src={nft.image_url} fluid onClick={()=>{
                      window.location.href(nft.permalink);
                    }}></Image>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row >
                    <Grid.Column width="16" className="artistDetails">
                      {nft.name}
                      <Grid centered={true}>
                        <Grid.Column width="11">
                         <p className='artistDetails'>
                            {nft.description}
                          </p>

                        </Grid.Column>
                      </Grid>
                      
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
                )
                })}
                


              </Slider>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        
  
        
      </div>
    );
  }
}

export default App;
