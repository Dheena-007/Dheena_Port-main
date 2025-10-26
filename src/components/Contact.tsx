import { useState } from 'react';
import { Mail, Github, Linkedin, Send, MapPin, Phone, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-[#0F172A] to-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">GET IN TOUCH</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#00B4D8] to-transparent mx-auto"></div>
          <p className="text-gray-300 mt-4 text-lg">
            Let's create something amazing together
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-10 mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 bg-gradient-to-r from-[#00B4D8] to-[#0077B6] rounded-lg flex-shrink-0">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-gray-400 text-sm mb-1">Email</p>
                    <a
                      href="mailto:sdheenadayalan896@gmail.com"
                      className="text-sm sm:text-base text-white hover:text-[#00B4D8] transition-colors font-medium break-all"
                    >
                      sdheenadayalan896@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 bg-gradient-to-r from-[#00B4D8] to-[#0077B6] rounded-lg flex-shrink-0">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Phone</p>
                    <a
                      href="tel:+916380722363"
                      className="text-sm sm:text-base text-white hover:text-[#00B4D8] transition-colors font-medium"
                    >
                      +91 6380722363
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 bg-gradient-to-r from-[#00B4D8] to-[#0077B6] rounded-lg flex-shrink-0">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Location</p>
                    <p className="text-sm sm:text-base text-white font-medium">
                      Dindigul, Tamil Nadu, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-10">
              <h3 className="text-xl font-bold text-white mb-6">Connect With Me</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Dheena-007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-4 bg-white bg-opacity-10 rounded-lg text-gray-300 hover:text-white hover:bg-opacity-20 transition-all duration-300 hover:scale-105"
                >
                  <Github size={24} />
                  <span className="font-medium">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/dheenadayalan-s-80291927b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-4 bg-white bg-opacity-10 rounded-lg text-gray-300 hover:text-white hover:bg-opacity-20 transition-all duration-300 hover:scale-105"
                >
                  <Linkedin size={24} />
                  <span className="font-medium">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-10">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12">
                <div className="p-4 bg-green-500 rounded-full mb-4 animate-bounce">
                  <CheckCircle className="text-white" size={48} />
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">Message Sent!</h4>
                <p className="text-gray-300">Thank you for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#00B4D8] focus:ring-2 focus:ring-[#00B4D8] focus:ring-opacity-50 transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#00B4D8] focus:ring-2 focus:ring-[#00B4D8] focus:ring-opacity-50 transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#00B4D8] focus:ring-2 focus:ring-[#00B4D8] focus:ring-opacity-50 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or just say hi..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-[#00B4D8] to-[#0077B6] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#00B4D8]/50 transition-all duration-300 hover:scale-105"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
