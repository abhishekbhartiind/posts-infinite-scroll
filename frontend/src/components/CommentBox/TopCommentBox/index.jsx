import React, { useRef, useState } from "react"
import "../CommentsBox.css"

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
  const commentStroke = (event) => {}

  return (
    <form>
      <section className="commentBox">
        <input
          autoFocus={props.autoFocus}
          type="text"
          placeholder="Add a public comment..."
          ref={message}
        />
        {/*Underline begins here*/}
        <div className="commentLine"></div>
      </section>
    </form>
  )
}
export default TopCommentsBox
