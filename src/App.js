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
      socials: [
                  { platform: "game",
                  link: "https://oncyber.io/nclyne"},
                  { platform: "medium",
                  link: "https://medium.com/nclyne"},
                  { platform: "youtube",
                  link: "https://www.youtube.com/channel/UCwZA4pIiYSJO9yrXOlcUMfQ"},
                  { platform: "twitter",
                  link: "https://twitter.com/nclynenft"},
                  { platform: "instagram",
                  link: "https://instagram.com/nclynenft"},
                  { platform: "twitch",
                  link: "https://www.twitch.tv/nclynenft"},
                  { platform: "discord",
                   link: "https://discord.com/invite/QXrYuwzM24"}
                  
                ],
      buttons: [{ platform: "Gallery",
      link: "https://oncyber.io/nclyne"},
      { platform: "Become an Nclyned Artist",
      link: "https://medium.com/nclyne"},
      { platform: "NFTs 101",
      link: "https://www.youtube.com/channel/UCwZA4pIiYSJO9yrXOlcUMfQ"}],
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
    const { socials, buttons } = this.state


    return (

      <Grid className="App" centered={true}>

        <LogoTagSiteStarter logo={logo} 
        tagline="Helping creators take the next step" />
        {/* //Begins with GRID.ROW */}

        <CenteredButtons buttons={buttons} socials={socials}/>
        {/* //Begins with GRID.ROW */}

        <Grid.Row>

                        <Grid.Column stretched mobile="13" tablet ="7" computer="7" verticalAlign='middle'>
                          

                          <ContentSegment />
                          {/* <Grid>
                          <CenteredButtons socials={buttons} />
                          </Grid> */}
                        

                        </Grid.Column>
                        <Grid.Column mobile="13" tablet ="7" computer="7">
                        <SearchBox onChangeHandler={onSearchChange} />
                              <ContentSlider content={nclyneNFTs} />
                          
                        </Grid.Column>


        </Grid.Row>
      </Grid>

    );
  }
}

export default App;
