import logo from './logo.png'
import { Component } from 'react'

import './App.css';
import _ from 'lodash'
import Slider from 'react-slick'

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import 'semantic-ui-css/semantic.min.css'
import { Grid, Image, Button, Input, Header} from 'semantic-ui-react'


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

 
     fetch('https://api.opensea.io/api/v1/assets?owner=0x848AE001e8378A7409337453C1D8f5B779945578&order_direction=desc&limit=200&include_orders=false')
     .then(response => response.json()).then((assets) => this.setState(
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
        var putEmIn = nft.collection.external_url
        .includes('nclyne')
        && (nft.name
          .toLocaleLowerCase()
          .includes(this.state.nftSearch) 
        || nft.description
          .toLocaleLowerCase()
          .includes(this.state.nftSearch));
      return putEmIn;
      }else{
        return false;
      }
    });


    return (
    
        <Grid className = "App" centered={true}>
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
          <Grid.Row className="slideAndSearch">
            <Grid.Column className="slickSlider" width="14">
              <Grid className="sliderFunctionality">
                <Grid.Column width='16'>
                  <Input icon='search' className="searchArtists" fluid placeholder="Search Artists" onChange={
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
                <Grid container key={nft.id} className="sliderGrid">
                  
                  <Grid.Row stretched centered={true} className={"nft"+nft.id+ " sliderContents"} > 
                    <Grid.Column mobile="16" computer="8">
                    <Image centered className="visualContent" src={nft.image_url} onClick={()=>{
                      console.log("click");
                      window.location.assign(nft.permalink);
                    }}></Image>
                    </Grid.Column>
                    <Grid.Column mobile="16" computer="8" className='artistDetailsRow'>
                      <Header className='artistDetails'>{nft.name}</Header>
                      
                      <Grid centered={true}>
                        <Grid.Column mobile="16" tablet="16" computer="16">
                         <p className='artistDetails'>
                            {nft.description}
                          </p>
                          <Button fluid className="sliderButton" onClick={
                            ()=>{
                              window.location.assign(nft.permalink);
                            }
                          }> Support {nft.traits.map((trait)=>{
                            if (trait.trait_type.includes("Artist")){
                            return trait.value }
                          })}</Button>
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
        
  
        
    
    );
  }
}

export default App;
