import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';
export function Comment({ content, onDeleteComment }) {
  
  function handleDeleteComment() {
    onDeleteComment(content)
  }

  return(
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/luizcdribeiro.png" alt="" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Luiz Carlos Ribeiro</strong>
              <time title='04 de Novembro ás 19 horas' dateTime='2022-11-04 19:00:00'>Cerca de 1h atrás</time>
            </div>
            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>


    </div>
  )
}