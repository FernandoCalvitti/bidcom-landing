"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/ui/components/button";
import ContactInfo from "./contact/contact-info";
import ContactHero from "./contact/contact-hero";

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <div className="mx-auto w-full max-w-[1600px] bg-white text-black">
      <ContactHero />

      <section className="w-full bg-gray-50 px-4 py-16 sm:px-16">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 lg:grid-cols-3">
          <ContactInfo />

          <div className="lg:col-span-2">
            <h2 className="mb-6 text-2xl font-semibold">Send Me a Message</h2>

            {isSubmitted && (
              <div className="mb-6 rounded-md bg-green-50 p-4 text-green-700">
                <p className="font-medium">Message sent successfully!</p>
                <p>
                  Thank you for reaching out. I&apos;ll get back to you soon.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="focus:border-primary focus:ring-primary w-full rounded-md border border-gray-300 p-3 focus:ring-1 focus:outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="focus:border-primary focus:ring-primary w-full rounded-md border border-gray-300 p-3 focus:ring-1 focus:outline-none"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="focus:border-primary focus:ring-primary w-full rounded-md border border-gray-300 p-3 focus:ring-1 focus:outline-none"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="focus:border-primary focus:ring-primary w-full rounded-md border border-gray-300 p-3 focus:ring-1 focus:outline-none"
                  placeholder="Tell me about your project or inquiry..."
                ></textarea>
              </div>

              <Button
                type="submit"
                className="inline-flex cursor-pointer items-center justify-center gap-2 p-4"
              >
                <span>Send Message</span>
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
