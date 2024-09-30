import React from "react";
import Navbar from "./Component/Navbar";
import { useState } from "react";
import axios from "axios";

const ManualPageSidebar = ({ userRecord, openItem, setOpenItem }) => {
  const toggleItem = (item) => {
    setOpenItem(item);
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
            Important agenda
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
        <div className="mb-2">
          <button
            className={`border-2 border-slate-300 text-black hover:text-black w-full py-2 px-4 rounded-full focus:outline-none transition duration-300 ease-in-out ${
              openItem === "rules" || openItem?.startsWith("rules")
                ? "active bg-blue-700 text-white"
                : ""
            } w-full text-left p-2 font-semibold`}
            onClick={() => toggleItem("rules")}
          >
            Rules & Regulations
          </button>
          {(openItem === "rules" || openItem?.startsWith("rules")) && (
            <ul className="mx-[30px]">
              <button
                className={`mt-3 mb-3 ${
                  openItem === "rules.standard"
                    ? "rounded-full bg-blue-700 text-white hover:text-black focus:outline-none transition duration-300 ease-in-out"
                    : ""
                } w-full text-left p-2`}
                onClick={() => toggleItem("rules.standard")}
              >
                &nbsp;&nbsp;Standard Booth
              </button>
              <button
                className={`mb-3 ${
                  openItem === "rules.raw"
                    ? "rounded-full bg-blue-700 text-white hover:text-black focus:outline-none transition duration-300 ease-in-out"
                    : ""
                } w-full text-left p-2`}
                onClick={() => toggleItem("rules.raw")}
              >
                &nbsp;&nbsp;Raw Space
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
                "https://drive.google.com/file/d/10ysnKXkIdV2FVJvVC5YtbHp-ElMLurx3/view",
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
        <div className="leading-loose -ml-10">
          <p>The OCSC International Education Expo 2024, Bangkok</p>
          <p>Paragon Hall, 5th Floor, Siam Paragon, Bangkok, Thailand</p>
          <p>Gross area 5,000 Sq.m.</p>
          <p>26 - 27 October 2024</p>
          <p>26 October 2024 :11:30 hrs. - 12:00 hrs.</p>
          <p>26 October 2024 :12:00 hrs. - 19:00 hrs.</p>
          <p>27 October 2024 :12:00 hrs. - 19:00 hrs.</p>
          <p>
            (Exhibitors are allowed to access to the exhibition hall from 08:00
            hrs. onwards.)
          </p>
          <p>
            25 October 2024 :14:00 hrs. - 24:00 hrs. (for standard booth's
            decoration)
          </p>
          <p>(No air-conditioning during the set up)</p>
          <p>
            26 October 2024 :08:00 hrs. - 11:00 hrs. (for standard booth's
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
          <p>436/36-39, 436/87-95, Soi 20 Mithuna 11, 20 Mithuna Road.,</p>
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
          <p>Tel: +66 2 610 8011, Phone no.: +66 96-905-6179</p>
          <div className="flex flex-wrap">
            <p>E-mail:&nbsp;</p>
            <a
              className="underline underline-offset-2"
              href="mailto:Sudarat.s@siamparagon.co.th"
            >
              Sudarat.s@siamparagon.co.th
            </a>
          </div>
          <p>Contact: Ms. Sudarat Saibun, Customer Service Executive</p>
        </div>
      </div>
    );
  } else if (openItem === "officialContractor.accommodation") {
    content = (
      <div className="ml-[50px] mr-[50px] mt-[20px] border-2 border-gray-300 rounded-lg p-6 bg-white">
        <div className="ml-[30px]">
          <div className="leading-5 flex flex-col items-center text-center">
            <img
              className="object-contain h-15 w-44"
              src="/Novotel.png"
              alt="Novotel Logo"
            />
            <p className="font-bold">OFFICIAL & PREFERRED HOTEL</p>
            <p>NOVOTEL BANGKOK ON SIAM SQUARE</p>
            <a
              href="https://maps.app.goo.gl/ovn3TjiMKq9YDTiEA"
              className="text-blue-600 underline text-xs"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://maps.app.goo.gl/ovn3TjiMKq9YDTiEA
            </a>
            <br />
            <br />
          </div>
          <p className="font-bold underline underline-offset-2">
            SPECIAL RATE FOR OCSC EXHIBITORS
          </p>
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
            *The rates are net, per room per night inclusive of 17.7% government
            taxes & service charge,
          </p>
          <p className="italic">including buffet breakfast.</p>
          <br />

          <p className="font-bold underline underline-offset-2">
            BOOKING STEPS&nbsp;
          </p>
          <div className="flex flex-wrap">
            <p className="">1.Go to hotel website at :&nbsp;</p>
            <a
              href="https://www.novotelbkk.com/"
              style={{ textDecoration: "underline", color: "blue" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              novotelbkk.com
            </a>
          </div>
          <p>
            2.Select Special Rates and apply “ 24OCSC ” on Preferential code
            (Rate applied for period between 25 – 28 October 2024 only)
          </p>
          <p>
            3.Special offer will be appeared on website for further booking
            process
          </p>
          <br />
          <p className="font-bold ml-[30px]">ROOM TYPES:</p>

          <div className="flex flex-wrap">
            <div className="grid justify-items-center ml-[40px]">
              <img
                className="drop-shadow-[4px_4px_4px_rgba(0,0,0,0.3)] object-contain h-36 w-36"
                src="/Superior-Room-2.jpg"
              ></img>
              <p>Superior room</p>
            </div>
            <div className="grid justify-items-center ml-[60px]">
              <img
                className="drop-shadow-[4px_4px_4px_rgba(0,0,0,0.3)] object-contain h-36 w-36"
                src="/Deluxe-Room-Queen.jpg"
              ></img>

              <p>Deluxe room</p>
            </div>
            <div className="grid justify-items-center ml-[60px]">
              <img
                className="drop-shadow-[4px_4px_4px_rgba(0,0,0,0.3)] object-contain h-36 w-36"
                src="/Bars-Restaurant-Bars-Restaurants-32.jpg"
                alt="The SQUARE"
              />

              <p>The SQUARE</p>
            </div>
          </div>
          <br />
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
            <p>436/36-39,436/87-95, Soi 20 Mithuna 11, 20 Mithuna Road.,</p>
            <p className="mb-3">Huaykwang Bangkok 10310 Thailand</p>
            {/* <p>Tel: +66 2 690 2682 to 4 Ext. 20</p>
            <p>E-mail: ladda@cityneonthailand.com</p>
            <p>Contact: Ms. Ladda Chaiprasert, Managing Director</p> */}
            <p>Tel: +66 2 690 2682 to 4 Ext. 20</p>
            <div className="flex flex-wrap">
              <p>E-mail:&nbsp;</p>
              <a
                className="underline underline-offset-2"
                href="mailto:op@cityneonthailand.com"
              >
                op@cityneonthailand.com
              </a>
            </div>
            <p>Contact: Ms. Pratchayaporn Phonwaritkul, Project Manager</p>
            <br />
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
  } else if (openItem === "rules") {
    content = (
      <div className="ml-[50px] mr-[50px] mt-[20px] text-sm flex flex-wrap gap-[100px] border-2 border-gray-300 rounded-lg p-6 bg-white">
        <div className="ml-[30px] leading-loose">
          <p className="font-bold">EXHIBITION RULES & REGULATIONS</p>
          <p>
            1) All materials used for decorating or covering of booths must be
            non-flammable material. Exhibitors must comply with any instruction
            given by the relevant authority in order to avoid any risk of fire.
          </p>
          <p>
            2) All amenities listed power, lighting/electrical equipment,
            internet LAN and other IT services can only be obtained through
            Royal Paragon Hall.
          </p>
          <p>
            3) All electrical installations on stands must comply through the
            official utility contractor (A PLUS UTILITY MANAGEMENT Co., Ltd.)
            with the regulations and requirements currently in force of the
            relevant authorities and the additional regulations issued by Royal
            Paragon Hall.{" "}
          </p>
          <p>
            4) No exhibitors may alter or interfere with the structure of the
            exhibition premises without the written consent of the show manager.{" "}
          </p>
          <p>
            5) Exhibitors must obtain from the show manager the necessary passes
            for their executives, representatives, booth personnel, workmen or
            contractors during the installation, exhibition and dismantling
            periods.{" "}
          </p>
          <p>
            6) It is not permissible for the exhibitor to place objects outside
            the booth area or to obstruct fire safety devices, emergency exits,
            air-conditioning units and electrical control cabinets.{" "}
          </p>
          <p>
            7) Use of the hall ceiling by any exhibitors is only allowed after
            receiving written permission by the show manager to have any hanging
            signs or materials.{" "}
          </p>
          <p>
            8) An exhibitor, who has bulky exhibits which cannot be transported
            freely along the aisles of the exhibition, shall contact the show
            manger and the official freight forwarder{" "}
            <span className="font-bold">(APT SHOWFREIGHT)</span> in good time
            prior to the set-up and show days in order to plan their
            inward/outward transport.{" "}
          </p>
          <p>
            9) The show manager may make arrangements for any objects left on
            the booth after the final clearance date to be removed at the risk
            and expense of the exhibitor. As security against the discharge of
            all obligations to the show manager which the exhibitor has or may
            have, the organiser shall be entitled to retain the exhibitor’s
            property until such time as payment in full has been effected. The
            show manager shall enjoy the same entitlement referred to above in
            the event of the exhibitor having left behind objects after the
            final clearance date.{" "}
          </p>
          <p className="font-bold">
            10) The condition of payment must be fully completed in every
            respect prior to the build-up date (25 October 2024).{" "}
          </p>
          <p className="font-bold">
            11) If an exhibitor fails to pay any sum due to the organiser/show
            manager or contravenes or fails to comply with the rules and
            regulations the organiser/show manager reserve the right to revoke
            his allotments of space and prohibit his participation in the
            exhibition. Such action by the show manager shall not prejudice any
            other remedy, which they shall have against the exhibitor nor reduce
            the amount paid or owing by him.{" "}
          </p>
          <p>
            12) The official logo of the OCSC International Education Expo can’t
            be used without prior permission from the organiser/show manager.{" "}
          </p>
          <p>
            13) In the event of a special tax or some other duty being imposed
            on undertaking made in accordance with this contract, the exhibitors
            shall pay the sum in question.{" "}
          </p>
          <p>
            14) A booth may only be occupied by the exhibitor to whom it has
            been allocated and by his accredited agents as approved by the show
            manager.{" "}
          </p>
          <p className="font-bold">
            15) Sub-contracted exhibiting company is not allowed and will be
            penalized by the show manager at his own discretion.{" "}
          </p>
          <p>
            16) There must be a competent representative of the exhibitor in
            charge of exhibits at all times that the exhibition is open to
            visitors.{" "}
          </p>
          <p>
            17) The exhibitors during the exhibition period are required to wear
            the badge designated by the show manager and must attend the booth
            in order to welcome visitors and administer the exhibits.{" "}
          </p>
          <p>
            18) Exhibitors must not operate or put in motion any exhibits
            without prior permission from the show manager.{" "}
          </p>
          <p>
            19) Written permission from the show manager is required for
            exhibits or demonstrations, which are likely to emit dust, fumes,
            loud noises or strong odors.{" "}
          </p>
          <p>
            20) Guidance and approval should be obtained from the show manager
            when the exhibits contain motor spirit, oils, calcium, acetylene gas
            apparatus or any combustible or flammable material.{" "}
          </p>
          <p>
            21) The exhibitors shall keep their booth safe and in the best
            possible condition and shall at the request of the show manager and
            at the exhibitor’s own expense improve the stand if the show manager
            considers it unsafe or if it creates a poor impression. Exhibited
            products may not be removed during the period of the exhibition
            without the special authorization of the show manager.{" "}
          </p>
          <p>
            22) Without the authorization of the fire authorities and the show
            manager it is not permissible for the exhibitor to use a naked flame
            and to store gasses and flammable liquids within the exhibition
            area.{" "}
          </p>
          <p className="font-bold">
            23) Written consent is required from the show manager for the use of
            audio, video and lighting equipment (including video bulletins),
            live music and performances. “Special effects” lighting (disruptive
            for the neighboring stands), smoke machines and laser projection
            must not be used in the booth without prior written consent from the
            show manager.{" "}
          </p>
          <p className="font-bold">
            24) All exhibitors are asked to keep noise levels to a minimum as
            not to disrupt other exhibitors during the event. In case of any
            complaints in regard to noise levels, the exhibitor must reduce the
            volume as per the show manager’s instructions.{" "}
          </p>

          <p className="">
            25) Literature on display and promotional "give-away" items shall be
            limited to reasonable quantities. Reserve supplies shall be kept in
            closed containers and stored in a neat and compact manner.{" "}
            <span className="font-bold">
              Distribution will not be permitted outside of the booth.
            </span>
          </p>
          <p>
            26) The exhibitors are responsible for all personal injury or damage
            to property arising in connection with the erection and dismantling
            of the booth on anything permitted, omitted or done thereon or there
            from during the period of exhibition or the construction and
            dismantling periods.{" "}
          </p>
          <p>
            27) The exhibitors will indemnify the show manager in respect to
            each and every such claim and all actions proceedings, costs, claims
            and demands in respect thereof. The exhibitors must take out
            adequate insurance in respect to such claims.{" "}
          </p>
          <p>
            28) The show manager shall not be responsible in any way for the
            personal injury to the exhibitor or his contractors, invitees, or
            licensees, cause nor for the loss of or damage to exhibits or to
            property of the exhibitor.{" "}
          </p>
          <p>
            29) Each exhibitor exhibits entirely at his own risk and must insure
            himself to cover the above-mentioned conditions.
          </p>
          <p>
            30) Exhibitors are advised to insure against costs and losses, which
            may incur in the event of the exhibition being abandoned, cancelled
            or suspended in whole or part for clauses not within the show
            manager’s control, since the show manager accept no liability in
            such an eventuality.{" "}
          </p>
          <p className="font-bold">
            31) Although security will be provided for the overall protection of
            the exhibition, exhibitors are entirely responsible for the security
            of any goods or personal belongings brought to the exhibition.{" "}
          </p>
          <p>
            32) Smoking is strictly prohibited in the exhibition hall at all
            times.{" "}
          </p>
          <p>
            33) If, for any reasons over which the show manager has no control,
            restrictions occur in respect to cooling or the supply of
            electricity and water, the exhibitor shall not be entitled to
            receive a refund of the stand or part thereof. The exhibitors shall
            also not be entitled to any form of compensation.{" "}
          </p>
          <p>
            34) All exhibits, products or displays must be placed within the
            exhibit area. In all case, exhibitors must keep the aisle around
            their booth clear, except by the arrangement with the show manager.{" "}
          </p>
          <p>
            35) Carrying in/out, and administration of exhibits must be done by
            the exhibitor at his own risk and expense.
          </p>
          <p>
            36) It is not permissible for the exhibitors to damage partitions,
            floor, or any other goods supplied by the contractors and the venue.
          </p>
          <p className="font-bold">
            37) Each exhibitor is bound in all respects by these rules and
            regulations. The show manager reserves the right to waive, add, or
            alter any of these rules and regulations in the interest of the
            exhibition either generally or in any particular case.{" "}
          </p>
          <p>
            38) Should any questions arise whether provided for in these rules
            and regulations or not, the decision of the show manager is final.{" "}
          </p>
          <p className="font-bold">
            39) The exhibitors should take note of matters mentioned in this
            Exhibitor Manual or communicated to him in any other way.
          </p>
        </div>
      </div>
    );
  } else if (openItem === "rules.standard") {
    content = (
      <div className="ml-[50px] mr-[50px] mt-[20px] border-2 border-gray-300 rounded-lg p-6 bg-white">
        <div className="ml-[30px] leading-loose">
          <p className="font-bold">
            Guidelines for exhibitors with rental of standard booth
          </p>
          <div className="ml-3 mb-3">
            <p>
              1. Do not move, make any addition or any change to the standard
              booth. Should you wish to do so, please contact Cityneon for
              further action.{" "}
            </p>
            <p>2. Do not apply spraying glue or silicone on the wall panel.</p>
            <p>3. Do not paint, spray-paint, or write on the wall panel. </p>
            <p>
              4. Do not drill nail, perforate, tack down, staple or cause any
              damage to the wall panel or any part of the standard booth. Should
              you need to affix any exhibit or sign to the wall please use
              approved double-sided tape or contact the exhibition organizer.
            </p>
          </div>
          <p className="font-bold">
            Note: In case of violation of the above rules, official contractors
            will be obliged to request the payment from exhibitors for any
            damages caused at the rate of 3,000 Bath/panel
          </p>
        </div>
      </div>
    );
  } else if (openItem === "rules.raw") {
    content = (
      <div className="ml-[50px] mr-[50px] mt-[20px] border-2 border-gray-300 rounded-lg p-6 bg-white">
        <div className="ml-[30px] leading-5">
          <p className="font-bold mt-2">
            3. Special design booth or raw space electricity
          </p><br/>
          <div className="leading-5 indent-5">
          <p className="">
            3.1 Exhibitors who apply for “Space Only” to build up special
            designed stands must submit their electrical order together with
            their layout plan before the deadline.
          </p><br/>
          <p className="">
            3.2 General Hall lighting will be provided by organizer. All power
            supplies within the booths as well as for demonstrations can be
            installed by your own electrical contractors upon the organizer’s
            approval. Exhibitors should complete and return the order form with
            full payment to A PLUS UTILITY MANAGEMENT Co., Ltd. within the
            stated deadline. For safety’s sake, exhibitors are strictly not
            allowed to connect their exhibits or lighting to the building’s main
            distribution. The organizer reserves the right to stop power supply
            in case of improper connections.
          </p><br/>
          <p className="">
            3.3 The contractors appointed by exhibitors must submit details of
            electrical installations, layout and specifications to the organizer
            within the deadline indicated on the Order Form. The following
            requirement must be stated, otherwise, the application may not be
            considered.
          </p><br/>
          <div className="indent-14">
            <p className="">3.3.1 Company name of the contractor.</p>
            <p className="">
              3.3.2 Names and identification card / passport number of the
              attending electrical personnel.
            </p>
            <p className="">
              3.3.3 Specification and rating in watts per unit of the light
              fitting.
            </p>
            <p className="">
              3.3.4 Layout drawings made by the contractor.
            </p>
            <p className="">3.3.5 Completed Electrical Order Form.</p>
          </div><br/>
          <p className="">
            3.4 Approved electricians can collect their personal badges/working
            permits from the organizer’s show manager office in the exhibition
            hall by providing their own identification cards in exchange.
          </p><br/>
          <p className="">
            3.5 All proper power input terminals must be installed by the
            approved contractor for inspection by A PLUS UTILITY MANAGEMENT Co.,
            Ltd. prior to connection to the supply line.
          </p><br/>
          <p className="">
            3.6 Priority will be given to those exhibitors who order their
            electrical from A PLUS UTILITY MANAGEMENT Co., Ltd.
          </p><br/>
          <p className="">
            3.7 Any illegal connection or adaptation, using of multiple outlet
            adaptors, or any extension from the socket point found would yield
            electrical disconnection without prior notification.
          </p><br/>
          <p className="">
            3.8 No flashing lights will be permitted unless they from an
            integral part.
          </p><br/>
          <p className="">
            3.9 The organizer reserves the right to disconnect the electrical
            supply to any installations, which in the opinion of A PLUS UTILITY
            MANAGEMENT Co., Ltd., could be harmful or likely to cause annoyance
            to visitors or other exhibitors.
          </p><br/>
          <p className="">
            3.10 All electrical installations must conform strictly to the
            required standard safety regulations without exception.
          </p><br/>
          <p className="text-red-600 font-bold text-center">
           Violation of these rules may result in the immediate disconnection
            by authorized agents.
          </p>
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
