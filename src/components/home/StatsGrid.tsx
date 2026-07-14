import { stats } from "@/data/stats";

export function StatsGrid() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {stats.map(({ id, value, label, icon: Icon }) => (
        <div key={id} className="group flex min-h-28 items-center gap-4 border border-border bg-surface/75 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold/65 hover:shadow-[0_0_28px_rgba(201,152,67,.08)]">
          <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold transition-transform duration-300 group-hover:scale-105">
            <Icon aria-hidden="true" className="size-5" strokeWidth={1.35} />
          </span>
          <span>
            <strong className="block font-display text-3xl font-medium leading-none text-gold-light">{value}</strong>
            <span className="mt-1 block text-[0.68rem] leading-4 text-text-primary">{label}</span>
          </span>
        </div>
      ))}
    </div>
  );
}
