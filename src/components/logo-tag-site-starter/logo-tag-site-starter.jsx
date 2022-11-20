import {Component, Fragment} from 'react'
import {Grid, Image, Header, Segment, Button} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './logo-tag-site-starter.styles.css'
import CenteredButtons from '../centered-buttons/centered-buttons.component'
import blackLogo from '../../logo.svg'


const LogoTagSiteStarter = ({logo, tagline, buttons, socials})=>{

  const homeButtons = [{buttonName: "Book a Service", action: "calendly"},
  {buttonName: "Contact Us", action: "contact"},
  {buttonName: "Projects", action: "projects"},
  {buttonName: "Shop", action: "shopify"} ];
  return(
    <Fragment>
        <Grid centered>
          <Grid.Row className="navbar">

            <Grid.Column width="8"  className="navbarColumn" floated="left">
                <Image className="NclyneLogo" src={logo}></Image>
            </Grid.Column>
            <Grid.Column width="8" className="navbarColumn" floated="right">
              <h4 className="tagline">
              {tagline}
              </h4>
            </Grid.Column>
            
          </Grid.Row>
          <CenteredButtons buttons={buttons} socials={socials}/>

        </Grid>
        <Grid container centered >
        <Grid.Row  className="homeContentContainer">
            <Grid.Column className='homeContainer' width ="15" verticalAlign='middle'>
              <Header textAlign='left' className='logoText' verticalAlign='middle'> <img src={blackLogo}></img></Header>

              <Segment className='homeCopy'>
                <Header> Collective dedicated to rising talent and the proliferation of a global creative economy </Header>
                <Header> Specializing in Web3 culture and strategy </Header>
              </Segment>


              {homeButtons.map((button)=>{
             return <Button fluid className='blackHomeButton'> {button.buttonName} </Button>
              })}
            </Grid.Column>
          </Grid.Row>
        </Grid>

    </Fragment>

)
}

export default LogoTagSiteStarter;