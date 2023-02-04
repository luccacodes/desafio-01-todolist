import { ChangeEvent, FormEvent, useState } from 'react'
import { ITask } from '../App';
import { Task } from './Task';
import styles from './TaskList.module.css'

interface TaskProps {
  tasks: ITask[];
  onAddTask: (taskTitle: string) => void;
}

export function TaskList({ onAddTask, tasks }: TaskProps) {
  const [newTaskTitle, setNewTaskTitle] = useState('')
  // const [isCompleted, setIsCompleted] = useState(false);
  // const strikethroughClass = isCompleted ? styles.strikethrough : '';

  const completedTasks = tasks.filter((task) => task.isCompleted).length;

  function handleSubmit(event: FormEvent) {
    event?.preventDefault()
    
    onAddTask(newTaskTitle)
    setNewTaskTitle('')
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewTaskTitle(event.target.value)
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <textarea
        name="task"
        placeholder="Adicione uma nova tarefa"
        value={newTaskTitle}
        onChange={handleNewTaskChange}
      />
      <button type="submit">Criar</button>
    </form>

    <div>
      <p>Tarefas criadas</p>
      <span>{tasks.length}</span>
    </div>

    <div>
      <p>Concluídas</p>
      <span>{completedTasks} de {tasks.length}</span>
    </div>

    <div className={styles.taskList}>
      {tasks.map(task => (
        <Task key={task.id} task={task}/>
      ))}
    </div>
    </>
  )
}