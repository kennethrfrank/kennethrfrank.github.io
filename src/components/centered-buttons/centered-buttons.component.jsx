import { Component } from 'react'
import {Grid} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

class CenteredButtons extends Component{
    render(){
        const {buttons} = this.props;
        return(
            <Grid.Row centered columns={buttons.length}>
            {buttons.map((button)=>{
              
              return(
                <Grid.Column key={button} className="theButtons">
                  <div className="blackButton">{button}</div>
                </Grid.Column>
              );
            })}
          </Grid.Row>
        )
    }
}

export default CenteredButtons;