import "../styles/ourspecialist.css";
import "bootstrap/dist/css/bootstrap.css";
import HappyClient from "./HappyClient";
import im1 from "../imgs/Ellipse 3(2).svg";
import im2 from "../imgs/Ellipse 3(1).svg";
import im3 from "../imgs/Ellipse 3.svg";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

function OurClients() {
  const [t, i18n] = useTranslation("general");
  const [ListClient, setListClient] = useState([]);
  useEffect(() => {
    if (t("language") === "En") {
      setListClient(ListClienten);
    } else {
      setListClient(ListClientar);
    }
  }, []);

  const ListClientar = [
    {
      id: 0,
      name: "توماس دانييل",
      text: "أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس أيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايت",
      srcim: im1,
    },
    {
      id: 1,
      name: "ألين أليكس",
      text: "أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس أيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايت",
      srcim: im2,
    },
    {
      id: 2,
      name: "توماس اديسون",
      text: "أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس أيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايت",
      srcim: im3,
    },
  ];
  const ListClienten = [
    {
      id: 0,
      name: "Thomas daniel",
      text: "Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources.",
      srcim: im1,
    },
    {
      id: 1,
      name: "Alena Alex",
      text: "Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources.",
      srcim: im2,
    },
    {
      id: 2,
      name: "Thomas Edison",
      text: "Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources.",
      srcim: im3,
    },
  ];
  return (
    <>
      <div className="maincl container">
        <div>
          <h1>{t("Landing.client.title")}</h1>
          <p style={{ maxWidth: "600px", textAlign: "center" }}>
            {t("Landing.client.body")}
          </p>
        </div>
        <div className="row">
          {ListClient.map((cl) => (
            <HappyClient text={cl.text} srcimg={cl.srcim} name={cl.name} />
          ))}
        </div>
      </div>
    </>
  );
}
export default OurClients;
