export default function WaveDecoration() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-40 overflow-hidden">
      <div className="absolute -left-20 top-8 h-24 w-[120%] rotate-[-2deg] rounded-[100%] bg-ocean/18 blur-sm" />
      <div className="absolute -right-24 top-20 h-20 w-[95%] rotate-[3deg] rounded-[100%] bg-salmon/18 blur-sm" />
    </div>
  );
}
