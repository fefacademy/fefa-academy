import { Blockquote } from "@mantine/core";
import SealImage from "assets/fefa_seal.png";
import Image from "next/image";

export default function Manifesto({ data }: any) {
  return (
    <section
      className={`relative h-full rounded-md overflow-hidden p-5 md:p-7 text-black cursive`}
    >
      <Image
        src={"/static/images/parchment.jpg"}
        alt="parchment"
        layout="fill"
        objectFit="cover"
        objectPosition={"center"}
        className="!z-[0]"
      />
      <h3 className="relative text-2xl md:text-4xl font-semibold text-center !z-[10]">
        The Fefa Academy Manifesto
      </h3>
      <div className="grid gap-5 md:gap-8 grid-cols-1 md:grid-cols-2 p-3 md:p-8 md:px-14 relative !z-10">
        {data.map((d: any, i: number) => {
          return (
            <div key={i} className="space-y-2">
              <h4 className="text-xl text-center md:text-2xl font-semibold">
                {d.title}
              </h4>
              <Blockquote
                color={"dark"}
                p={"xs"}
                cite={d.cite}
                styles={{
                  root: {
                    color: "black",
                    padding: "2px",
                  },
                  cite: {
                    color: "black",
                    fontWeight: "bold",
                    fontSize: 16,
                  },
                }}
              >
                {d.quote}
              </Blockquote>
              <h5 className="text-lg md:text-xl">{d.body}</h5>
            </div>
          );
        })}
      </div>
      <div className="hidden relative md:flex justify-end md:absolute right-5 bottom-2">
        <Image alt="wax-seal" src={SealImage} width={81} height={87} />
      </div>
    </section>
  );
}
