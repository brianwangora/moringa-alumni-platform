import React, { useState } from "react";
import { RiDeleteBin6Line, RiEditBoxLine } from "react-icons/ri";

import EditPost from "./EditPost";
import { FaComments } from "react-icons/fa";

function UserSinglePost({ post, id, title, image, content, username, comments}) {
	const [editUi, setEditUi] = useState(false);
	const [aPost, setAPost] = useState(post)

	function showEditUi() {
		setEditUi((editUi) => !editUi);
	}

	const crudIcon = {
		cursor: "pointer",
	};

	const addIconStyles = {
		color: "orange",
	};

	function handleDeleteClick(){
        
		fetch(`/posts/${id}`, {
			method: "DELETE"
		  })
			.then((r) => r.json())
			.then((data) => setAPost(data));

			window.location.reload();
    }

	// function handleDeleteItem(deletedItem) {
	// 	const updatedItems = user.posts.filter((item) => item.id !== deletedItem.id);
	// 	setPosts(updatedItems);

	// 	console.log(updatedItems);
	// }

	return (
		<div>
			<div>
				<div className="img_container">
					<img className="account_img" src={image} />
				</div>
				<div className="account_posts_content">
					<button className="read">read</button>
					<h4 className="postTitle">{title}</h4>
					<div id="body">
						<p className="body">
							A post by {username}: {content}...
						</p>
					</div>

					<div className="info">
						{/* <p>{item.created_at}</p> */}
						<p className="right">
							<b>{comments}</b>
							<FaComments style={addIconStyles} size="1.2em" />
						</p>
						<div className="dup_btn">
							<RiDeleteBin6Line
								className="account_delete"
								style={crudIcon}
								size="1.2em"
								onClick={handleDeleteClick}
							/>
							<RiEditBoxLine
								className="account_update"
								style={crudIcon}
								size="1.2em"
								onClick={showEditUi}
							/>
						</div>
						{editUi ? <EditPost onClick={showEditUi} titleBody={title} contentBody={content} id = {id}/> : null}
					</div>
				</div>
			</div>
		</div>
	);
}

export default UserSinglePost;