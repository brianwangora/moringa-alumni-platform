import React from "react";
import "../Css/SinglePost.css"
import { FaComments } from "react-icons/fa"

function SinglePost({ onDelete, update, id, post, image, time, author, content, comments, title }) {

	function handleDeleteClick(){
        
		fetch(`/posts${id}`, {
			method: "DELETE",
		  })
			.then((r) => r.json())
			.then(() => onDelete(post));
    }

	function handleUpdate(e) {
		e.preventDefault();

		fetch(`/posts/${id}`, {
		  method: "PATCH",
		  headers: {
			"Content-Type": "application/json",
		  },
		  body: JSON.stringify({
			title: post.title,
			content: post.content
		  }),
		})
		  .then((response) => response.json())
		  .then((data) => update(data));
	}
	return (
		<div className="post_container">
			<div className="post">
				<div className="intro">
					<img src={image} alt="profile_img" className="img"/>
					<h3 className="title">{title}</h3>
				</div>
				<div className="post_content">
					<p className="body">
						A post by {author}: {content}
					</p>
					<div className="info">
						<p>{time}</p>
						<p className="right"><b>{comments}</b><FaComments size="1.4em"/></p>
					</div>
					<button onClick={handleDeleteClick}>X</button>
					<button onClick={handleUpdate}>edit</button>
				</div>

				<form>
				<input
            type="text"
            name="user_comment"
            value={post.title}
            onChange={(e) => (e.target.value)}
          />
				</form>
			</div>
		</div>
	);
}

export default SinglePost;
