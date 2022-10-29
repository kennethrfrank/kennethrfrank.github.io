import {Component} from 'react'
import {Grid, Image} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

class LogoTagSiteStarter extends Component{
    render(){
        return(
            <Grid.Row className="navbar">
  
            <Grid.Column width="8"  className="navbarColumn" floated="left">
                <Image className="NclyneLogo" src={this.props.logo}></Image>
            </Grid.Column>
            <Grid.Column width="8" className="navbarColumn" floated="right">
              <h4 className="tagline">
              {this.props.tagline}
              </h4>
            </Grid.Column>
          </Grid.Row>
        )
    }
}

export default LogoTagSiteStarter;