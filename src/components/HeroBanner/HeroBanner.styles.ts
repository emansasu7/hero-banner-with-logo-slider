import Slider from "react-slick";
import styled from "styled-components";

export const HeroBannerWrapper = styled.div`
  background: #0d0d0d;
  color: #fff;
  padding: 100px 0;
  text-align: center;
`;

export const HeroBannerContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
`;

export const HeroBannerTitle = styled.h1`
  font-size: 2.5rem;
  margin: 20px 0;
`;

export const HeroBannerSubtitle = styled.p`
  font-size: 1.25rem;
  margin: 20px 0;
  max-width: 600px;
`;

export const PrimaryButton = styled.button`
  background: #ff5722;
  color: #fff;
  border: none;
  padding: 12px 24px;
  font-size: 1.25rem;
  margin: 10px 10px 10px 0;
  cursor: pointer;
  transition: background 0.3s ease;
  border-radius: 30px;
  &:hover {
    background: #ff7043;
  }
`;

export const SecondaryButton = styled.button`
  background: transparent;
  color: #fff;
  border: 2px solid #ff5722;
  padding: 10px 24px;
  font-size: 1.25rem;
  margin: 10px 0 10px 10px;
  cursor: pointer;
  transition: background 0.3s ease;
  border-radius: 30px;
  &:hover {
    background: #ff5722;
    color: #000;
  }
`;

export const LogoSlider = styled(Slider)`
  margin-top: 40px;
`;

export const LogoSlide = styled.div`
  padding: 20px;
`;

export const LogoImage = styled.img`
  max-width: 100%;
  height: auto;
  width: 100px;
  height: 100px;
  cursor: pointer;
`;
