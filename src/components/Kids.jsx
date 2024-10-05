import kids from '../assets/kids.mp4';
import kids2 from '../assets/kids2.mp4';
const Kids = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide bg-gradient-to-r from-purple-400 to-blue-100 text-transparent bg-clip-text">
        Welcome to the Kids Section!
      </h1>
      <p className="mt-10 text-lg text-center text-white max-w-4xl">
        Explore exciting content for kids here.
      </p>

      {/* First section: Text on the left, Video on the right */}
      <div className="flex flex-col lg:flex-row items-center justify-between mt-16 max-w-6xl mx-auto">
        {/* Left text */}
        <div className="lg:w-1/2 p-6 text-white animate__animated animate__fadeInLeft">
          <h2 className="text-2xl lg:text-4xl mb-4">Exciting Adventures Await!</h2>
          <p className="text-lg">
            Dive into a world full of fun adventures, learn new things, and embark on thrilling quests just for kids!
          </p>
        </div>

        {/* Right video */}
        <div className="lg:w-1/2 p-6 animate__animated animate__fadeInRight">
          <video
            controls
            className="w-full rounded-lg border border-purple-700 shadow-md shadow-purple-400"
          >
            <source src={kids} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Second section: Video on the left, Text on the right */}
      <div className="flex flex-col lg:flex-row-reverse items-center justify-between mt-16 max-w-6xl mx-auto">
        {/* Right text */}
        <div className="lg:w-1/2 p-6 text-white animate__animated animate__fadeInRight">
          <h2 className="text-2xl lg:text-4xl mb-4">Learn While Having Fun!</h2>
          <p className="text-lg">
            Discover fun ways to learn about the world, science, and more through our educational videos!
          </p>
        </div>

        {/* Left video */}
        <div className="lg:w-1/2 p-6 animate__animated animate__fadeInLeft">
          <video
            controls
            className="w-full rounded-lg border border-purple-700 shadow-md shadow-purple-400"
          >
            <source src={kids2
            } type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Kids;
