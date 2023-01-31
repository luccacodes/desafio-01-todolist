import { ChangeEvent, FormEvent, useState } from 'react'
import { ITask } from '../App';
import { Task } from './Task';
import styles from './TaskList.module.css'

interface TaskProps {
  tasks: ITask[];
}

export function TaskList({ tasks }: TaskProps) {
  const [newTaskText, setNewTaskText] = useState('')
  // const [isCompleted, setIsCompleted] = useState(false);
  // const strikethroughClass = isCompleted ? styles.strikethrough : '';

  const completedTasks = tasks.filter((task) => task.isCompleted).length;

  function handleCreateNewTask(event: FormEvent) {
    event?.preventDefault()

    // setTasks([...tasks, newTaskText])
    setNewTaskText('')
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewTaskText(event.target.value)
  }

  return (
    <>
    <form onSubmit={handleCreateNewTask}>
      <textarea
        name="task"
        placeholder="Adicione uma nova tarefa"
        value={newTaskText}
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