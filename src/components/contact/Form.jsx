import { useState } from "react";
import * as Yup from "yup";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const schema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await schema.validate(formData, { abortEarly: false });
      setSubmitSuccess(true);
      setFormErrors({});
    } catch (err) {
      const errors = {};
      err.inner.forEach(({ path, message }) => {
        errors[path] = message;
      });
      setFormErrors(errors);
    }
  };

  return (
    <>
      <h2 class="text-2xl text-center">Contact form</h2>
      <div className="pt-10 pb-8">
        {submitSuccess ? (
          <div
            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <strong className="font-bold">Form submitted successfully!</strong>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="flex-col gap-4 flex-align-center sm:flex-row">
              <div className="flex-1 w-full">
                <p>First Name</p>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full input ${
                    formErrors.firstName && "border-red-500"
                  }`}
                  placeholder="First Name.."
                />
                {formErrors.firstName && (
                  <p className="text-red-500 text-sm">{formErrors.firstName}</p>
                )}
              </div>
              <div className="flex-1 w-full">
                <p>Last Name</p>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full input ${
                    formErrors.lastName && "border-red-500"
                  }`}
                  placeholder="Last Name.."
                />
                {formErrors.lastName && (
                  <p className="text-red-500 text-sm">{formErrors.lastName}</p>
                )}
              </div>
            </div>
            <div className="mt-4">
              <p>Email Address</p>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full input ${
                  formErrors.email && "border-red-500"
                }`}
                placeholder="Email Address.."
              />
              {formErrors.email && (
                <p className="text-red-500 text-sm">{formErrors.email}</p>
              )}
            </div>
            <div className="mt-4">
              <p>Message</p>
              <input
                type="text"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`w-full input ${
                  formErrors.message && "border-red-500"
                }`}
                placeholder="Message.."
              />
              {formErrors.message && (
                <p className="text-red-500 text-sm">{formErrors.message}</p>
              )}
            </div>
            <div className="mt-4 flex-center-center">
              <button type="submit" className="btn btn-primary">
                submit
              </button>
            </div>
          </form>
        )}
      </div>
    </>
  );
};

export default Form;
