import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Component/Navbar";

function Order() {
  const [userRecord, setUserRecord] = useState(null);
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [selectedForm, setSelectedForm] = useState(null);

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

  const openJotForm = (formKey) => {
    setSelectedForm(formKey);
  };

  return (
    <div>
      <Navbar />
      <div className="flex">
        <div className="w-1/4 p-4 bg-white ">
          <ul>
            <li className="mb-2">
              <button
                className={`border-2 border-slate-300 text-black hover:text-black w-full py-2 px-4 rounded-full focus:outline-none transition duration-300 ease-in-out ${
                  selectedForm === "r1 service(Furniture)"
                    ? "bg-blue-700 text-white shadow-lg"
                    : "bg-white text-black"
                }`}
                onClick={() => openJotForm("r1 service(Furniture)")}
              >
                Furniture Order
              </button>
            </li>
            <li className="mb-2">
              <button
                className={`border-2 border-slate-300 text-black hover:text-black w-full py-2 px-4 rounded-full focus:outline-none transition duration-300 ease-in-out ${
                  selectedForm === "r2 service(Electric)"
                    ? "bg-blue-700 text-white shadow-lg"
                    : "bg-white text-black"
                }`}
                onClick={() => openJotForm("r2 service(Electric)")}
              >
                Electric Order
              </button>
            </li>
            <li className="mb-2">
              <button
                className={`border-2 border-slate-300 text-black hover:text-black w-full py-2 px-4 rounded-full focus:outline-none transition duration-300 ease-in-out ${
                  selectedForm === "r3 service(A/V&Computer)"
                    ? "bg-blue-700 text-white shadow-lg"
                    : "bg-white text-black"
                }`}
                onClick={() => openJotForm("r3 service(A/V&Computer)")}
              >
                A/V & Computer Order
              </button>
            </li>
            <li>
              <button
                className={`border-2 border-slate-300 text-black hover:text-black w-full py-2 px-4 rounded-full focus:outline-none transition duration-300 ease-in-out ${
                  selectedForm === "Payment link"
                    ? "bg-blue-700 text-white shadow-lg"
                    : "bg-white text-black"
                }`}
                onClick={() => openJotForm("Payment link")}
              >
                Payment
              </button>
            </li>
          </ul>
        </div>

        <div className="flex-1 p-4">
          {isLoading ? (
            <div>Loading...</div>
          ) : userRecord && selectedForm ? (
            <iframe
              src={userRecord.fields[selectedForm]}
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
