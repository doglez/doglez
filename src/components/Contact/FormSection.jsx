import { useFormik } from "formik";
import React from "react";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import { Fade } from "react-reveal";

const FormSection = () => {
    const state = useSelector((state) => state.selectedData);
    const {
        name,
        email,
        company,
        subject,
        message,
        requiredMessage,
        validName,
        validEmail,
        validCompany,
        submit,
        sentMessage1,
        sentMessage2,
    } = state.contactData;

    const formik = useFormik({
        initialValues: {
            nameInput: "",
            emailInput: "",
            companyInput: "",
            subjectInput: "",
            messageInput: "",
        },
        validationSchema: Yup.object({
            nameInput: Yup.string()
                .min(5, validName)
                .max(30, validName)
                .required(requiredMessage),
            emailInput: Yup.string()
                .email(validEmail)
                .required(requiredMessage),
            companyInput: Yup.string().max(30, validCompany),
            subjectInput: Yup.string().required(requiredMessage),
            messageInput: Yup.string().required(requiredMessage),
        }),
        initialStatus: false,
        onSubmit: (values, { resetForm, setStatus }) => {
            emailjs.send(
                process.env.REACT_APP_YOUR_SERVICE_ID,
                process.env.REACT_APP_YOUR_TEMPLATE_ID,
                values,
                process.env.REACT_APP_YOUR_USER_ID
            );
            // .then(
            //   (r) => {
            //     console.log(r.text);
            //   },
            //   (err) => {
            //     console.log(err.text);
            //   }
            // );
            resetForm();
            setStatus(true);
            let contactElement = document.getElementById("contact");
            let contactPosition = contactElement.offsetTop - 50;
            window.scrollTo(0, contactPosition);
        },
    });

    return (
        <>
            <div className="container">
                <div
                    className={
                        formik.status
                            ? "alert alert-success alert-dismissible fade show col-12"
                            : "d-none"
                    }
                    role="alert"
                >
                    <strong>{sentMessage1}</strong>
                    {sentMessage2}
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="alert"
                        aria-label="Close"
                    ></button>
                </div>
            </div>
            <div className="col-lg-6 col-sm-12">
                <Fade bottom>
                    <form
                        onSubmit={formik.handleSubmit}
                        className="row container py-4"
                    >
                        <label className="fs-5 pb-1" htmlFor="nameInput">
                            {name}
                        </label>
                        <input
                            className="fs-5 text-secondary"
                            type="text"
                            id="nameInput"
                            name="nameInput"
                            placeholder="Iron Man"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.nameInput}
                        />
                        {formik.touched.nameInput && formik.errors.nameInput ? (
                            <div className="alert alert-danger">
                                {formik.errors.nameInput}
                            </div>
                        ) : null}

                        <label className="fs-5 pb-1 pt-4" htmlFor="emailInput">
                            {email}
                        </label>
                        <input
                            className="fs-5 text-secondary"
                            type="email"
                            id="emailInput"
                            name="emailInput"
                            placeholder="iron.man@avengers.com"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.emailInput}
                        />
                        {formik.touched.emailInput &&
                            formik.errors.emailInput ? (
                            <div className="alert alert-danger">
                                {formik.errors.emailInput}
                            </div>
                        ) : null}

                        <label
                            className="fs-5 pb-1 pt-4"
                            htmlFor="companyInput"
                        >
                            {company}
                        </label>
                        <input
                            className="fs-5 text-secondary"
                            type="text"
                            id="companyInput"
                            name="companyInput"
                            placeholder="Avengers"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.companyInput}
                        />
                        {formik.touched.companyInput &&
                            formik.errors.companyInput ? (
                            <div className="alert alert-danger">
                                {formik.errors.companyInput}
                            </div>
                        ) : null}

                        <label
                            htmlFor="subjectInput"
                            className="fs-5 pb-1 pt-4"
                        >
                            {subject}
                        </label>
                        <input
                            type="text"
                            className="fs-5 text-secondary"
                            id="subjectInput"
                            name="subjectInput"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.subjectInput}
                        />
                        {formik.touched.subjectInput &&
                            formik.errors.subjectInput ? (
                            <div className="alert alert-danger">
                                {formik.errors.subjectInput}
                            </div>
                        ) : null}

                        <label
                            className="fs-5 pb-1 pt-4"
                            htmlFor="messageInput"
                        >
                            {message}
                        </label>
                        <textarea
                            className="fs-5 text-secondary"
                            name="messageInput"
                            id="messageInput"
                            cols="30"
                            onChange={formik.handleChange}
                            onBlur={formik.onBlur}
                            value={formik.values.messageInput}
                        />
                        {formik.touched.messageInput &&
                            formik.errors.messageInput ? (
                            <div className="alert alert-danger">
                                {formik.errors.messageInput}
                            </div>
                        ) : null}

                        <button
                            type="submit"
                            className=" mt-4 col-3 btn btn-outline-primary"
                        >
                            {submit}
                        </button>
                    </form>
                </Fade>
            </div>
        </>
    );
};

export default FormSection;
