import styles from '../page.module.css'

export default function Offline() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>You are offline</h1>
        <p>Please check your internet connection and try again.</p>
      </div>
    </main>
  )
}