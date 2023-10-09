import styles from './SocialMedia.module.scss';
import { Link } from 'react-router-dom';

function SocialMedia() {
  return (
    <>
      <nav className={styles.social}>
        <ul>
          <li>
            <Link to="https://vk.com/id1339275" target="_blank">
              VK <i className="fa fa-vk"></i>
            </Link>
          </li>
          <li>
            <Link to="https://t.me/molly_the_golden" target="_blank">
              Telegram <i className="fa fa-telegram"></i>
            </Link>
          </li>
          <li>
            <Link
              to="https://github.com/Sergey-Kozlov-developer"
              target="_blank"
            >
              GitHub <i className="fa fa-github"></i>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default SocialMedia;
