import React, { useState } from 'react';
import { WhatsAppIcon, PhoneIcon, MailIcon, MessageSquareIcon, CloseIcon } from '../utils/icons';
import { AGENCY_CONFIG, openEmailComposer } from './Contact';

export default function FloatingContact({ onOpenContact }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const whatsappDirect = `https://wa.me/${AGENCY_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    'Hello Restro Digital Growth Team, I would like to discuss digital services for my restaurant.'
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Expanded Modal / Quick Drawer */}
      {isOpen && (
        <div className="mb-3 w-72 rounded-2xl bg-[#0c1224]/95 backdrop-blur-2xl border border-orange-500/40 p-4 shadow-2xl shadow-black/80 animate-in slide-in-from-bottom-3 duration-300">
          <div className="flex items-center justify-between pb-3 border-b border-white/8 mb-3">
            <span className="text-xs font-bold text-white font-heading">
              How can we help?
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded text-slate-400 hover:text-white cursor-pointer"
              aria-label="Close panel"
            >
              <CloseIcon className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2">
            <a
              href={whatsappDirect}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 hover:border-emerald-400 text-xs text-white transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4 text-emerald-400 shrink-0" />
              <div>
                <span className="font-bold block">WhatsApp Us</span>
                <span className="text-[10px] text-emerald-300">Quickest Response</span>
              </div>
            </a>

            <a
              href={AGENCY_CONFIG.phoneCall}
              className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.03] border border-white/8 hover:border-orange-500/40 text-xs text-white transition-colors"
            >
              <PhoneIcon className="w-4 h-4 text-orange-400 shrink-0" />
              <div>
                <span className="font-bold block">Call Us</span>
                <span className="text-[10px] text-slate-400">{AGENCY_CONFIG.phoneDisplay}</span>
              </div>
            </a>

            <a
              href={`mailto:${AGENCY_CONFIG.email}`}
              onClick={(e) => {
                e.preventDefault();
                openEmailComposer('Restaurant Digital Growth Inquiry');
              }}
              className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.03] border border-white/8 hover:border-sky-500/40 text-xs text-white transition-colors cursor-pointer"
            >
              <MailIcon className="w-4 h-4 text-sky-400 shrink-0" />
              <div>
                <span className="font-bold block">Email Us</span>
                <span className="text-[10px] text-slate-400">{AGENCY_CONFIG.email}</span>
              </div>
            </a>
          </div>

          <div className="mt-3 pt-2 text-center border-t border-white/6">
            <button
              onClick={() => {
                setIsOpen(false);
                if (onOpenContact) onOpenContact();
              }}
              className="text-[11px] text-orange-400 hover:underline font-mono cursor-pointer"
            >
              Or fill out complete enquiry form &rarr;
            </button>
          </div>
        </div>
      )}

      {/* Floating Action Trigger Button */}
      <div className="flex items-center gap-2">
        {/* Hover label */}
        {isHovered && !isOpen && (
          <span className="hidden sm:inline-block px-3 py-1.5 rounded-full bg-[#0d1226] border border-orange-500/30 text-white text-xs font-semibold shadow-lg shadow-black">
            Contact Us
          </span>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="w-13 h-13 rounded-full bg-gradient-to-tr from-orange-600 via-orange-500 to-amber-500 text-white p-3.5 shadow-2xl shadow-orange-500/40 hover:scale-110 active:scale-95 transition-all duration-200 border border-orange-300/30 flex items-center justify-center cursor-pointer"
          aria-label="Open contact options"
        >
          {isOpen ? (
            <CloseIcon className="w-6 h-6 text-white" />
          ) : (
            <MessageSquareIcon className="w-6 h-6 text-white" />
          )}
        </button>
      </div>
    </div>
  );
}
