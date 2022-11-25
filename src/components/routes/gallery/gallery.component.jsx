import { Grid } from "semantic-ui-react";

const Gallery = () =>{
    return(
        <Grid centered>
            <Grid.Column width={15}>
                <iframe src="http://nclyne.gallery" style={{height:"80vh", width: "100%", marginTop: "20px"}}>

                </iframe>
            </Grid.Column>
        </Grid>
    );
};

export default Gallery;