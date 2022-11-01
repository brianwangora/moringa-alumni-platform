import React, { useState } from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { SiMinutemailer } from "react-icons/si";
import { MdLocationPin } from "react-icons/md";
import {
	FaFacebookF,
	FaInstagram,
	FaLinkedinIn,
	FaTwitter,
	FaYoutube,
} from "react-icons/fa";
import "../Css/Home.css";
import { NavLink } from "react-router-dom";
import Login from "./Login";
import Contact from "./Contact";


function Home({onLogin}) {
	const [show, setShow] = useState(false)
	const iconStyles = {
		marginTop: "12px",
		marginRight: "10px",
		marginLeft: "10px",
	};

	const socialStyles = {
		paddingLeft: "10px",
		marginTop: "12px",
		cursor: "pointer",
	};

function handleShow() {
	setShow((show) => !show);
}
	return (
		<div>
			<div className="Home">
				{show ?(
				<Login onLogin={onLogin}/>
				) : null
				}
				<div className="home_bottom">
					<div className="home_content">
						<h1>
							Nurturing Africa’s <br /> Tech Talent
						</h1>
						<p>
							Through market-aligned skills training, we help learners build new <br/>
							career possibilities with greater confidence and capability.

						</p>
					</div>

					<div className="home_btn">
						<button className="signup" onClick={handleShow}>signup</button>
						<button className="login" onClick={handleShow}>login</button>
					</div>
					<div className="home_top home_flex">
						<div className=" inner_hf">
							<div className="home_flex">
								<BsTelephoneFill style={iconStyles} />
								<p className="htp">+254742592594</p>
							</div>

							<div className="home_flex">
								<SiMinutemailer style={iconStyles} />
								<p className="htp">map123@gmail.com</p>
							</div>

							<div className="home_flex">
								<MdLocationPin style={iconStyles} />
								<p className="htp">Ngong Lane Plaza</p>
							</div>
						</div>
						<div className="home_social">
							<FaFacebookF size="0.9em" color="blue" style={socialStyles} />
							<br />
							<FaInstagram size="0.9em" color="orange" style={socialStyles} />
							<br />
							<FaLinkedinIn size="0.9em" color="blue" style={socialStyles} />
							<br />
							<FaTwitter size="0.9em" color="skyBlue" style={socialStyles} />
							<br />
							<FaYoutube size="0.9em" color="red" style={socialStyles} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
