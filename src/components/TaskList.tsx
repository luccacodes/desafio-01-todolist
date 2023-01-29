import { ChangeEvent, FormEvent, useState } from 'react'
import styles from './TaskList.module.css'

export function TaskList() {
  const [tasks, setTasks] = useState(['Acordar cedo'])
  const [newTaskText, setNewTaskText] = useState('')
  const [isCompleted, setIsCompleted] = useState(false);

  const strikethroughClass = isCompleted ? styles.strikethrough : '';

  function handleCreateNewTask(event: FormEvent) {
    event?.preventDefault()

    setTasks([...tasks, newTaskText])
    setNewTaskText('')
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewTaskText(event.target.value)
  }

  function handleTaskCompleted() {
    setIsCompleted(true);
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
      <p>Tarefas criadas {tasks.length}</p>
      <p>Concluidas</p>
    </div>

    <div className={styles.taskList}>
      {tasks.map(task => {
        return (
          <>
          <input type="checkbox" defaultChecked={isCompleted} onClick={handleTaskCompleted}/>
          <p className={`${strikethroughClass}`}>{task}</p>
          </>
        )
      })}
    </div>
    </>
  )
}