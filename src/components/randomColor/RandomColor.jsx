
import { useEffect, useState } from "react"

export function RandomColor(){

    const [typeOfColor, setTypeOfColor] = useState("hex");
    const [color, setColor] = useState("#000000");

    function randomColorUtility(length){
        return Math.floor(Math.random()*length);
    }

    function handleCreateRandomHexColor(){
        // #219873
        const hex = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
        let hexColor = "#";

        for(let i = 0; i < 6; i++){
            hexColor += hex[randomColorUtility(hex.length)]
        }
        setColor(hexColor); 
    }

    function handleCreateRandomRgbColor(){
        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const b = randomColorUtility(256);

        setColor(`rgb(${r},${g},${b})`);

    }

    useEffect(() => {
        if(typeOfColor === "rgb") handleCreateRandomRgbColor()
        else handleCreateRandomHexColor;
    }, [typeOfColor])

    return(
        <div className="w-full h-screen flex flex-col items-center" style={{background:color}} >
            <div className="flex items-center gap-3 p-5 ">
                <button
                onClick={() => setTypeOfColor('hex')}
                >create hex color</button>
                <button
                onClick={() => setTypeOfColor('rgb')}
                >create rgb color</button>
                <button
                onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor  }
                >generate random color</button>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center text-white text-2xl mt-5 ">
                <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color" }</h3>
                <h1>{color}</h1>
            </div>
        </div>
    )
}
