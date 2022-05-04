import React from "react"

function Article({title, date="January 1, 1970", preview, minutes}) {

  function getEmoji(min) {
    if(min < 30) {
      let num = Math.ceil(min / 5)
      const emoji = "☕️".repeat(num)
      return <span>{emoji}{min} minutes read</span>
    } else if (min >= 30) {
      let num = Math.ceil(min / 10)
      const emoji = "🍱".repeat(num)
      return <span>{emoji}{min} minutes read</span>
    }
  }
  return(
    <article>
      <h3>{title}</h3>
      <small>{date}</small> . {getEmoji(minutes)}
      <p>{preview}</p>
    </article>
  )
}

export default Article