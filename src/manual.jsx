import React from "react";
import Navbar from "./Component/Navbar";
import { useState } from "react";
import axios from "axios";

const ManualPageSidebar = ({ userRecord, openItem, setOpenItem }) => {
  const toggleItem = (item) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="profile-page w-1/4 p-4 text-black bg-white">
      <div className="mb-2">
        <div className="">
          <button
            className={`border-2 border-slate-300 text-black hover:text-black w-full py-2 px-4 rounded-full focus:outline-none transition duration-300 ease-in-out ${
              openItem === "entranceRoute" ||
              openItem?.startsWith("entranceRoute")
                ? "active bg-blue-700 text-white"
                : ""
            } w-full text-left font-semibold`}
            onClick={() => toggleItem("entranceRoute")}
          >
            Entrance route
          </button>
        </div>
        <div className="mb-2 mt-2">
          <button
            className={`border-2 border-slate-300 text-black hover:text-black w-full py-2 px-4 rounded-full focus:outline-none transition duration-300 ease-in-out ${
              openItem === "importanceAgenda"
                ? "active bg-blue-700 text-white"
                : ""
            } w-full text-left p-2 font-semibold`}
            onClick={() => toggleItem("importanceAgenda")}
          >
            Importance agenda
          </button>
        </div>
        <div className="mb-2">
          <button
            className={`border-2 border-slate-300 text-black hover:text-black w-full py-2 px-4 rounded-full focus:outline-none transition duration-300 ease-in-out ${
              openItem === "officialContractor" ||
              openItem?.startsWith("officialContractor")
                ? "active bg-blue-700 text-white"
                : ""
            } w-full text-left p-2 font-semibold`}
            onClick={() => toggleItem("officialContractor.showOrganizer")}
          >
            Official Contractor
          </button>
          {(openItem === "officialContractor" ||
            openItem?.startsWith("officialContractor")) && (
            <ul className="mx-[30px]">
              <button
                className={`mt-3 mb-3 ${
                  openItem === "officialContractor.showOrganizer"
                    ? "rounded-full bg-blue-700 text-white hover:text-black focus:outline-none transition duration-300 ease-in-out"
                    : ""
                } w-full text-left p-2`}
                onClick={() => toggleItem("officialContractor.showOrganizer")}
              >
                &nbsp;&nbsp;Show Organizer
              </button>
              <button
                className={`mb-3 ${
                  openItem === "officialContractor.venue"
                    ? "rounded-full bg-blue-700 text-white hover:text-black focus:outline-none transition duration-300 ease-in-out"
                    : ""
                } w-full text-left p-2`}
                onClick={() => toggleItem("officialContractor.venue")}
              >
                &nbsp;&nbsp;Venue
              </button>
              <button
                className={`mb-3 ${
                  openItem === "officialContractor.accommodation"
                    ? "rounded-full bg-blue-700 text-white hover:text-black focus:outline-none transition duration-300 ease-in-out"
                    : ""
                } w-full text-left p-2`}
                onClick={() => toggleItem("officialContractor.accommodation")}
              >
                &nbsp;&nbsp;Accommodation
              </button>
              <button
                className={`mb-3 ${
                  openItem === "officialContractor.standFitting"
                    ? "rounded-full bg-blue-700 text-white hover:text-black focus:outline-none transition duration-300 ease-in-out"
                    : ""
                } w-full text-left p-2`}
                onClick={() => toggleItem("officialContractor.standFitting")}
              >
                &nbsp;&nbsp;Stand Fitting
              </button>
              <button
                className={`mb-3 ${
                  openItem === "officialContractor.utility"
                    ? "rounded-full bg-blue-700 text-white hover:text-black focus:outline-none transition duration-300 ease-in-out"
                    : ""
                } w-full text-left p-2`}
                onClick={() => toggleItem("officialContractor.utility")}
              >
                &nbsp;&nbsp;Utility
              </button>
              <button
                className={`mb-3 ${
                  openItem === "officialContractor.freightForwarder"
                    ? "rounded-full bg-blue-700 text-white hover:text-black focus:outline-none transition duration-300 ease-in-out"
                    : ""
                } w-full text-left p-2`}
                onClick={() =>
                  toggleItem("officialContractor.freightForwarder")
                }
              >
                &nbsp;&nbsp;Freight Forwarder
              </button>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

const MainSection = ({ userRecord, openItem }) => {
  let content;

  if (openItem === "entranceRoute") {
  content = (
    <div className="ml-[50px] mr-[50px] mt-[20px] text-xl border-2 border-gray-300 rounded-lg p-6 bg-white">
      <div className="ml-[30px] flex flex-wrap mb-[10px]">
        <p>1. Entrance before operating hours (10:00 AM)&nbsp;</p>
        <button
          onClick={() => window.open("https://drive.google.com/file/d/1RueVPBb45_g7kJzgqvxr6TLyOsX_sX3C/view", "_blank")}
          className="bg-blue-500 text-white px-1 pb-1 ml-2 rounded-lg text-xl hover:bg-blue-700 focus:outline-none"
        >
          Click
        </button>
      </div>
      <div className="ml-[30px] flex flex-wrap">
        <p>2. Loading Route&nbsp;</p>
        <button
          onClick={() => window.open("https://drive.google.com/file/d/1UMi4n5n05Yj1Va-WKmToiQgWFWaePEzb/view", "_blank")}
          className="bg-blue-500 text-white px-1 pb-1 ml-2 rounded-lg text-xl hover:bg-blue-700 focus:outline-none"
        >
          Click
        </button>
      </div>
    </div>
  );
  } else if (openItem === "importanceAgenda") {
    content = (
      <div className="ml-[50px] mr-[50px] mt-[20px] text-sm flex flex-wrap gap-[100px] border-2 border-gray-300 rounded-lg p-6 bg-white">
        <div className="ml-[30px] leading-loose font-bold">
          <p>Expo Name:</p>
          <p>Venue:</p>
          <p>Exhibition Size:</p>
          <p>Expo Dates:</p>
          <p>Opening Ceremony:</p>
          <p>Exhibitions Hours:</p>
          <br />
          <br />
          <p>Build-up Date:</p>
          <br />
          <br />
          <p>Expo Dates:</p>
        </div>
        <div className="leading-loose">
          <p>The OCSC International Education Expo 2024, Bangkok</p>
          <p>Paragon Hall, 5th Floor, Siam Paragon, Bangkok, Thailand</p>
          <p>Gross area 5,000 Sq.m.</p>
          <p>26 - 27 October 2024</p>
          <p>26 October 2024 :11:30 hrs. - 12:00 hrs.</p>
          <p>26 October 2024 :12;00 hrs. - 19:00 hrs.</p>
          <p>27 October 2024 :12:00 hrs. - 19:00 hrs.</p>
          <p>
            (Exhibitors are allowed to access to the exhibition hall from 09:00
            hrs. onwards.)
          </p>
          <p>
            25 October 2024 :14:00 hrs. - 24:00 hrs. (for standard booth's
            decoration)
          </p>
          <p>(No air-conditioning during the set up)</p>
          <p>
            26 October 2024 :09:00 hrs. - 12:00 hrs. (for standard booth's
            decoration)
          </p>
          <p>26 October 2024 :19:00 hrs. - 24:00 hrs.</p>
        </div>
      </div>
    );
  } else if (openItem === "officialContractor.showOrganizer") {
    content = "Show Organizer";
  } else if (openItem === "officialContractor.venue") {
    content = "Venue";
  } else if (openItem === "officialContractor.accommodation") {
    content = "Accommodation";
  } else if (openItem === "officialContractor.standFitting") {
    content = "Stand Fitting";
  } else if (openItem === "officialContractor.utility") {
    content = "Utility";
  } else if (openItem === "officialContractor.freightForwarder") {
    content = (
      <div className="ml-[50px] mr-[50px] mt-[20px] border-2 border-gray-300 rounded-lg p-6 bg-white">
        <div className="ml-[30px]">
        <li className="underline underline-offset-2 font-bold ml-2">
          OFFICIAL FREIGHT FORWARDER
        </li>
        <p>
          We have appointed APT as the official freight for the event. If you
          need to use its shipping
        </p>
        <p>service, you can contact them at:</p>
        <br />
        <div className="ml-[50px] mr-[50px]">
          <p className="font-bold">APT SHOWFREIGHT (THAILAND) LIMITED</p>
          <p>
            11/24, Ratchadapisek road, Chongnonsee, Yannawa, Bangkok 10210,
            Thailand
          </p>
          <p>Tel: (66)(2) 285 3060 (auto)</p>
          <p>Fax: (66)(2) 285 3068</p>
          <p>E-mail : hasnai@aptshowfreight.com</p>
          <p>Contact: Mr. Hasnai Kongkaew</p>
          <br />
          <br />
        </div>
        <li className="underline underline-offset-2 font-bold ml-2">
          SMALL TO MEDIUM PARCEL COURIER
        </li>
        <p>
          If you have a small to medium parcel(s) to be sent to the exhibition,
          please do send it to us and
        </p>

        <p>
          we will bring to your booth on Friday 25 October. Please make on the
          box your institution name
        </p>

        <p>and booth number. Our office address is:</p>
        <br />
        <div className="ml-[50px]">
          <p className="font-bold">CITYNEON NETWORK CO., LTD.</p>
          <p>436/36-39 Sol 20 Mithuna 11, 20 Mithuna Road.,</p>
          <p className="mb-3">Huaykwang Bangkok 10310 Thailand</p>
          <p>Tel: +66 2 690 2682-4 ext 17</p>
          <p>E-mail: ladda@cityneonthailand.com</p>
          <p>Contact: Ms. Ladda Chaiprasert, Managing Director</p>
          <p>Tel: +66 2 690 2682 to 4 Ext. 20</p>
          <p>E-mall: op@cityneonthalland.com</p>
          <p>Contact: Ms. Pratchayaporn Phonwaritkul, Project</p>
          <p> Manager</p>
        </div>
        <div className="flex flex-wrap">
          <p className="font-bold ml-[40px]">
            DEADLINE: the parcel(s) must be arrived in our office by
          </p>
          <p className="text-rose-600 font-bold">&nbsp;4 October 2024.</p>
        </div>
      </div>
      </div>
    );
  } else {
    content = "Manual";
  }

  return <div className="flex-1 p-6">{content}</div>;
};

function Manual() {
  const [openItem, setOpenItem] = useState("entranceRoute");

  return (
    <div className="">
      <Navbar />
      <div className="flex flex-wrap min-h-screen bg-gray-100">
        <ManualPageSidebar openItem={openItem} setOpenItem={setOpenItem} />
        <MainSection openItem={openItem} />
      </div>
    </div>
  );
}

export default Manual;
