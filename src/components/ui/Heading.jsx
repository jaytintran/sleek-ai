import brackets from "@/assets/svg/Brackets";
import React from "react";

const Heading = ({ title, className, subtitle, tag }) => {
  return (
    <div className={`${className} max-w-[60rem] mx-auto mb-12 lg:mb-20`}>
      {tag && (
        <span className="tagline flex items-center md:justify-center mb-5">
          {brackets("left")} <span className="mx-5">{tag}</span>{" "}
          {brackets("right")}
        </span>
      )}
      {title && <h2 className="h2">{title}</h2>}
      {subtitle && (
        <p className="text-lg text-gray-600 dark:text-white">{subtitle}</p>
      )}
    </div>
  );
};

export default Heading;
