import { check2, grid, loading1 } from "@/assets";
import brackets from "@/assets/svg/Brackets";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import { roadmap } from "@/constants";

const Roadmap = () => {
  return (
    <Section className="overflow-hidden" id="roadmap">
      <div className="container md:pb-10">
        <Heading
          tag="Our Roadmap..."
          title="What are we working on?"
          subtitle="We're working hard to bring you the best AI tools and services. Here's what we have planned for the future."
          image="/images/roadmap.png"
          className="text-center"
        />
      </div>

      <div className="relative grid gap-6 md:grid-cols-2 gap-y-8 md:gap-4 md:pb-[6rem]">
        {roadmap.map((item, index) => {
          const status = item.status === "done" ? "Done" : "In-Progress";
          return (
            <div key={index} className="card shadow-md rounded-lg p-7 relative">
              <div>
                <div className="absolute">
                  <img src={grid} className="w-full" width={550} height={550} />
                </div>

                <div className="relative z-1">
                  <div className="flex flex-col items-center justify-between">
                    <div>
                      <img
                        src={item.status === "done" ? check2 : loading1}
                        className="mr-2.5"
                        height={20}
                        width={20}
                        alt=""
                      />

                      {/* <div className="tagline">{status}</div> */}
                    </div>

                    <div className="mb-10">
                      <img
                        src={item.imageUrl}
                        className="w-full"
                        width={630}
                        height={420}
                        alt=""
                      />
                    </div>

                    <h4 className="h4 mb-4">{item.title}</h4>
                    <span className="tagline flex items-center md:justify-center mb-5">
                      {brackets("left")} <span className="mx-5">{status}</span>{" "}
                      {brackets("right")}
                    </span>
                    <p className="body-2 text-n-4">{item.text}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Roadmap;
