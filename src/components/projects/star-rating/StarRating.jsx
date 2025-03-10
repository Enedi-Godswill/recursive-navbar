
import { useState } from "react";
import { FaStar } from "react-icons/fa"

export function StarRating({noOfStars}){

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(getCurrentIndex){
        setRating(getCurrentIndex)
    }

    function handleMouseEnter(getCurrentIndex){
        setHover(getCurrentIndex)
    }

    function handleMouseLeave(){
        setHover(rating);
    }

    return(
        <div className="flex flex-col justify-center gap-3 flex-wrap items-center mt-2 ml-2 ">
           <h1>star Rating</h1>
          <div className="flex ">
            {
                [...Array(noOfStars)].map((_,i) => {
                    i += 1

                    return(
                        <div key={i}>
                            <button
                            className={`btn w-[40px] ${i <= (hover || rating) ? "text-[#fff700] " : "text-black" } ` }
                            onClick={() => handleClick(i)}
                            onMouseMove={() => handleMouseEnter(i)}
                            onMouseLeave={() =>  handleMouseLeave(i)}
                            ><FaStar /></button>
                        </div>
                    )
                })
            }
          </div>
        </div>
    )
}
