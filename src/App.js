import React, {Component} from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import nickimg from './assets/lilnick.jpg'
import Image from 'react-bootstrap/Image'
import About from './components/AboutComponent';
import Sites from './components/SitesComponent';
import './App.css';
import { Container, Row } from 'react-bootstrap';

class App extends Component {
  state = {
    showComponent: 'About'
  }

  changeComponentHandler = (component) => {
    this.setState({showComponent: component})
  }
  

  render() {
    let renderComponent = this.state.showComponent;
    let component;
    if (renderComponent === "About") {
      component = <About />
    } else if (renderComponent === "Sites") {
      component = <Sites />
    } 

    return (
     <Container style={{
       backgroundColor: 'black'
     }}>
        <div>
          <Image src={nickimg} alt="Image of Nicholas Burney" fluid />
        </div>
        <Row>
          <a className="abtn" onClick={() => this.changeComponentHandler("About")}>about</a>
          <a className="abtn" onClick={() => this.changeComponentHandler("Sites")}>sites</a>
        </Row>
        <div>
          {component}
        </div>
      </Container>
    );
  }

}

export default App;
