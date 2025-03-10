
import { MenuItem } from "./MenuItem"

export function MenuList({list}){
    return(
        <ul className=" ">
            {
                list && list.length ? 
                list.map((item, i) => {
                    return(
                        <MenuItem item={item} key={i} />
                    )
                })
                : null
            }
        </ul>
    )
}
