import logo from './logo.png'
import { Component } from 'react'

import './App.css';
import _ from 'lodash'

import 'semantic-ui-css/semantic.min.css'
import { Grid, Image, Button, Input, Header, Segment} from 'semantic-ui-react'
import ContentSlider from './components/content-slider/content-slider.component';
import SearchBox from './components/searchbox/search-box.component';

class App extends Component{

  constructor(){
    super();

    this.state ={
      buttons: ["Media","Artists", "About"],
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
 
onSearchChange = (event)=>{
    const nftSearch = event.target.value.toLocaleLowerCase();
    this.setState(()=>{
      return { nftSearch };
    })

  };

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

    const{onSearchChange}= this;
    const {buttons} = this.state


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
            {buttons.map((button)=>{
              
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



              <Segment className='curatedByNclyneSegment'>
              <Header as='h2' className='curationProjectCopy'>
                  Curated by Nclyne
              </Header>
              <Header sub  className='curationProjectCopy'>
                  An art curation project introducing select creators to blockchain markets. 
              </Header>
              <Header sub  className='curationProjectCopy'>
                  Each series is comissioned from a rising artist who receives 100% of the primary sales commision. 
              </Header>
              <Header sub  className='curationProjectCopy'>
              Nclyne Artists & Collectors receive exclusive benefits within the platform.
              </Header>
              </Segment>



                  <SearchBox onChangeHandler={onSearchChange}/>



                </Grid.Column>
              </Grid>
              
              <ContentSlider content={nclyneNFTs} />


            </Grid.Column>
          </Grid.Row>
        </Grid>
        
  
        
    
    );
  }
}

export default App;
