import{Component} from 'react';
import 'semantic-ui-css/semantic.min.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {Grid, Image, Header, Button, Segment} from 'semantic-ui-react'
import Slider from 'react-slick'
import './content-slider.styles.css'

class ContentSlider extends Component{
    render(){

        const settings = {
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            autoplay: true
        };

        const {content} = this.props;


        return(
                       
        <Slider className='sliderContainerStyling' {...settings}>
        {content.map((item)=>{
          console.log();
          

      
        return(
        <Grid key={item.id} verticalAlign='bottom' textAlign='center' className='sliderGrid'>
          <Grid.Row centered>
            <Grid.Column width="12">
            <Header attached="bottom" className='artistDetails'>{item.name}</Header>

            </Grid.Column>

          </Grid.Row>

          <Grid.Row stretched centered={true} className={"item"+item.id}> 


            <Grid.Column stretched tablet="7" computer="7" mobile="14"
            className='visualContent' 
            style={{backgroundImage: "url('"+item.image_url+"')"}} 
            onClick={()=>{
                console.log("click");
                window.location.assign(item.permalink);
              }}
            >

 

            </Grid.Column>

           


            <Grid.Column tablet="7" computer="7" mobile="14" className='artistDetailsRow'>
              

                 <Segment className='artistDetails'>
                    {item.description}
                  </Segment>
                  <Button className="sliderButton" onClick={
                    ()=>{
                      window.location.assign(item.permalink);
                    }
                  }> Support {item.traits.map((trait)=>{
                    if (trait.trait_type.includes("Artist")){
                    return trait.value }
                  })}</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        )
        })}
      </Slider>)
    };
}

export default ContentSlider;