// TODO: answer here
import "./App.css"
import Navbar from "./components/Navbar"
import UploadForm from "./components/UploadForm"
import PostCard from "./components/PostCard";
import { useEffect } from "react";
import { listPosts } from "./api/post"
import { useState } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const fetchPosts = async () => {
      await listPosts().then((response) => {
          if(response){
            setPosts(response.data.data)
          }
      })
    }
    fetchPosts()
  }, [])
  
  const renderPosts = (posts) =>{
    return posts.map((post) => (
      <PostCard
                key={post.id}
                id={post.id}
                image={post.image}
                caption={post.content}
                username={post.author.name}
                userId={post.author.id}
                date={post.createdAt}
              />
        ))
  }
  const handleSubmit = ({id,image,content,createdAt,authorId,authorName, authorImage}) =>{
    const post = {
      id,
      image,
      content,
      createdAt,
      author: {
        id: authorId,
        name: authorName,
        image: authorImage,
      },
      liked: false,
      disliked: false,
      likeCount: 0,
      dislikeCount: 0,
    }

    setPosts([post, ...posts])
  }
  
  return(
    <div className="App" aria-label="App">
      <Navbar />
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<UploadForm onSubmit={handleSubmit} />} />
          <Route path="/posts" element={<div>{renderPosts(posts)}</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;