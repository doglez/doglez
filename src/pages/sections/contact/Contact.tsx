import React, { useContext } from "react";
import { Fade, Bounce } from "react-awesome-reveal";
import ContactForm from "./ContactForm";
import { StoreContext } from "../../../store/StoreProvider";

const Contact = () => {
    const { state } = useContext(StoreContext);
    const contactText = state.contactText;

    return (
        <section id="contact" className="pt-4 container">
            <h1 className="display-5 text-center">{contactText.title}</h1>
            <div className="row">
                <ContactForm contactText={contactText} />
                <div className="col-lg-6 col-sm-12">
                    <div className="row py-4">
                        <Bounce>
                            <div className="col-lg-6 col-md-12">
                                <a
                                    href="mailto:contact@doglez.com"
                                    className="fs-5 text-secondary text-decoration-none "
                                    aria-label="Email contact"
                                >
                                    <i className="bi bi-envelope-fill me-2" />
                                    contact@doglez.com
                                </a>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <a
                                    href="tel:+50497373565"
                                    className="fs-5 text-secondary text-decoration-none"
                                    aria-label="Celphone contact"
                                >
                                    <i className="bi bi-phone-vibrate-fill me-2" />
                                    +504 9737-3565
                                </a>
                            </div>
                            <div className="col-12 ">
                                <a
                                    href="https://github.com/doglez"
                                    className="fs-5 text-secondary text-decoration-none "
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="GitHub page"
                                >
                                    <i className="bi bi-github me-2" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/danilo-gonzalez"
                                    className="fs-5 text-secondary text-decoration-none "
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="LinkedIn page"
                                >
                                    <i className="bi bi-linkedin me-2" />
                                </a>
                                <a
                                    href="https://twitter.com/DanilojGonzalez"
                                    className="fs-5 text-secondary text-decoration-none "
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Twitter page"
                                >
                                    <i className="bi bi-twitter me-2" />
                                </a>
                            </div>
                        </Bounce>
                        <div className="col-12">
                            <Fade>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2797201.816712142!2d-87.8935461996755!3d14.477469039081404!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6a751a73b731cf%3A0x7ed1de82b6fb8264!2sHonduras!5e0!3m2!1sen!2sus!4v1625449498347!5m2!1sen!2sus"
                                    title="google-map"
                                    className="google-map"
                                />
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center pb-4">© 2021 Doglez</div>
        </section>
    );
};

export default Contact;
