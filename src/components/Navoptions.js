import React, { useState, useEffect } from "react";

import Navcard from "./Navcard";
import "../styles/NavOption.css";

const Navoptions = ({
  mi,
  redmi,
  tv,
  laptop,
  fitness,
  home,
  radio,
  access,
}) => {
  const [miPhoneToggle, setMiPhoneToggle] = useState(false);
  const [redmiPhoneToggle, setRedmiPhoneToggle] = useState(false);
  const [tvToggle, setTvToggle] = useState(false);
  const [laptopToggle, setLaptopToggle] = useState(false);
  const [fitnessToggle, setFitnessToggle] = useState(false);
  const [homeToggle, setHomeToggle] = useState(false);
  const [audioToggle, setAudioToggle] = useState(false);
  const [accessoriesToggle, setAccessoriesToggle] = useState(false);

  useEffect(() => {
    if (window.location.pathname === "/miphone") {
      return setMiPhoneToggle(true);
    }
    if (window.location.pathname === "/redmiphone") {
      return setRedmiPhoneToggle(true);
    }
    if (window.location.pathname === "/tv") {
      return setTvToggle(true);
    }
    if (window.location.pathname === "/laptops") {
      return setLaptopToggle(true);
    }
    if (window.location.pathname === "/setFitnessToggle") {
      return setFitnessToggle(true);
    }
    if (window.location.pathname === "/home") {
      return setHomeToggle(true);
    }
    if (window.location.pathname === "/setradio") {
      return setAudioToggle(true);
    }
    if (window.location.pathname === "/accessories") {
      return setAccessoriesToggle(true);
    }
  }, []);

  return (
    <div className="Navoptions">
      {miPhoneToggle
        ? mi.map((item) => (
            <Navcard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}
      {redmiPhoneToggle
        ? redmi.map((item) => (
            <Navcard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}
      {laptopToggle
        ? laptop.map((item) => (
            <Navcard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}
      {tvToggle
        ? tv.map((item) => (
            <Navcard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}
      {fitnessToggle
        ? fitness.map((item) => (
            <Navcard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}
      {homeToggle
        ? home.map((item) => (
            <Navcard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}
      {audioToggle
        ? radio.map((item) => (
            <Navcard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}
      {accessoriesToggle
        ? access.map((item) => (
            <Navcard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}
    </div>
  );
};

export default Navoptions;
