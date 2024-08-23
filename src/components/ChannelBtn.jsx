import { Link } from "react-router-dom";

const ChannelButton = ({ path, name, style }) => {
  return (
    <Link
      to={path}
      style={{
        ...style,
        transition: "background-color 0.3s, transform 0.3s", // Smooth transition
      }}
      className={"channel-button"}
    >
      {name}
    </Link>
  );
};

export default ChannelButton;
