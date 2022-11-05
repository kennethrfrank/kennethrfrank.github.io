import {Component} from 'react'
import {Grid, Image} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './logo-tag-site-starter.styles.css'


const LogoTagSiteStarter = ({logo, tagline})=>{
  return(
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
)
}

export default LogoTagSiteStarter;