import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Component/Navbar";
import "./profile.css";
import ProfilePageSidebar from "./Component/ProfilePageSidebar";
import MainSection from "./Component/MainSection";

function Profile() {
  const [userRecord, setUserRecord] = useState(null);
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [openItem, setOpenItem] = useState("exhibitorProfile-generalInfo");

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

        // Retrieve the username from localStorage
        const storedUsername = localStorage.getItem("ocscusername");

        if (storedUsername) {
          const response = await axios.get(
            "https://api.airtable.com/v0/appVADkxTuwcN78c6/Approve%20Exhibitors",
            {
              headers: {
                Authorization:
                  "Bearer pat3vTotU6pMKB49f.2f3cd894e728c2c7c2c3656b056fc3cf5381ebbe04fa33c870ac7f7700ab59d2",
              },
              params: {
                filterByFormula: `{Username} = '${storedUsername}'`,
              },
            }
          );

          console.log(response.data);
          const records = response.data.records;

          if (records.length > 0) {
            const userRecord = records[0];
            setUserRecord(userRecord);
          } else {
            console.log("No matching record found");
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, []);

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
              <span className="text-gray-600 text-lg">
                Loading user data...
              </span>
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