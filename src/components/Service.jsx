


const Service = () => {
  return(
  <section id="service" 
  className="flex justify-center items-start sm:mx-16 mx-6 sm:px-16 px-6 sm:py-12 py-4 sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow">
    <div className="flex-1 flex flex-col">
      <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
        Let’s try our service now!</h2>
      <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5">
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </p>
    </div>

    <div className="flex justify-center items-center sm:ml-10 ml-0 sm:mt-0 mt-10 ">
    <button className="h-[70px] w-[150px] md:mt-10 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ">
    Get Started
  </button>
    </div>
  </section>
)
  };

export default Service;
