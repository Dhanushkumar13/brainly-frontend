import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";

export function useContent(){
    const [contents, setContents] = useState([]);

    function refresh(){
        axios.get(`${BACKEND_URL}/api/v1/content`,{
            headers:{
                "Authorization": localStorage.getItem("token")
            }
        })
        .then((res)=>{
            setContents(res.data.content)
        })
        .catch((err)=> console.log(err));
    }

    useEffect(()=>{
        refresh()
        let interval = setInterval(()=>{
            refresh()
        },10 * 1000);

        return()=>{
            clearInterval(interval);
        }
    },[])

    return {contents,refresh};
}