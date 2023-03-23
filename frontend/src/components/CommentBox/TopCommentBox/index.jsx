import React, { useRef, useState } from "react"
import "../CommentBox.css"

function TopCommentsBox(props) {
  const message = useRef(null)
  //Trigger the underline animation
  const [showCommentLine, setCommentLine] = useState(false)
  //True on focus. False on CANCEL press
  const [showButtons, setShowButtons] = useState(false)
  //True on input data. False when input is blank.
  const [enableBtn, setEnableBtn] = useState(true)
  //When they click on the Input. Show the underline and the buttons.

  const commentFocus = () => {
    setCommentLine(true)
    setShowButtons(true)
  }

  //When they click on the input. Hide the underline
  const commentFocusOut = () => {
    setCommentLine(false)
  }

  //If Input value isn't empty then ENABLE the COMMENT BTN.
  const commentStroke = (event) => {
    let currMessage = event.target.value
    if (currMessage) {
      setEnableBtn(false)
    } else {
      setEnableBtn(true)
    }
  }

  const sendCommentHandler = (event) => {
    event.preventDefault()
  }

  return (
    <form>
      <section className="commentBox">
        <input
          autoFocus={props.autoFocus}
          type="text"
          placeholder="Add a public comment..."
          ref={message}
          onFocus={commentFocus}
          onBlur={commentFocusOut}
          onKeyUp={commentStroke}
        />
        {/*Underline begins here*/}
        {showCommentLine && <div className="commentLine"></div>}
      </section>
      {showButtons && (
        <>
          <button
            className="commentButton sendButton"
            disabled={enableBtn}
            onClick={sendCommentHandler}
          >
            Comment
          </button>
          <button
            className="commentButton"
            style={{ color: "gray", backgroundColor: "transparent" }}
            onClick={() => {
              setShowButtons(false)
              message.current.value = ""
            }}
          >
            Cancel
          </button>
        </>
      )}
    </form>
  )
}
export default TopCommentsBox
