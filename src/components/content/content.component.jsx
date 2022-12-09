import {Grid} from 'semantic-ui-react';
import './content.styles.scss';

const Content = ({videos})=>{
    return(
    <Grid container>
        <Grid.Row>
            <Grid.Column width={16}>
            
            {
                videos.map((video)=>{
                    return(
                        <iframe width="560" 
                        height="315" 
                        src={`https://www.youtube.com/embed/${video.id.videoId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            
                        </iframe>
                    )
                })
            }
           
            </Grid.Column>
        </Grid.Row>
    </Grid>);
};

export default Content;