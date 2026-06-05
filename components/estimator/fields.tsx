import type { ReactNode } from "react";

export const selectClass =
  "mt-1.5 w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-stone-900 shadow-sm transition-colors focus:border-stone-500 focus:outline-none focus:ring-2 focus:ring-stone-900/15";
export const labelClass = "block text-sm font-semibold text-stone-800";

export function EstimatorField({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      {children}
    </div>
  );
}
