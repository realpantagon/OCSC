import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Component/Navbar";

function Order() {
  const [userRecord, setUserRecord] = useState(null);
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [selectedForm, setSelectedForm] = useState(
    "r4 service(ExhibitorBadge)"
  );
  const [isOrderHistoryExpanded, setIsOrderHistoryExpanded] = useState(false);
  const [selectedOrderHistoryItem, setSelectedOrderHistoryItem] =
    useState(null);
  const [furnitureOrderData, setFurnitureOrderData] = useState([]);
  const [electricOrderData, setElectricOrderData] = useState([]);
  const [avOrderData, setAVOrderData] = useState([]);
  const [badgeData, setBadgeData] = useState([]);
  const [AdvertiseData, setAdvertiseData] = useState([]);
  const [BoothAsData, setBoothAsData] = useState([]);
  const [VisaData, setVisaData] = useState([]);
  const [loadingFur, setLoadingFur] = useState(true);
  const [loadingElec, setLoadingElec] = useState(true);
  const [loadingAV, setLoadingAV] = useState(true);
  const [loadingBadge, setLoadingBadge] = useState(true);
  const [loadingForm, setLoadingForm] = useState(false);
  const [loadingAdvertise, setLoadingAdvertise] = useState(true);
  const [loadingBoothAs, setLoadingBoothAs] = useState(true);
  const [loadingVisa, setLoadingVisa] = useState(true);

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

  const fetchAdvertiseOrderData = async () => {
    if (!username) return;
    try {
      const response = await fetch(
        `https://api.airtable.com/v0/appVADkxTuwcN78c6/Advertisement?filterByFormula={Username}="${username}"`,
        {
          headers: {
            Authorization:
              "Bearer pat3vTotU6pMKB49f.2f3cd894e728c2c7c2c3656b056fc3cf5381ebbe04fa33c870ac7f7700ab59d2",
          },
        }
      );
      const data = await response.json();
      if (data.records.length > 0) {
        const sortedRecords = data.records.map((record) => record.fields);
        setAdvertiseData(sortedRecords);
      } else {
        setAdvertiseData([]);
      }
    } catch (error) {
      console.error("Error fetching advertise order data:", error);
    }
  };

  const fetchBoothAsOrderData = async () => {
    if (!username) return;
    try {
      const response = await fetch(
        `https://api.airtable.com/v0/appVADkxTuwcN78c6/Booth%20Assistant?filterByFormula={Username}="${username}"`,
        {
          headers: {
            Authorization:
              "Bearer pat3vTotU6pMKB49f.2f3cd894e728c2c7c2c3656b056fc3cf5381ebbe04fa33c870ac7f7700ab59d2",
          },
        }
      );
      const data = await response.json();
      if (data.records.length > 0) {
        const sortedRecords = data.records.map((record) => record.fields);
        setBoothAsData(sortedRecords);
      } else {
        setBoothAsData([]);
      }
    } catch (error) {
      console.error("Error fetching booth assistant order data:", error);
    }
  };

  const fetchFurnitureOrderData = async () => {
    if (!username) return;
    try {
      const response = await fetch(
        `https://api.airtable.com/v0/appVADkxTuwcN78c6/Furniture%20Order?filterByFormula={Username}="${username}"`,
        {
          headers: {
            Authorization:
              "Bearer pat3vTotU6pMKB49f.2f3cd894e728c2c7c2c3656b056fc3cf5381ebbe04fa33c870ac7f7700ab59d2",
          },
        }
      );
      const data = await response.json();
      if (data.records.length > 0) {
        const sortedRecords = data.records
          .map((record) => record.fields)
          .sort((a, b) => {
            const aNum = parseInt(a["OrderID(fur)"].split("-")[1]);
            const bNum = parseInt(b["OrderID(fur)"].split("-")[1]);
            return aNum - bNum;
          });
        setFurnitureOrderData(sortedRecords);
      } else {
        setFurnitureOrderData([]);
      }
    } catch (error) {
      console.error("Error fetching furniture order data:", error);
    }
  };

  const fetchElectricOrderData = async () => {
    if (!username) return;
    try {
      const response = await fetch(
        `https://api.airtable.com/v0/appVADkxTuwcN78c6/Electric%20Order?filterByFormula={Username}="${username}"`,
        {
          headers: {
            Authorization:
              "Bearer pat3vTotU6pMKB49f.2f3cd894e728c2c7c2c3656b056fc3cf5381ebbe04fa33c870ac7f7700ab59d2",
          },
        }
      );
      const data = await response.json();
      if (data.records.length > 0) {
        const sortedRecords = data.records
          .map((record) => record.fields)
          .sort((a, b) => {
            const aNum = parseInt(a["OrderID(elec)"].split("-")[1]);
            const bNum = parseInt(b["OrderID(elec)"].split("-")[1]);
            return aNum - bNum;
          });
        setElectricOrderData(sortedRecords);
      } else {
        setElectricOrderData([]);
      }
    } catch (error) {
      console.error("Error fetching electric order data:", error);
    }
  };

  const fetchAVOrderData = async () => {
    if (!username) return;
    try {
      const response = await fetch(
        `https://api.airtable.com/v0/appVADkxTuwcN78c6/AV%20component?filterByFormula={Username}="${username}"`,
        {
          headers: {
            Authorization:
              "Bearer pat3vTotU6pMKB49f.2f3cd894e728c2c7c2c3656b056fc3cf5381ebbe04fa33c870ac7f7700ab59d2",
          },
        }
      );
      const data = await response.json();
      if (data.records.length > 0) {
        const sortedRecords = data.records
          .map((record) => record.fields)
          .sort((a, b) => {
            const aNum = parseInt(a["OrderID(av)"].split("-")[1]);
            const bNum = parseInt(b["OrderID(av)"].split("-")[1]);
            return aNum - bNum;
          });
        setAVOrderData(sortedRecords);
      } else {
        setAVOrderData([]);
      }
    } catch (error) {
      console.error("Error fetching a/v order data:", error);
    }
  };

  const fetchBadgeData = async () => {
    if (!username) return;
    try {
      const response = await fetch(
        `https://api.airtable.com/v0/appVADkxTuwcN78c6/Exhibitor%20Badge?filterByFormula={Username}="${username}"`,
        {
          headers: {
            Authorization:
              "Bearer pat3vTotU6pMKB49f.2f3cd894e728c2c7c2c3656b056fc3cf5381ebbe04fa33c870ac7f7700ab59d2",
          },
        }
      );
      const data = await response.json();
      if (data.records.length > 0) {
        const sortedRecords = data.records
          .map((record) => record.fields)
          .sort((a, b) => {
            const aNum = parseInt(a["BadgeID"].split("-")[1]);
            const bNum = parseInt(b["BadgeID"].split("-")[1]);
            return aNum - bNum;
          });
        setBadgeData(sortedRecords);
      } else {
        setBadgeData([]);
      }
    } catch (error) {
      console.error("Error fetching badge order data:", error);
    }
  };

  const fetchVisaOrderData = async () => {
    if (!username) return;
    try {
      const response = await fetch(
        `https://api.airtable.com/v0/appVADkxTuwcN78c6/Visa%20Invitation?filterByFormula={Username}="${username}"`,
        {
          headers: {
            Authorization:
              "Bearer pat3vTotU6pMKB49f.2f3cd894e728c2c7c2c3656b056fc3cf5381ebbe04fa33c870ac7f7700ab59d2",
          },
        }
      );
      const data = await response.json();
      if (data.records.length > 0) {
        const sortedRecords = data.records.map((record) => record.fields);
        setVisaData(sortedRecords);
      } else {
        setVisaData([]);
      }
    } catch (error) {
      console.error("Error fetching visa invitation order data:", error);
    }
  };

  useEffect(() => {
    if (selectedOrderHistoryItem === "furniture") {
      fetchFurnitureOrderData();
      const timerFur = setTimeout(() => {
        setLoadingFur(false);
      }, 1000);
      return () => clearTimeout(timerFur);
    } else if (selectedOrderHistoryItem === "electric") {
      fetchElectricOrderData();
      const timerElec = setTimeout(() => {
        setLoadingElec(false);
      }, 1000);
      return () => clearTimeout(timerElec);
    } else if (selectedOrderHistoryItem === "av") {
      fetchAVOrderData();
      const timerAV = setTimeout(() => {
        setLoadingAV(false);
      }, 1000);
      return () => clearTimeout(timerAV);
    } else if (selectedOrderHistoryItem === "exhibitorBadge") {
      fetchBadgeData();
      const timerBadge = setTimeout(() => {
        setLoadingBadge(false);
      }, 1000);
      return () => clearTimeout(timerBadge);
    } else if (selectedOrderHistoryItem === "advertise") {
      fetchAdvertiseOrderData();
      const timerAdver = setTimeout(() => {
        setLoadingAdvertise(false);
      }, 1000);
      return () => clearTimeout(timerAdver);
    } else if (selectedOrderHistoryItem === "boothassistant") {
      fetchBoothAsOrderData();
      const timerBooth = setTimeout(() => {
        setLoadingBoothAs(false);
      }, 1000);
      return () => clearTimeout(timerBooth);
    } else if (selectedOrderHistoryItem === "visa") {
      fetchVisaOrderData();
      const timerVisa = setTimeout(() => {
        setLoadingVisa(false);
      }, 1000);
      return () => clearTimeout(timerVisa);
    }
  }, [selectedOrderHistoryItem, username]);

  const openJotForm = (formKey) => {
    console.log("User Record:", userRecord);
    console.log("Selected Form:", formKey);
    console.log("Form URL:", userRecord ? userRecord[formKey] : null);
    setSelectedForm(formKey);
    setIsOrderHistoryExpanded(false);
    setSelectedOrderHistoryItem(null);
    setLoadingForm(true);
    // Set a 3-second delay before setting loadingForm to false
    setTimeout(() => setLoadingForm(false), 2000);
  };

  const renderFormContent = () => {
    const selectedFormItem = formList.find((item) => item.key === selectedForm);
    const formLabel = selectedFormItem ? selectedFormItem.label : "form";

    if (loadingForm) {
      return (
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
              Loading {formLabel} data...
            </span>
          </div>
        </div>
      );
    }
    if (selectedForm && userRecord && userRecord[selectedForm]) {
      return (
        <iframe
          src={userRecord[selectedForm]}
          width="100%"
          height="800px"
          allowFullScreen
        ></iframe>
      );
    }
    return (
      <div>
        Please select a form from the sidebar or view your order history.
      </div>
    );
  };

  const toggleOrderHistory = () => {
    setIsOrderHistoryExpanded(!isOrderHistoryExpanded);
    if (!isOrderHistoryExpanded) {
      setSelectedOrderHistoryItem("exhibitorBadge");
      setSelectedForm(null);
      setLoadingBadge(true);
      fetchBadgeData();
    } else {
      setSelectedOrderHistoryItem(null);
    }
  };

  const handleOrderHistoryItemClick = (item) => {
    setSelectedOrderHistoryItem(item);
    setLoadingFur(true);
    setLoadingElec(true);
    setLoadingAV(true);
    setLoadingBadge(true);
    setSelectedForm(null); // Ensure form is not selected when viewing order history items
  };

  const formList = [
    { key: "r4 service(ExhibitorBadge)", label: "Form 1: Exhibitor badge" },
    {
      key: "r5 service(Additionallogo)",
      label: "Form 2: Advertisement (media PR)",
    },
    { key: "r6 service(Form 3)", label: "Form 3: Booth assistant" },
    { key: "r1 service(Furniture)", label: "Form 4: Furniture & carpet" },
    { key: "r2 service(Electric)", label: "Form 5: Electrical items" },
    { key: "r3 service(A/V&Computer)", label: "Form 6: A/V equipment" },
    { key: "r7 service(VISA)", label: "Form 7: Visa invitation letter" },
  ];

  const orderHistoryItems = [
    { key: "exhibitorBadge", label: "Exhibitor Badge" },
    { key: "advertise", label: "Advertisement" },
    { key: "boothassistant", label: "Booth Assistant" },
    { key: "furniture", label: "Furniture Order" },
    { key: "electric", label: "Electric Order" },
    { key: "av", label: "A/V Order" },
    { key: "visa", label: "Visa Invitation" },
  ];

  const excludeFields = {
    exhibitorBadge: [
      "approve",
      "Booth No.",
      "booth for approve",
      "Submission Date",
      "Organize Name",
      "Organization's Email",
      "Tel",
      "Email",
      "Username",
      "num",
      "BadgeID",
      
    ],
    furniture: [
      "num",
      "Approve Exhibitors",
      "Booth No.",
      "Booth no for approve",
      "Submission Date",
      "Table Subtotal(THB)",
      "Chair Subtotal(THB)",
      "System Subtotal(THB)",
      "Octanorm Subtotal(THB)",
      "Organize Name",
      "Street Address",
      "Street Address Line 2",
      "City",
      "State / Province",
      "Postal / Zip Code",
      "TAX ID",
      "Tel",
      "Contact name",
      "Email",
      "Contact name",
      "Username",
      "OrderID(fur)",
      "Approve Exhibitors 2",
    ],
    electric: [
      "num",
      "Approve Exhibitors",
      "Booth",
      "Booth no for approve",
      "Submission Date",
      "Table Subtotal(THB)",
      "Chair Subtotal(THB)",
      "System Subtotal(THB)",
      "Octanorm Subtotal(THB)",
      "Organize Name",
      "Street Address",
      "Street Address Line 2",
      "City",
      "State / Province",
      "Postal / Zip Code",
      "TAX ID",
      "Tel",
      "Contact name",
      "Email",
      "Contact name",
      "Username",
      "OrderID(elec)",
      "section A subtotal(Hide)",
      "section B subtotal(Hide)",
      "section C subtotal(Hide)",
      "Please upload your utility point",
    ],
    av: [
      "num",
      "Approve Exhibitors",
      "Booth No.",
      "Booth No. for approve",
      "Submission Date",
      "Table Subtotal(THB)",
      "Chair Subtotal(THB)",
      "System Subtotal(THB)",
      "Octanorm Subtotal(THB)",
      "Organize Name",
      "Street Address",
      "Street Address Line 2",
      "City",
      "State / Province",
      "Postal / Zip Code",
      "TAX ID",
      "Tel",
      "Contact name",
      "Email",
      "Contact name",
      "Username",
      "OrderID(av)",
    ],
    advertise: [
      "approve",
      "Booth No.",
      "Booth No. for approve",
      "Submission Date",
      "Table Subtotal(THB)",
      "Chair Subtotal(THB)",
      "System Subtotal(THB)",
      "Octanorm Subtotal(THB)",
      "Organization Name",
      "Street Address",
      "Street Address Line 2",
      "City",
      "State / Province",
      "Postal / Zip Code",
      "TAX ID",
      "Tel",
      "Contact name",
      "Email",
      "Contact name",
      "Username",
    ],
    boothassistant: [
      "approve",
      "Booth No.",
      "Booth No. for approve",
      "Submission Date",
      "Table Subtotal(THB)",
      "Chair Subtotal(THB)",
      "System Subtotal(THB)",
      "Octanorm Subtotal(THB)",
      "Organization Name",
      "Street Address",
      "Street Address Line 2",
      "City",
      "State / Province",
      "Postal / Zip Code",
      "TAX ID",
      "Tel",
      "Contact name",
      "Email",
      "Contact name",
      "Username",
    ],
    visa: [
      "approve",
      "Booth No.",
      "Booth No. for approve",
      "Submission Date",
      "Table Subtotal(THB)",
      "Chair Subtotal(THB)",
      "System Subtotal(THB)",
      "Octanorm Subtotal(THB)",
      "Organization Name",
      "Street Address",
      "Street Address Line 2",
      "City",
      "State / Province",
      "Postal / Zip Code",
      "TAX ID",
      "Tel",
      "Contact name",
      "Email",
      "Contact name",
      "Username",
      "Approve Exhibitors",
    ],
  };

  const renderOrderHistoryTable = (data, excludedFields) => {
    if (data.length === 0) {
      return <p>No data available.</p>;
    }

    // Special handling for exhibitorBadge
    if (selectedOrderHistoryItem === "exhibitorBadge") {
      const groupedData = data.map((item) => {
        const groups = [];
        for (let i = 0; i <= 10; i++) {
          const suffix = i === 0 ? "" : i;
          const fullName = `${item[`First Name${suffix}`] || ""} ${
            item[`Last Name${suffix}`] || ""
          }`.trim();
          if (fullName) {
            groups.push({
              Name: fullName,
              Email: item[`Email${suffix}`] || "",
              Food: Array.isArray(item[`food${suffix}`])
                ? item[`food${suffix}`].join(", ")
                : item[`food${suffix}`] || "",
              // Action: "edit",
            });
          }
        }
        return groups;
      });

      const totalBadges = groupedData.flat().length;
      const numofbadge = data[0]?.NumofBadge || "N/A";
      const urlofbadge = data[0]?.EditedBadge || "N/A";
      const OrgName = data[0]?.["Organize Name"] || "N/A";
      const country = data[0]?.Country || "N/A";

      // Get all unique keys from the grouped data
      // const allKeys = ["Name", "Email", "Food", "Action"];

      const allKeys = ["Name", "Email", "Food"];

      return (
        <div className="space-y-3">
          <div className="leading-9">
            <div className="flex flex-wrap text-center items-baseline">
              <h3 className="font-semibold text-3xl mr-3">{OrgName}</h3>
              <h3 className="text-gray-400 text-lg">{country}</h3>
            </div>
            <hr className="mt-2 border-gray-300"></hr>
            <div className="flex flex-wrap text-center items-baseline">
              <h3 className="font-medium text-md">
                Total Badge: {totalBadges} (Free Quota {numofbadge} Badges)
              </h3>
              <p className="font-bold text-red-500 text-sm">
                &nbsp;Remark: You can purchase more badge at 107
                THB/Badge(Include VAT).
              </p>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-white border border-gray-300 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 text-left font-semibold">
                    #
                  </th>
                  {allKeys.map((key) => (
                    <th key={key} className="py-2 px-4 text-left font-semibold">
                      {key}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {groupedData.flat().map((person, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
                  >
                    <td className="py-2 px-4 text-sm">{index + 1}</td>
                    {allKeys.map((key) => (
                      <td key={key} className="py-2 px-4 text-sm">
                        {key === "Action" ? (
                          <a
                            href={urlofbadge}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <button className="bg-[#2093EF] hover:bg-blue-600 text-white font-semibold py-2 px-2 rounded-md flex items-center justify-center text-sm">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-4 h-4"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                                />
                              </svg>
                              &nbsp;Edit
                            </button>
                          </a>
                        ) : (
                          person[key] || "-"
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }

    // For other order history items, keep the existing logic
    const allFields = [...new Set(data.flatMap((item) => Object.keys(item)))];
    const fields = allFields.filter((field) => !excludedFields.includes(field));

    const renderTable = (item, index) => {
      const nonEmptyFields = fields.filter(
        (field) => item[field] && item[field] !== "-"
      );

      if (nonEmptyFields.length === 0) {
        return null;
      }

      return (
        <div key={index} className="mb-8">
          <h3 className="text-lg font-semibold mb-2">Data {index + 1}</h3>
          <table className="w-full bg-white border border-gray-300 rounded-lg overflow-hidden">
            <tbody>
              {nonEmptyFields.map((field, fieldIndex) => (
                <tr
                  key={field}
                  className={
                    fieldIndex === nonEmptyFields.length - 1 ? "" : "border-b"
                  }
                >
                  <th className="py-2 px-4 text-left bg-gray-100 w-1/3">
                    {field}
                  </th>
                  <td className="py-2 px-4 w-2/3">{item[field]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    };

    return (
      <div className="space-y-8">
        {data.map((item, index) => renderTable(item, index)).filter(Boolean)}
      </div>
    );
  };

  const renderOrderHistoryContent = () => {
    switch (selectedOrderHistoryItem) {
      case "exhibitorBadge":
        return loadingBadge ? (
          <div className="w-full">Loading Exhibitor Badge data...</div>
        ) : (
          renderOrderHistoryTable(badgeData, excludeFields.exhibitorBadge)
        );
      case "furniture":
        return loadingFur ? (
          <div className="w-full">Loading Furniture Order data...</div>
        ) : (
          renderOrderHistoryTable(furnitureOrderData, excludeFields.furniture)
        );
      case "electric":
        return loadingElec ? (
          <div className="w-full">Loading Electric Order data...</div>
        ) : (
          renderOrderHistoryTable(electricOrderData, excludeFields.electric)
        );
      case "av":
        return loadingAV ? (
          <div className="w-full">Loading A/V Order data...</div>
        ) : (
          renderOrderHistoryTable(avOrderData, excludeFields.av)
        );
      case "advertise":
        return loadingAdvertise ? (
          <div className="w-full">Loading Advertise Order data...</div>
        ) : (
          renderOrderHistoryTable(AdvertiseData, excludeFields.advertise)
        );
      case "boothassistant":
        return loadingBoothAs ? (
          <div className="w-full">Loading Booth Assistant Order data...</div>
        ) : (
          renderOrderHistoryTable(BoothAsData, excludeFields.boothassistant)
        );
      case "visa":
        return loadingVisa ? (
          <div className="w-full">Loading visa Order data...</div>
        ) : (
          renderOrderHistoryTable(VisaData, excludeFields.visa)
        );
      default:
        return (
          <div className="w-full">
            Select an order history item to view details.
          </div>
        );
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex">
        <div className="w-1/4 p-4 bg-white">
          <ul>
            {formList.map(({ key, label }, index) => (
              <React.Fragment key={key}>
                <li className="mb-2">
                  <button
                    className={`border-2 border-slate-300 text-black hover:text-black w-full py-2 px-4 rounded-full focus:outline-none transition duration-300 ease-in-out text-left font-bold ${
                      selectedForm === key
                        ? "bg-blue-700 text-white shadow-lg"
                        : "bg-white text-black"
                    }`}
                    onClick={() => openJotForm(key)}
                  >
                    {label}
                  </button>
                </li>
                {index === 6 && (
                  <hr className="my-4 border-t border-gray-300" />
                )}
              </React.Fragment>
            ))}
            <li className="mb-2">
              <button
                className={`border-2 border-slate-300 text-black hover:text-black w-full py-2 px-4 rounded-full focus:outline-none transition duration-300 ease-in-out text-left font-bold ${
                  isOrderHistoryExpanded
                    ? "bg-red-500 text-white shadow-lg"
                    : "bg-white text-black"
                }`}
                onClick={toggleOrderHistory}
              >
                Order History
              </button>
            </li>
            {isOrderHistoryExpanded && (
              <>
                {orderHistoryItems.map(({ key, label }) => (
                  <li key={key} className="mb-2 ml-4">
                    <button
                      className={`border-2 border-slate-300 text-black hover:text-black w-full py-2 px-4 rounded-full focus:outline-none transition duration-300 ease-in-out text-left font-bold ${
                        selectedOrderHistoryItem === key
                          ? "bg-red-500 text-white shadow-lg"
                          : "bg-white text-black"
                      }`}
                      onClick={() => handleOrderHistoryItemClick(key)}
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </>
            )}
          </ul>
        </div>

        <div className="w-3/4 p-4">
          {/* <div className="flex-1 p-4 overflow-x-auto"> */}
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
          ) : isOrderHistoryExpanded ? (
            <div className="w-full overflow-x-auto">
              {/* <div className="inline-block min-w-full"> */}
              {renderOrderHistoryContent()}
            </div>
          ) : (
            renderFormContent()
          )}
        </div>
      </div>
    </div>
  );
}

export default Order;
