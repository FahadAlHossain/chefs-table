import cover from "../../assets/images/cover.png";

const Header = () => {
  return (
    <div
      className="bg-cover bg-center h-[550px] md:w-[80%] flex items-center justify-center text-center text-white rounded-xl mt-5 m-auto"
      style={{
        backgroundImage: `url(${cover})`,
      }}
    >
      {/* Content */}
      <div className="p-5 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Discover an exceptional cooking class tailored for you!
        </h1>
        <p className="text-sm md:text-lg mb-6">
          Learn and Master Basic Cooking Techniques, Recipes, and become an
          exceptionally skilled chef.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-green-500 text-black font-medium px-6 py-2 rounded-full hover:bg-red-100">
            Explore Now
          </button>
          <button className="border-2 border-white text-white font-medium px-6 py-2 rounded-full hover:bg-base-100 hover:border-base-100">
            Our Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
