import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { filterState } from "@/lib/atoms";
interface ButtonProps {
  active: boolean;
}
/* #5ab17d #4498d9eb */
const StyledButtonForFilter = styled.button<ButtonProps>`
  //background-color recive la varible de active seteando el color
  background-color: ${({ active }: ButtonProps) =>
    active ? "#4498d9eb" : "#F4F4F4"};
  color: ${({ active }: ButtonProps) => (active ? "#fff" : "#747474")};
  height: ${({ active }: ButtonProps) => (active ? "37px" : "33px")};
  border-radius: 10px;
  animation: 2s;
  border: none;
`;
const ConteinerSlider = styled.div`
  padding-left: 20px;
`;
// con next.js traerme el tamaño de la pantalla
const displayWidth: any = () => {
  if (typeof window !== "undefined") {
    return window.innerWidth;
  }
};
console.log("el tamaño de la pantalla", displayWidth());

export function SliderSearchFillter() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    dragSpeed: 0.7,
    slides: {
      perView: 5,
      spacing: 5,
    },
  });

  const [buttonStates, setButtonStates] = useRecoilState(filterState);

  function handleClick(buttonName: string) {
    const newButtonStates: any = { ...buttonStates };
    ///reinicio los buttons a false
    for (const name in newButtonStates) {
      newButtonStates[name] = false;
    }
    ///selecciono el boton que me pasan por buttonName
    ///activo el button a true
    newButtonStates[buttonName] = true;
    setButtonStates(newButtonStates);
  }

  return (
    <ConteinerSlider>
      <div ref={sliderRef} className="keen-slider">
        <div
          onClick={() => handleClick("todos")}
          className="keen-slider__slide number-slide1"
        >
          <StyledButtonForFilter active={buttonStates.todos}>
            Todos
          </StyledButtonForFilter>
        </div>
        <div
          onClick={() => handleClick("textiles")}
          className="keen-slider__slide number-slide2"
        >
          <StyledButtonForFilter active={buttonStates.textiles}>
            Textiles
          </StyledButtonForFilter>
        </div>
        <div
          onClick={() => handleClick("plasticos")}
          className="keen-slider__slide number-slide3"
        >
          <StyledButtonForFilter active={buttonStates.plasticos}>
            Plasticos
          </StyledButtonForFilter>
        </div>
        <div
          onClick={() => handleClick("sets")}
          className="keen-slider__slide number-slide4"
        >
          <StyledButtonForFilter active={buttonStates.sets}>
            Sets
          </StyledButtonForFilter>
        </div>
        <div
          onClick={() => handleClick("vinilos")}
          className="keen-slider__slide number-slide5"
        >
          <StyledButtonForFilter active={buttonStates.vinilos}>
            Vinilos
          </StyledButtonForFilter>
        </div>
        <div
          onClick={() => handleClick("papeleria")}
          className="keen-slider__slide number-slide6"
        >
          <StyledButtonForFilter active={buttonStates.papeleria}>
            Papeleria
          </StyledButtonForFilter>
        </div>
      </div>
    </ConteinerSlider>
  );
}
