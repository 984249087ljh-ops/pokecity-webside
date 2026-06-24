type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left"
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="mt-4 text-4xl font-black tracking-tight text-forest md:text-6xl">
        {title}
      </h2>
      {text ? <p className="mt-4 text-lg leading-8 text-forest/66">{text}</p> : null}
    </div>
  );
}
