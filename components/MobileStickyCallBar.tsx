import { PHONE_HREF } from "@/lib/constants";

function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 shrink-0"
      aria-hidden
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export default function MobileStickyCallBar() {
  return (
    <a
      href={PHONE_HREF}
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom,0px))] right-4 z-40 inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white/95 px-4 py-3 text-sm font-semibold text-stone-900 shadow-lg shadow-stone-900/10 backdrop-blur-sm transition-colors hover:bg-stone-50 md:hidden"
      aria-label="Call us"
    >
      <PhoneIcon />
      Call
    </a>
  );
}
