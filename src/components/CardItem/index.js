import './index.css'

const CardDetails = props => {
  const {personDetails} = props
  const {title, description, imgUrl, className} = personDetails
  return (
    <li className={`${className} card-container`}>
      <div className="matter">
        <h1 className="title">{title}</h1>
        <p className="para">{description}</p>
        <div className="img">
          <img src={imgUrl} alt={title} className="avatar" />
        </div>
      </div>
    </li>
  )
}
export default CardDetails
