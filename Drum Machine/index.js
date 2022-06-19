const audioClips=[
    {
      keyCode: 81,
      keyTrigger: 'Q',
      id: 'Heater-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
      keyCode: 87,
      keyTrigger: 'W',
      id: 'Heater-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
      keyCode: 69,
      keyTrigger: 'E',
      id: 'Heater-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
      keyCode: 65,
      keyTrigger: 'A',
      id: 'Heater-4',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
      keyCode: 83,
      keyTrigger: 'S',
      id: 'Clap',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
      keyCode: 68,
      keyTrigger: 'D',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
      keyCode: 90,
      keyTrigger: 'Z',
      id: "Kick-n'-Hat",
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
      keyCode: 88,
      keyTrigger: 'X',
      id: 'Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
      keyCode: 67,
      keyTrigger: 'C',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
  ];

  
  const activeStyle = {
    backgroundColor: 'orange',
    boxShadow: '0 3px orange',
    height: 77,
    marginTop: 13
  };
  
  const inactiveStyle = {
    backgroundColor: 'grey',
    marginTop: 10,
    boxShadow: '3px 3px 5px black'
  };

class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="text-center bg-info">
                <h1> Hello World</h1> 
                {
                    audioClips.map(items=>(
                        <PlayAudio key = {items.id} sound={items} />
                    ))
                }
            </div>
        )
    }
}



function PlayAudio({sound}){
    React.useEffect(()=>{
        document.addEventListener("keypress",handleKeyPress)
        return()=>document.removeEventListener("keypress",handleKeyPress);
    },[])

   const  handleKeyPress=(event)=>{
    if (event.keyCode==sound.keyCode){
            playSound();
    }

   }
    const playSound=()=>{
        const drumBeats = document.getElementById(sound.keyTrigger)
        drumBeats.currentTime =0;
        drumBeats.play();
    }
    return(
        <div onClick={playSound}  className="btn btn-dark p-4 m-3">
        <audio  className="sound" id={sound.keyTrigger} src={sound.url} ></audio>    
            {sound.keyTrigger}

        </div>
    )
}
ReactDOM.render(<App/>,document.getElementById('root'));