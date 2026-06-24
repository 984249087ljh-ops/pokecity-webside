export default function LeafDecoration() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute right-6 top-10 hidden md:block">
      <div className="h-24 w-12 rotate-12 rounded-[100%_0_100%_0] bg-mint/70" />
      <div className="-mt-10 ml-8 h-20 w-10 -rotate-12 rounded-[100%_0_100%_0] bg-sage/38" />
    </div>
  );
}
