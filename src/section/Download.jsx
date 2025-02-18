import React from "react";
import { Element, Link } from "react-scroll";
import { links, logos } from "../constants/index.jsx";
import Marker from "../Components/Marker.jsx";

const Download = () => {
  return (
    <section>
      <Element
        name="download"
        className="g7 relative pb-32 pt-24 max-lg:pb-24 max-md:py-16"
      >
        <div className="container">
          <div className="flex items-center">
            <div className="relative mr-6 flex-540 max-xl:flex-280 max-lg:flex-256 max-md:flex-100">
              <div className="mb-10">
                <img
                  src="/images/xora.svg"
                  alt="xora"
                  width={160}
                  height={55}
                />
              </div>
              <p className="body-1 mb-10 max-w-md">
                Try it now for free on Ios,Android,Pc, Web - What is Your
                Flavour , We've got you Covered
              </p>
              <ul className="flex flex-wrap items-center gap-6 ">
                {links.map((item) => (
                  <li
                    className="download_tech-link download_tech-link_last-before download_tech-link_last-after"
                    key={item.id}
                  >
                    <a
                      className="size-22 download_tech-icon_before relative flex items-center justify-center rounded-half border-2 border-s3 bg-s1 transition-borderColor durations-500 hover:border-s4"
                      href={item.url}
                    >
                      <span className="absolute -top-2 rotate-90">
                        <Marker />
                      </span>
                      <img
                        src="/images/lines.svg"
                        alt="lines"
                        className="absolute size-13/20 object-contain"
                      />
                      <span className="download_tech-icon">{item.icon}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-10 max-md:hidden">
              <div className="download_preview-after download_preview-before rounded-40 relative w-[955px] border-2 border-s5 p-6">
                <div className="relative rounded-3xl bg-s1 px-6 pb-6 py-14">
                  <span className="download_preview-dot left-6 bg-p2" />
                  <span className="download_preview-dot left-11 bg-s3" />
                  <span className="download_preview-dot left-16 bg-p1/15" />
                  <img
                    src="/images/screen.jpg"
                    width={855}
                    height={655}
                    alt="screen"
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
          <ul className="flex  mt-24 items-center gap-6 justify-center  max-lg:hidden">
            {logos.map(({ id, url, title, width, height }) => (
              <li className="mx-10" key={id}>
                <img src={url} alt={title} width={width} height={height} />
              </li>
            ))}
          </ul>
        </div>
      </Element>
    </section>
  );
};

export default Download;
