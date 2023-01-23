import { ChangeEvent, FormEvent, useState } from 'react'
import styles from '/TaskList.module.css'

export function TaskList() {
  const [tasks, setTasks] = useState(['Acordar cedo'])
  const [newTaskText, setNewTaskText] = useState('')

  function handleCreateNewTask(event: FormEvent) {
    event?.preventDefault()

    setTasks([...tasks, newTaskText])
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
      <p>Tarefas criadas {tasks.length}</p>
      <p>Concluidas</p>
    </div>

    <div>
      {tasks.map(task => <p>{task}</p>)}
    </div>
    </>
  )
}