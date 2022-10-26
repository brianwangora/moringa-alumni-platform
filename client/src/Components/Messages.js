import React, { useState } from 'react'

function Messages() {

    const [content, setContent] = useState("")

    function handleSubmit(e) {
        e.preventDefault()

        const data = { content }

        fetch("/messages", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		}).then(() => {
			console.log("new group");
		});
    }
  return (
    <div>
         <form onSubmit={handleSubmit} className="group_form">
                <input
                    className="post_input"
                    type="text"
                    value={content}
                    name="content"
                    placeholder="message"
                    onChange={(e) => setContent(e.target.value)}
                />
                <button type="submit">submit</button>
            </form>
    </div>
  )
}

export default Messages