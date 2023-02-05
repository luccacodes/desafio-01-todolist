import { ChangeEvent, FormEvent, useState } from 'react'
import { ITask } from '../App';
import styles from './Task.module.css'

interface TaskProps {
  task: ITask;
  onDeleteTask: (taskId: string) => void;
}

export function Task({ task, onDeleteTask }: TaskProps) {
  const [isCompleted, setIsCompleted] = useState(false);

  const strikethroughClass = isCompleted ? styles.strikethrough : '';

  function handleTaskCompleted() {
    setIsCompleted(true);
  }

  return (
    <div className={styles.task}>
      <input type="checkbox" defaultChecked={isCompleted} onClick={handleTaskCompleted}/>
      <p className={`${strikethroughClass}`}>{task.title}</p>
      <button title="Deletar task" onClick={() => onDeleteTask(task.id)}>Deletar</button>
    </div>
  )
}