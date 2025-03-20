import './index.css';
import { Button } from './components/ui/Button'
import { PlusIcon } from './components/icons/plusIcons';

function App() {
  return (
    <div>
      <Button startIcon={<PlusIcon/>} size='sm' variant='primary' text='Share'/>
      <Button size='sm' variant='secondary' text='Add Content'/>
    </div>
  )
}

export default App
