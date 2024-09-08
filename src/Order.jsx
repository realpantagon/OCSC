import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Component/Navbar";

function Order() {
  const [userRecord, setUserRecord] = useState(null);
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [selectedForm, setSelectedForm] = useState(null);

  useEffect(() => {
    const storedUsername = localStorage.getItem("ocscusername");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `https://api.airtable.com/v0/appVADkxTuwcN78c6/Approve%20Exhibitors`,
          {
            headers: {
              Authorization:
                "Bearer pat3vTotU6pMKB49f.2f3cd894e728c2c7c2c3656b056fc3cf5381ebbe04fa33c870ac7f7700ab59d2",
            },
            params: {
              filterByFormula: `AND({Username} = '${username}')`,
            },
          }
        );
        const records = response.data.records;
        if (records.length > 0) {
          setUserRecord(records[0].fields);
        } else {
          console.log("User record not found for username:", username);
        }
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

  const openJotForm = (formKey) => {
    console.log("User Record:", userRecord);
    console.log("Selected Form:", formKey);
    console.log("Form URL:", userRecord ? userRecord[formKey] : null);
    setSelectedForm(formKey);
  };

  return (
    <div>
      <Navbar />
      <div className="flex">
        <div className="w-1/4 p-4 bg-white">
          <ul>
            {[
              {
                key: "r4 service(ExhibitorBadge)",
                label: "Form 1: Exhibitor badge",
              },
              {
                key: "r5 service(Additionallogo)",
                label: "Form 2: Advertisement (media PR)",
              },
              { key: "r6 service(Form 3)", label: "Form 3: Booth assistant" },
              {
                key: "r1 service(Furniture)",
                label: "Form 4: Furniture & carpet",
              },
              {
                key: "r2 service(Electric)",
                label: "Form 5: Electrical items",
              },
              {
                key: "r3 service(A/V&Computer)",
                label: "Form 6: A/V equipment",
              },
              {
                key: "r7 service(VISA)",
                label: "Form 7: Visa invitation letter",
              },
            ].map(({ key, label }) => (
              <li key={key} className="mb-2">
                <button
                  className={`border-2 border-slate-300 text-black hover:text-black w-full py-2 px-4 rounded-full focus:outline-none transition duration-300 ease-in-out ${
                    selectedForm === key
                      ? "bg-blue-700 text-white shadow-lg"
                      : "bg-white text-black"
                  }`}
                  onClick={() => openJotForm(key)}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1 p-4">
          {isLoading ? (
            <div className="flex justify-center items-center w-full h-full">
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
                  Loading form data...
                </span>
              </div>
            </div>
          ) : selectedForm && userRecord && userRecord[selectedForm] ? (
            <iframe
              src={userRecord[selectedForm]}
              width="100%"
              height="800px"
              allowFullScreen
            ></iframe>
          ) : (
            <div>Please select a form from the sidebar.</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Order;
