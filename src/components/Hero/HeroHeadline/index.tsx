import React from "react";

interface IHeroHeadline {
    title: string;
    subtitle: string;

};

const HeroHeadline = ({title, subtitle}: IHeroHeadline) => {
    return (
        <div className="flex-1 z-10">
            <h1 className="text-[36px] lg:text-[42px] lg:w-[390px] lg:leading-[52px] font-medium text-white mb-5">
              {title}
            </h1>
            <p className="text-[20px] lg:w-[270px] leading-[26px] tracking-wide text-[#9484a4]">
              {subtitle}
            </p>
        </div>
    );
};

export default HeroHeadline;