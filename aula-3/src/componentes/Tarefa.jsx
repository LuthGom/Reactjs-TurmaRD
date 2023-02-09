import styles from "./Tarefa.module.css";

export function Tarefa({ titulo }) {
  return (
    <div className={styles.tarefa}>
      <label htmlFor="check">{titulo}</label>
      <input type="checkbox" id="check" />
    </div>
  );
}
