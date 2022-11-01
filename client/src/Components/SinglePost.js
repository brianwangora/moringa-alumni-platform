import React, {useState} from "react";
import "../Css/SinglePost.css"
import { FaComments } from "react-icons/fa"
import EditPost from "./EditPost";

function SinglePost({ onDelete, update, id, post, image, time, author, content, comments, title  }) {

	const [editUi, setEditUi] = useState(false);

	function handleDeleteClick(){

		fetch(`/posts${id}`, {
			method: "DELETE",
		  })
			.then((r) => r.json())
			.then(() => onDelete(post));
    }

	function showEditUi() {
		setEditUi((editUi) => !editUi);
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
					<button onClick={showEditUi}>Edit</button>

					{editUi ? <EditPost onClick={showEditUi} id={id}/> : null}
				</div>
			</div>
		</div>
	);
}

export default SinglePost;
