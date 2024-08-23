import ReactPlayer from "react-player";
import ChannelButton from "../components/ChannelBtn";
import { useParams } from "react-router-dom";

const Channels = () => {
  const { channelId } = useParams();
  const channels = [
    {
      path: "1",
      name: "Channel 1",
      style: {
        backgroundColor: "#003366", // Background color
      },
    },
    {
      path: "2",
      name: "Channel 2",
      style: {
        backgroundColor: "#006400", // Background color
      },
    },
    {
      path: "3",
      name: "Channel 3",
      style: {
        backgroundColor: "#FF4500", // Background color
      },
    },
    {
      path: "4",
      name: "Channel 4",
      style: {
        backgroundColor: "#6A0DAD", // Background color
      },
    },
  ];

  return (
    <div className="flex items-center justify-between px-4 mx-auto lg:px-24">
      <div className="flex justify-center w-40 min-h-screen border-r-[0.125rem] lg:w-60">
        <div className="flex flex-col items-center justify-center gap-6">
          {channels.map((channel, index) => (
            <ChannelButton
              key={index}
              path={channel.path}
              name={channel.name}
              style={channel.style}
            />
          ))}
        </div>
      </div>
      <div className="flex min-h-screen w-[80%] pt-24 bg-slate-400">
        {channelId ? (
          <div>
            {/* Add more dynamic content based on channelId if needed */}
            <div className="w-full">
              <h2>{`Content for Channel ${channelId}`}</h2>
              {/* Add more dynamic content based on channelId if needed */}
              <div className="flex">
                <ReactPlayer
                  className="top-0 left-0 flex"
                  url={`http://localhost:8000/video/channel${channelId}.mp4`}
                  width="100%"
                  height="100%"
                  controls
                />
              </div>
            </div>
          </div>
        ) : (
          <p>Please select a channel.</p>
        )}
      </div>
    </div>
  );
};

export default Channels;
