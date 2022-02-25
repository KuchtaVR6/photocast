import MoreInfo from './MoreInfo.js'
import Coming from './Coming.js'

const Landing = () => {
  return (
    <div id="landing">
      <div id="temperature">
        <Coming name="Jhanvi" due="28.02" comment={"isMetric : boolean"}/>
      </div>
      <div id="hours">
        <Coming name="Alexis" due="28.02"/>
      </div>
      <MoreInfo />
    </div>
  )
}

export default Landing
