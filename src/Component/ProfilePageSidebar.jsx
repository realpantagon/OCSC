import React, { useState } from "react";

const ProfilePageSidebar = ({ userRecord, openItem, setOpenItem }) => {
  const [exhibitorProfileOpen, setExhibitorProfileOpen] = useState(true);
  const [orderHistoryOpen, setOrderHistoryOpen] = useState(false);

  const toggleItem = (item) => {
    if (item === "exhibitorProfile") {
      setExhibitorProfileOpen(!exhibitorProfileOpen);
      setOpenItem("exhibitorProfile-generalInfo"); // Changed this line
    } else if (item === "orderHistory") {
      setOrderHistoryOpen(!orderHistoryOpen);
      setOpenItem("orderHistory-furOrder");
    } else {
      setOpenItem(item);
    }
  };

  const isExhibitorProfileOpen = () => {
    return openItem?.startsWith("exhibitorProfile");
  };

  const isOrderHistoryOpen = () => {
    return openItem?.startsWith("orderHistory");
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
            onClick={() => toggleItem("exhibitorProfile")}
          >
            Exhibitor Profile
          </button>
          {exhibitorProfileOpen && isExhibitorProfileOpen() && (
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
        <div className="">
          <button
            className={`border-2 border-slate-300 text-black hover:text-black w-full py-2 px-4 rounded-full focus:outline-none transition duration-300 ease-in-out ${
              openItem === "orderHistory" ||
              openItem?.startsWith("orderHistory")
                ? "active bg-blue-700 text-white"
                : ""
            } w-full text-left font-semibold`}
            onClick={() => toggleItem("orderHistory")}
          >
            Order History
          </button>
          {orderHistoryOpen && isOrderHistoryOpen() && (
            <ul className="mx-[30px]">
              <button
                className={`mt-3 ${
                  openItem === "orderHistory-furOrder"
                    ? "rounded-full bg-blue-700 text-white hover:text-black focus:outline-none transition duration-300 ease-in-out"
                    : ""
                } w-full text-left p-2`}
                onClick={() => toggleItem("orderHistory-furOrder")}
              >
                &nbsp;&nbsp;Furniture Order
              </button>
              <button
                className={`mt-3 ${
                  openItem === "orderHistory-elecOrder"
                    ? "rounded-full bg-blue-700 text-white hover:text-black focus:outline-none transition duration-300 ease-in-out"
                    : ""
                } w-full text-left p-2`}
                onClick={() => toggleItem("orderHistory-elecOrder")}
              >
                &nbsp;&nbsp;Electric Order
              </button>
              <button
                className={`mt-3 ${
                  openItem === "orderHistory-avOrder"
                    ? "rounded-full bg-blue-700 text-white hover:text-black focus:outline-none transition duration-300 ease-in-out"
                    : ""
                } w-full text-left p-2`}
                onClick={() => toggleItem("orderHistory-avOrder")}
              >
                &nbsp;&nbsp;A/V Component Order
              </button>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
export default ProfilePageSidebar;
