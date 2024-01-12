import styles from "./Card.module.scss";
import { motion } from "framer-motion";

function Card({ imageUrl, title, subTitle, description, date }) {
    return (
        <div className={styles.blog}>
            <div className={styles.cards_item}>
                <motion.div
                    className={styles.card}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <div className={styles.card_image}>
                        <span className={styles.note}>&copy;Molly</span>
                        <motion.img
                            src={imageUrl}
                            alt="Dog"
                            // initial={{ scale: 0 }}
                            // animate={{ scale: 1 }}
                            // transition={{ delay: 0.5 }}
                        />
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
                </motion.div>
            </div>
        </div>
    );
}

export default Card;
