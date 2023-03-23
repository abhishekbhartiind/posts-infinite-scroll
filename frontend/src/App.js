import "./App.css"
import TopCommentBox from "./components/CommentBox/TopCommentBox"
import MessageScroll from "./components/MessageScroll"

function App() {
  return (
    <div className="App">
      <TopCommentBox autoFocus={false} />
      <MessageScroll />
    </div>
  )
}

export default App
