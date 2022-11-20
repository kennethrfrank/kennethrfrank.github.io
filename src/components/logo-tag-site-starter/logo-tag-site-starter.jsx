import {Component, Fragment} from 'react'
import {Grid, Image, Header, Segment, Button} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './logo-tag-site-starter.styles.css'
import CenteredButtons from '../centered-buttons/centered-buttons.component'
import {Outlet, Link} from 'react-router-dom';

const LogoTagSiteStarter = ({logo, tagline, buttons, socials})=>{

  return(
    <Fragment>
        <Grid centered>
          <Grid.Row className="navbar">

            <Grid.Column width="8"  className="navbarColumn" floated="left">
               <Link to="/"><Image className="NclyneLogo" src={logo}></Image></Link> 
            </Grid.Column>
            <Grid.Column width="8" className="navbarColumn" floated="right">
              <h4 className="tagline">
              {tagline}
              </h4>
            </Grid.Column>
            
          </Grid.Row>
          <CenteredButtons buttons={buttons} socials={socials}/>

        </Grid>
        <Outlet />
    </Fragment>
)
}

export default LogoTagSiteStarter;