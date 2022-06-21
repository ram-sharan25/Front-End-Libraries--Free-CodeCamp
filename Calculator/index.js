function App(){

    const [expression,setDisplay] = React.useState("");
    const [answer,setAnswer]      = React.useState(0);
   

    const display=(symbol)=>{
        setDisplay((prev)=>prev+symbol)
       
    }
    const calculate =()=>{
        setAnswer(eval(expression).toFixed(4));
        setDisplay(prev=>eval(prev).toFixed(4));
        
    }
   
    const allClear=()=>{
        setDisplay("")
        setAnswer(0);
    }
    return (
        <div className="container text-center">
            <div className="grid">
                
                <div  className="dis ">
                    <input  className="input dis" value={expression} type="text" disabled /><br/>
                </div>
                <div id="display"  className="total">{answer}</div>
                <div id="clear" onClick={()=>allClear()} className="padButton AC">AC</div>
                <div onClick={()=>display("**")} className="padButton POW">^</div>
                <div onClick={()=>display("/")}id="divide" className="padButton math divide">/</div>
                <div onClick={()=>display("7")}id="seven" className="padButton number seven">7</div>
                <div onClick={()=>display("8")}id="eight" className="padButton number eight">8</div>
                <div onClick={()=>display("9")}id="nine" className="padButton number nine">9</div>
                <div onClick={()=>display("*")}id="multiply" className="padButton math product">*</div>
                <div onClick={()=>display("4")}id="four" className="padButton number four">4</div>
                <div onClick={()=>display("5")}id="five" className="padButton number five">5</div>
                <div onClick={()=>display("6")}id="six" className="padButton number six">6</div>
                <div onClick={()=>display("-")}id="subtract" className="padButton  math minus">-</div>
                <div onClick={()=>display("1")}id="one" className="padButton number one">1</div>
                <div onClick={()=>display("2")}id="two" className="padButton number two">2</div>
                <div onClick={()=>display("3")}id="three" className="padButton number three">3</div>
                <div onClick={()=>display("+")}id="add" className="padButton math add">+</div>
                <div onClick={()=>display(".")}id="decimal" className="padButton number decimal">.</div>
                <div onClick={()=>display("0")}id="zero" className="padButton number zero">0</div>

                <div onClick={()=>calculate()} id="equals" className="padButton equals">=</div>                                     
                                 
        </div>
    </div>
    )
}

ReactDOM.render(<App/>,document.getElementById("root"))