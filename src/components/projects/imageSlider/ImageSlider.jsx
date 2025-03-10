
import { useState } from "react"
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { imageData } from "../../data/data";

export function ImageSlider(){

    const [currentSlide, setCurrentSlide] = useState(1);
    
    function handlePrevious(){
        setCurrentSlide(currentSlide === 1 ? imageData.length : currentSlide - 1 )
    }
    
    function handleNext(){
        setCurrentSlide(currentSlide === imageData.length ? 1 : currentSlide + 1 )
    }

    return(
        <div className="flex flex-col gap-3 justify-center bg-orange-600 items-center w-full h-screen ">
            <h1 className="font-bold text-2xl uppercase">Image Slider project</h1>
            <div className="overflow-auto flex relative items-center justify-center ">
                <BsArrowLeftCircleFill 
                onClick={handlePrevious}
                className="absolute w-[2rem] h-[2rem] text-black cursor-pointer left-[1rem] " />
                <div className="flex flex-col gap-1 items-center ">
                    {
                        imageData && imageData.length ?
                        imageData.map((item) => {
                            return(
                                <div 
                                className="w-full "
                                key={item.id} >
                                    <img
                                    className={`${currentSlide === item.id ? "w-[15rem] h-[15rem] rounded-md" : "hidden" } `}
                                    src={item.imgUrl} alt="" />
                                </div>
                            )
                        })
                        : null
                    }
                </div>
                <BsArrowRightCircleFill 
                onClick={handleNext}
                className="absolute w-[2rem] h-[2rem] text-black cursor-pointer right-[1rem] " />
                <span className="flex absolute bottom-4 gap-1 ">
                    {
                        imageData && imageData.length ? 
                        imageData.map((item) => {
                            return(
                                <button
                                onClick={() => setCurrentSlide(item.id)}
                                className={` ${currentSlide === item.id ? "bg-black flex gap-1 h-[15px] w-[15px] border-r-[50%] border-2 m-1" : "bg-white " } `}
                                key={item.id}></button>
                            )
                        })
                        : null
                    }
                </span>
            </div>
        </div>
    )
}

