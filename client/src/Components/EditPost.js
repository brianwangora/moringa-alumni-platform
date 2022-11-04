import '../Css/EditPost.css'

import React, { useState } from "react";

function EditPost({id, titleBody, contentBody, editUi}) {
    const [title, setTitle] = useState(titleBody)
    const [content, setContent] = useState(contentBody)
    const [errors, setErrors] = useState([])
	// const [editUi, setEditUi] = useState(false);

console.log(id)
 
    function handleEdit(e) {
		e.preventDefault();
		setErrors([]);
		fetch(`/posts/${id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				title: title,
				content: content
			}),

			
		}).then((r) => {
			if (r.ok) {
				r.json().then((post) => {
                    setTitle(post.title)
                    setContent(post.content)
                });
			} else {
				r.json().then((err) => setErrors(err.errors));
			}

            window.location.reload(false);

            // setContent('') 
            // setTitle('')
		});
		
	}

	function handleChange(e) {
		setTitle(e.target.value)
		setTitle(e.target.value)
	}

	

	return (
		<div className="editPost">
			<form onSubmit={handleEdit}>
				<input type="text" name="title" id="title" className="edit_input" value={title} placeholder="title" onChange={(e) => setTitle(e.target.value)}/>
<br/>
				<input type="text" name="content" id="content" className="edit_input" value={content} placeholder="content" onChange={(e) => setContent(e.target.value)}/>
<br/>

                <button className="editBtn">Edit</button>
			</form>
		</div>
	);
}


export default EditPost;