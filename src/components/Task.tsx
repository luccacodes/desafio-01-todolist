import { ChangeEvent, FormEvent, useState } from 'react'
import { ITask } from '../App';
import styles from './Task.module.css'

interface TaskProps {
  task: ITask;
}

export function Task({ task }: TaskProps) {
  const [isCompleted, setIsCompleted] = useState(false);

  const strikethroughClass = isCompleted ? styles.strikethrough : '';

  function handleTaskCompleted() {
    setIsCompleted(true);
  }

  return (
    <div className={styles.task}>
      <input type="checkbox" defaultChecked={isCompleted} onClick={handleTaskCompleted}/>
      <p className={`${strikethroughClass}`}>{task.title}</p>
      <button title="Deletar task">Deletar</button>
    </div>
  )
}