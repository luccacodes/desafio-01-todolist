import { ChangeEvent, FormEvent, useState } from 'react'
import { ITask } from '../App';

import styles from './Task.module.css'

import { BsFillCheckCircleFill } from 'react-icons/bs'
import { TbTrash } from 'react-icons/tb'

interface TaskProps {
  task: ITask;
  onDeleteTask: (taskId: string) => void;
  onCompleteTask: (taskId: string) => void;
}

export function Task({ task, onDeleteTask, onCompleteTask }: TaskProps) {
  return (
    <div className={styles.task}>
      <button className={styles.checkContainer} onClick={() => onCompleteTask(task.id)}>
        {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
      </button>
      <p className={task.isCompleted ? styles.textCompleted : ''}>{task.title}</p>
      <button className={styles.deleteButton} title="Deletar task" onClick={() => onDeleteTask(task.id)}>
        <TbTrash size={20} />
      </button>
    </div>
  )
}