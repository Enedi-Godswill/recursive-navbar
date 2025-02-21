
import { useState } from "react"
import { accordData } from "./data/accord"

export function Accordion(){

    const [selected, setSelected] = useState();
    const [enableMultiSelect, setEnableMultiSelect] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingleSelection(getCurrentId){
        // console.log(getCurrentId);
        setSelected(getCurrentId === selected ? null : getCurrentId );
    }

    function handleMultiSelection(getCurrentId){
        let cpyMultiple = [...multiple];
        const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);

        console.log(findIndexOfCurrentId);
        if(findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId)
            else cpyMultiple.splice(findIndexOfCurrentId, 1);

        setMultiple(cpyMultiple);
        
    }

    // console.log(selected, multiple);
    

    return(
        <div className="w-full h-screen flex flex-col gap-3 font-semibold text-sm justify-center items-center ">
            <div className="flex flex-col items-center gap-2 ">
                <h1 className="text-xl">Simple Accordion Buttons</h1>
                <button className="border-2 p-1 rounded-md bg-black text-white hover:text-black hover:bg-white transition-all "
                onClick={()=> setEnableMultiSelect(!enableMultiSelect) }
                >enable multi-selection</button>
            </div>
            <div className="w-[18rem] sm:w-[22rem] md:w-[30rem] ">
                {
                    accordData && accordData.length > 0 ?
                    accordData.map((data) => {
                        return(
                            <div key={data.id} className="flex flex-col border-2 m-3 rounded-md justify-center p-3 ">
                                <div
                                className="flex justify-between p-1 cursor-pointer "
                                onClick={ enableMultiSelect ? () => handleMultiSelection(data.id)
                                    : () => handleSingleSelection(data.id)} >
                                    <h3>{data.question}</h3>
                                    <span>+</span>
                                </div>
                                {
                                    enableMultiSelect
                                    ? multiple.indexOf(data.id) !== -1 && (
                                        <div>{data.answer}</div>
                                    )
                                    : selected === data.id && (
                                        <div>{data.answer}</div>
                                    )
                                }
                                {/* {
                                    selected === data.id || multiple.indexOf(data.id) !== -1 ?
                                    <div>{data.answer}</div>
                                    : null
                                } */}
                            </div>
                        )
                    })
                    : <div>no data here</div>
                }
            </div>
        </div>
    )
}