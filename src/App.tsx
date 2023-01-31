import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { TaskList } from './components/TaskList';
import './global.css';

const tasks = [
  {
    id: uuidv4(),
    title: 'Terminar o desafio',
    isCompleted: false
  },
  {
    id: uuidv4(),
    title: 'Acordar cedo',
    isCompleted: true
  }
]

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
    }
  ])

  return (
    <>
    <h1>todo</h1>
    <TaskList tasks={tasks} />
    </>
  )
}

export default App
