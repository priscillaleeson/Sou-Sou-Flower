import { useState } from "react";
import { ResetButton } from "./ResetButton";
import { MayFlowerPoem } from "./MayFlowerPoem";
import {
  LightestPinkFlower,
  LightPinkFlower,
  DarkPinkFlower,
  DotsLayer
} from "./FlowerLayers";

export function Flower() {
  const darkPetalsInitialState = {
    opacity: 1,
    visibility: "visible",
    transform: "rotate(0.0turn)"
  };

  const lightPetalsInitialState = {
    opacity: 1,
    visibility: "visible",
    transform: "rotate(0.0turn)"
  };

  const lightestPetalsandDotsInitialState = {
    opacity: 1,
    showPoemLines: false
  };

  const cursorInitialState = {
    darkPetalsCursor: "pointer",
    darkPetalsPointerEvents: "auto",
    lightPetalsCursor: "auto",
    lightPetalsPointerEvents: "none",
    lightestPetalsCursor: "auto",
    lightestPetalsPointerEvents: "none"
  };

  const [darkPetalsVisible, setDarkPetalsVisible] = useState(
    darkPetalsInitialState
  );

  const [lightPetalsVisible, setLightPetalsVisible] = useState(
    lightPetalsInitialState
  );
  const [
    lightestPetalsandDotsVisible,
    setLightestPetalsandDotsVisible
  ] = useState(lightestPetalsandDotsInitialState);

  const [cursor, setCursor] = useState(cursorInitialState);

  const handleDarkPetalsOnClick = () => {
    setDarkPetalsVisible({
      opacity: 0,
      visibility: "hidden",
      transition: ".3s ease 0s",
      transform: "rotate(0.009turn)"
    });

    setCursor({
      ...cursor,
      lightPetalsCursor: "pointer",
      lightPetalsPointerEvents: "auto"
    });
    //console.log("Dark petals clicked!");
  };

  const handleLightPetalsOnClick = () => {
    setLightPetalsVisible({
      opacity: 0,
      visibility: "hidden",
      //cursor: "auto",
      //pointerEvents: "auto",
      transition: ".3s ease 0s",
      transform: "rotate(-0.1turn)"
    });

    setCursor({
      ...cursor,
      lightestPetalsCursor: "pointer",
      lightestPetalsPointerEvents: "auto"
    });
    //console.log("Light petals clicked!");
  };

  const handleLightestPetalsOnClick = () => {
    setLightestPetalsandDotsVisible({
      opacity: 0.2,
      //cursor: "auto",
      //pointerEvents: "none",
      showPoemLines: true
    });

    setCursor({
      ...cursor,
      lightestPetalsCursor: "auto",
      lightestPetalsPointerEvents: "none"
    });
    //console.log("Lightest petals clicked!");
  };

  const handleReset = () => {
    setDarkPetalsVisible(darkPetalsInitialState);
    setLightPetalsVisible(lightPetalsInitialState);
    setLightestPetalsandDotsVisible(lightestPetalsandDotsInitialState);
    setCursor(cursorInitialState);
    //setShowPoemLines(false);
  };

  return (
    <div>
      <div className="flower">
        <div className="lightest-flower-box">
          <LightestPinkFlower
            lightestPetalsandDotsVisible={lightestPetalsandDotsVisible}
            handleOnClick={handleLightestPetalsOnClick}
            cursor={cursor}
          />
        </div>
        <div className="light-flower-box">
          <LightPinkFlower
            lightPetalsVisible={lightPetalsVisible}
            handleOnClick={handleLightPetalsOnClick}
            cursor={cursor}
          />
        </div>
        <div className="dark-flower-box">
          <DarkPinkFlower
            darkPetalsVisible={darkPetalsVisible}
            handleOnClick={handleDarkPetalsOnClick}
            cursor={cursor}
          />
        </div>
        <div className="dots-layer-box">
          <DotsLayer
            lightestPetalsandDotsVisible={lightestPetalsandDotsVisible}
            cursor={cursor}
          />
        </div>
        <div className="poem-box">
          <MayFlowerPoem
            showPoemLines={lightestPetalsandDotsVisible.showPoemLines}
          />
        </div>
      </div>
      <div className="reset-button">
        <ResetButton handleClick={handleReset} />
      </div>
    </div>
  );
}
