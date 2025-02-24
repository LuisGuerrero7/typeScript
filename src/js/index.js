//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

let intervalID = null;
let counter = 0;

function updateCounter(){
    counter++;
    root.render(<MainComponent/>)
}

const MainComponent = () => {
    return (<>
        <Home seconds={counter}/>

            <label>Starting Value</label>
            <input type="number" onChange={(event)=>{
                counter = event.target.value;
                root.render(<MainComponent/>)
            }}/>

            <div className="p-2 d-flex gap-2">
                <button onClick={()=>{
                    intervalID = setInterval(updateCounter,1000);
                }} className="btn btn-success">
                        Start
                </button>
            </div>

            <button onClick={()=>{
                clearInterval(intervalID);
                intervalID = null;
                root.render(<MainComponent/>)
            }} className="btn btn-danger ">
                Stop
            </button>

            <button onClick={()=>{
                if(intervalID){
                    intervalID = null;
                    counter = 0;
                    root.render(<MainComponent/>)
                }
                else {
                    counter = 0;
                    root.render(<MainComponent/>)
                }
            }} className="btn btn-warning">
                Reset
            </button>
        
    </>)
}

let root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<MainComponent/>)


//render your react application


