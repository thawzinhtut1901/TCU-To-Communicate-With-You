import logoMobile from "../../assets/LogoMobile.png";

const MobileImage = () => {
  return (
    <div className="flex flex-col items-start gap-2 py-2 text-center sm:justify-center md:justify-start lg:hidden">
      <img
        src={logoMobile}
        alt="Mobile Logo"
        className="w-[180px] md:w-[300px] h-auto ms-20"
      />
    </div>
  );
};

export default MobileImage;
