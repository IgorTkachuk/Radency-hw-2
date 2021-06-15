import styles from './style.module.css';

export default function ToDoCell({data}) {
  return (
    <div className={styles.cell}>{data}</div>
  )
}