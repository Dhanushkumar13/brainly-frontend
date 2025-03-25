import { useState } from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { CreateContentModal } from "../components/CreateContentModal";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { Sidebar } from "../components/SideBar";

export default function Dashboard(){
  const [modalOpen, setModalOpen] = useState(false);
  return( 
    <div className="font-medium">
      <Sidebar/>
      <div className="p-6 ml-72 h-min-screen bg-gray-100 border-2">
      <CreateContentModal open={modalOpen} onClose={()=>{
        setModalOpen(false);
      }}/>
      <div className="flex justify-end gap-4">
        <Button variant="secondary" text="Share Brain" startIcon={<ShareIcon/>} />
        <Button variant="primary" text="Add Content" startIcon={<PlusIcon/> } onClick={()=>{
          setModalOpen(true);
        }} />  
      </div>
      <div className="flex gap-4">
        <Card type="twitter" link="https://x.com/doodlextom/status/1903510608047383015" title="Personal Branding"/>
        <Card type="youtube" link="https://youtu.be/Lv8BD8xefJs?si=wPtvuoABKuzsoxqi" title="How I Work 10 Hours Daily"/>
      </div>
      </div>
    </div>
  )
}