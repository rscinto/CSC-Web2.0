import React, { Component } from 'react';
import Banner from './Banner.png';
//import Logo from '/public/bear.png'
import ClubLogo from './ClubLogo.png';
import Placeholder from './Placeholder.jpg';
import { Carousel } from 'react-responsive-carousel';
import './fonts.css';
import './App.css';
import './Carousel.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import BigCalendar from 'react-big-calendar';
import Calendar from 'react_google_calendar'
import moment from 'moment';
import config from './config.json'

const calendar_configuration = {
    api_key: config.calendar_api_key,
    calendars: [
      {
        name: 'demo', // whatever you want to name it
        url: 'srjc.computer.science.club@gmail.com' // your calendar URL
      }
    ],
    dailyRecurrence: 700,
    weeklyRecurrence: 500,
    monthlyRecurrence: 20
}

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      pageNumber: 0,
      localizer: BigCalendar.momentLocalizer(moment),
      carouselItem: 0,
      events:[]
    };

    this.HomeButton = this.HomeButton.bind(this);
    this.AboutButton = this.AboutButton.bind(this);
    this.CalendarButton = this.CalendarButton.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
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

  nextSlide(){
    if(this.state.carouselItem === 2){
      this.setState({carouselItem: 0})
    }
    else{
      this.setState({carouselItem: this.state.carouselItem + 1})
    }
  }

  prevSlide(){
    if(this.state.carouselItem === 0){
      this.setState({carouselItem: 2})
    }
    else{
      this.setState({carouselItem: this.state.carouselItem - 1})
    }
  }

  render() {

    console.log(this.state.carouselItem);

    const pageNumber = this.state.pageNumber;
    let content;

    if (pageNumber === 0) {
      content =
      <div className="Carousel">
      <div>1447 Bussman Hall Tuesday 12-2pm</div>
      <button onClick={this.nextSlide}>Next</button>
      <button onClick={this.prevSlide}>Previous</button>
      <Carousel
      showThumbs={false}
      showArrows={false}
      infiniteLoop={true}
      width="45%"
      autoPlay={false}
      interval={3000}
      transitionTime={350}
      useKeyboardArrows={true}
      selectedItem={this.state.carouselItem}
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
    }
    if (pageNumber === 1) {
      content =
      <div className="column">
      To promote a culture of learning within the Computer Science community of
      Santa Rosa Junior College, and to encourage members to seek out
      opportunities to expand their knowledge. The club’s goal is to create a
      professional environment for people to collaborate with each other to
      create innovative projects and gives students a chance to further explore
      the vast field of Computer Science. We welcome anyone to join.
      </div>
    }
    if (pageNumber === 2) {
      content =
      <div className="Calendar">
      <Calendar
        events={this.state.events}
        config={calendar_configuration} />
      </div>
    }

    return (
      <div className="App">
        <header>
          <div className="Logo">
            <img src='bear.png'/>
            <span>SRJC Computer Science Club</span>
          </div>
          <nav className="Taskbar">
              <a onClick={this.HomeButton} className="TaskbarButton">Home</a>
              <a onClick={this.AboutButton} className="TaskbarButton">About</a>
              <a onClick={this.CalendarButton} className="TaskbarButton">Calendar</a>
              <a onClick={this.CalendarButton} className="TaskbarButton">Contact</a>
          </nav>
        </header>
        <main>
          <div className="Content">
            {content}
          </div>
        </main>
        <footer>
          <div className="footer">

            <div className="column left">
              <img src={ClubLogo} />
            </div>

            <div className="column right">
              <h2>Content</h2>
              clubE-mail@example.com
              <a href="https://srjccsc.slack.com/messages/C0LTMAXN3">Visit our Slack</a>
            </div>

          </div>
        </footer>
      </div>
    );
  }
}

export default App;
