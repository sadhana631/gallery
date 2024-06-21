import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, isActive, setActiveThumbnailId} = prpps
  const {ThumbnailUrl, ThumbnailItem, id} = imageDetails
  const thumbnailClassName = isActive ? `thumbnailactive` : `thumbnail`

  const onClickThumbnnail = () => {
    setActiveThumbnailId(id)
  }

  return (
    <li className="thumbnail-list-item">
      <button
        type="button"
        className="thumbnail-button"
        onClick={onClickThumbnnail}
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          is
          className={thumbnailClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
