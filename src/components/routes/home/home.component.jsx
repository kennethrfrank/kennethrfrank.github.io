import {Grid, Segment, Header, Button, ButtonOr} from "semantic-ui-react";
import './home.styles.scss';
import blackLogo from '../../../TSU_logo.gif'
import {Link} from 'react-router-dom'
import ServiceModal from "../../service-modal/service-modal.component";

const Home = ({setShopifyActive, buttons})=>{
    return(
    <Grid className="homeContainer" >
    <Grid.Row centered className="homeContentContainer">
        <Grid.Column  width= "14" verticalAlign='middle'>
          <Header textAlign='left' className='logoText' verticalAlign='middle'> <img src={blackLogo}></img></Header>

          <Segment className='homeCopy' textAlign="center">
            <Header> Selection of CyberSecurity-Focused Educational Gaming Experiences </Header>
            <Header> Curated by Joshua Finch, Jayden Webster and Kenneth Frank </Header>
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
                console.log(button.action);
                return(
                    <ServiceModal open={button.openModal} setOpen={button.setOpenModal} type={button.action} name={button.buttonName}/>
                )
            }else{
                return (
                    <Link to={`/${button.buttonName.toLowerCase()}`}>
                        <Button
                            fluid
                            className='blackHomeButton'>
                            {button.altname}
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