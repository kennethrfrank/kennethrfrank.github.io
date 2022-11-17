import {Component, Fragment} from 'react'
import {Grid, Image} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './logo-tag-site-starter.styles.css'
import CenteredButtons from '../centered-buttons/centered-buttons.component'


const LogoTagSiteStarter = ({logo, tagline, buttons, socials})=>{
  return(
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
)
}

export default LogoTagSiteStarter;