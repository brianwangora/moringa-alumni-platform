import React, {useState} from "react";
import "../Css/SinglePost.css"
import { FaComments } from "react-icons/fa"

function SinglePost({ onDelete, update, id, post, image, time, author, content, comments, title  }) {
	const [posts, setPosts] = useState({
		image: "",
		title: "",
		author: "",
		content: "",
		time: "",
		comments: "",
	});

	function handleDeleteClick(){

		fetch(`/posts${id}`, {
			method: "DELETE",
		  })
			.then((r) => r.json())
			.then(() => onDelete(post));
    }

//function SinglePost({ onDelete, update, id, post, image, time, author, content, comments, title  }) {
	function handleUpdateClick(id, update){
		fetch(`/posts${id}`, {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ update }),
		})
		.then((r) => r.json())
		.then((updatedPost) => {
			const updatedPosts = posts.map((p) => {
			if (p.id === updatedPost.id) return updatedPost;
			return p;
			});
			setPosts(updatedPosts);
		});
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
					<button onClick={handleUpdateClick}>edit</button>
				</div>
			</div>
		</div>
	);
}

export default SinglePost;
