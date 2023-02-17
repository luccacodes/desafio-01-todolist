import { ChangeEvent, FormEvent, useState } from 'react'
import { ITask } from '../App';
import { Task } from './Task';

import styles from './TaskList.module.css'

import { AiOutlinePlusCircle } from 'react-icons/ai'

interface TaskProps {
  tasks: ITask[];
  onAddTask: (taskTitle: string) => void;
  onDeleteTask: (taskId: string) => void;
  onCompleteTask: (taskId: string) => void;
}

export function TaskList({ tasks, onAddTask, onDeleteTask, onCompleteTask }: TaskProps) {
  const [newTaskTitle, setNewTaskTitle] = useState('')

  const completedTasks = tasks.filter((task) => task.isCompleted).length;

  function handleSubmit(event: FormEvent) {
    event?.preventDefault()
    
    onAddTask(newTaskTitle);
    setNewTaskTitle('');
  }

  function handleNewTaskTitle(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskTitle(event.target.value)
  }

  return (
    <section className={styles.mainSection}>
      <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={newTaskTitle}
          onChange={handleNewTaskTitle}
        />
        <button type="submit">
          Criar
          <AiOutlinePlusCircle size={20} />
        </button>
      </form>

      <section className={styles.tasks}>
        <header className={styles.header}>
          <div>
            <p>Tarefas criadas</p>
            <span>{tasks.length}</span>
          </div>

          <div>
            <p className={styles.textPurple}>Concluídas</p>
            <span>{completedTasks} de {tasks.length}</span>
          </div>
        </header>

        <div className={styles.taskList}>
          {tasks.map(task => (
            <Task
              key={task.id}
              task={task}
              onDeleteTask={onDeleteTask}
              onCompleteTask={onCompleteTask}
            />
          ))}

          {tasks.length <= 0 && (
            <section>
              <div>
                <p>Você ainda não tem tarefas cadastradas</p>
                <span>Crie tarefas e organize seus itens a fazer</span>
              </div>
            </section>
          )}
        </div>
      </section>
    </section>
  )
}