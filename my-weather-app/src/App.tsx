import './App.css'
import notFondLogo from './assets/404.png'
import cleareLogo from './assets/clear.png'
import cloudLogo from './assets/cloud.png'
import mistLogo from './assets/mist.png'
import rainLogo from './assets/rain.png'
import showLogo from './assets/snow.png'

function App() {
  return (
    <>
      <div className="card">  
        <div className="screach">
          <input type="text" placeholder="Enter your location" className='screach-inp'></input>
          <button className="screach-button"></button>
        </div>   
        <div className="notFond">
          <img src={notFondLogo}/>
          <p>Упс тут нечего нет</p>
        </div>
        <div className="result-screach">
          <div className="image">
            <img src={cleareLogo}/>
            <img src={cloudLogo} />
            <img src={rainLogo}/>
            <img src={showLogo}/>
          </div>
          <div className="spead-widh">
            <img src={mistLogo}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
