
import React,{useState} from 'react';
import LightSwitchBox from '../ui/LightSwitchBox';
import Lights from '../ui/Lights';
import LightSwitches from '../ui/LightSwitches';



function LightSwitch() {
    const [toggleOne, setToggleOne] = useState(false);
    const [toggleTwo, setToggleTwo] = useState(false);
    const [colorOne,setColorOne]=useState("grey")
    const [colorTWo,setColorTwo]=useState("grey")
    

    const lightOne = () => {
        setToggleOne(toggleOne => !toggleOne);
        toggleOne?setColorOne("grey"):setColorOne("orange")

    };
    const lightTwo = () => {
        setToggleTwo(toggleTwo => !toggleTwo);
        toggleTwo?setColorTwo("grey"):setColorTwo("orange")
        

    };
    return (

        <LightSwitchBox>
            <Lights>
                <lamp1 style={{backgroundColor:colorOne}}/>
                <lamp2 style={{backgroundColor:colorTWo}} />
            </Lights>
            <LightSwitches>
                <button onClick={lightOne}>{toggleOne?"OFF":"ON"}</button>
                <button onClick={lightTwo}>{toggleTwo?"OFF":"ON"}</button>
            </LightSwitches>



        </LightSwitchBox>
    );
}

export default LightSwitch;