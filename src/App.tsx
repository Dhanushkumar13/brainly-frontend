import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";

export default function App(){
  return(
    <div>
      <Button variant="secondary" text="Share Brain" startIcon={<ShareIcon/>}/>
      <Button variant="primary" text="Add Content" startIcon={<PlusIcon/>}/>
      <Card type="twitter" link="https://x.com/doodlextom/status/1902625097506001369" title="Personal Branding"/>
      <Card type="youtube" link="https://youtu.be/Lv8BD8xefJs?si=wPtvuoABKuzsoxqi" title="How I Work 10 Hours Daily"/>
    </div>
  )
}