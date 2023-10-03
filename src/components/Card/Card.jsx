import '../../scss/components/_card.scss';

function Card({ imageUrl, title, subTitle, description, date }) {
  return (
    <div className="blog">
      <div className="meta">
        <img className="photo" src={imageUrl} alt="Image1" />
        <ul className="details">
          <li className="author">&copy;Molly</li>
          <li className="date">{date}</li>
          <li className="tags">
            <ul>
              <li>
                <a href="#">Telegram</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="description">
        <h1 className="title__h1">{title}</h1>
        <h2>{subTitle}</h2>
        <p>{description}</p>
        <p className="read-more">
          <a href="#">Читать...</a>
        </p>
      </div>
    </div>
  );
}
export default Card;
