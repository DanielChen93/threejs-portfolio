import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';

const Contact = () => {
  const formRef = useRef();
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Daniel Chen',
          from_email: form.email,
          to_email: 'fadengchen1@gmail.com',
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: 'Thank you for your message 😃',
            type: 'success',
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({ name: '', email: '', message: '' });
          }, 3000);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: 'danger',
          });
        },
      );
  };

  return (
    <section className="c-space my-20" id="contact">
      {alert.show && <Alert {...alert} />}
      <div className="relative flex items-center justify-center flex-col">
        {/* Terminal-style container */}
        <div className="relative bg-black rounded-lg shadow-lg border border-gray-600 w-full mx-auto">
          {/* Terminal header */}
          <div className="flex items-center px-4 py-2 bg-gray-800 border-b border-gray-600 rounded-t-lg">
            <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-400 mr-2"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
          </div>

          {/* Contact form */}
          <div className="p-10 mx-auto h-full sm:w-2/3 w-full flex flex-col justify-center">
            <h3 className="head-text">Let's talk</h3>
            <p className="text-lg text-white-600 mt-3">
              Actively seeking new opportunities! Whether it’s building websites, enhancing platforms, or tackling
              creative projects, I’m ready to make an impact. Let’s connect!
            </p>

            <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
              <label className="space-y-3">
                <span className="field-label">Full Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="field-input"
                  placeholder="Enter your full name"
                />
              </label>

              <label className="space-y-3">
                <span className="field-label">Email address</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="field-input"
                  placeholder="Enter your email"
                />
              </label>

              <label className="space-y-3">
                <span className="field-label">Your message</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="field-input"
                  placeholder="Hi, I wanna give you a job..."
                />
              </label>

              <button className="field-btn" type="submit" disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}

                <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
