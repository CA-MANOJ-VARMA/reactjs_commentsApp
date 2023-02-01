import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
const listOfComments = []

class Comments extends Component {
  state = {
    name: '',
    comment: '',
    count: 0,
    colourSet: '',
    commentsList: '',
  }

  nameFunction = event => {
    const name = event.target.value
    this.setState({name})
  }

  islikedFunctionClicked = islikedId => {
    const fiteredIndex = listOfComments.findIndex(
      eachItem => eachItem.id === islikedId,
    )
    listOfComments[fiteredIndex].isLiked = !listOfComments[fiteredIndex].isLiked
    this.setState({commentsList: listOfComments})
    console.log(listOfComments)
  }

  isDeletedClicked = islikedId => {
    const fiteredIndex = listOfComments.findIndex(
      eachItem => eachItem.id === islikedId,
    )
    listOfComments.splice(fiteredIndex, 1)
    this.setState({commentsList: listOfComments})
    console.log(listOfComments)
  }

  commentFunction = event => {
    const comment = event.target.value
    this.setState({comment})
  }

  addToListFunction = event => {
    event.preventDefault()
    const {name, comment} = this.state
    if (name === '' || comment === '') {
      alert('Name or Comment is missing')
    } else {
      listOfComments.push({
        name,
        comment,
        isLiked: false,
        date: formatDistanceToNow(new Date()),
        id: uuidv4(),
        colourSet:
          initialContainerBackgroundClassNames[
            Math.floor(
              Math.random() * initialContainerBackgroundClassNames.length,
            )
          ],
      })
      this.setState(prevState => ({
        count: prevState.count + 1,
        commentsList: listOfComments,
        name: '',
        comment: '',
      }))
    }
    console.log(listOfComments)
  }

  render() {
    const {name, comment, count, commentsList} = this.state
    console.log(listOfComments.length)
    return (
      <div className="css-bg-container">
        <h1 className="css-heading">Comments</h1>
        <div className="css-containers">
          <form className="css-leftside-container">
            <p>Say something about 4.0 Technologies</p>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              className="css-input-itself"
              onChange={this.nameFunction}
            />
            <textarea
              type="text"
              placeholder="Your Comment"
              value={comment}
              className="css-textarea-itself"
              onChange={this.commentFunction}
            />
            <button
              type="submit"
              className="css-button-itself"
              onClick={this.addToListFunction}
            >
              Add Comment
            </button>
          </form>
          <div className="css-rightside-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="css-image-itself"
            />
          </div>
        </div>
        <p>{count} Comments</p>
        <ul className="css-ul-container">
          {count !== 0 &&
            commentsList.map(eachComment => (
              <CommentItem
                commentItem={eachComment}
                islikedFunction={this.islikedFunctionClicked}
                isDeleteFunction={this.isDeletedClicked}
                key={eachComment.id}
              />
            ))}
        </ul>
      </div>
    )
  }
}

export default Comments
