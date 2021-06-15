import ToDoCell from '../todoCell';

import styles from './style.module.css';

export default function todoRow ({data}) {
  const {name, created, category, content} = data;
  return (
    <div className = {styles.container}>
      <ToDoCell data={name} />
      <ToDoCell data={created} />
      <ToDoCell data={category} />
      <ToDoCell data={content} />
    </div>
  )
}