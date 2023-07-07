import Header from "@/components/header";
import { Title, Text } from "@/ui/typography";
import { ConteinerCeleste } from "@/ui/conteiner-celeste";
import { ConteinerTextIntro } from "@/ui/container-text-intro";
import { FormularioProfile } from "@/components/form-profile";
export default function Profile() {
  return (
    <div>
      <Header state="inicio" />
      <ConteinerCeleste>
        <FormularioProfile />
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
