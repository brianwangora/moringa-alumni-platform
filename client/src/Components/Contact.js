/*import React from "react";

const Contact = () => {
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

            <section>
              <div>
                <h1>ABOUT US</h1>
              </div>
                <div>
                  <h2>
                    Our Vision
                  </h2>
                    <p>
                    <b>A world in which anyone can create their future. </b><br/>
                    Our vision is one that strives to connect our African people
                    to the future they envision for themselves.  This is the
                    goal in-front of us and it keeps us striving for more.
                    Simply put…we will know we are succeeding when people
                    working in tech in Africa have the same earning potential
                    as their global counterparts possessing the same aptitude
                    and mindset.
                    </p>
                </div>

                <div>
                  <h2>
                    Our Mission
                  </h2>
                    <p>
                    <b>To build talent and opportunities through transformative
                    tech-based learning experiences </b> <br/>
                    Moringa School is a multi-disciplinary learning-accelerator committed to
                    closing the skills-gap in Africa’s job markets by delivering
                    transformative tech-based learning to high-potential jobseekers;
                    and on graduation connecting them to local and international
                    employers who desire high-quality tech talent
                    </p>
                </div>

                <div>
                  <h2>
                    Our Values
                  </h2>
                    <p>
                    These are the values that drive our operations and help
                    to keep us on track to our core mandate to stakeholders.
                    They speak to how we do what we do.
                    </p>
                </div>


            </section>

            <section>
                <div>
                    <h1>Moringa's Journey</h1>
                    <div className="underline"></div>
                    <p>
                    In 2014, Moringa School launched its maiden Software Development class in Kenya
                    with a cohort of only four (4) students and a vision for “A world in which anyone
                    can create their future”. At that time, there was a growing demand for skilled
                    tech talent as companies increased investment in technology to gain a competitive
                    advantage from their own digital transformation. This demand was not being met
                    by the available local talent due to a lack of skills…Something had to be done!

                    Through the introduction of its 5-6 month Software Development and Data
                    Science Bootcamps, Moringa School embarked on a journey that would
                    integrate over 4,000 learners from diverse backgrounds and
                    experiences while channeling their motivation to learn and
                    grow through market-aligned curriculum, a learning approach
                    that simulates practical on-the-job-experience, and a vibrant
                    community of employer partners, higher learning institutions,
                    and other industry stakeholders. This approach ensured that
                    graduating students were prepared to take up their rightful
                    place in the digital economy evidenced by the EdTech leader’s
                    employment rate of 85% for all job-seeking alumni within 12 months.
                    </p>
                </div>
            </section>


        </div>
    );
}

export default Contact;
*/




import React, { useState } from "react";

const FORM_ENDPOINT = ""; // TODO - fill on the later step

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <h2>Thank you!</h2>
        <div>We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
      <div>
        <input type="text" placeholder="Your name" name="name" required />
      </div>
      <div>
        <input type="email" placeholder="Email" name="email" required />
      </div>
      <div>
        <textarea placeholder="Your message" name="message" required />
      </div>
      <div>
        <button type="submit"> Send a message </button>
      </div>
    </form>
  );
};

export default Contact;
