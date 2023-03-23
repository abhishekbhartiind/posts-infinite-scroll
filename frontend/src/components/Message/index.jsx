import React from "react"
import "./Message.css"

const Message = (props) => {
  return (
    <>
      <section className="messageContainer">
        <div className="messageUser">{props.user}</div>
        <i className="fas fa-user-circle"></i>
        <div className="messageText">{props.message}</div>
        <section className="messageIcons Container">
          <i className="fas fa-thumbs-up"></i>
          <div>{props.likes}</div>
          <i className="fas fa-thumbs-down"></i>
          {!props.editable ? (
            <div style={{ cursor: "pointer" }}>REPLY</div>
          ) : (
            <div style={{ cursor: "pointer" }}>DELETE</div>
          )}
        </section>
        <section classname="arrowReplies">
          <div>View 4 replies</div>
        </section>
      </section>
      )
    </>
  )
}

export default Message
