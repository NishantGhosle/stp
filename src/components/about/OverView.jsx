const OverView = () => {
  return (
    <div className="pt-20 pb-16">
      <div className="flex flex-wrap gap-4">
        <div className="flex-1 basis-[18rem]">
          <h1 className="heading">what we do</h1>
          <p className="mt-3">
            At our IT company, we are passionate about technology and helping
            businesses thrive in the digital age. We specialize in providing a
            wide range of technology solutions to our clients, from custom
            software development to cybersecurity and network solutions.
            <br /> <br />
            Our team of experts has years of experience working in the
            technology industry, and we are committed to delivering innovative
            and reliable solutions that help businesses achieve their goals. We
            work closely with our clients to understand their unique needs and
            challenges, and we tailor our services to meet their specific
            requirements.
            <br /> <br />
            One of our core areas of expertise is custom software development.
            We have a team of talented developers who specialize in creating
            custom software solutions that meet our clients' unique needs.
            Whether it's a new application, an e-commerce platform, or a custom
            CRM system, we can develop the software that will help our clients
            streamline their operations and achieve their business objectives.
            <br /> <br />
            In addition to software development, we also offer a range of
            cybersecurity and network solutions. We understand the importance of
            securing our clients' networks and data, and we provide a
            comprehensive range of services to protect their systems against
            cyber threats. Our services include network security assessments,
            vulnerability testing, and threat detection and response.
            <br /> <br />
          </p>
        </div>
        <div className="flex-1 basis-[18rem]">
          <div className="relative overflow-hidden rounded-lg">
            <img
              src="/images/offc.jpg"
              alt=""
              className="w-full h-[300px] object-cover"
            />
          </div>
          <br />
          <div className="relative overflow-hidden rounded-lg">
            <img
              src="/images/work.jpg"
              alt=""
              className="w-full h-[300px] object-cover"
            />
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};

export default OverView;
