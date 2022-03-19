import MoreInfo from './MoreInfo.js'
import TimesTop from './TimesTop.js'
import Temp from './Temp.js'

import { useState, useEffect } from 'react'

var interval;

const Landing = ({weatherData, isMetric}) => {
  const[time, setTime] = useState(0)

  useEffect(() => {
    const refreshTime = () => {
      setTime(((new Date()).getTime() / 1000)+weatherData['timezone_offset']);
    }
    clearInterval(interval);
    refreshTime();
    interval = setInterval(refreshTime, 10000)
  },[weatherData]);
  
  return (
    <div id="landing">
      <div id="temperature">
        <Temp
          normalTemp={weatherData['daily'][0]['temp']['day']}
          lowTemp={weatherData['daily'][0]['temp']['min']}
          highTemp={weatherData['daily'][0]['temp']['max']}
          status={weatherData['current']['weather']['0']['main']}
          isMetric={isMetric}
        />
      </div>
      <div id="hours">
        <TimesTop time={time} sunrise={weatherData['current']['sunrise']+weatherData['timezone_offset']} sunset={weatherData['current']['sunset']+weatherData['timezone_offset']} nextSunrise={weatherData['daily']['1']['sunrise']+weatherData['timezone_offset']}/>
      </div>
      <MoreInfo 
        weatherData={weatherData}
        isMetric = {isMetric}
        />
    </div>
  )
}

export default Landing
