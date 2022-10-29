import logo from './logo.png'
import { Component } from 'react'

import './App.css';
import _ from 'lodash'

import 'semantic-ui-css/semantic.min.css'
import { Grid, Image, Button, Input, Header, Segment } from 'semantic-ui-react'
import ContentSlider from './components/content-slider/content-slider.component';
import SearchBox from './components/searchbox/search-box.component';
import CenteredButtons from './components/centered-buttons/centered-buttons.component';
import ContentSegment from './components/content-segment/content-segment.component';
import LogoTagSiteStarter from './components/logo-tag-site-starter/logo-tag-site-starter';

class App extends Component {

  constructor() {
    super();

    this.state = {
      buttons: ["Media", "Artists", "About"],
      nfts: [],
      nftSearch: ''
    };


  }
  componentDidMount() {


    fetch('https://api.opensea.io/api/v1/assets?owner=0x848AE001e8378A7409337453C1D8f5B779945578&order_direction=desc&limit=200&include_orders=false')
      .then(response => response.json()).then((assets) => this.setState(
        () => {


          return { nfts: assets.assets };
        },
        () => {
          console.log("Data from OpenSea");
        },
      ));
  }

  onSearchChange = (event) => {
    const nftSearch = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { nftSearch };
    })

  };

  render() {
    const nclyneNFTs = this.state.nfts.filter((nft) => {
      if (nft.collection.external_url) {
        var putEmIn = nft.collection.external_url
          .includes('nclyne')
          && (nft.name
            .toLocaleLowerCase()
            .includes(this.state.nftSearch)
            || nft.description
              .toLocaleLowerCase()
              .includes(this.state.nftSearch));
        return putEmIn;
      } else {
        return false;
      }
    });

    const { onSearchChange } = this;
    const { buttons } = this.state


    return (

      <Grid className="App" centered={true}>
        <LogoTagSiteStarter logo={logo} 
        tagline="Helping creators take the next step" />
        <CenteredButtons buttons={buttons} />
        <Grid.Row className="slideAndSearch">
          <Grid.Column className="slickSlider" width="14">
            <Grid className="sliderFunctionality">
              <Grid.Column width='16'>
                <ContentSegment />
                <SearchBox onChangeHandler={onSearchChange} />
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
