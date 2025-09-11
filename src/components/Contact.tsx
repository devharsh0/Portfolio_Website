import React, { useState, useEffect, Children } from 'react';
import { Mail, MapPin, Linkedin, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Clear status messages after 5 seconds
  useEffect(() => {
    if (submitStatus !== 'idle') {
      const timer = setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleEmailClick = () => {
    const to = 'hdharsh2799@gmail.com';
    const subject = encodeURIComponent('Hello Harsh');
    const body = encodeURIComponent('Hi Harsh,');
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/harsh-devaser-813a60192', '_blank', 'noopener');
  };

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            {t('contact.title')}
          </h2>

          <p className="text-lg text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            {t('contact.description')}
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="flex justify-center">
              <div className="space-y-6 w-full max-w-md">
                <button type="button" onClick={handleEmailClick} className="w-full text-left">
                  <div className="flex items-center space-x-4 cursor-pointer hover:bg-gray-700/40 p-2 rounded-lg transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Email</h3>
                      <p className="text-gray-300">hdharsh2799@gmail.com</p>
                    </div>
                  </div>
                </button>

                <div className="flex items-center space-x-4" style={{marginLeft:8}}>
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-900 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Location</h3>
                    <p className="text-gray-300">Duisburg, Germany</p>
                  </div>
                </div>

                <button type="button" onClick={handleLinkedInClick} className="w-full text-left">
                <div className="flex items-center space-x-4 cursor-pointer hover:bg-gray-700/40 p-2 rounded-lg transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-900 rounded-lg flex items-center justify-center">
                      <Linkedin className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">LinkedIn</h3>
                      <p className="text-gray-300">Harsh devaser</p>
                    </div>
                </div>
                </button>


                <div className="flex items-center space-x-4" style={{marginLeft:8}}>
                  <div className="flex-shrink-0 w-12 h-12 bg-green-900 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Phone</h3>
                    <p className="text-gray-300">+49 15225391007</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-900/20 border border-green-500 text-green-300 rounded-lg">
                  <p className="font-medium">Message sent successfully!</p>
                  <p className="text-sm">Thank you for your message. I'll get back to you soon.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-900/20 border border-red-500 text-red-300 rounded-lg">
                  <p className="font-medium">Failed to send message</p>
                  <p className="text-sm">Please try again or contact me directly at hdharsh2799@gmail.com</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    {t('contact.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-600 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    {t('contact.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-600 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    {t('contact.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-600 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center space-x-2 px-6 py-3 font-semibold rounded-lg transition-colors ${submitStatus === 'success'
                    ? 'bg-green-600 text-white hover:bg-green-500'
                    : submitStatus === 'error'
                      ? 'bg-red-600 text-white hover:bg-red-500'
                      : 'bg-blue-600 text-white hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed'
                    }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>{t('contact.sending')}</span>
                    </>
                  ) : submitStatus === 'success' ? (
                    <>
                      <span>✓</span>
                      <span>Message Sent!</span>
                    </>
                  ) : submitStatus === 'error' ? (
                    <>
                      <span>✗</span>
                      <span>Try Again</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>{t('contact.send')}</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;