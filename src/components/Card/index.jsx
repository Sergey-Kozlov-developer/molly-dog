import styles from './Card.module.scss';
import { Link } from 'react-router-dom';

function Card({ imageUrl, title, subTitle, description, date }) {
  return (
    <div className={styles.blog}>
      <div className={styles.cards_item}>
        <div className={styles.card}>
          <div className={styles.card_image}>
            <span className={styles.note}>&copy;Molly</span>
            <img src={imageUrl} alt="Dog" />
            <span className={styles.card_price}>{date}</span>
          </div>
          <div className={styles.card_content}>
            <h1 className={styles.card_title}>{title}</h1>
            <div className={styles.card_text}>
              <h2>{subTitle}</h2>
              <hr />
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
