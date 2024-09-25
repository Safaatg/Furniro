import "../Form/Form.css";
import addressIcon from "../../../public/assets/address.png";
import phone from "../../../public/assets/bxs_phone.png";
import clock from "../../../public/assets/bi_clock-fill.png"
import contact from "../../../public/assets/contact.png"
import { useState } from "react";
import * as yup from "yup";

const Form = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        Subject: "",
        Message: "",
    });

    let userSchema = yup.object().shape({
        name: yup.string().required('This field is required').min(3, 'Please enter a name with at least 3 characters'),
        email: yup.string().email('Invalid email').required('This field is required'),
        Subject: yup.string().required('This field is required'),
        Message: yup.string().required('This field is required'),
    });

    const [errorObject, setErrorObject] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    async function testValidation() {
        try {
            await userSchema.validate(formData, { abortEarly: false });
            setIsSubmitted(true);
            setFormData({
                name: "",
                email: "",
                Subject: "",
                Message: "",
            });
        } catch (err) {
            var errors = {};
            err.inner.forEach((error) => {
                errors[error.path] = error.message;
            });
            setErrorObject(errors);
        }
    }

    function handleOnFormSubmit(event) {
        event.preventDefault();
        testValidation();
    }

    function handleOnChange(event) {
        const KeyName = event.target.name;
        const KeyValue = event.target.value;

        setFormData({
            ...formData,
            [KeyName]: KeyValue,
        });
    }

    return (
<>
<img className="contactImg" src={contact}/>
        <div className="Form">
            
            <div className="textwrapper">
                <h1>Get In Touch With Us</h1>
                <p>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email.
                    Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
            </div>
            <div className="Formwrapper">
                <div className="left">
                    <div className="icon">
                        <img src={addressIcon} alt="Address Icon" />
                        <img src={phone} alt="Phone Icon" />
                        <img src={clock} alt="Clock Icon" />
                    </div>
                    <div className="description">
                        <div className="boxForm">
                            <h2>Address</h2>
                            <p>236 5th SE Avenue, New York NY10000, United States</p>
                        </div>
                        <div className="boxForm">
                            <h2>Phone</h2>
                            <p>Mobile: +(84) 546-6789
                                Hotline: +(84) 456-6789</p>
                        </div>
                        <div className="boxForm">
                            <h2>Working Time</h2>
                            <p>Monday-Friday: 9:00 - 22:00
                                Saturday-Sunday: 9:00 - 21:00</p>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <form onSubmit={handleOnFormSubmit}>
                        <div className="input-box">
                            <label htmlFor="name">Your name</label>
                            <input name="name" type="text" placeholder="Abc" value={formData.name} onChange={handleOnChange} />
                            {errorObject.name && <p className="form-alert">{errorObject.name}</p>}
                        </div>

                        <div className="input-box">
                            <label htmlFor="email">Email address</label>
                            <input name="email" type="email" placeholder="Abc@def.com" value={formData.email} onChange={handleOnChange} />
                            {errorObject.email && <p className="form-alert">{errorObject.email}</p>}
                        </div>

                        <div className="input-box">
                            <label htmlFor="Subject">Subject</label>
                            <input name="Subject" type="text" placeholder="This is optional" value={formData.Subject} onChange={handleOnChange} />
                            {errorObject.Subject && <p className="form-alert">{errorObject.Subject}</p>}
                        </div>

                        <div className="input-box">
                            <label htmlFor="Message">Message</label>
                            <textarea name="Message" placeholder="Hi! I'd like to ask about" value={formData.Message} onChange={handleOnChange} />
                            {errorObject.Message && <p className="form-alert">{errorObject.Message}</p>}
                        </div>

                        <button type="submit" className="btn-form">Submit</button>
                    </form>
                </div>
            </div>
        </div></>
    );
}

export default Form;