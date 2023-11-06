import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  HeroBannerWrapper,
  LogoSlide,
  LogoImage,
  HeroBannerContent,
  HeroBannerSubtitle,
  HeroBannerTitle,
  LogoSlider,
  PrimaryButton,
  SecondaryButton,
} from "./HeroBanner.styles";

const logoData = [
  { id: 1, imageUrl: "/logos/Aptar Logo.svg" },
  { id: 2, imageUrl: "/logos/bae-systems_logo.svg" },
  { id: 3, imageUrl: "/logos/BMW_logo_(gray)_4_w_66.webp" },
  { id: 4, imageUrl: "/logos/honeywell-1-logo-black-and-white.webp" },
  { id: 5, imageUrl: "/logos/honda_logo.svg" },
  { id: 6, imageUrl: "/logos/JOTA_logo.webp" },
  { id: 7, imageUrl: "/logos/Kautex_Textron_Logo_Bw-1.webp" },
  { id: 8, imageUrl: "/logos/mercedes-benz_logo.webp" },
  { id: 9, imageUrl: "/logos/michelin-tire-logo.webp" },
  { id: 10, imageUrl: "/logos/Siemens_logo.svg" },
];

export const HeroBanner: React.FC = () => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 0,
  };

  return (
    <HeroBannerWrapper>
      <HeroBannerContent>
        <div>
          <p style={{ color: "ff5722" }}>Monolith</p>
          <HeroBannerTitle>
            Use AI software to test less and learn more.
          </HeroBannerTitle>
          <HeroBannerSubtitle>
            Spend less time running expensive, repetitive tests and more time
            learning from your engineering data to predict the exact tests to
            run.
          </HeroBannerSubtitle>
          <PrimaryButton>Request Demo</PrimaryButton>
          <SecondaryButton>Speak to your team</SecondaryButton>
        </div>
      </HeroBannerContent>
      <LogoSlider {...settings}>
        {logoData.map((logo) => (
          <LogoSlide key={logo.id}>
            <LogoImage src={logo.imageUrl} alt={`Logo ${logo.id}`} />
          </LogoSlide>
        ))}
      </LogoSlider>
    </HeroBannerWrapper>
  );
};
