import { Link } from "react-router-dom";

const ChannelButton = ({ path, name, style }) => {
  return (
    <Link to={path} style={style} className={"channel-button"}>
      {name}
    </Link>
  );
};

export default ChannelButton;
