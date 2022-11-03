import React, { useState } from 'react'
import { RiDeleteBin6Line, RiEditBoxLine } from "react-icons/ri";
import { FaComments } from 'react-icons/fa'
import EditPost from './EditPost';

function UserSinglePost({id, image, content, username, title, comments}) {
    const [editUi, setEditUi] = useState(false);

    function showEditUi() {
		setEditUi((editUi) => !editUi);
	}

    const addIconStyles = {
		color: "orange",
	};

    const crudIcon = {
		cursor: "pointer",
	};
  return (
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
												
											/>
											<RiEditBoxLine
												className="account_update"
												style={crudIcon}
												size="1.2em"
												onClick={showEditUi}
											/>
										</div>
										{editUi ? <EditPost onClick={showEditUi} id={id}/> : null}
									</div>
								</div>
							</div>

  )
}

export default UserSinglePost