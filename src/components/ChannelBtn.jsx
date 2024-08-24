import { Link, useLocation } from "react-router-dom";

const ChannelButton = ({ path, name, style }) => {
  const location = useLocation();
  const isActive = location.pathname.includes(path);

  return (
    <Link
      to={path}
      style={{
        ...style,
        transition: "background-color 0.3s, transform 0.3s", // Smooth transition
      }}
      className={`channel-button ${isActive ? "active" : ""}`}
    >
      {name}
    </Link>
  );
};

export default ChannelButton;
