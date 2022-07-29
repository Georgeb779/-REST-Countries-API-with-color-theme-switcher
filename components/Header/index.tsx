import styles from "./header.module.scss";

export default function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.title__container}>
        <h1>Where in the world?</h1>
      </div>
      <button
        className="btn btn-primary"
        onClick={() => {
          alert("Hello World");
        }}
      >
        Dark Mode
      </button>
    </header>
  );
}
