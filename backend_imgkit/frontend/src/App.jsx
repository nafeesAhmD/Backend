import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import ImageCard from './components/ImageCard'
import CreatePost from './components/CreatePost.'
import Feed from './components/Feed'

function App() {
  return (
    <>
   <Router>
    <Routes>
      <Route path='/create-post' element={<CreatePost/>} />
      <Route path='/feeds' element={<Feed/>} />
    </Routes>
   </Router>
      </>
  )
}

export default App
