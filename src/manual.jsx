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
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1RueVPBb45_g7kJzgqvxr6TLyOsX_sX3C/view",
                "_blank"
              )
            }
            className="bg-blue-500 text-white px-1 pb-1 ml-2 rounded-lg text-xl hover:bg-blue-700 focus:outline-none"
          >
            Click
          </button>
        </div>
        <div className="ml-[30px] flex flex-wrap">
          <p>2. Loading Route&nbsp;</p>
          <button
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1UMi4n5n05Yj1Va-WKmToiQgWFWaePEzb/view",
                "_blank"
              )
            }
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
          <p>Dismantlement:</p>
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
    content = (
      <div className="ml-[50px] mr-[50px] mt-[20px] border-2 border-gray-300 rounded-lg p-6 bg-white">
        <div className="ml-[30px]">
          <p className="font-bold">CITYNEON NETWORK CO., LTD.</p>
          <p>436/36-39, 436/87-95 Soi 20 Mithuna 11, 20 Mithuna Road.,</p>
          <p>Huaykwang Bangkok 10310 Thailand</p>
          <p>Tel: +66 2 690 2682-4 ext 17</p>
          <div className="flex flex-wrap">
            <p>E-mail:&nbsp;</p>
            <a
              className="underline underline-offset-2"
              href="mailto:ladda@cityneonthailand.com"
            >
              ladda@cityneonthailand.com
            </a>
          </div>
          <p>Contact: Ms. Ladda Chaiprasert, Managing Director</p>
        </div>
      </div>
    );
  } else if (openItem === "officialContractor.venue") {
    content = (
      <div className="ml-[50px] mr-[50px] mt-[20px] border-2 border-gray-300 rounded-lg p-6 bg-white">
        <div className="ml-[30px]">
          <p className="font-bold">Paragon Hall</p>
          <p>991 Siam Paragon Shopping Center, Rama 1 Road, Pathumwan, </p>
          <p> Bangkok 10330 Thailand </p>
          <p>Tel: +66 2 610 8011 , Phone no.: +66 81-935-6154</p>
          <div className="flex flex-wrap">
            <p>E-mail:&nbsp;</p>
            <a
              className="underline underline-offset-2"
              href="mailto:sirinapa.s@siamparagon.co.th"
            >
              sirinapa.s@siamparagon.co.th
            </a>
          </div>
          <p>Contact: Ms. Sirinapa Sikarinporn, Sales Manager</p>
        </div>
      </div>
    );
  } else if (openItem === "officialContractor.accommodation") {
    content = (
      <div className="ml-[50px] mr-[50px] mt-[20px] border-2 border-gray-300 rounded-lg p-6 bg-white">
        <div className="ml-[30px]">
          <img
            className="object-contain h-36 w-36"
            src="/novotellogo.jpeg"
          ></img>
          <p className="font-bold">SPECIAL RATE FOR OCSC EXHIBITORS</p>
          <br />
          <p className="font-bold">
            Room with breakfast: Single and Twin or Double
          </p>
          <br />
          <li className="ml-[10px]">
            Superior Room (single stay): THB 3,600 net
          </li>
          <li className="ml-[10px]">
            Superior Room (double stay): THB 3,900 net
          </li>
          <br />
          <p className="italic">
            *The rates are net, per room per night inclusive of 17.7%
            government taxes & service charge,
          </p>
          <p className="italic">including buffet breakfast.</p>
          <br />
          <div className="flex flex-wrap">
            <p className="font-bold">ONLINE BOOKING is available at&nbsp;</p>
            <a
              href="https://novotelsiam.hotels-boutique.com/product/ocsc-expo-2024/"
              style={{ textDecoration: "underline", color: "blue" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              https://novotelsiam.hotels-boutique.com/product/ocsc-expo-2024/
            </a>
          </div>
          <br />
          <p className="font-bold ml-[30px]">ROOM TYPES:</p>
          <br/>
          <div className="flex flex-wrap">
            <div className="grid justify-items-center ml-[40px]">
              <img
                className="drop-shadow-lg shadow-gray-600 object-contain h-26 w-36"
                src="/novotellogo.jpeg"
              ></img><br/>
              <p>Superior room</p>
            </div>
            <div className="grid justify-items-center ml-[40px]">
              <img
                className="drop-shadow-lg shadow-gray-600 object-contain h-36 w-36"
                src="/novotellogo.jpeg"
              ></img><br/>
              <p>Deluxe room</p>
            </div>
            <div className="grid justify-items-center ml-[40px]">
              <img
                className="drop-shadow-lg shadow-gray-600 object-contain h-36 w-36"
                src="/novotellogo.jpeg"
              ></img><br/>
              <p>The SQUARE</p>
            </div>
          </div>
          <br/>
          <p className="font-bold">Novotel Bangkok on Siam Square</p>
          <p>Siam Square Soi 6, Rama 1 Road. </p>
          <p>Bangkok 10330 Thailand</p>
          <p>Tel: +66 2 209 8888 Ext. 2415</p>
          <div className="flex flex-wrap">
            <p>E-mail:&nbsp;</p>
            <a
              className="underline underline-offset-2"
              href="mailto:H1031-SL2@accor.com "
            >
              H1031-SL2@accor.com
            </a>
          </div>
          <p>Contact: Ms. Pan Panmarerng, Senior Sales Manager</p>
        </div>
      </div>
    );
  } else if (openItem === "officialContractor.standFitting") {
    content = (
      <div className="ml-[50px] mr-[50px] mt-[20px] border-2 border-gray-300 rounded-lg p-6 bg-white">
        <div className="ml-[30px]">
          <p className="font-bold">CITYNEON NETWORK CO., LTD.</p>
          <p>436/36-39, 436/87-95 Soi 20 Mithuna 11, 20 Mithuna Road.,</p>
          <p>Huaykwang Bangkok 10310 Thailand</p>
          <p>Tel: +66 2 690 2682 to 4 Ext. 20</p>
          <div className="flex flex-wrap">
            <p>E-mail:&nbsp;</p>
            <a
              className="underline underline-offset-2"
              href="mailto:op@cityneonthailand.com "
            >
              op@cityneonthailand.com
            </a>
          </div>
          <p>Contact: Ms. Pratchayaporn Phonwaritkul, Project Manager</p>
        </div>
      </div>
    );
  } else if (openItem === "officialContractor.utility") {
    content = (
      <div className="ml-[50px] mr-[50px] mt-[20px] border-2 border-gray-300 rounded-lg p-6 bg-white">
        <div className="ml-[30px]">
          <p className="font-bold">A PLUS UTILITY MANAGEMENT CO., LTD.</p>
          <p>50/259 Moo 9 Bangpood, Pakkred, Nonthaburi, 11120 Thailand</p>
          <p>Tel: +66 2 090 2542-46</p>
          <div className="flex flex-wrap">
            <p>E-mail:&nbsp;</p>
            <a
              className="underline underline-offset-2"
              href="mailto:info@aplusutility.com "
            >
              info@aplusutility.com
            </a>
          </div>
          <p>Contact: Ms. Phiangrudee Srinamuang</p>
        </div>
      </div>
    );
  } else if (openItem === "officialContractor.freightForwarder") {
    content = (
      <div className="ml-[50px] mr-[50px] mt-[20px] border-2 border-gray-300 rounded-lg p-6 bg-white">
        <div className="ml-[30px]">
          <li className="underline underline-offset-2 font-bold ml-2">
            SMALL TO MEDIUM PARCEL COURIER
          </li>
          <p>
            If you have a small to medium parcel(s) to be sent to the
            exhibition, please do send it to us and
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
    content = "";
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
