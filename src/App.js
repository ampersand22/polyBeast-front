import {useState, useEffect } from 'react';
import Login from './components/Login'
import Navbar from './components/Navbar';
import './App.css';
import axios from 'axios'
import useStyles from './components/hooks/useStyles';
import useTimer from './components/hooks/useTimer';
import {Provider} from './components/hooks/useStore'
import useStore from './components/hooks/useStore'
import TrackList from './components/TrackList';
import ToolBar from './components/Toolbar';
import Steps from './components/Steps';
import PianoRoll from './components/PianoRoll/PianoRoll';
import Piano2 from './components/PianoRoll/Piano2';
import _ from 'lodash';


// import { Song, Track, Instrument, Effect } from 'reactronica';
// import SequencesList from './features/sequences/SequencesList'
// import AddSequenceForm from './features/sequences/AddSequenceForm'
// import EditSequenceForm from './features/currentSequence/EditSequence'
// import MonoSynth from './components/MonoSynth'
// import MonoSynth2 from './components/MonoSynth2'
// import PolyBeast0 from './components/PolyBeast0'
// import PolyBeast1 from './components/PolyBeast1'
// import PolyBeast2 from './components/PolyBeast2'
// import { useSelector, useDispatch } from 'react-redux'
// import { selectCurrentSequence } from './features/currentSequence/currentSequenceSlice'
// import { changeTempo } from './features/currentSequence/currentSequenceSlice'
// import DeleteSequenceForm from './features/sequences/DeleteSequenceForm';



function App() {
  // const dispatch = useDispatch()
  // const currentSequence = useSelector(selectCurrentSequence)

  const [sequences, setSequences] = useState([])
  const [isPlaying, setIsPLaying] = useState(false)
  const [volume, setVolume] = useState()
  const [currentUser, setCurrentUser] = useState({})
  const [showPianoRoll, setShowPianoRoll] = useState(false);
  const [showBeats, setShowBeats] = useState(false);


  const handleVolume = (e) => {
    setVolume(e.target.value)
  }
  // const handleTempo = (e) => {
  //   dispatch(changeTempo(e.target.value))
  //   // changeTempo(e.target.value)
  // }
  const play = () => {
    setIsPLaying(!isPlaying)
  }


  //------------------------------------------
  //  STORE IS UNDEFINED AT PAGE LOAD
  //------------------------------------------
  let bpm
  let sequenceName
  // if (currentSequence === undefined) {
  //   sequenceName = ''
  //   bpm = 100
  // } else {
  //   sequenceName = currentSequence.name
  //   bpm = currentSequence.tempo
  // }

  const baseBPMPerOneSecond = 60
    const stepsPerBar = 8
    const beatsPerBar = 4
    const barsPerSequence = 4 
    const totalSteps = stepsPerBar * barsPerSequence
    const totalBeats = beatsPerBar * barsPerSequence

    const [bpm2, setBPM] = useState(120)
    const [startTime, setStartTime] = useState(null)
    const [pastLapsedTime, setPastLapse] = useState(0)
    const [currentStepID, setCurrentStep] = useState(null)
    const [getNotesAreaWidthInPixels] = useStyles(totalSteps)

    const notesAreaWidthInPixels = getNotesAreaWidthInPixels(totalSteps)
    const timePerSequence = baseBPMPerOneSecond / bpm2 * 1000 * totalBeats
    const timePerStep = timePerSequence / totalSteps
    const isSequencePlaying = startTime !== null
    const playerTime = useTimer(isSequencePlaying)
    const lapsedTime = isSequencePlaying ? Math.max(0, playerTime - startTime) : 0
    const totalLapsedTime = pastLapsedTime + lapsedTime

    useEffect(() => {
        if (isSequencePlaying) {
            setCurrentStep(Math.floor(totalLapsedTime / timePerStep) % totalSteps)
        } else {
            setCurrentStep(null)
        }
    }, [isSequencePlaying, timePerStep, totalLapsedTime, totalSteps])

    const toolBarProps = {
        setStartTime,
        setPastLapse,
        setBPM,
        isSequencePlaying,
        startTime,
        bpm2
    }

    const playHeadProps = {
        notesAreaWidthInPixels,
        timePerSequence,
        totalLapsedTime
    }

    const trackListProps = {
        currentStepID
    }


  return (
      <>

        <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />

        
        <div className="top-container">
            <h1 className="beats-title">polybeast</h1>
            <button className='piano-btn' onClick={() => setShowPianoRoll(!showPianoRoll)}>Piano Roll</button>
        </div>
        <div className='beast-container'>
            <h3 className='seq-name'>{sequenceName}</h3>
            <div className='crud-container'>
              {/* <AddSequenceForm/>
              <SequencesList />
              <EditSequenceForm />
              <DeleteSequenceForm /> */}
            </div>
          <div className='synth-ctrl'>
            {isPlaying ? <button className="stop-btn" onClick={() => play()}>Stop</button> : <button className="main-play-btn" onClick={() => play()}>Play</button> }
            <label>Main volume</label>
            <input onChange={handleVolume} type='range' step='1' min='-100' max='0' ></input>
            {/* <label>Tempo: {bpm} bpm</label> */}
            {/* <input onChange={handleTempo} type='range' step='1' min='10' max='700' ></input> */}
          </div>
        
          <div>
            {/* <Song isPlaying={isPlaying} volume={volume} bpm={bpm}>
              <div className="song-container"><PolyBeast2 /></div>
              <div className="song-container"><PolyBeast1 /></div>
              <div className="song-container"><PolyBeast0 /></div>
                <div className="spacer"></div>
            </Song><br/> */}
          </div>
        </div>
        
        {showPianoRoll ?
        <div>
          <PianoRoll />
          <Piano2 /></div>  : null }

        <div className='top-container'>
          <h1 className="beats-title">polyBeats</h1>
        </div>
        <Provider>
          <div className='beats-container'>
            <main className="app">
                <div className="tool-container">
                    <ToolBar {...toolBarProps} />
                </div>
                <Steps count={totalSteps} />
                <div className="track-container">
                    <TrackList {...trackListProps} />
                </div>
                <footer className="app_footer">
                </footer>
            </main >
        </div>
        </Provider>
      </>
  );
}

export default App;
