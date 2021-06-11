import { useState } from 'react'

import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: 'Doctor appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
      },
      {
        id: 2,
        text: 'Google contract meeting',
        day: 'Feb 6th at 3:30pm',
        reminder: true,
      },
      {
        id: 3,
        text: 'UFable brand meeting',
        day: 'Feb 7th at 5:30pm',
        reminder: false,
      },
    ]
  )
  return (
    <div className='container'>
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
