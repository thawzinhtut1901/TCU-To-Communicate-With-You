import { NavLink } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
const ProfileSetupLayout = () => {
  return (
    <div className="  container-lg  justify-center items-center bg-custom-gradient w-full h-screen">
      <div className="text-center font-bold py-10 ">
        <h1 className="text-white text-4xl ">
          Welcome To <span className="text-purple font-bold">TCU</span>
        </h1>
      </div>

      <div className=" flex justify-center items-center">
        <form action="post">
          {/* Email Address */}
          <div className="sm:col-span-4 flex-col mx-auto mt-5">
            <Label className="text-white">Email</Label>
            <div className="mt-0">
              <Input
                type="email"
                id="email"
                className="border-white rounded-[8px] w-full"
              />
            </div>
          </div>

          {/* Phone Number */}
          <div className="sm:col-span-4 mt-5">
            <Label className="text-white">Phone Number</Label>

            <div className="mt-1">
              <Input
                type="phoneNumber"
                id="phoneNumber"
                className="border-white rounded-[8px] w-full"
              />
            </div>
          </div>
          {/* Gender and Date of Birth */}
          <div className="mt-5 flex flex-wrap justify-center ">
            <div className="flex-1 sm:w-1/2 pr-4">
              <Label htmlFor="country" className="text-white">
                Gender
              </Label>
              <div className="mt-1">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block w-full rounded-xl appearance-none bg-transparent text-white py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 border-transparent"
                >
                  <option selected className="text-black bg-white p-1 m-1">
                    Select an option
                  </option>
                  <option value="male" className=" text-black p-1 m-1">
                    Male
                  </option>
                  <option value="female" className="text-black p-1 m-1">
                    Female
                  </option>
                </select>
              </div>
            </div>

            <div className="flex-1 sm:w-1/2 pl-4">
              <Label htmlFor="last-name" className="text-white">
                Date of Birth
              </Label>
              <div className="mt-1">
                <input
                  id="last-name"
                  name="last-name"
                  type="date"
                  autoComplete="family-name"
                  className="bg-transparent text-white block w-full rounded-xl border-white py-2 px-4 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-5">
            <Button
              type="button"
              className="
                w-10/12 flex rounded-xl justify-center py-2 px-4 border-none shadow-md font-medium text-lg text-black bg-white hover:bg-blue-500 hover:border-white hover:border-2"
            >
              Log In
            </Button>
          </div>

          <div className="text-center mt-2">
            <p className="text-white ">
              Have a question?
              <span>
                <NavLink
                  to={"/"}
                  className="ms-1 text-purple-600 font-bold underline text-lg"
                >
                  Email Us
                </NavLink>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileSetupLayout;
