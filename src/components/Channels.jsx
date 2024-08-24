import ReactPlayer from "react-player";
import ChannelButton from "./ChannelBtn";
import { useParams } from "react-router-dom";

const Channels = () => {
  const { channelId } = useParams();
  const channels = [
    {
      path: "1",
      name: "1",
      style: {
        backgroundColor: "#003366", // Background color
      },
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      path: "2",
      name: "2",
      style: {
        backgroundColor: "#006400", // Background color
      },
      videoUrl: "https://www.w3schools.com/html/movie.mp4",
    },
    {
      path: "3",
      name: "3",
      style: {
        backgroundColor: "#FF4500", // Background color
      },
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      path: "4",
      name: "4",
      style: {
        backgroundColor: "#6A0DAD", // Background color
      },
      videoUrl: "https://www.w3schools.com/html/movie.mp4",
    },
  ];

  // this using for without checking purpose
  const selectedChannel = channels.find(
    (channel) => channel.path === channelId,
  );

  return (
    <div className="flex flex-col items-center justify-between gap-4 section-container md:flex-row pt-28 md:pt-0 lg:pt-8">
      <div className="flex flex-row items-center gap-4 justify-center pr-2 md:min-h-screen lg:w-[20%] md:w-[30%] md:flex-col md:border-r-[0.125rem]">
        {channels.map((channel, index) => (
          <ChannelButton
            key={index}
            path={channel.path}
            name={"CH" + channel.name}
            style={channel.style}
          />
        ))}
      </div>
      <div className="flex items-center justify-center section-container">
        {channelId ? (
          <div className="flex flex-col items-center justify-center">
            {/* Add more dynamic content based on channelId if needed */}

            <h2 className="text-xl font-bold text-center">{`Watching CH${channelId}`}</h2>
            {/* Add more dynamic content based on channelId if needed */}
            <div className="w-[300px] sm:w-[600px] sm:h-[400px] md:w-[600px] lg:w-[900px] h-[300px] md:h-[400px] lg:h-[500px] max-w-full max-h-[800px] relative lg:mt-4">
              <ReactPlayer
                className="react-player"
                // url={`http://localhost:8000/video/channel${channelId}.mp4`}
                url={selectedChannel.videoUrl}
                width="100%"
                height="100%"
                controls
              />
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center min-h-24 section-container">
            <h2 className="text-xl font-bold text-center">
              Please Select A Channel 🖐.
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Channels;
