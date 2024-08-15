import logoMobile from "../../assets/LogoMobile.png";

const MobileImage = () => {
  return (
    <div className="flex flex-col items-start gap-2 text-center sm:justify-center md:justify-start lg:hidden">
      {" "}
      <h1 className="px-10 font-extrabold font-poppins  text-[18px] py-2 lg:text-[24px] text-start text-white">
        TCU
      </h1>
      <img
        src={logoMobile}
        alt="Mobile Logo"
        className="w-[180px] h-fit ms-20"
      />
    </div>
  );
};

export default MobileImage;
