import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Component/Navbar";
import "./profile.css"

const ProfilePageSidebar = ({ userRecord, openItem, setOpenItem }) => {
  const toggleItem = (item) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="profile-page w-1/4 p-4 text-black bg-white">
      <div className="mb-2">
        <div className="">
          <button
            className={`border-2 border-slate-300 text-black hover:text-black w-full py-2 px-4 rounded-full focus:outline-none transition duration-300 ease-in-out ${
              openItem === "exhibitorProfile" || openItem?.startsWith("exhibitorProfile") ? "active bg-blue-700 text-white" : ""
            } w-full text-left font-semibold`}
            onClick={() => toggleItem("exhibitorProfile")}
          >
            Exhibitor Profile
          </button>
          {(openItem === "exhibitorProfile" || openItem?.startsWith("exhibitorProfile")) && (
            <ul className="mx-[30px]">
              <button
                className={`mt-3 mb-3  ${
                  openItem === "exhibitorProfile-generalInfo" ? "rounded-full bg-blue-700 text-white hover:text-black focus:outline-none transition duration-300 ease-in-out" : ""
                } w-full text-left p-2`}
                onClick={() => toggleItem("exhibitorProfile-generalInfo")}
              >
                General Information
              </button>
              <button
                className={`mb-3 ${
                  openItem === "exhibitorProfile-contactPerson" ? "rounded-full bg-blue-700 text-white hover:text-black focus:outline-none transition duration-300 ease-in-out" : ""
                } w-full text-left p-2`}
                onClick={() => toggleItem("exhibitorProfile-contactPerson")}
              >
                Contact Person
              </button>
              <button
                className={`mb-3 ${
                  openItem === "exhibitorProfile-levelOfStudies" ? "rounded-full bg-blue-700 text-white hover:text-black focus:outline-none transition duration-300 ease-in-out" : ""
                } w-full text-left p-2`}
                onClick={() => toggleItem("exhibitorProfile-levelOfStudies")}
              >
                Level of Studies Offer
              </button>
              <button
                className={`mb-3 ${
                  openItem === "exhibitorProfile-topMajors" ? "rounded-full bg-blue-700 text-white hover:text-black focus:outline-none transition duration-300 ease-in-out" : ""
                } w-full text-left p-2`}
                onClick={() => toggleItem("exhibitorProfile-topMajors")}
              >
                Top 10 Majors
              </button>
              <button
                className={`mb-3 ${
                  openItem === "exhibitorProfile-promotion" ? "rounded-full bg-blue-700 text-white hover:text-black focus:outline-none transition duration-300 ease-in-out" : ""
                } w-full text-left p-2`}
                onClick={() => toggleItem("exhibitorProfile-promotion")}
              >
                Promotion
              </button>
              <button
                className={`mb-3 ${
                  openItem === "exhibitorProfile-scholarship" ? "rounded-full bg-blue-700 text-white hover:text-black focus:outline-none transition duration-300 ease-in-out" : ""
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
            className={`border-2 border-slate-300 text-black hover:text-black w-full py-2 px-4 rounded-full focus:outline-none transition duration-300 ease-in-out ${
              openItem === "exhibitorSpace" ? "active bg-blue-700 text-white" : ""
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

const MainSection = ({ userRecord, openItem }) => {
  return (
    <div className="flex-1 p-6">
      {openItem === "exhibitorProfile-generalInfo" && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">General Information</h2>
          <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Field
                </th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Value
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 border-t border-gray-100">
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4">Organization Name</td>
                <td className="px-6 py-4">
                  {userRecord.fields["Organization Name"] || "-"}
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4">Street Address</td>
                <td className="px-6 py-4">
                  {userRecord.fields["Street Address (from Booth no.)"] || "-"}
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4">Street Address Line 2</td>
                <td className="px-6 py-4">
                  {userRecord.fields["Street Address Line 2 (from Booth no.)"] ||
                    "-"}
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4">City</td>
                <td className="px-6 py-4">
                  {userRecord.fields["City (from Booth no.)"] || "-"}
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4">State / Province</td>
                <td className="px-6 py-4">
                  {userRecord.fields["State / Province (from Booth no.)"] || "-"}
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4">Postal / Zip Code</td>
                <td className="px-6 py-4">
                  {userRecord.fields["Postal / Zip Code (from Booth no.)"] || "-"}
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4">Country</td>
                <td className="px-6 py-4">
                  {userRecord.fields["Country (from Booth no.)"] || "-"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      {openItem === "exhibitorProfile-contactPerson" && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact Person</h2>
          <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Field
                </th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Value
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 border-t border-gray-100">
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4">Prefix</td>
                <td className="px-6 py-4">
                  {userRecord.fields["Prefix (from Booth no.)"] || "-"}
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4">First Name</td>
                <td className="px-6 py-4">
                  {userRecord.fields["First Name (from Booth no.)"] || "-"}
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4">Last Name</td>
                <td className="px-6 py-4">
                  {userRecord.fields["Last Name (from Booth no.)"] || "-"}
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4">Position</td>
                <td className="px-6 py-4">
                  {userRecord.fields["Position (from Booth no.)"] || "-"}
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4">Email</td>
                <td className="px-6 py-4">
                  {userRecord.fields["Email (from Booth no.)"] || "-"}
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4">Phone Number</td>
                <td className="px-6 py-4">
                  {userRecord.fields["Phone Number (from Booth no.)"] || "-"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      {openItem === "exhibitorProfile-levelOfStudies" && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Level of Studies Offer</h2>
          <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Field
                </th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Value
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 border-t border-gray-100">
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4">Level of Studies Offered</td>
                <td className="px-6 py-4">
                  {userRecord.fields["Level of Studies Offered (from Booth no.)"] ||
                    "-"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      {openItem === "exhibitorProfile-topMajors" && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Top 10 Majors</h2>
          <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Major
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 border-t border-gray-100">
              {[...Array(10)].map((_, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    {userRecord.fields[`Famous #${index + 1} (from Booth no.)`] ||
                      "-"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {openItem === "exhibitorProfile-promotion" && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Promotion</h2>
          <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Field
                </th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Value
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 border-t border-gray-100">
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4">Promotion Detail</td>
                <td className="px-6 py-4">
                  {userRecord.fields["Promotion Detail (from Booth no.)"] || "-"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      {openItem === "exhibitorProfile-scholarship" && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Scholarship</h2>
          <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Field
                </th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Value
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 border-t border-gray-100">
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4">Scholarship</td>
                <td className="px-6 py-4">
                  {userRecord.fields["Scholarship (from Booth no.)"] || "-"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      {openItem === "exhibitorSpace" && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Exhibitor Space</h2>
          <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Field
                </th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Value
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 border-t border-gray-100">
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4">Total Booths Required</td>
                <td className="px-6 py-4">
                  {userRecord.fields["Total Booths Required (from Booth no.)"] ||
                    "-"}
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4">Institution Name on Booth Fascia</td>
                <td className="px-6 py-4">
                  {userRecord.fields[
                    "Institution name to be put on booth fascia (from Booth no.)"
                  ] || "-"}
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4">National Flag on Booth & Media for PR</td>
                <td className="px-6 py-4">
                  {userRecord.fields[
                    "National flag on booth & Media for PR (from Booth no.)"
                  ] || "-"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      {openItem === "billingInfo" && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Billing Information</h2>
          <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Field
                </th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Value
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 border-t border-gray-100">
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4">Organization Name</td>
                <td className="px-6 py-4">
                  {userRecord.fields["Organization Name 2 (from Booth no.)"] ||
                    "-"}
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4">Street Address</td>
                <td className="px-6 py-4">
                  {userRecord.fields["Street Address 2 (from Booth no.)"] || "-"}
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4">Street Address Line 2</td>
                <td className="px-6 py-4">
                  {userRecord.fields["Street Address Line 2 2 (from Booth no.)"] ||
                    "-"}
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4">City</td>
                <td className="px-6 py-4">
                  {userRecord.fields["City 2 (from Booth no.)"] || "-"}
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4">State / Province</td>
                <td className="px-6 py-4">
                  {userRecord.fields["State / Province 2 (from Booth no.)"] || "-"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

function Profile() {
  const [userRecord, setUserRecord] = useState(null);
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [openItem, setOpenItem] = useState(null);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

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
        const userRecord = records.find(
          (record) => record.fields.Username === username
        );
        setUserRecord(userRecord);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (username) {
      fetchUserData();
    }
  }, [username]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <main className="flex flex-1">
        {isLoading ? (
          <div className="flex justify-center items-center w-full">
            <div className="flex items-center">
              <svg
                className="animate-spin h-5 w-5 mr-3 text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              <span className="text-gray-600 text-lg">Loading user data...</span>
            </div>
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