import React from 'react'


const About = () => {
    return (
        <div>
            <section className="py-4 bg-info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 my-auto">
                            <h4>About Us</h4>
                        </div>
                        <div className="col-md-8 my-auto">
                            <h6 className="float-end">
                                Home / About Us
                            </h6>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-c-light border-bottom">
                <div className="container">
                    <h5 className="main-heading">Our company</h5>
                    <div className="underline"></div>
                    <p>
                        Lorem ipsum.........................
                    </p>
                </div>
            </section>

        </div>
    );
}

export default About;
