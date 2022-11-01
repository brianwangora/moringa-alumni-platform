import React, { useState } from "react";
import "../Css/AddPost.css"

function AddPost({onClick}) {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
	const [imageUrl, setImageUrl] = useState('')
    const [errors, setErrors] = useState([])
    

    function handleSubmit(e) {
		e.preventDefault();
		setErrors([]);
		fetch("/posts", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				title: title,
				content: content,
				image_url: imageUrl
			}),
		}).then((r) => {
			if (r.ok) {
				r.json().then((post) => {
                    setTitle(post.title)
                    setContent(post.content)
					setImageUrl(post.image_url)
                });
			} else {
				r.json().then((err) => setErrors(err.errors));
			}


            setContent('')
            setTitle('')
			setImageUrl('')
		});
	}

	return (
		<div className="addPost">
			<form onSubmit={handleSubmit}>
				<input type="text" id="title" className="post_input" value={title} placeholder="title" onChange={(e) => setTitle(e.target.value)}/>

				<input type="text" id="imgUrl" className="post_input" value={imageUrl} placeholder="inser image" onChange={(e) => setImageUrl(e.target.value)}/>
<br/>
				<input type="text" id="content" className="post_input" value={content} placeholder="content" onChange={(e) => setContent(e.target.value)}/>
<br/>
                <button type="submit" className="btn" >submit</button>
                <button onClick={onClick}>X</button>
			</form>
		</div>
	);
}

export default AddPost;
