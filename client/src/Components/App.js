import { Routes, Route } from "react-router-dom";
import "../Css/App.css";
import Home from "./Home";
import Posts from "./Posts";
import Nav from "./Nav";
import React, { useEffect, useState } from "react";
import Groups from "./Groups";
import Account from "./Account";
import About from "./About";
import Contact from "./Contact";

function App() {

  const [user, setUser] = useState('');
  // const [userPosts, setUserPosts] = useState([])

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user)
        });
      }
    });
  }, []);

  if (!user) return<>
  <Home onLogin={setUser} />;
  </>

	return (
		<div className="App">
      <Nav user={user} setUser={setUser}/>
			<Routes>
				<Route exact path="/" element={<Home onLogin={setUser}/>} />
				<Route exact path="/posts" element={<Posts />} />
        <Route exact path="/groups" element={<Groups />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact us" element={<Contact Us/>} />
        <Route exact path="/account" element={<Account user={user} />} />
			</Routes>
		</div>
	);
}

export default App;
