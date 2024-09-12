'use client';
import '../../button.css';
import SectionHeading from '../common/sectionheading';
import emailjs from 'emailjs-com';
import { useState, useEffect } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSending, setIsSending] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Ensures this runs on the client only
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    const serviceID = 'service_rar82eo';
    const templateID = 'template_actd2xg';
    const userID = 'dnoeXQcmfhqCi4-Tr'; // Your EmailJS user ID

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then(() => {
        setIsSending(false);
      })
      .catch(() => {
        setIsSending(false);
      });
  };

  if (!mounted) return null; // Avoid rendering on the server

  return (
    <div className="container mx-auto p-6 md:p-12 grid grid-cols-1 lg:grid-cols-10 gap-8">
      {/* Left Half */}
      <section className="col-span-1 md:col-span-4 flex flex-col items-center md:p-8 sm:p-4">
        <SectionHeading name="Let's get in" styledName="Touch" />
      </section>

      <section className="col-span-1 md:col-span-6 md:p-8 sm:p-4">
        <section className="flex flex-wrap gap-2 justify-between pb-8">
          <section>
            <p className="uppercase text-gray-400 tracking-wider">Email:</p>
            <p>
              <a href="mailto:subhamsahadeep@gmail.com">
                <h3 className="text-md font-bold tracking-wider text-gray-300">
                  subhamsahadeep@gmail.com
                </h3>
              </a>
            </p>
          </section>
        </section>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 rounded-md bg-[#181a1c] text-gray-300"
            placeholder="Name"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 rounded-md bg-[#181a1c] text-gray-300"
            required
            placeholder="Email"
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-4 rounded-md bg-[#181a1c] text-gray-300"
            placeholder="Subject"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-4 rounded-md bg-[#181a1c] text-gray-300"
            rows={5}
            required
            placeholder="Message"
          />
          <button
            type="submit"
            disabled={isSending}
            className="custom-button float-right"
          >
            {isSending ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </section>
    </div>
  );
}
