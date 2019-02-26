import React, { Component } from 'react';
import Banner from './Banner.png';
import ClubLogo from './ClubLogo.png';
import Placeholder from './Placeholder.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      pageNumber: 0
    }
    this.HomeButton = this.HomeButton.bind(this);
    this.AboutButton = this.AboutButton.bind(this);
    this.CalendarButton = this.CalendarButton.bind(this);
  }

  HomeButton(){
    this.setState({pageNumber: 0})
  }

  AboutButton(){
    this.setState({pageNumber: 1})
  }

  CalendarButton(){
    this.setState({pageNumber: 2})
  }

  render() {
    return (
      <div className="App">

        <div className="Banner">
          <img src={Banner}/>
        </div>

        <div className="Taskbar">
          <button onClick={this.HomeButton} className="rcorners1">Home</button>
          <button onClick={this.AboutButton} className="rcorners2">About</button>
          <button onClick={this.CalendarButton} className="rcorners3">Caldendar</button>
        <div>


        </div>
        </div>

        <div className="Content">
          1447 Bussman Hall Tuesday 12-2pm

          <Carousel
          showThumbs={false}
          infiniteLoop={true}
          width="45%"
          autoPlay={true}
          interval={3000}
          transitionTime={350}
          useKeyboardArrows={true}
          >
                <div>
                    <img src={Placeholder} />
                    <p className="legend">Designing the Webiste</p>
                </div>
                <div>
                    <img src={Placeholder} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={Placeholder} />
                    <p className="legend">Legend 3</p>
                </div>
          </Carousel>
        </div>


        <div className="footer">

          <div className="column left">
            <img src={ClubLogo} />
          </div>

          <div className="column right">
            <h2>Contact Us</h2>
            clubE-mail@example.com
            <p><a href="https://srjccsc.slack.com/messages/C0LTMAXN3">Visit our Slack</a>
            </p>
          </div>


        </div>
      </div>
    );
  }
}

export default App;
