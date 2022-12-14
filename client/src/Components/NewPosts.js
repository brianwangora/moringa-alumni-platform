import React, { useEffect, useState } from "react";
import "../Css/NewPosts.css"

function NewPosts() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		fetch("/post")
			.then((r) => r.json())
			.then((d) => setPosts(d));
	}, []);
 console.log(posts)
	return (
		<div className="latest_container">
			{posts.map((post) => {
				return <div key={post.id}>
                    <div className="latest_post">
						<img src={post.image_url} className="img"/>
						<div className="H3p">
							<h5 className="latest_h3">{post.title}</h5>
							<p className="latest_p">{post.content}</p>
						</div>
                        <button className="latest_btn">Explore</button>
					</div>
                </div>
					
			
			})}
		</div>
	);
}

export default NewPosts;