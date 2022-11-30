import { Grid } from "semantic-ui-react";
import './gallery.styles.scss';

const Gallery = () =>{
    return(
        <Grid centered>
            <Grid.Column width={15}>
                <iframe className="onCyberGallery" src="https://oncyber.io/nclyne">

                </iframe>
            </Grid.Column>
        </Grid>
    );
};

export default Gallery;