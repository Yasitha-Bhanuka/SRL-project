import ChannelButton from "../components/ChannelBtn";

const Channels = () => {
  const channels = [
    {
      path: "/channel1",
      name: "Channel 1",
      style: {
        padding: "12px 24px", // py-3 and px-6 combined
        fontWeight: "bold", // font-bold
        color: "white", // text-white
        borderRadius: "9999px", // rounded-full (large border-radius to make it fully rounded)
        backgroundColor: "#003366", // You requested lightblue as the background color
      },
    },
    {
      path: "/channel2",
      name: "Channel 2",
      style: {
        padding: "12px 24px", // py-3 and px-6 combined
        fontWeight: "bold", // font-bold
        color: "white", // text-white
        borderRadius: "9999px", // rounded-full (large border-radius to make it fully rounded)
        backgroundColor: "#006400", //You requested lightblue as the background color
      },
    },
    {
      path: "/channel3",
      name: "Channel 3",
      style: {
        padding: "12px 24px", // py-3 and px-6 combined
        fontWeight: "bold", // font-bold
        color: "white", // text-white
        borderRadius: "9999px", // rounded-full (large border-radius to make it fully rounded)
        backgroundColor: "#FF4500", // You requested lightblue as the background color
      },
    },
    {
      path: "/channel4",
      name: "Channel 4",
      style: {
        padding: "12px 24px", // py-3 and px-6 combined
        fontWeight: "bold", // font-bold
        color: "white", // text-white
        borderRadius: "9999px", // rounded-full (large border-radius to make it fully rounded)
        backgroundColor: "#6A0DAD", // You requested lightblue as the background color
      },
    },
  ];

  return (
    <div className="flex items-center justify-center gap-1">
      {channels.map((channel, index) => (
        <ChannelButton
          key={index}
          path={channel.path}
          name={channel.name}
          style={channel.style}
        />
      ))}
    </div>
  );
};

export default Channels;
