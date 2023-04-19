const AboutUs = () => {
  return (
    <div className="pt-16 pb-20">
      <div className="flex flex-wrap gap-24">
        <div className="relative flex-1 basis-[18rem] border">
          <img
            src="/images/work.jpg"
            alt=""
            className="object-cover w-full h-full rounded-lg"
          />
          <img
            src="/images/infu.jpg"
            alt=""
            className="absolute object-cover w-48 h-64 border-4 border-white rounded-lg sm:w-72 sm:h-80 dark:border-dark -bottom-20 -right-2 md:-right-20"
          />
        </div>
        <div className="relative flex-1 basis-[22rem]">
          <h1 className="heading">OUR WORKING SECTORS</h1>
          <div className="mt-4">
            <div className="flex-align-center gap-x-2">
              <div className="icon-box text-primary !bg-primary/20"></div>
              <div>
                <h1 className="font-semibold capitalize">
                  Software Development
                </h1>
              </div>
            </div>
            <div className="mt-3 flex-align-center gap-x-2">
              <div className="icon-box text-primary !bg-primary/20"></div>
              <div>
                <h1 className="font-semibold capitalize">
                  Cybersecurity and Network Solutions
                </h1>
              </div>
            </div>
            <div className="mt-3 flex-align-center gap-x-2">
              <div className="icon-box text-primary !bg-primary/20"></div>
              <div>
                <h1 className="font-semibold capitalize">Cloud Computing</h1>
              </div>
            </div>
            <div className="mt-3 flex-align-center gap-x-2">
              <div className="icon-box text-primary !bg-primary/20"></div>
              <div>
                <h1 className="font-semibold capitalize">
                  Big Data and Analytics
                </h1>
              </div>
            </div>
            <div className="mt-3 flex-align-center gap-x-2">
              <div className="icon-box text-primary !bg-primary/20"></div>
              <div>
                <h1 className="font-semibold capitalize">
                  Artificial Intelligence and Machine Learning
                </h1>
              </div>
            </div>
            <div className="mt-3 flex-align-center gap-x-2">
              <div className="icon-box text-primary !bg-primary/20"></div>
              <div>
                <h1 className="font-semibold capitalize">
                  Mobile Application Development
                </h1>
              </div>
            </div>
            <div className="mt-3 flex-align-center gap-x-2">
              <div className="icon-box text-primary !bg-primary/20"></div>
              <div>
                <h1 className="font-semibold capitalize">
                  Web Development and Design
                </h1>
              </div>
            </div>
            <div className="mt-3 flex-align-center gap-x-2">
              <div className="icon-box text-primary !bg-primary/20"></div>
              <div>
                <h1 className="font-semibold capitalize">
                  Digital Marketing and E-commerce Solutions
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
