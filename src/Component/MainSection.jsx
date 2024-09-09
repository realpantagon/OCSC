import React, { useState, useEffect } from "react";

const MainSection = ({ userRecord, openItem }) => {
  const [formData, setFormData] = useState({
    ...userRecord.fields,
    "Organization highlight (for PR purpose)":
      userRecord.fields["Organization highlight (for PR purpose)"],
    Logo: userRecord.fields["LogoURL"],
    Uploadlogo: userRecord.fields["Upload Logo"],
  });
  const [originalFormData, setOriginalFormData] = useState({
    ...userRecord.fields,
    "Organization highlight (for PR purpose)":
      userRecord.fields["Organization highlight (for PR purpose)"],
  });
  const [additionalInfo, setAdditionalInfo] = useState(
    userRecord.fields["Organization highlight (for PR purpose)"]
  );
  const [isEditing, setIsEditing] = useState(false);
  const [changedFields, setChangedFields] = useState({});
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [showLogoUploadPopup, setShowLogoUploadPopup] = useState(false);
  const [showRequiredFieldsPopup, setShowRequiredFieldsPopup] = useState(false);
  const [requiredFieldsMessage, setRequiredFieldsMessage] = useState("");
  const [username, setUsername] = useState("");
  const [furnitureOrderData, setFurnitureOrderData] = useState([]);
  const [electricOrderData, setElectricOrderData] = useState([]);
  const [avOrderData, setAVOrderData] = useState([]);
  const [BadgeData, setBadgeData] = useState([]);

  useEffect(() => {
    const storedUsername = localStorage.getItem("ocscusername");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  // Define the fields you want to Not showing
  const ExceptFieldsfur = [
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
  ];

  // Define the fields you want to Not showing
  const ExceptFieldselec = [
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
  ];

  // Define the fields you want to Not showing
  const ExceptFieldsav = [
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
  ];

  // Define the fields you want to Not showing
  const ExceptFieldsBadge = [
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
  ];

  useEffect(() => {
    if (openItem === "orderHistory-furOrder") {
      fetchFurnitureOrderData();
    } else if (openItem === "orderHistory-elecOrder") {
      fetchElectricOrderData();
    } else if (openItem === "orderHistory-avOrder") {
      fetchAVOrderData();
    } else if (openItem === "orderHistory-Badge") {
      fetchBadgeData();
    }
  }, [openItem, userRecord.fields]);

  //fetch furniture table
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

  //fetch electric table
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

  //fetch A/V table
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
            // Extract the numeric part from the OrderID(fur) field
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
            // Extract the numeric part from the OrderID(fur) field
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

  const openJotForm = (formType) => {
    if (formType === "Upload Logo") {
      setShowLogoUploadPopup(true);
    }
  };

  const closeLogoUploadPopup = () => {
    setShowLogoUploadPopup(false);
  };

  const sections = {
    "exhibitorProfile-generalInfo": [
      // ["Logo", "LogoURL (from Booth No. for edit)"],
      ["Organization Name", "Organization Name (from Booth No. for edit)"],
      ["Street Address", "Street Address (from Booth No. for edit)"],
      [
        "Street Address Line 2",
        "Street Address Line 2 (from Booth No. for edit)",
      ],
      ["City", "City (from Booth No. for edit)"],
      ["State / Province", "State / Province (from Booth No. for edit)"],
      ["Postal / Zip Code", "Postal / Zip Code (from Booth No. for edit)"],
      ["Country", "Country (from Booth No. for edit)"],
    ],

    "exhibitorProfile-levelOfStudies": [
      [
        "Level of Studies Offered",
        "Level of Studies Offered (from Booth No. for edit)",
      ],
    ],
    "exhibitorProfile-shortcourse": [
      ["Subject", "Subject (from Booth No. for edit)"],
      ["Period", "Period (from Booth No. for edit)"],
      ["Description", "Description (from Booth No. for edit)"],
      ["Value", "Value (from Booth No. for edit)"],
    ],
    "exhibitorProfile-topMajors": [],
    "exhibitorProfile-promotion": [
      ["Promotion Detail", "Promotion Detail (from Booth No. for edit)"],
      ["Promotion Detail 2", "Promotion Detail 2 (from Booth No. for edit)"],
      ["Promotion Detail 3", "Promotion Detail 3 (from Booth No. for edit)"],
    ],

    billingInfo: [
      ["Organization Name", "Organization Name 2 (from Booth No. for edit)"],
      ["Street Address", "Street Address 2 (from Booth No. for edit)"],
      [
        "Street Address Line 2",
        "Street Address Line 2 2 (from Booth No. for edit)",
      ],
      ["City", "City 2 (from Booth No. for edit)"],
      ["State / Province", "State / Province 2 (from Booth No. for edit)"],
      ["Postal / Zip Code", "Postal / Zip Code 2 (from Booth No. for edit)"],
      ["Country", "Country 2 (from Booth No. for edit)"],
    ],
  };

  const scholarshipFields = [
    [
      ["Scholarship Title", "Scholarship Title (from Booth No. for edit)"],
      ["Scholarship Value", "Scholarship Value (from Booth No. for edit)"],
      [
        "Scholarship Criteria",
        "Scholarship Criteria (from Booth No. for edit)",
      ],
    ],
    [
      ["Scholarship Title 2", "Scholarship Title 2 (from Booth No. for edit)"],
      ["Scholarship Value 2", "Scholarship Value 2 (from Booth No. for edit)"],
      [
        "Scholarship Criteria 2",
        "Scholarship Criteria 2 (from Booth No. for edit)",
      ],
    ],
    [
      ["Scholarship Title 3", "Scholarship Title 3 (from Booth No. for edit)"],
      ["Scholarship Value 3", "Scholarship Value 3 (from Booth No. for edit)"],
      [
        "Scholarship Criteria 3",
        "Scholarship Criteria 3 (from Booth No. for edit)",
      ],
    ],
    [
      ["Scholarship Title 4", "Scholarship Title 4 (from Booth No. for edit)"],
      ["Scholarship Value 4", "Scholarship Value 4 (from Booth No. for edit)"],
      [
        "Scholarship Criteria 4",
        "Scholarship Criteria 4 (from Booth No. for edit)",
      ],
    ],
    [
      ["Scholarship Title 5", "Scholarship Title 5 (from Booth No. for edit)"],
      ["Scholarship Value 5", "Scholarship Value 5 (from Booth No. for edit)"],
      [
        "Scholarship Criteria 5",
        "Scholarship Criteria 5 (from Booth No. for edit)",
      ],
    ],
    [
      [
        "Other Scholarship",
        "else Scholarship(more than 5) (from Booth No. for edit)",
      ],
    ],
  ];

  const contactPersonFields = [
    ["First Name", "First Name (from Booth No. for edit)"],
    ["Last Name", "Last Name (from Booth No. for edit)"],
    ["Position", "Position (from Booth No. for edit)"],
    ["Email", "Email (from Booth No. for edit)"],
    ["Phone Number", "Phone Number (from Booth No. for edit)"],
    ["First Name2", "First Name2 (from Booth No. for edit)"],
    ["Last Name2", "Last Name2 (from Booth No. for edit)"],
    ["Position2", "Position2 (from Booth No. for edit)"],
    ["Email2", "Email2 (from Booth No. for edit)"],
    ["Phone Number2", "Phone Number2 (from Booth No. for edit)"],
    ["First Name3", "First Name3 (from Booth No. for edit)"],
    ["Last Name3", "Last Name3 (from Booth No. for edit)"],
    ["Position3", "Position3 (from Booth No. for edit)"],
    ["Email3", "Email3 (from Booth No. for edit)"],
    ["Phone Number3", "Phone Number3 (from Booth No. for edit)"],
  ];

  const exhibitorSpaceFields = [
    [
      "Total Booths Required",
      "Total Booths Required (from Booth No. for edit)",
    ],
    ["Booth", "Booth"],
    [
      "Institution Name on Booth Fascia",
      "Institution name to be put on booth fascia (from Booth No. for edit)",
    ],
    [
      "National Flag on Booth & Media for PR",
      "National flag on booth & Media for PR (from Booth No. for edit)",
    ],
  ];

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files && files.length > 0) {
      // Handle file upload logic separately if needed
    } else if (name === "additionalInfo") {
      setAdditionalInfo(value);
      setChangedFields((prevChangedFields) => ({
        ...prevChangedFields,
        "Organization highlight (for PR purpose)": {
          oldValue: formData["Organization highlight (for PR purpose) "],
          newValue: value,
        },
      }));
    } else {
      setFormData({ ...formData, [name]: value });
      const fieldName = name.replace(" (from Booth No. for edit)", "");
      setChangedFields((prevChangedFields) => ({
        ...prevChangedFields,
        [fieldName]: {
          oldValue: formData[name],
          newValue: value,
        },
      }));
    }
  };

  const handleUpdateField = (fields) => {
    console.log("Fields to update:", fields);
    const recordId = localStorage.getItem("ocscrecordid");
    const updateData = {
      records: [
        {
          id: recordId,
          fields: Object.fromEntries(
            Object.entries(fields).map(([field, { newValue }]) => [
              field,
              newValue,
            ])
          ),
        },
      ],
    };

    updateData.records[0].fields["Update"] = JSON.stringify(fields);

    fetch(
      "https://api.airtable.com/v0/appVADkxTuwcN78c6/%F0%9F%93%9AExhibitors",
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer pat3vTotU6pMKB49f.2f3cd894e728c2c7c2c3656b056fc3cf5381ebbe04fa33c870ac7f7700ab59d2",
        },
        body: JSON.stringify(updateData),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Record updated successfully:", data);
        setChangedFields({});
      })
      .catch((error) => {
        console.error("Error updating record:", error);
      });
  };

  const handleEdit = () => {
    setOriginalFormData(formData);
    setIsEditing(true);
  };

  const handleSave = () => {
    const requiredFields1 = [
      "Organization highlight (for PR purpose) (from Booth No. for edit)",
    ];

    const requiredFields2 = [
      "Subject (from Booth No. for edit)",
      "Period (from Booth No. for edit)",
      "Description (from Booth No. for edit)",
      "Value (from Booth No. for edit)",
    ];

    for (const field of requiredFields1) {
      if (!formData[field]) {
        const fieldName = field.replace(" (from Booth No. for edit)", "");
        setRequiredFieldsMessage(
          `Missing ${fieldName} in General Information.`
        );
        setShowRequiredFieldsPopup(true);
        return;
      }
    }

    for (const field of requiredFields2) {
      if (!formData[field]) {
        const fieldName = field.replace(" (from Booth No. for edit)", "");
        setRequiredFieldsMessage(`Missing ${fieldName} field in Short Course.`);
        setShowRequiredFieldsPopup(true);
        return;
      }
    }

    console.log("Changed fields:");
    Object.entries(changedFields).forEach(([field, { oldValue, newValue }]) => {
      console.log(`${field}: ${oldValue} → ${newValue}`);
    });
    setShowConfirmDialog(true);
  };

  const handleConfirmSave = () => {
    setIsEditing(false);
    handleUpdateField(changedFields);
    setShowConfirmDialog(false);
  };

  const handleCancelSave = () => {
    setShowConfirmDialog(false);
    setIsEditing(false);
    setFormData(originalFormData);
    setAdditionalInfo(
      originalFormData["Organization highlight (for PR purpose)"]
    );
    setChangedFields({});
  };

  const RequiredFieldsPopup = ({ message, onClose }) => (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  **Please enter your detail**
                </h3>
                <div className="mt-2">
                  <p className="text-sm leading-5 text-gray-500">{message}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
              <button
                onClick={onClose}
                type="button"
                className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-blue-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
              >
                OK
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex-1 p-6">
      {openItem in sections && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            {openItem
              .replace(/([A-Z])/g, " $1")
              .replace(/^./, (str) => str.toUpperCase())}
          </h2>
          {openItem === "exhibitorProfile-generalInfo" && (
            <>
              {isEditing ? (
                <input
                  type="text"
                  name="Logo"
                  value={formData["Logo"] || ""}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                />
              ) : (
                <div className="flex flex-col items-center mb-4">
                  {formData["Logo"] ? (
                    <img
                      src={formData["Logo"]}
                      alt="Logo"
                      className="w-44 h-44 object-contain rounded-md mb-2"
                    />
                  ) : (
                    <div className="w-44 h-44 border-2 border-white bg-gray-300 rounded-md mb-2"></div>
                  )}
                  <button
                    onClick={() => openJotForm("Upload Logo")}
                    className="px-4 py-2 font-semibold text-white bg-green-500 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
                  >
                    Upload Logo
                  </button>
                </div>
              )}
            </>
          )}

          {showLogoUploadPopup && (
            <div className="fixed z-10 inset-0 overflow-y-auto">
              <div className="flex items-center justify-center min-h-screen p-4">
                <div className="fixed inset-0 transition-opacity">
                  <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-3xl sm:w-full">
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                        <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                          Upload Logo
                        </h3>
                        <div className="mt-2">
                          <p className="text-sm text-red-600 mb-4">
                            **Please note: After uploading your logo, kindly
                            allow a moment for processing and refresh the page
                            to view the updated logo.**
                          </p>
                          <iframe
                            src={formData["Uploadlogo"]}
                            title="Logo Upload Form"
                            width="100%"
                            height="500px"
                            frameBorder="0"
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button
                      onClick={closeLogoUploadPopup}
                      type="button"
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {openItem !== "exhibitorProfile-topMajors" && (
            <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-4 font-medium text-gray-900"
                  >
                    Field
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 font-medium text-gray-900"
                  >
                    Value
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                {sections[openItem].map(([label, field], index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      {label}
                      {(openItem === "exhibitorProfile-shortcourse" ||
                        (openItem === "exhibitorProfile-generalInfo" &&
                          label ===
                            "Organization highlight (for PR purpose)")) && (
                        <span className="text-red-600 ml-1">*</span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      {isEditing ? (
                        <input
                          type="text"
                          name={field}
                          value={formData[field] || ""}
                          onChange={handleChange}
                          className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                          required={
                            openItem === "exhibitorProfile-shortcourse" ||
                            (openItem === "exhibitorProfile-generalInfo" &&
                              label ===
                                "Organization highlight (for PR purpose)")
                          }
                        />
                      ) : (
                        formData[field] || "-"
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {openItem === "exhibitorProfile-generalInfo" && (
            <div className="mt-6">
              <div className="flex">
                <label
                  htmlFor="additionalInfo"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Organization highlight (for PR purpose)
                </label>
                <p className="text-red-600 ml-2 font-bold">*</p>
              </div>
              {isEditing ? (
                <textarea
                  id="additionalInfo"
                  name="Organization highlight (for PR purpose) (from Booth No. for edit)"
                  rows={4}
                  maxLength={400}
                  value={
                    formData[
                      "Organization highlight (for PR purpose) (from Booth No. for edit)"
                    ]
                  }
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 resize-none"
                  placeholder="Enter additional information (max 400 characters)"
                  required
                ></textarea>
              ) : (
                <textarea
                  id="additionalInfo"
                  name="Organization highlight (for PR purpose) (from Booth No. for edit)"
                  rows={4}
                  maxLength={400}
                  value={
                    formData[
                      "Organization highlight (for PR purpose) (from Booth No. for edit)"
                    ]
                  }
                  className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none resize-none"
                  placeholder="Enter additional information (max 400 characters)"
                  readOnly
                  disabled
                ></textarea>
              )}
            </div>
          )}

          {openItem === "exhibitorProfile-topMajors" && (
            <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-4 font-medium text-gray-900"
                  >
                    Major
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                {[...Array(10)].map((_, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <span className="mr-2">{index + 1}.</span>
                        {isEditing ? (
                          <input
                            type="text"
                            name={`Famous #${
                              index + 1
                            } (from Booth No. for edit)`}
                            value={
                              formData[
                                `Famous #${index + 1} (from Booth No. for edit)`
                              ] || ""
                            }
                            onChange={handleChange}
                            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                          />
                        ) : (
                          formData[
                            `Famous #${index + 1} (from Booth No. for edit)`
                          ] || "-"
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          <div className="mt-6">
            {isEditing ? (
              <>
                <button
                  onClick={handleSave}
                  className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 mr-2"
                >
                  Save
                </button>
                <button
                  onClick={handleCancelSave}
                  className="px-4 py-2 font-semibold text-white bg-red-500 rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                onClick={handleEdit}
                className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
              >
                Edit
              </button>
            )}
          </div>
        </div>
      )}
      {openItem === "exhibitorProfile-scholarship" && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Scholarships</h2>
          <div className="space-y-8">
            {scholarshipFields.map((scholarshipGroup, groupIndex) => (
              <div key={groupIndex}>
                <h3 className="text-xl font-semibold mb-2">
                  {groupIndex === scholarshipFields.length - 1
                    ? "Other Scholarship"
                    : `Scholarship ${groupIndex + 1}`}
                </h3>
                <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-4 font-medium text-gray-900 w-1/2"
                      >
                        Field
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 font-medium text-gray-900 w-1/2"
                      >
                        Value
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                    {scholarshipGroup.map(([label, field], fieldIndex) => (
                      <tr key={fieldIndex} className="hover:bg-gray-50">
                        <td className="px-6 py-4 w-1/2">
                          {groupIndex === scholarshipFields.length - 1
                            ? "Other Scholarship"
                            : label}
                        </td>
                        <td className="px-6 py-4 w-1/2">
                          {isEditing ? (
                            <input
                              type="text"
                              name={field}
                              value={formData[field] || ""}
                              onChange={handleChange}
                              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                            />
                          ) : (
                            formData[field] || "-"
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
            <div className="mt-6">
              {isEditing ? (
                <>
                  <button
                    onClick={handleSave}
                    className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 mr-2"
                  >
                    Save
                  </button>
                  <button
                    onClick={handleCancelSave}
                    className="px-4 py-2 font-semibold text-white bg-red-500 rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <button
                  onClick={handleEdit}
                  className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                >
                  Edit
                </button>
              )}
            </div>
          </div>
        </div>
      )}
      {openItem === "exhibitorProfile-contactPerson" && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact Persons</h2>
          <div className="space-y-8">
            {contactPersonFields
              .reduce((result, _, index) => {
                if (index % 5 === 0) {
                  result.push(contactPersonFields.slice(index, index + 5));
                }
                return result;
              }, [])
              .map((personFields, personIndex) => (
                <div key={personIndex}>
                  <h3 className="text-xl font-semibold mb-2">{`Person ${
                    personIndex + 1
                  }`}</h3>
                  <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-4 font-medium text-gray-900"
                        >
                          Field
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 font-medium text-gray-900"
                        >
                          Value
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                      {personFields.map(([label, field], fieldIndex) => (
                        <tr key={fieldIndex} className="hover:bg-gray-50">
                          <td className="px-6 py-4">{label}</td>
                          <td className="px-6 py-4">
                            {isEditing ? (
                              <input
                                type="text"
                                name={field}
                                value={formData[field] || ""}
                                onChange={handleChange}
                                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                              />
                            ) : (
                              formData[field] || "-"
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
          </div>
          <div className="mt-6">
            {isEditing ? (
              <>
                <button
                  onClick={handleSave}
                  className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 mr-2"
                >
                  Save
                </button>
                <button
                  onClick={handleCancelSave}
                  className="px-4 py-2 font-semibold text-white bg-red-500 rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                onClick={handleEdit}
                className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
              >
                Edit
              </button>
            )}
          </div>
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
              {exhibitorSpaceFields.map(([label, field], index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    {label}{" "}
                    {label === "Institution Name on Booth Fascia" && (
                      <p className="text-red-500 text-xs mt-1">
                        (any revisions can be made until 15 September, after
                        deadline there is a fee THB1,070net)
                      </p>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div>{formData[field] || "-"}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {openItem === "orderHistory-furOrder" && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Furniture Orders</h2>
          {furnitureOrderData.length > 0 ? (
            furnitureOrderData.map((order, index) => (
              <div key={order["OrderID(fur)"]} className="mb-8">
                <h3 className="text-xl font-semibold mb-2">
                  Order ID: {order["OrderID(fur)"]}
                </h3>
                <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-4 font-medium text-gray-900"
                      >
                        Field
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 font-medium text-gray-900"
                      >
                        Value
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                    {Object.entries(order)
                      .filter(([key]) => !ExceptFieldsfur.includes(key))
                      .map(([key, value]) => (
                        <tr key={key} className="hover:bg-gray-50">
                          <td className="px-6 py-4">{key}</td>
                          <td className="px-6 py-4">{value}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            ))
          ) : (
            <p>No furniture order data found.</p>
          )}
        </div>
      )}
      {openItem === "orderHistory-elecOrder" && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Electric Orders</h2>
          {electricOrderData.length > 0 ? (
            electricOrderData.map((order, index) => (
              <div key={order["OrderID(elec)"]} className="mb-8">
                <h3 className="text-xl font-semibold mb-2">
                  Order ID: {order["OrderID(elec)"]}
                </h3>
                <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-4 font-medium text-gray-900"
                      >
                        Field
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 font-medium text-gray-900"
                      >
                        Value
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                    {Object.entries(order)
                      .filter(([key]) => !ExceptFieldselec.includes(key))
                      .map(([key, value]) => (
                        <tr key={key} className="hover:bg-gray-50">
                          <td className="px-6 py-4">{key}</td>
                          <td className="px-6 py-4">
                            {value}
                            {/* {typeof value === "object" && value !== null
                              ? JSON.stringify(value)
                              : value} */}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            ))
          ) : (
            <p>No electric order data found.</p>
          )}
        </div>
      )}
      {openItem === "orderHistory-avOrder" && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">A/V Orders</h2>
          {avOrderData.length > 0 ? (
            avOrderData.map((order, index) => (
              <div key={order["OrderID(av)"]} className="mb-8">
                <h3 className="text-xl font-semibold mb-2">
                  Order ID: {order["OrderID(av)"]}
                </h3>
                <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-4 font-medium text-gray-900"
                      >
                        Field
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 font-medium text-gray-900"
                      >
                        Value
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                    {Object.entries(order)
                      .filter(([key]) => !ExceptFieldsav.includes(key))
                      .map(([key, value]) => (
                        <tr key={key} className="hover:bg-gray-50">
                          <td className="px-6 py-4">{key}</td>
                          <td className="px-6 py-4">{value}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            ))
          ) : (
            <p>No a/v order data found.</p>
          )}
        </div>
      )}
      {openItem === "orderHistory-Badge" && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Badge</h2>
          {BadgeData.length > 0 ? (
            BadgeData.map((badge, index) => (
              <div key={badge["BadgeID"]} className="mb-8">
                <h3 className="text-xl font-semibold mb-2">
                  Badge Data: {index + 1}
                </h3>
                <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-4 font-medium text-gray-900"
                      >
                        Field
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 font-medium text-gray-900"
                      >
                        Value
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                    {Object.entries(badge)
                      .filter(([key]) => !ExceptFieldsBadge.includes(key))
                      .map(([key, value]) => (
                        <tr key={key} className="hover:bg-gray-50">
                          <td className="px-6 py-4">{key}</td>
                          <td className="px-6 py-4">{value}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            ))
          ) : (
            <p>No badge data found.</p>
          )}
        </div>
      )}
      {showConfirmDialog && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Confirm Changes
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm leading-5 text-gray-500">
                        The following changes will be saved:
                      </p>
                      <table className="mt-4 w-full text-sm leading-5 text-gray-700">
                        <thead>
                          <tr>
                            <th className="px-4 py-2 border-b font-medium text-gray-900">
                              Field
                            </th>
                            <th className="px-4 py-2 border-b font-medium text-gray-900">
                              Previous
                            </th>
                            <th className="px-4 py-2 border-b font-medium text-gray-900">
                              New
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {Object.entries(changedFields).map(
                            ([field, { oldValue, newValue }]) => (
                              <tr key={field}>
                                <td className="px-4 py-2 border-b font-semibold">
                                  {field}
                                </td>
                                <td className="px-4 py-2 border-b">
                                  <span className="text-gray-500">
                                    Previous:
                                  </span>{" "}
                                  {oldValue}
                                </td>
                                <td className="px-4 py-2 border-b">
                                  <span className="text-gray-500">New:</span>{" "}
                                  {newValue}
                                </td>
                              </tr>
                            )
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                  <button
                    onClick={handleConfirmSave}
                    type="button"
                    className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-blue-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                  >
                    Save
                  </button>
                </span>
                <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                  <button
                    onClick={handleCancelSave}
                    type="button"
                    className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                  >
                    Cancel
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {showRequiredFieldsPopup && (
        <RequiredFieldsPopup
          message={requiredFieldsMessage}
          onClose={() => setShowRequiredFieldsPopup(false)}
        />
      )}
    </div>
  );
};

export default MainSection;
