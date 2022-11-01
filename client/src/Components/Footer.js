import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	<h1 style={{ color: "green",
				textAlign: "center",
				marginTop: "-40px" }}>
		Moringa Alumni
	</h1>
	<Container>
		<Row>
		<Column>
			<Heading>About Us</Heading>
			<FooterLink href="#">Vision</FooterLink>
			<FooterLink href="#">Mission</FooterLink>
			<FooterLink href="#">Values</FooterLink>
		</Column>


		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="#">Ngong Lane Plaza, 1st Floor</FooterLink>
			<FooterLink href="#">+254 712 293 878</FooterLink>
			<FooterLink href="#">contact@moringaschool.com</FooterLink>
			<FooterLink href="#">admissions@moringaschool.com</FooterLink>
		</Column>

		<Column>
		</Column>

		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Linkedin
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
