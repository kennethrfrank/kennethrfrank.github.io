import {Component} from 'react'
import 'semantic-ui-css/semantic.min.css'
import {Input} from 'semantic-ui-react'

class SearchBox extends Component{

render(){

    return(
        <Input 
                  icon='search' 
                  className="searchArtists" 
                  fluid 
                  placeholder="Search Artists" 
                  onChange={this.props.onChangeHandler}/>
    );
}


}

export default SearchBox;