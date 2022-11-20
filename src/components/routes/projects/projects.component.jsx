import './projects.styles.scss'
import { Grid } from 'semantic-ui-react'
import ContentSegment from '../../content-segment/content-segment.component';
import SearchBox from '../../searchbox/search-box.component';
import ContentSlider from '../../content-slider/content-slider.component';

const Projects = ({spaceLooters, curatedByNclyne, onSearchChange, nclyneNfts}) => {
    
    return (
        <Grid centered>
            <Grid.Row>

                <Grid.Column mobile="13" tablet="7" computer="7" textAlign='center'>

                    {/* MODAL */}



                    {/* <ServiceModal open={open} setOpen={setOpen}></ServiceModal> */}
                    <ContentSegment segment={spaceLooters} />

                    {/* <Grid>
  <CenteredButtons socials={buttons} />
  </Grid> */}


                </Grid.Column>
                <Grid.Column mobile="13" tablet="7" computer="7" className='firstProject'>
                    <ContentSegment segment={curatedByNclyne} />
                    <SearchBox onChangeHandler={onSearchChange} />
                    <ContentSlider content={nclyneNfts} />

                </Grid.Column>


            </Grid.Row>
        </Grid>

    );
};

export default Projects;