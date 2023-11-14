import { useState } from "react";

interface PrimaryButtonProps {
  btnLabel: string;
  bgColor: string;
  Color: string;
  hoverColor: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  btnLabel,
  bgColor,
  Color,
  hoverColor
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle: React.CSSProperties = {
    height: "3rem",
    width: "7rem",
    borderRadius: "1rem",
    border: "none",
    backgroundColor: isHovered ? hoverColor : bgColor,
    fontSize: "1rem",
    fontWeight: "600",
    color: Color,
    cursor: "pointer",
  };


  const btnContainerStyle: React.CSSProperties = {
    margin: "0 0.5rem",
  };

  return (
    <>
      <div
        className="btnContainer"
        style={btnContainerStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button className="mainBtn" style={buttonStyle}>
          {btnLabel}
        </button>
      </div>
    </>
  );
};

export default PrimaryButton;
