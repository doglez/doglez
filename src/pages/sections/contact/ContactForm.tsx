import React, { FC, useState } from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Fade } from "react-awesome-reveal";
import emailjs from "@emailjs/browser";
import Config from "../../../config/Config";

interface IContactForm {
    contactText: {
        title: string;
        name: string;
        email: string;
        company: string;
        subject: string;
        message: string;
        requiredMessage: string;
        validName: string;
        validEmail: string;
        validCompany: string;
        validSubject: string;
        validMessage: string;
        submit: string;
        sentMessage1: string;
        sentMessage2: string;
    };
}

type FormValue = {
    nameInput: string;
    emailInput: string;
    companyInput: string;
    subjectInput: string;
    messageInput: string;
};

const ContactForm: FC<IContactForm> = ({ contactText }) => {
    const [emailSent, setEmailSent] = useState<boolean>(false);

    const ContactFormSchema = Yup.object().shape({
        nameInput: Yup.string()
            .required(contactText.requiredMessage)
            .min(5, contactText.validName)
            .max(30, contactText.validName),
        emailInput: Yup.string()
            .required(contactText.requiredMessage)
            .email(contactText.validEmail),
        companyInput: Yup.string()
            .notRequired()
            .max(30, contactText.validCompany),
        subjectInput: Yup.string()
            .required(contactText.requiredMessage)
            .min(5, contactText.validSubject)
            .max(30, contactText.validSubject),
        messageInput: Yup.string()
            .required(contactText.requiredMessage)
            .min(20, contactText.validMessage)
            .max(200, contactText.validMessage),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormValue>({
        resolver: yupResolver(ContactFormSchema),
    });

    const sendEmail = handleSubmit(async (data) => {
        reset();
        await emailjs.send(
            Config.EMAILJS_SERVICE_ID,
            Config.EMAILJS_TEMPLATE_ID,
            data,
            Config.EMAILJS_PUBLIC_KEY
        );
        setEmailSent(true);
    });

    return (
        <>
            <div className="container">
                <div
                    className={
                        emailSent
                            ? "alert alert-success alert-dismissible fade show col-12"
                            : "d-none"
                    }
                    role="alert"
                >
                    <strong>{contactText.sentMessage1}</strong>
                    {contactText.sentMessage2}
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="alert"
                        aria-label="Close"
                    ></button>
                </div>
            </div>
            <div className="col-lg-6 col-sm-12">
                <Fade>
                    <form onSubmit={sendEmail} className="row container py-4">
                        <label className="fs-5 pb-1" htmlFor="nameInput">
                            {contactText.name}
                        </label>
                        <input
                            className="fs-5 text-secondary"
                            type="text"
                            {...register("nameInput")}
                            placeholder="Iron Man"
                        />
                        {!errors.nameInput ? (
                            <></>
                        ) : (
                            <div className="alert alert-danger mt-1 py-1">
                                {errors.nameInput?.message}
                            </div>
                        )}

                        <label className="fs-5 pb-1 pt-4" htmlFor="emailInput">
                            {contactText.email}
                        </label>
                        <input
                            className="fs-5 text-secondary"
                            type="email"
                            {...register("emailInput")}
                            placeholder="iron.man@avengers.com"
                        />
                        {!errors.emailInput ? (
                            <></>
                        ) : (
                            <div className="alert alert-danger mt-1 py-1">
                                {errors.emailInput?.message}
                            </div>
                        )}

                        <label
                            className="fs-5 pb-1 pt-4"
                            htmlFor="companyInput"
                        >
                            {contactText.company}
                        </label>
                        <input
                            className="fs-5 text-secondary"
                            type="text"
                            {...register("companyInput")}
                            placeholder="Avengers"
                        />
                        {!errors.companyInput ? (
                            <></>
                        ) : (
                            <div className="alert alert-danger mt-1 py-1">
                                {errors.companyInput?.message}
                            </div>
                        )}

                        <label
                            htmlFor="subjectInput"
                            className="fs-5 pb-1 pt-4"
                        >
                            {contactText.subject}
                        </label>
                        <input
                            type="text"
                            className="fs-5 text-secondary"
                            {...register("subjectInput")}
                        />
                        {!errors.subjectInput ? (
                            <></>
                        ) : (
                            <div className="alert alert-danger mt-1 py-1">
                                {errors.subjectInput?.message}
                            </div>
                        )}

                        <label
                            className="fs-5 pb-1 pt-4"
                            htmlFor="messageInput"
                        >
                            {contactText.message}
                        </label>
                        <textarea
                            className="fs-5 text-secondary"
                            {...register("messageInput")}
                        />
                        {!errors.messageInput ? (
                            <></>
                        ) : (
                            <div className="alert alert-danger mt-1 py-1">
                                {errors.messageInput?.message}
                            </div>
                        )}

                        <button
                            type="submit"
                            className=" mt-4 col-3 btn btn-outline-primary"
                        >
                            {contactText.submit}
                        </button>
                    </form>
                </Fade>
            </div>
        </>
    );
};

export default ContactForm;
