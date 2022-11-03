import { Header } from "./components/Header";
import { Post } from "./Post";

import './global.css';
import styles from './App.module.css';
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Luiz Carlos"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed tenetur magni facere numquam blanditiis sequi error quos esse, perferendis incidunt a doloremque nulla, deleniti iste! Omnis corrupti quis quia obcaecati!" 
          />
        </main>
      </div>
    </>
  )
}

