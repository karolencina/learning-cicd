import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h2>This is what I've done:</h2>
        <ol>
          <li>
            Created a local <code>build.sh</code> script.
          </li>
          <li>
            Set up GitHub Actions to lint and build the frontend and run backend
            tests.
          </li>
          <li>Deployed the Next.js frontend via Amplify</li>
        </ol>
        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://github.com/karolencina/learning-cicd"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/github-mark.svg"
              alt="Github logomark"
              width={20}
              height={20}
            />
            Project Repository
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          This UI has been built using nextjs.org →
        </a>
      </footer>
    </div>
  );
}
