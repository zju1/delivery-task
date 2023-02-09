import styles from './action-button.module.css';

export const ActionButton = ({ children }) => {
  return <button className={styles.button}>{children}</button>;
};
