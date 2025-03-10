
import { useState } from "react";
import { MenuList } from "./MenuList";

export function MenuItem({item}){

    const [displayChildren, setDisplayChildren] = useState({});

    function handleToggleChildren(getCurrentlabel){
        setDisplayChildren({
            ...displayChildren, [getCurrentlabel] : !displayChildren[getCurrentlabel]
        })
    }

    return(
        <li>
            <div className="flex flex-col items-center gap-3 cursor-pointer ">
                <p>{item.label}</p>
                {
                    item && item.children && item.children.length ?
                    <span className="cursor-pointer" onClick={()=>handleToggleChildren(item.label)}>
                        {
                            displayChildren[item.label] ? "-" : "+"
                        }
                    </span>
                    : null
                }
                {
                    item && item.children && item.children.length > 0 && displayChildren[item.label] ?
                    <MenuList list={item.children} />
                    : null
                }
            </div>
        </li>
    )
}
