import styles from './Card.module.scss';
import { Link } from 'react-router-dom';

function Card({ imageUrl, title, subTitle, description, date }) {
  return (
    <div className={styles.blog}>
      <div className={styles.cards}>
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
    </div>
    // <div className={styles.blog}>
    //   <div className={styles.meta}>
    //     <img className={styles.photo} src={imageUrl} alt="Image1" />
    //     <ul className={styles.details}>
    //       <li className={styles.author}>&copy;Molly</li>
    //       <li className={styles.date}>{date}</li>
    //       <li className={styles.tags}>
    //         <ul>
    //           <li>
    //             <Link to="#">Telegram</Link>
    //           </li>
    //         </ul>
    //       </li>
    //     </ul>
    //   </div>
    //   <div className={styles.description}>
    //     <h1>{title}</h1>
    //     <h2>{subTitle}</h2>
    //     <p>{description}</p>
    //     {/*<p className="read-more">*/}
    //     {/*  <a href="#">Читать...</a>*/}
    //     {/*</p>*/}
    //   </div>
    // </div>
  );
}

export default Card;
