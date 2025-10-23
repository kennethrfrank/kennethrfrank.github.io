import logo from './TSU_logo.gif'
import { useEffect, useState } from 'react'
import './App.css';
import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import LogoTagSiteStarter from './components/logo-tag-site-starter/logo-tag-site-starter';
import Home from './components/routes/home/home.component'
import { Route, Routes } from 'react-router-dom';
import Projects from './components/routes/projects/projects.component';
import Gallery from './components/routes/gallery/gallery.component';
import Shop from './components/routes/shop/shop.component';
import Content from './components/content/content.component';
import $ from 'jquery'

const App = ()=>{
    const [searchField, setSearchField] = useState('');
    const [nfts, setNfts] = useState([]);

    const [videos, setVideos] = useState([]);
    const [articles, setArticles] = useState([]);

    const socials = [
      { platform: "game",
      link: "https://tryhackme.com/", text: "HackMe"},
      { platform: "game",
      link: "https://www.hackthebox.com/", text: "HackTheBox"},
      { platform: "game",
      link: "https://hackviser.com/", text: "HackViser"},
      { platform: "game",
      link: "https://store.steampowered.com/app/365450/Hacknet/", text: "Hacknet"},
      { platform: "mail",
      email: "kfrank1@my.tnstate.edu", name: "Kenny Frank", subject: "SR Project Inquiry 2025", text: "Contact - Kenny Frank"},
      { platform: "mail",
      email: "jfinch10@my.tnstate.edu", name: "Joshua Finch", subject: "SR Project Inquiry 2025", text: "Contact - Joshua Finch"},
      { platform: "mail",
        email: "jwebst20@my.tnstate.edu", name: "Jayden Webster", subject: "SR Project Inquiry 2025", text: "Contact - Jayden Webster"}
    ];
    
    const [nclyneNfts, setNclyneNfts] = useState(nfts);
    const curatedByNclyne =
      {title: "Where's the PHISH?",
       subCopy: ["Type the number of the suspected PHISH attempt into the search bar to see if you can find it!",
     "Questions get more difficult with each round"],}
    ;
    const spaceLooters =
      {title: "TSU TIGER PHISH HUNT",
      img: 'tiger.gif',
       subCopy: ["Tiger Phish Hunt is an educational game to help you identify phishing attempts.", 
     "BE THE TIGER; FIND THE PHISH Attempt.", "Or GET PHISHED!"],
    link: ""}
    ;

    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);

    const[gallery, setGallery] = useState("rift-mark-2");

    const[shopifyActive, setShopifyActive] = useState(false);
    const[shopifyStyle, setShopifyStyle] = useState({display: "none"});

    useEffect(()=>{
      if(shopifyActive){
        console.log('UE: shopify is active');
        $(".shopify-buy-frame > iframe").slideDown();
      }else{
        console.log("UE: shopify is inactive");
        $(".shopify-buy-frame > iframe").slideUp();
      }
    }, [shopifyActive]);


    useEffect(()=>{
      (async () => {
        try {
          console.log("fetching pics");
          const response = await fetch('https://picsum.photos/v2/list');
          if (!response.ok) {
            console.error('pics fetch failed with status', response.status);
            setNfts([]);
            return;
          }
          const assets = await response.json();
          setNfts(assets || []);
          console.log("got pics" )
        } catch (err) {
          console.error('Failed to fetch pics', err);
          setNfts([]);
        }
      })();
    }, []); // get data from opensea

    useEffect(()=>{
      (async () => {
        try {
          const response = await fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCwZA4pIiYSJO9yrXOlcUMfQ&maxResults=3&order=date&key=AIzaSyDlI39i18q3VsuxcpwN4viDTitXUReCZkQ');
          if (!response.ok) {
            console.error('YouTube fetch failed with status', response.status);
            setVideos([]);
            return;
          }
          const vids = await response.json();
          setVideos((vids && vids.items) || []);
        } catch (err) {
          console.error('Failed to fetch YouTube videos', err);
          setVideos([]);
        }
      })();
    }, []);//API : AIzaSyDlI39i18q3VsuxcpwN4viDTitXUReCZkQ

    useEffect(()=>{
      (async () => {
        try {
          const response = await fetch('https://v1.nocodeapi.com/frnk/medium/WYojXOwHqYlmoYft');
          if (!response.ok) {
            console.error('Medium fetch failed with status', response.status);
            setArticles([]);
            return;
          }
          const items = await response.json();
            setArticles(items || []);
          } catch (err) {
            console.error('Failed to fetch Medium articles', err);
            setArticles([]);
          }
          })();
        }, []);

    useEffect(() => {
      const handler = setTimeout(() => {
        const processedNfts = nfts.filter((pic) => {
         
          if (pic.url) {
            var putEmIn = pic.author
              .toLowerCase()
              .includes(searchField)
              || pic.id.toString()
              .includes(searchField);
            return putEmIn;
          } else {
            return false;
          }
        });
        setNclyneNfts(processedNfts);
      }, 300); // 300ms debounce

      return () => {
        clearTimeout(handler);
      };
    }, [nfts, searchField]);

  
     
  const homeButtons = [{buttonName: "Gallery", action: "gallery", altname: "OnCyber Gallery Scavenger Hunts"},
    {buttonName: "Projects", action: "projects", altname: "Tiger Phish Hunt"}
//   {buttonName: "Services", action: "calendar", modal: true, openModal: open, setOpenModal: setOpen},
//   {buttonName: "Contact Us", action: "contactus", modal: true, openModal: open1, setOpenModal: setOpen1},
//  {buttonName: "Shop", action: "shopify", href: "https://nclyne.shop"},
// {buttonName: "Content", action: "content"}
];



    const onSearchChange = (event) => {
      const searchString = event.target.value.toLocaleLowerCase();
      setSearchField(searchString);
  
    };
    $(".shopify-buy-frame > iframe").slideUp();


    return(


        <Routes> 
          <Route path='/' element={
              <LogoTagSiteStarter logo={logo} 
              tagline="Helping creators take the next step" 
              socials={socials} setShopifyActive={setShopifyActive}/>
          }>
            <Route index element={<Home buttons={homeButtons} open={open} setOpen={setOpen} setShopifyActive={setShopifyActive}/>}/>
            <Route path='projects' element={ <Projects spaceLooters={spaceLooters} 
            curatedByNclyne={curatedByNclyne}
            onSearchChange={onSearchChange}
            nclyneNfts={nclyneNfts} />}/>
            <Route path="gallery" element={<Gallery gallery={gallery} setGallery={setGallery}/>}>

            </Route>
            <Route path="content" element={<Content videos={videos} articles={articles}></Content>} />
          
          </Route>
        
        </Routes>
       

        

      

  
 
    )

}//filterNFTs


// class App extends Component {

//   constructor() {
//     super();

//     this.state = {
//       socials: [
//                   { platform: "game",
//                   link: "https://oncyber.io/nclyne"},
//                   { platform: "medium",
//                   link: "https://medium.com/nclyne"},
//                   { platform: "youtube",
//                   link: "https://www.youtube.com/channel/UCwZA4pIiYSJO9yrXOlcUMfQ"},
//                   { platform: "twitter",
//                   link: "https://twitter.com/nclynenft"},
//                   { platform: "instagram",
//                   link: "https://instagram.com/nclynenft"},
//                   { platform: "twitch",
//                   link: "https://www.twitch.tv/nclynenft"},
//                   { platform: "discord",
//                    link: "https://discord.com/invite/QXrYuwzM24"}
                  
//                 ],
//       buttons: [{ platform: "Gallery",
//       link: "https://oncyber.io/nclyne"},
//       { platform: "Become an Nclyned Artist",
//       link: "https://medium.com/nclyne"},
//       { platform: "NFTs 101",
//       link: "https://www.youtube.com/channel/UCwZA4pIiYSJO9yrXOlcUMfQ"}],
//       nfts: [],
//       nftSearch: ''
//     };


//   }
//   componentDidMount() {


//     fetch('https://api.opensea.io/api/v1/assets?owner=0x848AE001e8378A7409337453C1D8f5B779945578&order_direction=desc&limit=200&include_orders=false')
//       .then(response => response.json()).then((assets) => this.setState(
//         () => {


//           return { nfts: assets.assets };
//         },
//         () => {
//           console.log("Data from OpenSea");
//         },
//       ));
//   }

//   onSearchChange = (event) => {
//     const nftSearch = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { nftSearch };
//     })

//   };

//   render() {
//     const nclyneNFTs = this.state.nfts.filter((nft) => {
//       if (nft.collection.external_url) {
//         var putEmIn = nft.collection.external_url
//           .includes('nclyne')
//           && (nft.name
//             .toLocaleLowerCase()
//             .includes(this.state.nftSearch)
//             || nft.description
//               .toLocaleLowerCase()
//               .includes(this.state.nftSearch));
//         return putEmIn;
//       } else {
//         return false;
//       }
//     });

//     const { onSearchChange } = this;
//     const { socials, buttons } = this.state


//     return (


//     );
//   }
// }

export default App;
