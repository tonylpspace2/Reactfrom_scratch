import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Post from './components/Post'
import About from './about';
import Contact from './Contact';
import Sidebar from './components/Sidebar';


function Home() {
  const [newPost, setNewPost] = useState('')
  const [posts, setPosts] = useState([
    {
      username: 'GAMER123',
      content: 'Just beat my high score in Space Invaders! 🚀',
      likes: 42,
      comments: [
        { username: 'ARCADE_KING', content: 'Nice! What was your score?' },
        { username: 'RETRO_GAMER', content: 'That\'s awesome! 🎮' }
      ],
      timestamp: '2 hours ago'
    },
    {
      username: 'PIXEL_ARTIST',
      content: 'Working on some new 8-bit art. What do you think? 🎨',
      likes: 28,
      comments: [
        { username: 'GAMER123', content: 'Looks amazing! Love the colors!' }
      ],
      timestamp: '5 hours ago'
    }
  ])

  const handlePostSubmit = (e) => {
    e.preventDefault()
    if (newPost.trim()) {
      const newPostObj = {
        username: 'YOU',
        content: newPost,
        likes: 0,
        comments: [],
        timestamp: 'Just now'
      }
      setPosts([newPostObj, ...posts])
      setNewPost('')
    }
  }

  return (
    <div style={{ paddingTop: '80px' }}>
      <h1 className="welcome-heading">8-BIT SOCIAL</h1>
      
      <form onSubmit={handlePostSubmit} className="new-post-form">
        <input 
          type="text" 
          placeholder="What's on your mind?" 
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        />
        <button type="submit">Post</button>
      </form>

      <div className="feed">
        {posts.map((post, index) => (
          <Post
            key={index}
            username={post.username}
            content={post.content}
            likes={post.likes}
            comments={post.comments}
            timestamp={post.timestamp}
          />
        ))}
      </div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Sidebar />
      </div>
    </Router>
  )
}

export default App
