export const LightestPinkFlower = (props) => {
  return (
    <div
      className="lightest-pink-flower-petal-center"
      onClick={props.handleOnClick}
      style={{
        opacity: props.lightestPetalsandDotsVisible.opacity,
        transition: "1.5s ease 0s",
        cursor: props.cursor.lightestPetalsCursor,
        pointerEvents: props.cursor.lightestPetalsPointerEvents
      }}
    >
      <div className="all-light-pink-flower-petals">
        <div className="lightest-flower-petals lightest-zero"></div>
        <div className="lightest-flower-petals lightest-one"></div>
        <div className="lightest-flower-petals lightest-two"></div>
        <div className="lightest-flower-petals lightest-three"></div>
        <div className="lightest-flower-petals lightest-four"></div>
        <div className="lightest-flower-petals lightest-five"></div>
        <div className="lightest-flower-petals lightest-six"></div>
        <div className="lightest-flower-petals lightest-seven"></div>
        <div className="lightest-flower-petals lightest-eight"></div>
        <div className="lightest-flower-petals lightest-nine"></div>
      </div>
    </div>
  );
};
export const LightPinkFlower = (props) => {
  return (
    <div
      className="light-pink-flower-petal-center"
      onClick={props.handleOnClick}
      style={{
        opacity: props.lightPetalsVisible.opacity,
        visibility: props.lightPetalsVisible.visibility,
        cursor: props.cursor.lightPetalsCursor,
        pointerEvents: props.cursor.lightPetalsPointerEvents,
        transition: ".3s ease 0s",
        transform: props.lightPetalsVisible.transform
      }}
    >
      <div className="light-flower-petals light-one"></div>
      <div className="light-flower-petals light-two"></div>
      <div className="light-flower-petals light-three"></div>
      <div className="light-flower-petals light-four"></div>
      <div className="light-flower-petals light-five"></div>
      <div className="light-flower-petals light-six"></div>
      <div className="light-flower-petals light-seven"></div>
      <div className="light-flower-petals light-eight"></div>
    </div>
  );
};

export const DarkPinkFlower = (props) => {
  return (
    <div>
      <div
        onClick={props.handleOnClick}
        className="dark-pink-flower-petal-center"
        style={{
          opacity: props.darkPetalsVisible.opacity,
          visibility: props.darkPetalsVisible.visibility,
          cursor: props.cursor.darkPetalsCursor,
          pointerEvents: props.cursor.darkPetalPointerEvents,
          transition: ".3s ease 0s",
          transform: props.darkPetalsVisible.transform
        }}
      >
        <div className="dark-flower-petals dark-one"></div>
        <div className="dark-flower-petals dark-two"></div>
        <div className="dark-flower-petals dark-three"></div>
        <div className="dark-flower-petals dark-four"></div>
        <div className="dark-flower-petals dark-five"></div>
        <div className="dark-flower-petals dark-six"></div>
        <div className="dark-flower-petals dark-seven"></div>
      </div>
    </div>
  );
};

export const DotsLayer = (props) => {
  return (
    <div
      className="dots-center"
      style={{
        opacity: props.lightestPetalsandDotsVisible ? 1 : 0.5,
        transition: ".3s ease 0s"
      }}
    >
      <div className="line line-one"></div>
      <div className="line line-two"></div>
      <div className="line line-three"></div>
      <div className="line line-four"></div>
      <div className="line line-five"></div>
      <div className="dot dot-one"></div>
      <div className="dot dot-two"></div>
      <div className="dot dot-three"></div>
      <div className="dot dot-four"></div>
      <div className="dot dot-five"></div>
      <div className="dot dot-six"></div>
      <div className="dot dot-seven"></div>
    </div>
  );
};
