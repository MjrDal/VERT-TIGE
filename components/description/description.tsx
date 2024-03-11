"use client";
import Image from "next/image";

function Description() {
  return (
    <article className="p-5 bg-slate-200 mb-10">
      <section className=" flex flex-row">
        <div>
          <h1>Qui suis-je</h1>
          <p className="pr-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            accusantium est optio, perferendis, magni itaque ullam repudiandae
            quam sint facilis doloremque mollitia et vero architecto voluptatem
            illo in, hic nesciunt?
          </p>
        </div>
        <div>
          <Image
            src="/images/devanture.png"
            width={1000}
            height={1000}
            alt="logo du site"
          />
        </div>
      </section>
    </article>
  );
}

export default Description;
