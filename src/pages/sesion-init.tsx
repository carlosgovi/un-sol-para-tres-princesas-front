import Header from "@/components/header";
import { Title, Text } from "@/ui/typography";
import { ConteinerCeleste } from "@/ui/conteiner-celeste";
import { ConteinerTextIntro } from "@/ui/container-text-intro";
import { FormularioSesion } from "@/components/form-sesion";
export default function SesionInit() {
  return (
    <div>
      <Header></Header>
      <ConteinerCeleste>
        <FormularioSesion />
      </ConteinerCeleste>
      <ConteinerTextIntro>
        <Title>LV Designs</Title>
        <Text>
          Sublimación y productos personalizados para quien busca originalidad y
          exclusividad.
        </Text>
      </ConteinerTextIntro>
    </div>
  );
}
