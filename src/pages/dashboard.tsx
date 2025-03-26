import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { CreateContentModal } from "../components/CreateContentModal";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { Sidebar } from "../components/SideBar";
import { useContent } from "../hooks/useContent";
import axios from "axios";
import { BACKEND_URL } from "../config";

export default function Dashboard(){
  const [modalOpen, setModalOpen] = useState(false);
  const {contents, refresh} = useContent();
  
  useEffect(()=>{
    refresh()
  },[modalOpen])

  return( 
    <div className="font-medium">
      <Sidebar/>
      <div className="p-6 ml-72 h-min-screen bg-gray-100 border-2">
      <CreateContentModal open={modalOpen} onClose={()=>{
        setModalOpen(false);
      }}/>
      <div className="flex justify-end gap-4">
        <Button onClick={async ()=>{
          const response = await axios.post(`${BACKEND_URL}/api/v1/brain/share`,{
            share: true
          },{
            headers:{
              "Authorization": localStorage.getItem('token')
            }
          });
          const shareUrl = `http://localhost:5713/share${response.data.message}`
          console.log(response)
          navigator.clipboard.writeText(shareUrl)
        }} variant="secondary" text="Share Brain" startIcon={<ShareIcon/>} />
        <Button variant="primary" text="Add Content" startIcon={<PlusIcon/> } onClick={()=>{
          setModalOpen(true);
        }} />  
      </div>
      <div className="flex gap-4 flex-wrap">
        {contents.map(({type,link,title})=>
        <Card
         type={type}
         link={link}
         title={title}/>      
        )}
        </div>
      </div>
    </div>
  )
}