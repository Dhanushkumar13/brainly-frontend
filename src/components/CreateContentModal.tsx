import { useRef, useState } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";
import axios from "axios";
import { BACKEND_URL } from "../config";

enum ContentType{
    Youtube = "youtube",
    Twitter = 'twitter'
}

export function CreateContentModal({open, onClose}){
    const titleRef = useRef<HTMLInputElement>();
    const linkRef = useRef<HTMLInputElement>();
    const [type, setType] = useState(ContentType.Youtube);


    async function addContent(){
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;

        await axios.post(`${BACKEND_URL}/api/v1/content`,{
            link,
            type,
            title
        },{
            headers:{
                "Authorization" : localStorage.getItem("token")
            }
        })

        onClose();
   }
 
    
    return(
        <div>
            {open && <div>
                <div className="w-screen h-screen bg-black fixed top-0 left-0 bg-opacity-80 flex justify-center">
                    <div className="flex flex-col justify-center">

                        <span className="bg-white p-4 rounded opacity-100">
                            <div className="flex justify-end cursor-pointer" onClick={onClose}>
                                <CrossIcon/>
                            </div>
                            <div>
                                <Input reference={titleRef} placeholder='Title'/>
                                <Input  reference={linkRef} placeholder='Link'/>
                            </div>
                            <div>
                                <h1 className="pl-4">Type</h1>
                                <div className="flex gap-4 p-4">
                                    <Button onClick={()=>{
                                        setType(ContentType.Youtube)
                                    }} text="Youtube" variant={type === ContentType.Youtube ? "primary" :"secondary"}></Button>
                                    <Button onClick={()=>{
                                        setType(ContentType.Twitter)
                                    }} text="Twitter" variant={type === ContentType.Twitter ? "primary" :"secondary"}></Button>
                                </div>  
                            </div>
                            <div className="flex justify-center"> 
                            <Button onClick={addContent} variant="primary" text="Submit"/>
                            </div>
                        </span>

                    </div>
                </div>
                </div>
            }
        </div>
    )
}

