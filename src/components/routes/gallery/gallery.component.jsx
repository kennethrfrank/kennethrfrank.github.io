import { Grid, Button } from "semantic-ui-react";
import './gallery.styles.scss';

const Gallery = ({gallery, setGallery}) =>{
    return(
        <Grid centered>
            <Grid.Column width={15}>
                <Button className="blackGButton" fluid onClick={
                    ()=>{
                        if(gallery !== "rift-mark-2"){
                            setGallery("rift-mark-2");
                        }
                    }
                }>
                    ROOM 1 - Secure Facility Scavenger Hunt
                </Button>
                <Button className="blackGButton" fluid onClick={
                    ()=>{
                        if(gallery !== "digitalexpression"){
                            console.log("changing");
                            setGallery("digitalexpression");
                        }
                    }
                }>
                    ROOM 2 - Privacy Identity & Expression in the Digital Age
                </Button>
                <Button className="blackGButton" fluid onClick={
                    ()=>{
                        if(gallery !== "nclyne"){
                            console.log("changing");
                            setGallery("nclyne");
                        }
                    }
                }>
                    ROOM 3 - Let's Talk Encryption
                </Button>
                
                <iframe title="onCyber" className="onCyberGallery" src={`https://oncyber.io/${gallery}`}>

                </iframe> 
            </Grid.Column>
        </Grid>
    );
};

export default Gallery;