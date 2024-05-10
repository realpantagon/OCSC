import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Component/Navbar";
import "./profile.css"

const ProfilePageSidebar = ({ userRecord, openItem, setOpenItem }) => {
  const toggleItem = (item) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="profile-page w-1/4 p-4 text-blue-500 bg-white">
      <div className="mb-2">
        <div className="">
          <button
            className={`border-2 border-slate-300 text-blue-500 hover:text-blue-700 w-full py-2 px-4 rounded-full focus:outline-none transition duration-300 ease-in-out ${
              openItem === "exhibitorProfile" || openItem?.startsWith("exhibitorProfile") ? "active bg-blue-500 text-white" : ""
            } w-full text-left font-semibold`}
            onClick={() => toggleItem("exhibitorProfile")}
          >
            Exhibitor Profile
          </button>
          {(openItem === "exhibitorProfile" || openItem?.startsWith("exhibitorProfile")) && (
            <ul className="mx-[30px]">
              <button
                className={`mt-3 mb-3  ${
                  openItem === "exhibitorProfile-generalInfo" ? "rounded-full bg-blue-500 text-white hover:text-blue-700 focus:outline-none transition duration-300 ease-in-out" : ""
                } w-full text-left p-2`}
                onClick={() => toggleItem("exhibitorProfile-generalInfo")}
              >
                General Information
              </button>
              <button
                className={`mb-3 ${
                  openItem === "exhibitorProfile-contactPerson" ? "rounded-full bg-blue-500 text-white hover:text-blue-700 focus:outline-none transition duration-300 ease-in-out" : ""
                } w-full text-left p-2`}
                onClick={() => toggleItem("exhibitorProfile-contactPerson")}
              >
                Contact Person
              </button>
              <button
                className={`mb-3 ${
                  openItem === "exhibitorProfile-levelOfStudies" ? "rounded-full bg-blue-500 text-white hover:text-blue-700 focus:outline-none transition duration-300 ease-in-out" : ""
                } w-full text-left p-2`}
                onClick={() => toggleItem("exhibitorProfile-levelOfStudies")}
              >
                Level of Studies Offer
              </button>
              <button
                className={`mb-3 ${
                  openItem === "exhibitorProfile-topMajors" ? "rounded-full bg-blue-500 text-white hover:text-blue-700 focus:outline-none transition duration-300 ease-in-out" : ""
                } w-full text-left p-2`}
                onClick={() => toggleItem("exhibitorProfile-topMajors")}
              >
                Top 10 Majors
              </button>
              <button
                className={`mb-3 ${
                  openItem === "exhibitorProfile-promotion" ? "rounded-full bg-blue-500 text-white hover:text-blue-700 focus:outline-none transition duration-300 ease-in-out" : ""
                } w-full text-left p-2`}
                onClick={() => toggleItem("exhibitorProfile-promotion")}
              >
                Promotion
              </button>
              <button
                className={`mb-3 ${
                  openItem === "exhibitorProfile-scholarship" ? "rounded-full bg-blue-500 text-white hover:text-blue-700 focus:outline-none transition duration-300 ease-in-out" : ""
                } w-full text-left p-2`}
                onClick={() => toggleItem("exhibitorProfile-scholarship")}
              >
                Scholarship
              </button>
            </ul>
          )}
        </div>
        <div className="mb-2 mt-2">
          <button
            className={`border-2 border-slate-300 text-blue-500 hover:text-blue-700 w-full py-2 px-4 rounded-full focus:outline-none transition duration-300 ease-in-out ${
              openItem === "exhibitorSpace" ? "active bg-blue-500 text-white" : ""
            } w-full text-left p-2 font-semibold`}
            onClick={() => toggleItem("exhibitorSpace")}
          >
            Exhibitor Space
          </button>
        </div>
        <div className="mb-2">
          <button
            className={`border-2 border-slate-300 text-blue-500 hover:text-blue-700 w-full py-2 px-4 rounded-full focus:outline-none transition duration-300 ease-in-out ${
              openItem === "billingInfo" ? "active bg-blue-500 text-white" : ""
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

const MainSection = ({ userRecord, openItem }) => {
  return (
    <div className="flex-1 p-6">
      {openItem === "exhibitorProfile-generalInfo" && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">General Information</h2>
          <ul className="ml-4">
            <li >
              Organization Name: {userRecord.fields["Organization Name"] || "-"}
            </li>
            <li>
              Street Address:{" "}
              {userRecord.fields["Street Address (from Booth no.)"] || "-"}
            </li>
            <li>
              Street Address Line 2:{" "}
              {userRecord.fields["Street Address Line 2 (from Booth no.)"] || "-"}
            </li>
            <li>City: {userRecord.fields["City (from Booth no.)"] || "-"}</li>
            <li>
              State / Province:{" "}
              {userRecord.fields["State / Province (from Booth no.)"] || "-"}
            </li>
            <li>
              Postal / Zip Code:{" "}
              {userRecord.fields["Postal / Zip Code (from Booth no.)"] || "-"}
            </li>
            <li>
              Country: {userRecord.fields["Country (from Booth no.)"] || "-"}
            </li>
          </ul>
        </div>
      )}
      {openItem === "exhibitorProfile-contactPerson" && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact Person</h2>
          <ul className="ml-4">
            <li>
              Prefix: {userRecord.fields["Prefix (from Booth no.)"] || "-"}
            </li>
            <li>
              First Name: {userRecord.fields["First Name (from Booth no.)"] || "-"}
            </li>
            <li>
              Last Name: {userRecord.fields["Last Name (from Booth no.)"] || "-"}
            </li>
            <li>
              Position: {userRecord.fields["Position (from Booth no.)"] || "-"}
            </li>
            <li>
              Email: {userRecord.fields["Email (from Booth no.)"] || "-"}
            </li>
            <li>
              Phone Number: {userRecord.fields["Phone Number (from Booth no.)"] || "-"}
            </li>
          </ul>
        </div>
      )}
      {openItem === "exhibitorProfile-levelOfStudies" && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Level of Studies Offer</h2>
          <ul className="ml-4">
            <li>
              Level of Studies Offered:{" "}
              {userRecord.fields["Level of Studies Offered (from Booth no.)"] || "-"}
            </li>
          </ul>
        </div>
      )}
      {openItem === "exhibitorProfile-topMajors" && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Top 10 Majors</h2>
          {/* Render Top 10 Majors data */}
        </div>
      )}
      {openItem === "exhibitorProfile-promotion" && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Promotion</h2>
          {/* Render Promotion data */}
        </div>
      )}
      {openItem === "exhibitorProfile-scholarship" && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Scholarship</h2>
          {/* Render Scholarship data */}
        </div>
      )}
      {openItem === "exhibitorSpace" && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Exhibitor Space</h2>
          <ul>
            <li>
              Total Booths Required:{" "}
              {userRecord.fields["Total Booths Required (from Booth no.)"] || "-"}
            </li>
            <li>
              Institution Name on Booth Fascia:{" "}
              {userRecord.fields["Institution name to be put on booth fascia (from Booth no.)"] || "-"}
            </li>
            <li>
              National Flag on Booth & Media for PR:{" "}
              {userRecord.fields["National flag on booth & Media for PR (from Booth no.)"] || "-"}
            </li>
          </ul>
        </div>
      )}
      {openItem === "billingInfo" && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Billing Information</h2>
          <ul>
            <li>
              Organization Name: {userRecord.fields["Organization Name 2 (from Booth no.)"] || "-"}
            </li>
            <li>
              Street Address: {userRecord.fields["Street Address 2 (from Booth no.)"] || "-"}
            </li>
            <li>
              Street Address Line 2:{" "}
              {userRecord.fields["Street Address Line 2 2 (from Booth no.)"] || "-"}
            </li>
            <li>City: {userRecord.fields["City 2 (from Booth no.)"] || "-"}</li>
            <li>
              State / Province: {userRecord.fields["State / Province 2 (from Booth no.)"] || "-"}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

function Profile() {
  const [userRecord, setUserRecord] = useState(null);
  const [username, setUsername] = useState("2024ocscexpo111");
  const [isLoading, setIsLoading] = useState(true);
  const [openItem, setOpenItem] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          "https://api.airtable.com/v0/appuJ44jDsA3MjkPx/Approved%20Exhibitors",
          {
            headers: {
              Authorization:
                "Bearer pat0OBMDNs4sQDmvL.46e6a60992296cd058398c5407b91169e9764861003a751a45e2e37c2fa4cc83",
            },
          }
        );
        const records = response.data.records;
        const userRecord = records.find((record) => record.fields.Username === username);
        setUserRecord(userRecord);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, [username]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <main className="flex flex-1">
        {isLoading ? (
          <div className="flex justify-center items-center w-full">
            <div className="text-gray-600 text-lg">Loading user data...</div>
          </div>
        ) : userRecord ? (
          <>
            <ProfilePageSidebar
              userRecord={userRecord}
              openItem={openItem}
              setOpenItem={setOpenItem}
            />
            <MainSection userRecord={userRecord} openItem={openItem} />
          </>
        ) : (
          <div className="flex justify-center items-center w-full">
            <div className="text-gray-600 text-lg">No user data found.</div>
          </div>
        )}
      </main>
    </div>
  );
}

export default Profile;