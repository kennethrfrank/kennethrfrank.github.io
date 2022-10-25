import logo from './logo.png';
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import _ from 'lodash'
import { Grid, Image, Button} from 'semantic-ui-react'


function App() {
  return (
    <div className="App">
      <Grid columns ={3} centered>
        <Grid.Row className="navbar">

          <Grid.Column className="navbarColumn" floated="left">
              <Image className="NclyneLogo" src={logo}></Image>
          </Grid.Column>
          <Grid.Column className="navbarColumn" floated="right">
            <h4 className="tagline">
            Helping creators take the next step.
            </h4>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row >
              <Grid.Column className="theButtons">
                <div className="blackButton" onClick="https://medium.com/nclyne">MEDIA</div>
              </Grid.Column>
              <Grid.Column className="theButtons">
              <div className="blackButton" onClick="https://medium.com/nclyne">WORK</div>
              </Grid.Column>
              <Grid.Column className="theButtons">
              <div className="blackButton" onClick="https://medium.com/nclyne">ABOUT</div>
              </Grid.Column>
        </Grid.Row>
      </Grid>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src=App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button>Click Here</Button>
      </header>

      
    </div>
  );
}

export default App;
