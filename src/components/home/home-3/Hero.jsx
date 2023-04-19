import { BiPlay } from "react-icons/bi";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative flex flex-wrap min-h-screen gap-2 md:-mt-10 bg-secondary">
      <div
        className="flex-1 basis-[20rem] !text-slate-100 px-[3%] md:px-[6%] mt-20"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <h1 className="text-4xl font-bold capitalize lg:text-5xl">
            Welcome to <br /> Softech Productions.
          </h1>
          <div className="pl-3 mt-5 border-l-4 border-primary">
            <p>
              We are a team of technology experts passionate about providing
              cutting-edge solutions to our clients. From software development
              to cybersecurity, we are committed to helping businesses thrive in
              the digital age. Explore our services and see how we can el evate
              your organization to the next level.
            </p>
          </div>
          <div className="mt-6 flex-align-center gap-x-3">
            <Link to="/services">
              <button className="btn btn-primary">lets go</button>
            </Link>{" "}
          </div>
        </div>
      </div>
      <div className="flex-1 basis-[20rem] h-full">
        <img
          src="/images/home.jpg"
          alt=""
          className="w-full h-fit  sm:h-[100vh] object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
