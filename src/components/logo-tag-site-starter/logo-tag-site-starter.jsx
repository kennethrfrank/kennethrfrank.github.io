import {Component, Fragment} from 'react'
import {Grid, Image, Header, Segment, Button} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './logo-tag-site-starter.styles.css'
import CenteredButtons from '../centered-buttons/centered-buttons.component'
import {Outlet, Link} from 'react-router-dom';

const LogoTagSiteStarter = ({logo, tagline, buttons, socials, setShopifyActive})=>{

  return(
    <Fragment>
        <Grid centered className='topLogoRow'>
          <Grid.Row className="logoAndTag">

            <Grid.Column width="8"  className="" floated="left">
               <Link to="/"><Image className="NclyneLogo" src={logo} onClick={()=>{
                setShopifyActive(false);
               }}></Image></Link> 
            </Grid.Column>
            <Grid.Column width="8" className="tagContainer" floated="right" textAlign='left'>
              <h4 className="tagline">
              {tagline}
              </h4>
            </Grid.Column>
            
          </Grid.Row>
 
        </Grid>
        <CenteredButtons buttons={buttons} socials={socials}/>
        <Outlet />
    </Fragment>
)
}

export default LogoTagSiteStarter;