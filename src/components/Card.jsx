import "../styles/Card.scss";

function Card({
  className,
  title,
  image,
  imageEnd,
  text,
  alt,
  subtitle,
  buttonText,
  href,
  information,
}) {
  return (
    <article className={`container ${className || ""} `}>
      {title && <h2>{title}</h2>}
      <figure>
        {image && (
          <div className="img">
            <img src={image} alt={alt} />
          </div>
        )}
        <figcaption>
          {subtitle && <h3>{subtitle}</h3>}
          {text && <p>{text}</p>}
          {buttonText && (
            <a href={href} className="button">
              {buttonText}
            </a>
          )}
          {information && (
            <ul>
              {Object.keys(information).map((infor, index) => (
                <li key={infor} value={infor} className={`li-${index + 1}`}>
                  <a href={information[infor].href} className="button">
                    {information[infor].name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </figcaption>
        {imageEnd && (
          <div className="img">
            <img src={imageEnd} alt={alt} />
          </div>
        )}
      </figure>
    </article>
  );
}

export default Card;
