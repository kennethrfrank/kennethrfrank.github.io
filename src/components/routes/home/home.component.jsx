import {Grid, Segment, Header, Button} from "semantic-ui-react";
import './home.styles.scss';
import blackLogo from '../../../logo.svg'
import {Link} from 'react-router-dom'
import ServiceModal from "../../service-modal/service-modal.component";

const Home = ({buttons, open, setOpen})=>{
    return(
    <Grid className="homeContainer" >
    <Grid.Row centered className="homeContentContainer">
        <Grid.Column  mobile= "14" tablet={7} computer={7} verticalAlign='middle'>
          <Header textAlign='left' className='logoText' verticalAlign='middle'> <img src={blackLogo}></img></Header>

          <Segment className='homeCopy'>
            <Header> Collective dedicated to rising talent and the proliferation of a global creative economy </Header>
            <Header> Specializing in Web3 culture and strategy </Header>
          </Segment>


          {buttons.map((button)=>{
            if(button.href){
                return(
                    <Button
                    fluid
                    className='blackHomeButton' href={button.href}>
                        {button.buttonName}
                    </Button>
                );

            }else if(button.modal){
                return(
                    <ServiceModal  open={open} setOpen={setOpen}/>
                )
            }else{
                return (
                    <Link to={`/${button.buttonName.toLowerCase()}`}>
                        <Button
                            fluid
                            className='blackHomeButton'> 
                            {button.buttonName}
                        </Button>
                    </Link>
                    );
            }
         
          })}
        </Grid.Column>
      </Grid.Row>
    </Grid>);
};

export default Home;