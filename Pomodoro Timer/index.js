function Pomodoro(){
    const [currentTime,setTime]=React.useState(25*60);
    const [sessionTime,setSessionTime] = React.useState(25*60);
    const [breakTime,setBreakTime] = React.useState(5*60);
    const [timerOn, setTimerON]= React.useState(false);
    const [breakOn, setBreakOn]= React.useState(false);
    const [sound, setSound]=React.useState(
        new Audio("./beep-09.wav"));
    
    const playSound=()=>{
        sound.currentTime= 0;
        sound.play();
    }

    const tickTick=()=>{
        let second = 1000;
        let date = new Date().getTime();
        let nextDate = new Date().getTime()+second;
        let onBreakVaraible = breakOn;
        if(!timerOn){
        let interval = setInterval(function() {
                let date = new Date().getTime();
                if (date>nextDate){
                    setTime((prev)=>{
                        if(prev<=0 && !onBreakVaraible){
                            playSound();
                            onBreakVaraible=true;
                            setBreakOn(true);
                            return breakTime;}
                        else if (prev<=0 && onBreakVaraible){
                            playSound();
                            onBreakVaraible=false;
                            setBreakOn(false);
                            return sessionTime;
                        }                        
                        return prev-1;
                    });
                    nextDate +=second;
                }
        },30); 
        localStorage.clear();
       localStorage.setItem('interval-id',interval)
    }
    if(timerOn){
        clearInterval(localStorage.getItem("interval-id"));
    }
    setTimerON(!timerOn);
    }
   

    const setReset=()=>{
        setTime(25*60);
        setBreakTime(5*60);
        setSessionTime(25*60);
    }
    const changeCount=(num,type)=>{
            if(type =="Break"){
                if(breakTime<=60 && num <0){
                    return;
                }
                setTime(setBreakTime(prev=>prev+num))
              
            }
            else {
                if(sessionTime<=60 && num <0){
                    return;
                }
                setSessionTime(prev=>prev+num );
                }
            if(!timerOn){
                setTime(sessionTime+num)
            }
            else{
                setTime(breakTime+num)
            }
            }
     
       
    
    
   
   
   const formatTime =(time)=>{
        let minutes = Math.floor(time/60);
        let seconds = time % 60;
        return ((minutes < 10 ? "0"+minutes:minutes )+":" + (seconds < 10 ? "0" + seconds:seconds))
    }
    return(
        <div className="center-align">
            <div className="dual-container">
               
                <Template id="break-label" name="Break"time={breakTime} formatTime={formatTime} changeCount={changeCount}/>
                <h3>Pomodoro Timer</h3>
                <Template id="session-label" name="Session" time={sessionTime} formatTime={formatTime} changeCount={changeCount}/> 

            </div>
            <h1>{breakOn?"Break":"Session"}</h1>
            <h1  className=" center-align timer">{formatTime(currentTime)}</h1>
            <div className="control-buttons">
               
                <button  onClick={()=>tickTick()} className="controlButtons btn-large deep-orange lighten-2" >
                {
                    timerOn ?  <i className="material-icons">pause_circle_outline</i> :<i className="material-icons">play_circle_outline</i>
                }
                
                </button>
                <button onClick={()=>setReset()} className="btn-large deep-purple lighten-2" >
                <i className="material-icons">cached</i>
                </button>
            </div>
        </div>
    )
}

function Template ({name,time,formatTime,changeCount}){
    return(
        <div  className="center-align">
            <h2 > {name} </h2>
            <div className="time-sets">
                <button className="btn-large green playPause" onClick={()=>changeCount(60,name)}>
                    <i className="material-icons">arrow_upward</i>
                </button>
                <h1>{formatTime(time)}</h1>
                <button className="btn-large green clear "  onClick={()=>changeCount(-60,name)}>
                    <i className="material-icons">arrow_downward</i>
                </button>
                
            </div>
       </div>
    )
}
ReactDOM.render(<Pomodoro/>,document.getElementById("root"))