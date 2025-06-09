import { FaStar } from "react-icons/fa";

function Star({ selected = false, onClick }) {
  return (
    <FaStar
      className={`star-icon ${selected ? "selected" : ""}`}
      onClick={onClick}
    />
  );
}

export default Star;
