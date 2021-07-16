import './App.css';
import React from 'react';
import Axios from 'axios';
import DisplayWeather from './components/DisplayWeather';
import NavBar from './components/NavBar';
class App extends React.Component{

  state={
    data : {},
    inputData: ""
  }
  
  //track the input field
  change = (value) =>{
    this.setState({inputData:value})
  }
  
  changeWeather = (event) => {
    event.preventDefault();
    Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.inputData}&appid=26cbb171193181f971aaa80052a1d2a0`).then(res =>{
     let weatherData ={
        temperature :res.data.main.temp,
        maxTemperature :res.data.main.temp_max,
        minTemperature :res.data.main.temp_min,
        description :res.data.weather[0].description,
        wind_speed:res.data.wind.speed,
        pressure: res.data.main.pressure,
        humidity :res.data.main.humidity,
      
      }
      this.setState({data:weatherData});
      console.log(res.data)
    })
  }

  render(){
    return (
      <div className="App">
        <NavBar changeWeather={this.changeWeather} changeRegion={this.change}/>
        <DisplayWeather weatherData={this.state.data} change={this.state.inputData} />
      </div>
    );
  }
}

export default App;
