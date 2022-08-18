export default function HeroContainer(props: any) {
  const { lw, rw, left, right, lclass, rclass } = props;

  return (
    <section className="mx-auto center flex-col lg:flex-row space-y-5 lg:space-x-5 lg:space-y-0">
      <div className={`w-full lg:w-${lw ?? "1/2"} ${lclass}`}>{left}</div>
      <div className={`w-full lg:w-${rw ?? "1/2"} ${rclass}`}>{right}</div>
    </section>
  );
}
