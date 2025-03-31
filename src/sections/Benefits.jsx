import Arrow from "@/assets/svg/Arrow";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import { benefits } from "@/constants";
import { GradientLight } from "@/design/Benefits";

const Benefits = () => {
  return (
    <Section id="features">
      <div className="relative z-2 container mx-auto max-w-7xl flex flex-col items-center">
        <Heading
          className="md:max-w-md lg:max-w-2xl text-center"
          title="Chat Better with SleekAI"
        />

        <section className="flex flex-wrap justify-center items-center gap-10 mb-10 w-full">
          {benefits.map((item, index) => {
            const { iconUrl, text, title, light, imageUrl } = item;

            return (
              <div
                key={index}
                className="block relative p-1 md:max-w-[24rem] w-full sm:w-[24rem] border border-gray-50 rounded-xl"
              >
                <div className="flex flex-col justify-between items-center relative z-2 min-h-[22rem] p-[2.5rem] pointer-events-none text-center">
                  <div>
                    <h5 className="h5 mb-5">{title}</h5>
                    <p className="body-2 mb-6 text-n-3">{text}</p>
                  </div>

                  <div className="flex items-center gap-5">
                    <img src={iconUrl} width={48} height={48} alt={title} />
                    <p className="flex items-center font-bold text-xs text-n-1 tracking-wider">
                      Explore more
                      <Arrow />
                    </p>
                  </div>
                </div>

                {light && <GradientLight className="-z-1" />}

                <div
                  className="absolute inset-0.5 bg-n-8 from-transparent to-white"
                  style={{ clipPath: "url(#benefits)" }}
                >
                  <div className="absolute inset-0 overflow-hidden opacity-0 transition-opacity hover:opacity-10 duration-300 ease-in-out">
                    {imageUrl && (
                      <img
                        src={imageUrl}
                        alt="image"
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </Section>
  );
};

export default Benefits;
