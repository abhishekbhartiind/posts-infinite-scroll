import React, { useRef, useState } from "react"
import "./Message.css"

const Message = (props) => {
  const likeIcon = useRef()
  const numsLikes = useRef()
  const [arrowUp, setArrowUp] = useState(false)
  const [openReply, setOpenReply] = useState(false)

  return (
    <>
      <section className="messageContainer">
        <div className="messageUser">{props.user}</div>
        <i className="fas fa-user-circle"></i>
        <div className="messageText">{props.message}</div>
        <section className="messageIcons Container">
          <i className="fas fa-thumbs-up" ref={likeIcon}></i>
          <div ref={numsLikes}>{props.likes}</div>
          <i className="fas fa-thumbs-down"></i>
          {!props.editable ? (
            <div style={{ cursor: "pointer" }}>REPLY</div>
          ) : (
            <div style={{ cursor: "pointer" }}>DELETE</div>
          )}
        </section>
        <section className="arrowReplies">
          <div>View 4 replies</div>
        </section>
      </section>
      )
    </>
  )
}

export default Message
