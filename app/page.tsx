import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080706] text-[#fff8ea]">
      <Image
        src="/assets/decor-bg.jpg"
        alt=""
        fill
        priority
        aria-hidden="true"
        sizes="100vw"
        className="object-cover opacity-70"
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center_22%,rgba(246,210,134,0.18),transparent_34%),linear-gradient(180deg,rgba(0,0,0,0.25),rgba(0,0,0,0.86))]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.58),transparent_34%,transparent_66%,rgba(0,0,0,0.62))]" />

      <section className="relative z-10 flex min-h-screen items-center justify-center px-4 py-6 sm:px-8 lg:px-12">
        <div className="grid min-h-[calc(100vh-3rem)] w-full max-w-6xl grid-rows-[auto_1fr_auto] gap-8 border border-[#e9c16c]/35 bg-black/45 px-5 py-6 shadow-2xl shadow-black/50 backdrop-blur-[2px] sm:min-h-[760px] sm:px-10 sm:py-10 lg:px-14">
          <header className="flex justify-center">
            <Image
              src="/assets/dimensions-decor-logo.jpg"
              alt="Dimensions Decor"
              width={689}
              height={313}
              priority
              className="h-auto w-full max-w-[520px] drop-shadow-2xl"
            />
          </header>

          <div className="flex items-center justify-center text-center">
            <div>
              <h1 className="font-serif text-5xl font-medium leading-none text-white drop-shadow-2xl sm:text-7xl lg:text-8xl">
                Launching Soon
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/80 sm:mt-7 sm:text-xl">
                A refined destination for interior and exterior design is being
                prepared.
              </p>
              <div className="mt-8 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.24em] text-[#f1d590] sm:gap-5 sm:tracking-[0.32em]">
                <span className="h-px w-14 bg-[#f1d590]/45 sm:w-36" />
                <span>Interior | Exterior</span>
                <span className="h-px w-14 bg-[#f1d590]/45 sm:w-36" />
              </div>
            </div>
          </div>

          <footer className="mx-auto grid w-full max-w-3xl gap-4 text-center">
            <p className="text-sm text-white/70">dimensionsdecor.com</p>
          </footer>
        </div>
      </section>
    </main>
  );
}
