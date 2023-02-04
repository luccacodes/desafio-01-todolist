import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { TaskList } from './components/TaskList';
import './global.css';

export interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([
    {
      id: uuidv4(),
      title: 'teste',
      isCompleted: false
    },
    {
      id: uuidv4(),
      title: 'teste 2',
      isCompleted: true
    }
  ])

  function addTask(taskTitle: string) {
    setTasks([
      ...tasks,
      {
        id: uuidv4(),
        title: taskTitle,
        isCompleted: false
      }
    ])
  }

  return (
    <>
    <h1>todo</h1>
    <TaskList onAddTask={addTask} tasks={tasks} />
    </>
  )
}

export default App
