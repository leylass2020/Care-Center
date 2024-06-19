import street from "../imgs/3 (Street).svg";
import { useState } from "react";
import "../styles/findsrvice.css";
import loc from "../imgs/icons/locationblue.svg";
import ser from "../imgs/icons/searchblue.svg";
import img7 from "../imgs/stuf/image 7.svg";
import img8 from "../imgs/stuf/image 8.svg";
import img9 from "../imgs/stuf/image 9.svg";
import img1 from "../imgs/Rectangle 652.svg";
import FindDoctor from "../Components/FindDoctor";
import SearchFindService from "../Components/SearchFindService";
import { useTranslation } from "react-i18next";

function FindSevicePage() {
  const [t, i18n] = useTranslation("general");
  const [serchValue, setSearchValue] = useState("");
  const handleChange = (value) => {
    setSearchValue(value);
  };
  const [str1, setStr1] = useState("flex");
  const [strd, setStrd] = useState("none");
  const [List, setList] = useState([
    {
      id: 0,
      title: "medicen",
      servicetype: "type0",
      serviceprovider: "provider1",
      text: "Lorem ipsum dolor sit amet consectetur.",
      imgSrc: img1,
      price: "60 $",
      type: "Buy",
      style: { width: "170px" },
    },
    {
      id: 1,
      title: "medicen",
      servicetype: "type1",
      serviceprovider: "provider1",
      text: "Lorem ipsum dolor sit amet consectetur.",
      imgSrc: img1,
      price: "100 $",
      type: "Buy",
      style: { width: "170px" },
    },
    {
      id: 2,
      title: "medicen",
      servicetype: "type2",
      serviceprovider: "provider8",
      text: "Lorem ipsum dolor sit amet consectetur.",
      imgSrc: img1,
      price: "50 $",
      type: "Buy",
      style: { width: "170px" },
    },
    {
      id: 3,
      title: "medicen",
      servicetype: "type3",
      serviceprovider: "provider6",
      text: "Lorem ipsum dolor sit amet consectetur.",
      imgSrc: img1,
      price: "100 $",
      type: "Buy",
      style: { width: "170px" },
    },
    {
      id: 4,
      title: "medicen",
      servicetype: "type4",
      serviceprovider: "provider3",
      text: "Lorem ipsum dolor sit amet consectetur.",
      imgSrc: img1,
      price: "200 $",
      type: "Buy",
      style: { width: "170px" },
    },
    {
      id: 5,
      title: "medicen",
      servicetype: "type5",
      serviceprovider: "provider1",
      text: "Lorem ipsum dolor sit amet consectetur.",
      imgSrc: img1,
      price: "90 $",
      type: "Buy",
      style: { width: "170px" },
    },
  ]);
  const [doctors, setDoctors] = useState([
    { id: 0, name: "Wade Warren", spe: "Endodontist", imgSrc: img7 },
    { id: 1, name: "Jenny Wilson", spe: "Periodontist", imgSrc: img8 },
    { id: 3, name: "Jacob Jones", spe: "Pediatric Dentist", imgSrc: img9 },
    { id: 4, name: "Jacob Jones", spe: "Pediatric Dentist", imgSrc: img9 },
    { id: 5, name: "Wade name5", spe: "Endodontist", imgSrc: img7 },
    { id: 6, name: "Jenny name6", spe: "Periodontist", imgSrc: img8 },
    { id: 7, name: "Jacob name7", spe: "Pediatric Dentist", imgSrc: img9 },
    { id: 8, name: "Jacob name8", spe: "Pediatric Dentist", imgSrc: img9 },
    { id: 9, name: "Wade name9", spe: "Endodontist", imgSrc: img7 },
    { id: 10, name: "Jenny name10", spe: "Periodontist", imgSrc: img8 },
    { id: 11, name: "Jacob name11", spe: "Pediatric Dentist", imgSrc: img9 },
  ]);
  const [tSe, settSe] = useState("");
  const onclickHandleSer = () => {
    setStr1("none");
    setStrd("flex");
    settSe("ser");
    const l = List.filter(
      (item) =>
        item.serviceprovider.toLowerCase().includes(serchValue.toLowerCase()) ||
        item.servicetype.toLowerCase().includes(serchValue.toLowerCase())
    );
    setList(l);
  };
  const onclickHandledoc = () => {
    setStr1("none");
    setStrd("flex");
    settSe("doc");
    const l = doctors.filter(
      (item) =>
        item.name.toLowerCase().includes(serchValue.toLowerCase()) ||
        item.spe.toLowerCase().includes(serchValue.toLowerCase())
    );
    setDoctors(l);
  };
  return (
    <div>
      <header className="head-find">
        <div>
          <h2>{t("findrser")}</h2>
        </div>
        <div
          className="ser-find"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "30px",
            flexDirection: "row",
          }}
        >
          <div>
            <img
              src={ser}
              className="icon"
              style={{ height: "50px", width: "50px" }}
            ></img>
          </div>
          <div>
            <input
              type="input"
              value={serchValue}
              onChange={(e) => {
                handleChange(e.target.value);
              }}
              placeholder={t("search")}
            />
          </div>
          <div>
            <img src={loc} style={{ height: "30px", width: "30px" }}></img>
          </div>
        </div>
        <div
          className="ser-btns"
          style={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
            alignItems: "center",
          }}
        >
          <div>
            <button onClick={onclickHandleSer}>{t("findrser")}</button>
          </div>
          <div>
            <button onClick={onclickHandledoc}>{t("finddoc")}</button>
          </div>
        </div>
      </header>
      <main className="main-find">
        <div>
          <div>
            <img
              src={street}
              className="street"
              style={{ display: str1 }}
            ></img>
          </div>
        </div>
        <div style={{ display: strd, marginTop: "30px" }}>
          <div>
            <p>
              {" "}
              {tSe === "ser" ? (
                <SearchFindService list={List} />
              ) : (
                <FindDoctor list={doctors} />
              )}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default FindSevicePage;
