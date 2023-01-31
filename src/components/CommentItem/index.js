// Write your code here
import './index.css'

const CommentItem = props => {
  //   let likeId = ''
  const {commentItem, islikedFunction} = props
  const {name, comment, date, id, isLiked, colourSet} = commentItem
  console.log(isLiked)

  const likeFunction = likedId => {
    islikedFunction(likedId)
  }

  return (
    <li className="css-commentitem-bg-container" key={id}>
      <div className="css-top-container">
        <div className={`css-profile-image-container ${colourSet}`}>
          <p>{name[0]}</p>
        </div>
        <div className="css-namedatedescription-container">
          <div className="css-name-date-container">
            <p className="css-Name-paragraph">{name}</p>
            <p>{date}</p>
          </div>
          <div className="css-description-container">
            <p>{comment}</p>
          </div>
        </div>
      </div>
      <div className="css-bottom-container">
        <div className="css-like-container">
          {isLiked ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png"
              alt="liked"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
              alt="like"
            />
          )}
          <button
            type="button"
            className="css-like-delete-button-itself"
            onClick={() => likeFunction(id)}
          >
            Like
          </button>
        </div>
        <div className="css-delete-container">
          <button type="button" className="css-like-delete-button-itself">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default CommentItem
