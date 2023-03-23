import React from "react"
import Message from "../Message"

const MessageScroll = () => {
  return (
    <>
      <Message
        user="Dummy User"
        editable={false}
        message="Dummy Message"
        likes={25}
      />
      <div className="bottomBar">
        <div className="loader"></div>
      </div>
    </>
  )
}

export default MessageScroll
