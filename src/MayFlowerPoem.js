export const MayFlowerPoem = (props) => {
  return (
    <div className="poem">
      <p
        style={{
          opacity: props.showPoemLines ? 1 : 0,
          transition: "all 2s ease 0s"
        }}
      >
        <span
          style={{
            display: "inline-block",
            padding: "5px 0px",
            transform: `scale(${props.showPoemLines ? 2 : 0})`,
            transition: "all 1s ease 0s"
          }}
        >
          Pink, small, and punctual,
        </span>{" "}
        <br />
        <span
          style={{
            display: "inline-block",
            padding: "5px 0px",
            transform: `scale(${props.showPoemLines ? 2 : 0})`,
            transition: "all 2s ease 0s"
          }}
        >
          Aromatic, low,
        </span>
        <br />{" "}
        <span
          style={{
            display: "inline-block",
            padding: "5px 0px",
            transform: `scale(${props.showPoemLines ? 2 : 0})`,
            transition: "all 3s ease 0s"
          }}
        >
          Covert in April,
        </span>{" "}
        <br />
        <span
          style={{
            display: "inline-block",
            padding: "5px 0px",
            transform: `scale(${props.showPoemLines ? 2 : 0})`,
            transition: "all 4s ease 0s"
          }}
        >
          {" "}
          Candid in May,
        </span>
        <br />
        <span
          style={{
            display: "inline-block",
            padding: "5px 0px",
            transform: `scale(${props.showPoemLines ? 2 : 0})`,
            transition: "all 5s ease 0s"
          }}
        >
          Dear to the moss,
        </span>
        <br />
        <span
          style={{
            display: "inline-block",
            padding: "5px 0px",
            transform: `scale(${props.showPoemLines ? 2 : 0})`,
            transition: "all 6s ease 0s"
          }}
        >
          Known by the knoll,
        </span>{" "}
        <br />
        <span
          style={{
            display: "inline-block",
            padding: "5px 0px",
            transform: `scale(${props.showPoemLines ? 2 : 0})`,
            transition: "all 7s ease 0s"
          }}
        >
          {" "}
          Next to the robin In every human soul.{" "}
        </span>{" "}
        <br />
        <span
          style={{
            display: "inline-block",
            padding: "5px 0px",
            transform: `scale(${props.showPoemLines ? 2 : 0})`,
            transition: "all 8s ease 0s"
          }}
        >
          Bold little beauty,
        </span>{" "}
        <br />
        <span
          style={{
            display: "inline-block",
            padding: "10px",
            transform: `scale(${props.showPoemLines ? 2 : 0})`,
            transition: "all 9s ease 0s"
          }}
        >
          Bedecked with thee,
        </span>{" "}
        <br />{" "}
        <span
          style={{
            display: "inline-block",
            padding: "5px 0px",
            transform: `scale(${props.showPoemLines ? 2 : 0})`,
            transition: "all 10s ease 0s"
          }}
        >
          Nature forswears Antiquity.
        </span>
        <br />{" "}
        <span
          style={{
            display: "inline-block",
            transform: `scale(${props.showPoemLines ? 2 : 0})`,
            transition: "all 11s ease 0s",
            padding: "5px 0px"
          }}
        >
          -Emily Dickinson
        </span>
      </p>
    </div>
  );
};
