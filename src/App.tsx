import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { TaskList } from './components/TaskList';
import { Header } from './components/Header';
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

  function deleteTaskById(taskId: string) {
    const tasksWithoutDeletedOne = tasks.filter(task => task.id !== taskId);
    setTasks(tasksWithoutDeletedOne);
  }

  function toggleTaskCompletedById(taskId: string) {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      } else {
        return task;
      }
    })
    setTasks(newTasks);
  }

  return (
    <>
    <Header />
    <TaskList
      tasks={tasks} 
      onAddTask={addTask}
      onDeleteTask={deleteTaskById}
      onCompleteTask={toggleTaskCompletedById}
    />
    </>
  )
}

export default App
