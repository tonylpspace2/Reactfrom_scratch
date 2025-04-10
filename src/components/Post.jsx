import React, { useState } from 'react'
import './Post.css'

function Post({ username, content, likes, comments, timestamp }) {
  const [isLiked, setIsLiked] = useState(false)
  const [showComments, setShowComments] = useState(false)
  const [currentLikes, setCurrentLikes] = useState(likes)

  const handleLike = () => {
    setIsLiked(!isLiked)
    setCurrentLikes(isLiked ? currentLikes - 1 : currentLikes + 1)
  }

  const toggleComments = () => {
    setShowComments(!showComments)
  }

  const getProfileImage = (username) => {
    switch(username.toLowerCase()) {
      case 'pixel_artist':
        return '/harmony.jpg'
      case 'gamer123':
        return '/danielle.jpg'
      default:
        return '/mario.jpg' // Default profile picture
    }
  }

  return (
    <div className="post">
      <div className="post-header">
        <img 
          src={getProfileImage(username)} 
          alt={`${username}'s profile`} 
          className="profile-picture"
        />
        <div className="post-user">
          <span className="username">{username}</span>
          <span className="timestamp">{timestamp}</span>
        </div>
      </div>
      
      <div className="post-content">
        {content}
      </div>

      <div className="post-actions">
        <button 
          className={`like-button ${isLiked ? 'liked' : ''}`}
          onClick={handleLike}
        >
          {isLiked ? '❤️' : '🤍'} {currentLikes}
        </button>
        <button 
          className="comment-button"
          onClick={toggleComments}
        >
          💬 {comments.length}
        </button>
        <button className="share-button">🔄 Share</button>
      </div>

      {showComments && (
        <div className="comments">
          {comments.map((comment, index) => (
            <div key={index} className="comment">
              <img 
                src={getProfileImage(comment.username)} 
                alt={`${comment.username}'s profile`} 
                className="comment-profile-picture"
              />
              <div className="comment-content">
                <span className="comment-username">{comment.username}</span>
                <p>{comment.content}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Post 