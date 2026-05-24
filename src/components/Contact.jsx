import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null,
  });

  const [errors, setErrors] = useState({});

  // Use either vite env variable or data config value
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || portfolioData.personalInfo.web3FormsKey || "";

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for field
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus({ submitting: true, success: false, error: null });

    if (!accessKey || accessKey === "YOUR_ACCESS_KEY_HERE") {
      setStatus({
        submitting: false,
        success: false,
        error: "Form configuration missing. Please add your Web3Forms Access Key in src/data/portfolioData.js or .env.local file to receive emails."
      });
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: `${formData.name} - E-Portfolio`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({ submitting: false, success: true, error: null });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus({
          submitting: false,
          success: false,
          error: result.message || "Something went wrong. Please try again later."
        });
      }
    } catch (err) {
      setStatus({
        submitting: false,
        success: false,
        error: "Failed to send message. Please check your network connection and try again."
      });
    }
  };

  return (
    <section id="contact" className="py-20 relative bg-[#040917]/30 border-t border-slate-900/50">
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-purple-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight mb-4">
            Get In Touch
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans">
            Have a question, an internship opportunity, or a project collaboration idea? Feel free to drop a message!
          </p>
          <div className="h-[2px] w-24 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          {/* Info cards (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="glass p-8 rounded-2xl border border-slate-800 flex flex-col gap-8 h-full">
              <h3 className="text-xl font-bold text-white font-heading">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-350 font-heading">Location</h4>
                    <p className="text-sm text-slate-400 font-sans mt-0.5">{portfolioData.personalInfo.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-350 font-heading">Email</h4>
                    <a href={`mailto:${portfolioData.personalInfo.email}`} className="text-sm text-slate-400 hover:text-cyan-300 transition-colors font-sans mt-0.5 block">
                      {portfolioData.personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-pink-500/10 border border-pink-500/20 text-pink-400">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-350 font-heading">Phone</h4>
                    <p className="text-sm text-slate-400 font-sans mt-0.5">{portfolioData.personalInfo.phone}</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Contact form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="glass p-8 rounded-2xl border border-slate-800 h-full">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 font-heading">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950/60 border ${
                        errors.name ? "border-red-500/50 focus:border-red-500" : "border-slate-800 focus:border-purple-500"
                      } text-white text-sm outline-none transition-all font-sans`}
                    />
                    {errors.name && (
                      <span className="text-[11px] text-red-400 mt-1.5 flex items-center gap-1 font-sans">
                        <AlertCircle size={12} /> {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 font-heading">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950/60 border ${
                        errors.email ? "border-red-500/50 focus:border-red-500" : "border-slate-800 focus:border-purple-500"
                      } text-white text-sm outline-none transition-all font-sans`}
                    />
                    {errors.email && (
                      <span className="text-[11px] text-red-400 mt-1.5 flex items-center gap-1 font-sans">
                        <AlertCircle size={12} /> {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Subject field */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 font-heading">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Inquiry / Opportunity"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950/60 border ${
                      errors.subject ? "border-red-500/50 focus:border-red-500" : "border-slate-800 focus:border-purple-500"
                    } text-white text-sm outline-none transition-all font-sans`}
                  />
                  {errors.subject && (
                    <span className="text-[11px] text-red-400 mt-1.5 flex items-center gap-1 font-sans">
                      <AlertCircle size={12} /> {errors.subject}
                    </span>
                  )}
                </div>

                {/* Message field */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 font-heading">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950/60 border ${
                      errors.message ? "border-red-500/50 focus:border-red-500" : "border-slate-800 focus:border-purple-500"
                    } text-white text-sm outline-none transition-all resize-none font-sans`}
                  />
                  {errors.message && (
                    <span className="text-[11px] text-red-400 mt-1.5 flex items-center gap-1 font-sans">
                      <AlertCircle size={12} /> {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit button & State message */}
                <div className="space-y-4 pt-2">
                  <button
                    type="submit"
                    disabled={status.submitting}
                    className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-600/20 hover:opacity-95 hover:shadow-xl hover:shadow-purple-600/30 transition-all cursor-pointer focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status.submitting ? (
                      <>
                        <Loader size={18} className="animate-spin" /> Sending Message...
                      </>
                    ) : (
                      <>
                        <Send size={16} /> Send Message
                      </>
                    )}
                  </button>

                  {/* Submission success dialog */}
                  {status.success && (
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-300 font-sans text-sm animate-in fade-in slide-in-from-top-2 duration-300">
                      <CheckCircle size={18} className="flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold">Thank you!</span> Your message has been sent successfully. I will get back to you shortly.
                      </div>
                    </div>
                  )}

                  {/* Submission error dialog */}
                  {status.error && (
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300 font-sans text-sm animate-in fade-in slide-in-from-top-2 duration-300">
                      <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
                      <div className="leading-snug">{status.error}</div>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
