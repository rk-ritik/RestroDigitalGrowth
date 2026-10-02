import React, { useState, useEffect } from 'react';
import {
  WhatsAppIcon,
  PhoneIcon,
  MailIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  MapPinIcon,
  CloseIcon,
  SparklesIcon,
  ShieldCheckIcon,
  StoreIcon
} from '../utils/icons';

export const AGENCY_CONFIG = {
  phoneDisplay: "+91 9296902604",
  phoneCall: "tel:+919296902604",
  whatsappNumber: "919296902604",
  email: "restrodigitalgrowth@gmail.com",
  city: "Pan-India Remote Support",
  googleScriptUrl: "https://script.google.com/macros/s/AKfycbze-o42sbujGT8PFUPo4AtdQGofxl-ysLMe1xuqXti6Szg4xCVXzIjvlIMzsV1zr-WJ/exec",
};

export const openEmailComposer = (subject = 'Restaurant Digital Inquiry', body = '') => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile) {
    window.location.href = `mailto:${AGENCY_CONFIG.email}?subject=${encodeURIComponent(subject)}${body ? `&body=${encodeURIComponent(body)}` : ''}`;
  } else {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${AGENCY_CONFIG.email}&su=${encodeURIComponent(subject)}${body ? `&body=${encodeURIComponent(body)}` : ''}`;
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
  }
};

export default function Contact({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    restaurantName: '',
    ownerName: '',
    phoneNumber: '',
    city: '',
    serviceRequired: 'Digital & QR Menu Design',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && onClose) onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const serviceOptions = [
    "Digital & QR Menu Design",
    "HD Food Photo upload",
    "Zomato Catalog & Setup",
    "Swiggy Add-ons & Modifiers",
    "High-Margin Combos & Thalis",
    "FSSAI & Restaurant Onboarding",
    "Full Digital Restaurant Overhaul",
    "Other Custom Requirement"
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const now = new Date();
    const formattedTimestamp = now.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    // Explicitly mapping exact Google Sheet column headers from your spreadsheet:
    // [Timestamp, Restaurant Name, Owner/Manager, Phone, City/Location, Service, Requirements, Status]
    const dataMap = {
      // 1. Exact Column Headers (as in your Google Sheet)
      'Timestamp': formattedTimestamp,
      'Restaurant Name': formData.restaurantName,
      'Owner/Manager': formData.ownerName,
      'Phone': formData.phoneNumber,
      'City/Location': formData.city,
      'Service': formData.serviceRequired,
      'Requirements': formData.message || formData.serviceRequired,
      'Status': 'New',

      // 2. Standard script parameter variations (camelCase, lower, aliases)
      'timestamp': formattedTimestamp,
      'restaurantName': formData.restaurantName,
      'restaurant_name': formData.restaurantName,
      'restaurant': formData.restaurantName,
      
      'ownerName': formData.ownerName,
      'owner_name': formData.ownerName,
      'owner': formData.ownerName,
      'ownerManager': formData.ownerName,
      'Owner / Manager': formData.ownerName,
      'Owner Name': formData.ownerName,

      'phone': formData.phoneNumber,
      'phoneNumber': formData.phoneNumber,
      'phone_number': formData.phoneNumber,
      'Phone Number': formData.phoneNumber,
      'mobile': formData.phoneNumber,
      'Mobile': formData.phoneNumber,

      'city': formData.city,
      'City': formData.city,
      'location': formData.city,
      'Location': formData.city,
      'City / Location': formData.city,

      'service': formData.serviceRequired,
      'serviceRequired': formData.serviceRequired,
      'service_required': formData.serviceRequired,
      'Service Required': formData.serviceRequired,
      'serviceName': formData.serviceRequired,

      'requirements': formData.message || formData.serviceRequired,
      'requirement': formData.message || formData.serviceRequired,
      'message': formData.message || formData.serviceRequired,
      'Message': formData.message || formData.serviceRequired,
      'note': formData.message || formData.serviceRequired,

      'status': 'New',
      'Date': now.toLocaleDateString('en-IN'),
      'Time': now.toLocaleTimeString('en-IN')
    };

    try {
      if (AGENCY_CONFIG.googleScriptUrl) {
        const queryParams = new URLSearchParams();
        Object.entries(dataMap).forEach(([key, val]) => {
          queryParams.append(key, String(val ?? ''));
        });

        const postUrl = `${AGENCY_CONFIG.googleScriptUrl}?${queryParams.toString()}`;

        // Send via POST with text/plain body & no-cors (bypasses CORS & Google Apps Script preflight)
        await fetch(postUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'text/plain;charset=utf-8',
          },
          body: JSON.stringify(dataMap),
        });
      }
    } catch (err) {
      console.error('Error submitting enquiry to Google Sheet:', err);
      // Fallback: try GET request with query params
      try {
        const queryParams = new URLSearchParams();
        Object.entries(dataMap).forEach(([key, val]) => {
          queryParams.append(key, String(val ?? ''));
        });
        await fetch(`${AGENCY_CONFIG.googleScriptUrl}?${queryParams.toString()}`, {
          method: 'GET',
          mode: 'no-cors',
        });
      } catch (fallbackErr) {
        console.error('Fallback GET error:', fallbackErr);
      }
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  const generateWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Hello Restro Digital Growth Team,\n\nI want to discuss digital growth for my restaurant.\n\n` +
      `🍽️ Restaurant: ${formData.restaurantName || '[Restaurant Name]'}\n` +
      `👤 Owner/Manager: ${formData.ownerName || '[Name]'}\n` +
      `📍 City: ${formData.city || '[City]'}\n` +
      `📞 Phone: ${formData.phoneNumber || '[Phone]'}\n` +
      `⚡ Service: ${formData.serviceRequired}\n` +
      `📝 Note: ${formData.message || 'Please share portfolio details and quick pricing.'}`
    );
    return `https://wa.me/${AGENCY_CONFIG.whatsappNumber}?text=${text}`;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-7 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl my-auto rounded-3xl bg-[#080d20] border border-orange-500/40 overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2 text-white bg-black/70 hover:bg-red-600 rounded-full transition-colors border border-white/20 cursor-pointer shadow-lg"
          aria-label="Close contact modal"
        >
          <CloseIcon className="w-4 h-4" />
        </button>

        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[550px] h-32 bg-gradient-to-r from-orange-500/15 via-amber-500/15 to-emerald-500/15 blur-[90px] pointer-events-none rounded-full" />

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 p-6 sm:p-8 md:p-9 relative overflow-y-auto custom-scrollbar">

          {/* Left Column (5 of 12 cols): Direct Channels & Guarantee */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div>
              {/* Header Badge */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-400 text-[10px] font-mono font-bold uppercase tracking-wider mb-2">
                <SparklesIcon className="w-3 h-3 text-orange-400" />
                <span>DIRECT CONSULTATION</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-white font-heading">
                Let's Grow Your Restaurant Online
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 font-light mt-1.5 leading-relaxed">
                Connect with our team to upgrade your menu, shoot HD dish photos, or optimize your Zomato &amp; Swiggy presence.
              </p>

              {/* Direct Channels */}
              <div className="space-y-2.5 mt-4">
                {/* WhatsApp */}
                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 hover:border-emerald-400 transition-colors group shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <WhatsAppIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">
                      Chat on WhatsApp
                    </span>
                    <span className="text-[11px] text-emerald-300 font-medium">
                      Fastest response &bull; 9 AM - 9 PM
                    </span>
                  </div>
                </a>

                {/* Call */}
                <a
                  href={AGENCY_CONFIG.phoneCall}
                  className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.03] border border-white/8 hover:border-orange-500/30 transition-colors group shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <PhoneIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">
                      Direct Voice Call
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">
                      {AGENCY_CONFIG.phoneDisplay}
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${AGENCY_CONFIG.email}?subject=Restaurant%20Digital%20Inquiry`}
                  onClick={(e) => {
                    e.preventDefault();
                    openEmailComposer('Restaurant Digital Inquiry');
                  }}
                  className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.03] border border-white/8 hover:border-sky-500/30 transition-colors group shadow-sm cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <MailIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">
                      Email Consultation
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">
                      {AGENCY_CONFIG.email}
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* What Happens Next Note */}
            <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/6 text-xs text-slate-300 space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs font-bold text-white">
                <ShieldCheckIcon className="w-4 h-4 text-emerald-400" />
                <span>What happens after you enquire?</span>
              </div>
              <ul className="text-[11px] text-slate-400 space-y-1 font-light pl-5 list-disc">
                <li>We review your existing menu &amp; dish photos.</li>
                <li>We suggest missing add-ons and margin boosts.</li>
                <li>Fast 2-4 day execution with zero technical hassle.</li>
              </ul>
            </div>
          </div>

          {/* Right Column (7 of 12 cols): Clean Enquiry Form */}
          <div className="lg:col-span-7 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/10 pt-5 lg:pt-0 lg:pl-8">

            {submitted ? (
              <div className="my-auto py-8 text-center space-y-4 animate-in fade-in">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg">
                  <CheckCircleIcon className="w-7 h-7" />
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white font-heading">
                  Enquiry Received!
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto font-light leading-relaxed">
                  Thank you, <strong className="text-white">{formData.ownerName || 'Partner'}</strong>. We will review <strong className="text-white">{formData.restaurantName || 'your restaurant'}</strong> details and get in touch shortly.
                </p>

                <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-2.5">
                  <a
                    href={generateWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-black font-bold text-xs flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>Open on WhatsApp</span>
                  </a>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        restaurantName: '',
                        ownerName: '',
                        phoneNumber: '',
                        city: '',
                        serviceRequired: 'Digital & QR Menu Design',
                        message: ''
                      });
                    }}
                    className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs text-slate-300 cursor-pointer"
                  >
                    Send Another Query
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white font-heading">
                    Send Us Your Restaurant Requirements
                  </h3>
                  <p className="text-[11px] text-slate-400 font-light">
                    Fill in details below for a quick proposal and free menu check.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Restaurant Name */}
                  <div>
                    <label className="block text-[11px] font-medium text-slate-300 mb-1">
                      Restaurant / Cafe Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.restaurantName}
                      onChange={(e) => setFormData({ ...formData, restaurantName: e.target.value })}
                      placeholder="e.g. Royal Darbar / The Spice Bowl"
                      className="w-full px-3 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>

                  {/* Owner Name */}
                  <div>
                    <label className="block text-[11px] font-medium text-slate-300 mb-1">
                      Owner / Manager Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.ownerName}
                      onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                      placeholder="e.g. Vikram Sharma"
                      className="w-full px-3 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Phone Number */}
                  <div>
                    <label className="block text-[11px] font-medium text-slate-300 mb-1">
                      Phone Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      placeholder="e.g. +91 98765 XXXXX"
                      className="w-full px-3 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>

                  {/* City */}
                  <div>
                    <label className="block text-[11px] font-medium text-slate-300 mb-1">
                      City / Location *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="e.g. Mumbai, Delhi, Bengaluru..."
                      className="w-full px-3 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Service Required */}
                <div>
                  <label className="block text-[11px] font-medium text-slate-300 mb-1">
                    Primary Service Needed *
                  </label>
                  <select
                    value={formData.serviceRequired}
                    onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[#0d1326] border border-white/10 text-white text-xs focus:outline-none focus:border-orange-500 transition-colors"
                  >
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#0d1326] text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[11px] font-medium text-slate-300 mb-1">
                    Describe your requirements (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="e.g. We have paper menu with 50 items, need digital QR menu and Swiggy setup."
                    className="w-full px-3 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-orange-500 transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 hover:from-orange-600 hover:to-amber-700 shadow-xl shadow-orange-500/30 flex items-center justify-center gap-2 transition-all ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>Saving Inquiry to Google Sheet...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Inquiry &amp; Request Proposal</span>
                      <ArrowRightIcon className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

        </div>
      </div>
    </div>
  );
}
