"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Globe, Send, CheckCircle } from "lucide-react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(
        process.env.NEXT_PUBLIC_CONTACT_FUNCTION_URL!,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", company: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact">
      <div className="contact-inner">
        <div className="contact-info">
          <div className="section-label">
            <Mail size={13} /> Get in Touch
          </div>
          <h2 className="contact-heading">We&apos;d love to hear from you</h2>
          <p className="contact-sub">
            Have a question about FeedSolve? Want to see a demo or need help getting started? Send us a message and we&apos;ll get back to you.
          </p>

          <div className="contact-details">
            <div className="contact-detail-item">
              <div className="contact-detail-icon">
                <Mail size={18} />
              </div>
              <div>
                <div className="contact-detail-label">Email Us</div>
                <a href="mailto:hello@feedsolve.com" className="contact-detail-value">
                  hello@feedsolve.com
                </a>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="contact-detail-icon">
                <Phone size={18} />
              </div>
              <div>
                <div className="contact-detail-label">Call Us</div>
                <a href="tel:+94766206555" className="contact-detail-value">
                  +94 (76) 620-6555
                </a>
              </div>
            </div>
          </div>

          <div className="contact-offices">
            <div className="contact-offices-title">
              <Globe size={16} /> Our Offices
            </div>

            <div className="contact-office">
              <div className="contact-office-header">
                <MapPin size={15} />
                <span className="contact-office-flag">🇬🇧</span>
                <strong>United Kingdom</strong>
              </div>
              <p>Office 4157, 58 Peregrine Road<br />Hainault, Ilford, Essex<br />United Kingdom, IG6 3SZ</p>
            </div>

            <div className="contact-office">
              <div className="contact-office-header">
                <MapPin size={15} />
                <span className="contact-office-flag">🇱🇰</span>
                <strong>Sri Lanka</strong>
              </div>
              <p>Kurunegala Road<br />Kuliyapitiya<br />Kurunegala, Sri Lanka</p>
            </div>
          </div>
        </div>

        <div className="contact-form-wrap">
          {status === "success" ? (
            <div className="contact-success">
              <CheckCircle size={48} />
              <h3>Message sent!</h3>
              <p>Thanks for reaching out. We&apos;ll get back to you within one business day.</p>
              <button className="btn-primary teal" onClick={() => setStatus("idle")}>
                Send another message
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3 className="contact-form-title">Send us a message</h3>

              <div className="contact-form-row">
                <div className="contact-field">
                  <label htmlFor="contact-name">Full Name *</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="Jane Smith"
                    value={form.name}
                    onChange={handleChange}
                    required
                    disabled={status === "sending"}
                  />
                </div>
                <div className="contact-field">
                  <label htmlFor="contact-email">Email Address *</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="jane@company.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    disabled={status === "sending"}
                  />
                </div>
              </div>

              <div className="contact-field">
                <label htmlFor="contact-company">Company</label>
                <input
                  id="contact-company"
                  name="company"
                  type="text"
                  placeholder="Your company name"
                  value={form.company}
                  onChange={handleChange}
                  disabled={status === "sending"}
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-message">Message *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Tell us how we can help..."
                  value={form.message}
                  onChange={handleChange}
                  required
                  disabled={status === "sending"}
                />
              </div>

              {status === "error" && (
                <p className="contact-error">Something went wrong. Please try again or email us directly at hello@feedsolve.com.</p>
              )}

              <button
                type="submit"
                className="btn-primary teal contact-submit"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending…" : (<>Send Message <Send size={15} /></>)}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
