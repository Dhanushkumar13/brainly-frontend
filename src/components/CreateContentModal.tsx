import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";

export function CreateContentModal({open, onClose}){
   
 
    
    return(
        <div>
            {open && 
                <div className="w-screen h-screen bg-black fixed top-0 left-0 bg-opacity-80 flex justify-center">
                    <div className="flex flex-col justify-center">

                        <span className="bg-white p-4 rounded opacity-100">
                            <div className="flex justify-end cursor-pointer" onClick={onClose}>
                                <CrossIcon/>
                            </div>
                            <div>
                                <Input placeholder='Title'/>
                                <Input placeholder='Link'/>
                            </div>
                            <div className="flex justify-center"> 
                            <Button variant="primary" text="Submit"/>
                            </div>
                        </span>

                    </div>
                </div>
            }
        </div>
    )
}

function Input({onChangeXIcon, placeholder}: {onChangeXIcon: () => void}){
    return(
        <div>
            <input placeholder={placeholder} type='text' className="px-4 py-4 border rounded m-2" onChange={onChangeXIcon}>
            </input>
        </div>
    )
}