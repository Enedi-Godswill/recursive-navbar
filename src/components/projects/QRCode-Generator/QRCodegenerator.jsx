
import { QRCodeCanvas } from "qrcode.react";
import { useState } from "react"

export function QRCodeGenerator(){

    const [qrCode, setQrCode] = useState();
    const [input, setInput] = useState();

    function handleGenerateQrCode(){
        setQrCode(input);
        setInput("");
    }

    return(
        <div className="h-screen w-full flex justify-center items-center flex-col gap-3 ">
            <h1>QR Code Generator</h1>
            <div className="flex flex-col gap-3">
                <input 
                onChange={(e) => setInput(e.target.value)}
                type="text" value={input} name="qr-code" placeholder="Enter your value here" />
                <button
                disabled={ input && input.trim() !== "" ? false : true }
                onClick={handleGenerateQrCode}
                >generator</button>
            </div>
            <div>
                <QRCodeCanvas value={qrCode} id="qr-code-value" />
            </div>
        </div>
    )
}
