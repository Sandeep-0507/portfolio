import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4"
    >
      <div className="container max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10 z-10">

        {/* LEFT SIDE — TEXT */}
        <div className="space-y-6 text-left opacity-0 animate-fade-in-delay-1">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1"> Gugulothu</span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              Sandeep
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl opacity-0 animate-fade-in-delay-3">
            𝗜 𝗱𝗲𝘃𝗲𝗹𝗼𝗽 𝗶𝗺𝗽𝗮𝗰𝘁𝗳𝘂𝗹 𝘄𝗲𝗯 𝘀𝗼𝗹𝘂𝘁𝗶𝗼𝗻𝘀 𝘄𝗶𝘁𝗵 𝗰𝗹𝗲𝗮𝗻 𝗱𝗲𝘀𝗶𝗴𝗻 𝗮𝗻𝗱
            𝗿𝗼𝗯𝘂𝘀𝘁 𝗲𝗻𝗴𝗶𝗻𝗲𝗲𝗿𝗶𝗻𝗴. <br />
            𝗦𝗽𝗲𝗰𝗶𝗮𝗹𝗶𝘇𝗶𝗻𝗴 𝗶𝗻 𝗳𝘂𝗹𝗹-𝘀𝘁𝗮𝗰𝗸 𝗱𝗲𝘃𝗲𝗹𝗼𝗽𝗺𝗲𝗻𝘁, 𝗜 𝗰𝗿𝗲𝗮𝘁𝗲
            𝘀𝗺𝗼𝗼𝘁𝗵, 𝘀𝗰𝗮𝗹𝗮𝗯𝗹𝗲 𝗶𝗻𝘁𝗲𝗿𝗳𝗮𝗰𝗲𝘀 𝗮𝗻𝗱 𝘀𝘆𝘀𝘁𝗲𝗺𝘀.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>

        {/* RIGHT SIDE — PROFILE IMAGE */}
        <div className="flex justify-center opacity-0 animate-fade-in-delay-3">
          <div className="relative w-56 h-56 md:w-72 md:h-72">
            {/* Glowing Gradient Ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary via-purple-500 to-pink-500 animate-pulse blur-md"></div>

            {/* Image */}
            <img
              src="/image1.jpg"
              alt="Sandeep"
              className="w-full h-full object-cover rounded-full border-4 border-primary shadow-2xl relative z-10 animate-floating"
            />
          </div>
        </div>

      </div>

      {/* Scroll Down Icon */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
