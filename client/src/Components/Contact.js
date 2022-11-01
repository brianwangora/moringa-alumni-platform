import React from "react";
import Footer from "./Footer";

const Contact = () => {
    const [formStatus, setFormStatus] = React.useState('Send')
    const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
    return (
        <div>
          <section>
                <div>
                    <h1>Moringa's Journey</h1>
                    <div className="underline"></div>
                    <p>
                            In Moringa we are transforming the way tech education is done in African Markets.
                            All our programs are delivered through a blended learning approach that combines
                            market-aligned courses, a classroom team of talented mentors with the skills and
                            knowledge to deliver growth and results for learners, and an environment that
                            supports student creativity, job market preparation in a fun, open, and
                            transformative learning experience. We celebrate our diversity and value strong,
                            professional relationships that help our students build their
                            futures with greater confidence, capability, and possibility.
                    </p>
                </div>
            </section>

            <div className="container">

            <form onSubmit={onSubmit}>
                <div>
                <label className="form-label" htmlFor="name">
                    Name
                </label>
                <input className="form-control" type="text" id="name" required />
                </div>

                <p></p>

                <div>
                <label className="form-label" htmlFor="email">
                    Email
                </label>
                <input className="form-control" type="email" id="email" required />
                </div>

                <p></p>

                <div>
                <label className="form-label" htmlFor="message">
                    Message
                </label>
                <textarea className="form-control" id="message" required />
                </div>

                <p></p>

                <button className="btn btn-danger" type="submit">
                {formStatus}
                </button>
            </form>
            </div>

            <Footer />

        </div>

    );
}

export default Contact;
