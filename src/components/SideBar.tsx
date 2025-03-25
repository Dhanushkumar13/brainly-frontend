import { BrainIcon } from "../icons/BrainIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SideBarItem } from "./SideBarItem";

export function Sidebar(){
    return(
        <div className="h-screen bg-white border-r w-72 fixed pl-4" >
            <div className="flex text-2xl mt-4">
                <div className="pr-4">
                <BrainIcon/>
                </div>
                <div className="mt-5">
                    Brainly
                </div>
            </div>
            <div className="pt-7 pl-2">
                <SideBarItem text="Twitter" icon={<TwitterIcon/>}/>
                <SideBarItem text="Youtube" icon={<YoutubeIcon/>}/>
            </div>
        </div>
    )
}