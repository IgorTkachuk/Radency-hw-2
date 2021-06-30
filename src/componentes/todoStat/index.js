import { useSelector } from "react-redux";

import styles from "./style.module.css";

export default function ToDoStat() {
  const data = useSelector((state) => state.todo);

  const sum = data.reduce((acc, note) => {
    let categoryInstance = acc.find((el) => el.category === note.category);
    if (!categoryInstance) {
      categoryInstance = {
        category: note.category,
      };
      acc.push(categoryInstance);
    }

    if (note._archived) {
      categoryInstance.archived = (categoryInstance.archived ?? 0) + 1;
    } else {
      categoryInstance.active = (categoryInstance.active ?? 0) + 1;
    }

    return acc;
  }, []);

  console.log(sum);

  return (
    <div className={styles.categoryStat}>
      <div
        className={`${styles.categoryStatRow} ${styles.categoryStatCaption}`}
      >
        <div className={styles.categoryStatCell}>Category name</div>
        <div className={styles.categoryStatCell}>Archived</div>
        <div className={styles.categoryStatCell}>Active</div>
      </div>
      {sum.map((el) => (
        <div className={styles.categoryStatRow}>
          <div className={styles.categoryStatCell}>{el.category}</div>
          <div className={styles.categoryStatCell}>
            {el.archived ? el.archived : 0}
          </div>
          <div className={styles.categoryStatCell}>
            {el.active ? el.active : 0}
          </div>
        </div>
      ))}
    </div>
  );
}
