import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import './global.css';
import styles from './App.module.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/luizcdribeiro.png',
      name: 'Luiz Carlos Ribeiro',
      role: 'Desenvolvedor Front End'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      
      {type: 'link', content: ' 👉 jane.design/doctorcare'},
      // {type: 'link', content: '<a href="">#novoprojeto </a>'},
      // {type: 'link', content: '<a href="">#nlw </a>'},
      // {type: 'link', content: '<a href="">#rocketseat</a>'},
    
    ],
    publishedAt: new Date('2022-11-10 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      name: 'Grazi Massafera',
      role: 'Design UI'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      {type: 'link', content: ' 👉 jane.design/doctorcare'},
      // {type: 'link', content: '<a href="">#novoprojeto </a>'},
      // {type: 'link', content: '<a href="">#nlw </a>'},
      // {type: 'link', content: '<a href="">#rocketseat</a>'},
    
    ],
    publishedAt: new Date('2022-11-07 20:00:00'),
  },
]

export function App() {
  return (
    <>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
         {posts.map((post, id) => (
            <Post
            key={id}
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
            />
         ))}

        </main>
      </div>
    </>
  )
}

