import{Component} from 'react';
import 'semantic-ui-css/semantic.min.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {Grid, Image, Header, Button} from 'semantic-ui-react'
import Slider from 'react-slick'

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
                       
        <Slider className='goldBG' {...settings}>
        {content.map((item)=>{
          console.log();
          

      
        return(
        <Grid key={item.id} className="sliderGrid">
          
          <Grid.Row stretched centered={true} className={"item"+item.id+ " sliderContents"} > 
            <Grid.Column mobile="8" computer="8">
            <Image centered className="visualContent" src={item.image_url} onClick={()=>{
              console.log("click");
              window.location.assign(item.permalink);
            }}></Image>
            </Grid.Column>
            <Grid.Column mobile="8" computer="8" className='artistDetailsRow'>
              <Header className='artistDetails'>{item.name}</Header>
              
              <Grid centered={true}>
                <Grid.Column mobile="16" tablet="16" computer="16">
                 <p className='artistDetails'>
                    {item.description}
                  </p>
                  <Button fluid className="sliderButton" onClick={
                    ()=>{
                      window.location.assign(item.permalink);
                    }
                  }> Support {item.traits.map((trait)=>{
                    if (trait.trait_type.includes("Artist")){
                    return trait.value }
                  })}</Button>
                </Grid.Column>
                </Grid>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        )
        })}
      </Slider>)
    };
}

export default ContentSlider;