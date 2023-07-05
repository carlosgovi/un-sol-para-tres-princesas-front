import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react"; // import from 'keen-slider/react.es' for to get an ES module
import { Logo } from "@/ui/icon";
import { Poo, Stich, MochilaUnicornio } from "@/ui/assets";
import styled from "styled-components";
import Image from "next/image";

const LogoMarca = styled(Logo)`
  padding: 20px;
  width: 100%;
  max-width: 650px;
`;

const ImagenSlider = styled(Image)`
  width: 100%;
  height: 550px;
  max-width: 650px;
`;
const SliderContainer = styled.div``;
export function Slider({ children }: any) {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slideChanged() {
        console.log("slide changed");
      },
    },
    [
      // add plugins here
    ]
  );
  return (
    <SliderContainer>
      <div ref={sliderRef} className="keen-slider">
        <div
          className="keen-slider__slide"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <LogoMarca />
        </div>
        <div
          className="keen-slider__slide"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <ImagenSlider
            src={MochilaUnicornio}
            alt="Mochila"
            placeholder="blur"
          />
        </div>
        <div
          className="keen-slider__slide"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <ImagenSlider src={Stich} alt="stich" placeholder="blur" />
        </div>
        <div
          className="keen-slider__slide"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <ImagenSlider src={Poo} alt="poo" placeholder="blur" />
        </div>
      </div>
    </SliderContainer>
  );
}
