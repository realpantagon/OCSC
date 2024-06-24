import React from "react";

const ProfilePageSidebar = ({ userRecord, openItem, setOpenItem }) => {
  const toggleItem = (item) => {
    setOpenItem(item);
  };

  return (
    <div className="profile-page w-1/4 p-4 text-black bg-white">
      <div className="mb-2">
        <div className="">
          <button
            className={`border-2 border-slate-300 text-black hover:text-black w-full py-2 px-4 rounded-full focus:outline-none transition duration-300 ease-in-out ${
              openItem === "exhibitorProfile" ||
              openItem?.startsWith("exhibitorProfile")
                ? "active bg-blue-700 text-white"
                : ""
            } w-full text-left font-semibold`}
            onClick={() => toggleItem("exhibitorProfile-generalInfo")}
          >
            Exhibitor Profile
          </button>
          {(openItem === "exhibitorProfile" ||
            openItem?.startsWith("exhibitorProfile")) && (
            <ul className="mx-[30px]">
              <button
                className={`mt-3 mb-3  ${
                  openItem === "exhibitorProfile-generalInfo"
                    ? "rounded-full bg-blue-700 text-white hover:text-black focus:outline-none transition duration-300 ease-in-out"
                    : ""
                } w-full text-left p-2`}
                onClick={() => toggleItem("exhibitorProfile-generalInfo")}
              >
                &nbsp;&nbsp;General Information
              </button>
              <button
                className={`mb-3 ${
                  openItem === "exhibitorProfile-contactPerson"
                    ? "rounded-full bg-blue-700 text-white hover:text-black focus:outline-none transition duration-300 ease-in-out"
                    : ""
                } w-full text-left p-2`}
                onClick={() => toggleItem("exhibitorProfile-contactPerson")}
              >
                &nbsp;&nbsp;Contact Person
              </button>
              <button
                className={`mb-3 ${
                  openItem === "exhibitorProfile-levelOfStudies"
                    ? "rounded-full bg-blue-700 text-white hover:text-black focus:outline-none transition duration-300 ease-in-out"
                    : ""
                } w-full text-left p-2`}
                onClick={() => toggleItem("exhibitorProfile-levelOfStudies")}
              >
                &nbsp;&nbsp;Level of Studies Offer
              </button>
              <button
                className={`mb-3 ${
                  openItem === "exhibitorProfile-shortcourse"
                    ? "rounded-full bg-blue-700 text-white hover:text-black focus:outline-none transition duration-300 ease-in-out"
                    : ""
                } w-full text-left p-2`}
                onClick={() => toggleItem("exhibitorProfile-shortcourse")}
              >
                  &nbsp;&nbsp;Short Course
              </button>
              <button
                className={`mb-3 ${
                  openItem === "exhibitorProfile-topMajors"
                    ? "rounded-full bg-blue-700 text-white hover:text-black focus:outline-none transition duration-300 ease-in-out"
                    : ""
                } w-full text-left p-2`}
                onClick={() => toggleItem("exhibitorProfile-topMajors")}
              >
                &nbsp;&nbsp;Top 10 Majors
              </button>
              <button
                className={`mb-3 ${
                  openItem === "exhibitorProfile-promotion"
                    ? "rounded-full bg-blue-700 text-white hover:text-black focus:outline-none transition duration-300 ease-in-out"
                    : ""
                } w-full text-left p-2`}
                onClick={() => toggleItem("exhibitorProfile-promotion")}
              >
                &nbsp;&nbsp;Promotion
              </button>
              <button
                className={`mb-3 ${
                  openItem === "exhibitorProfile-scholarship"
                    ? "rounded-full bg-blue-700 text-white hover:text-black focus:outline-none transition duration-300 ease-in-out"
                    : ""
                } w-full text-left p-2`}
                onClick={() => toggleItem("exhibitorProfile-scholarship")}
              >
                &nbsp;&nbsp;Scholarship
              </button>
            </ul>
          )}
        </div>
        <div className="mb-2 mt-2">
          <button
            className={`border-2 border-slate-300 text-black hover:text-black w-full py-2 px-4 rounded-full focus:outline-none transition duration-300 ease-in-out ${
              openItem === "exhibitorSpace"
                ? "active bg-blue-700 text-white"
                : ""
            } w-full text-left p-2 font-semibold`}
            onClick={() => toggleItem("exhibitorSpace")}
          >
            Exhibitor Space
          </button>
        </div>
        <div className="mb-2">
          <button
            className={`border-2 border-slate-300 text-black hover:text-black w-full py-2 px-4 rounded-full focus:outline-none transition duration-300 ease-in-out ${
              openItem === "billingInfo" ? "active bg-blue-700 text-white" : ""
            } w-full text-left p-2 font-semibold`}
            onClick={() => toggleItem("billingInfo")}
          >
            Billing Information
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProfilePageSidebar;
