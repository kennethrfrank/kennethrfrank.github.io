import { Component } from 'react'
import {Grid, Button, Icon} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './centered-buttons.styles.css'

class CenteredButtons extends Component{
    render(){
        const {buttons, socials} = this.props;
        return(
            <Grid.Row centered columns={socials.length} >
              
            {socials.map((social)=>{
              
              return(
                <Grid.Column key={social.platform} className="theButtons" textAlign="center">
                  <Button className="blackButton" href={social.link} icon={social.platform}></Button>
                </Grid.Column>
              );
            })}
            
          </Grid.Row>
          
        )
    }
}

export default CenteredButtons;