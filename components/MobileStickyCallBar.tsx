import Button from "@/components/Button";
import { PHONE, PHONE_HREF } from "@/lib/constants";

export default function MobileStickyCallBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-stone-200 bg-white/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom,0px))] backdrop-blur-sm md:hidden"
      aria-label="Quick call to action"
    >
      <Button href={PHONE_HREF} variant="primary" size="nav" className="w-full">
        Call {PHONE}
      </Button>
    </div>
  );
}
