
import { MenuList } from "./MenuList"
import { sideMenu } from "../../data/sidemenu"

export function TreeView(){

    return(
        <div className="h-screen w-[200px] bg-blue-700 text-white ">
            <MenuList list={sideMenu} />
        </div>
    )
}
