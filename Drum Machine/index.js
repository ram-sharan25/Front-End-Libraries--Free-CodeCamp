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
        this.state={
            volume : 1,
            muted:false,
        }
        this.setVolume=this.setVolume.bind(this)
        this.setMuted = this.setMuted.bind(this)
    }
    setVolume(event){
        this.setState({
            volume:event.target.value
        })
    }
    setMuted(state){
    this.setState(state=>({
     muted:!state.muted
    }));
    }
  
       
    render(){
        return(
            <div className=" text-center bg-info min-vh-100">
                 <h4>DrumBeats</h4>
                <div className="container" >
                   
                    <div className="padBank"id="drum-machine" >
                        {
                            audioClips.map(items=>(
                                <PlayAudio  key = {items.id} sound={items} volume={this.state.volume} mute={this.state.muted}  />
                            ))
                        }
                    </div>
                    <br/>
                    <p id='display'>{this.state.display}</p>
                    <br/>
                    <div className=" slider text-center">
                        <h4>Volume</h4>
                        
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={this.state.volume}
                        onChange={this.setVolume}
                        />
                        <button type="button" onClick={this.setMuted} className="btn btn-default">{this.state.muted ?"muted":"unmuted"}</button>
                      
                    </div>
                </div>
            </div>
        )
    }
}



function PlayAudio({sound,volume,mute}){
   
  
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
        drumBeats.muted=mute;
        drumBeats.play();
        drumBeats.volume=volume;
 
       
    }
    return(
      
        <div  onClick={playSound}  className="drum-pad btn btn-dark p-5 m-3">
        <audio  className="clip" id={sound.keyTrigger} src={sound.url} ></audio> 
        
        {sound.keyTrigger}
        
        </div>
        
     
    )
}

ReactDOM.render(<App/>,document.getElementById('root'));