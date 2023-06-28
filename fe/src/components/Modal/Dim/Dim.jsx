import styles from './Dim.module.css';

export default function Dim({ dimStatus }) {
  return (
    <div
      className={
        dimStatus ? `${styles.dim} ${styles.disappear}` : `${styles.dim}`
      }
    />
  );
}
