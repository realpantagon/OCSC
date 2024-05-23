import React, { useState } from "react";

const MainSection = ({ userRecord, openItem }) => {
  const [formData, setFormData] = useState(userRecord.fields);
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [changedFields, setChangedFields] = useState({});

  const sections = {
    "exhibitorProfile-generalInfo": [
      ["Organization Name", "Organization Name (from Booth No. for edit)"],
      ["Street Address", "Street Address (from Booth No. for edit)"],
      ["Street Address Line 2", "Street Address Line 2 (from Booth No. for edit)"],
      ["City", "City (from Booth No. for edit)"],
      ["State / Province", "State / Province (from Booth No. for edit)"],
      ["Postal / Zip Code", "Postal / Zip Code (from Booth No. for edit)"],
      ["Country", "Country (from Booth No. for edit)"],
    ],
    "exhibitorProfile-contactPerson": [
      ["Prefix", "Prefix (from Booth No. for edit)"],
      ["First Name", "First Name (from Booth No. for edit)"],
      ["Last Name", "Last Name (from Booth No. for edit)"],
      ["Position", "Position (from Booth No. for edit)"],
      ["Email", "Email (from Booth No. for edit)"],
      ["Phone Number", "Phone Number (from Booth No. for edit)"],
    ],
    "exhibitorProfile-levelOfStudies": [
      ["Level of Studies Offered", "Level of Studies Offered (from Booth No. for edit)"],
    ],
    "exhibitorProfile-topMajors": [],
    "exhibitorProfile-promotion": [
      ["Promotion Detail", "Promotion Detail (from Booth No. for edit)"],
    ],
    "exhibitorProfile-scholarship": [
      ["Scholarship", "Scholarship (from Booth No. for edit)"],
    ],
    exhibitorSpace: [
      ["Total Booths Required", "Total Booths Required (from Booth No. for edit)"],
      ["Institution Name on Booth Fascia", "Institution name to be put on booth fascia (from Booth No. for edit)"],
      ["National Flag on Booth & Media for PR", "National flag on booth & Media for PR (from Booth No. for edit)"],
    ],
    billingInfo: [
      ["Organization Name", "Organization Name 2 (from Booth No. for edit)"],
      ["Street Address", "Street Address 2 (from Booth No. for edit)"],
      ["Street Address Line 2", "Street Address Line 2 2 (from Booth No. for edit)"],
      ["City", "City 2 (from Booth No. for edit)"],
      ["State / Province", "State / Province 2 (from Booth No. for edit)"],
      ["Postal / Zip Code", "Postal / Zip Code 2 (from Booth No. for edit)"],
      ["Country", "Country 2 (from Booth No. for edit)"],
    ],
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    const fieldName = name.replace(" (from Booth No. for edit)", "");
    setChangedFields({ ...changedFields, [fieldName]: value });
  };

  const handleUpdateField = (fields) => {
    console.log("Fields to update:", fields);
    // Prepare the data to send an update API request to Airtable
    const recordId = localStorage.getItem("ocscrecordid");
    const updateData = {
      records: [
        {
          id: recordId,
          fields: fields,
        },
      ],
    };
    console.log("Update data:", updateData);
    // Send the update API request to Airtable using fetch
    fetch("https://api.airtable.com/v0/appVADkxTuwcN78c6/%F0%9F%93%9AExhibitors", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer pat3vTotU6pMKB49f.2f3cd894e728c2c7c2c3656b056fc3cf5381ebbe04fa33c870ac7f7700ab59d2",
      },
      body: JSON.stringify(updateData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Record updated successfully:", data);
        setChangedFields({}); // Clear the changedFields state after saving
      })
      .catch((error) => {
        console.error("Error updating record:", error);
      });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    handleUpdateField(changedFields); // Send the update API request with changedFields
  };

  return (
    <div className="flex-1 p-6">
      {openItem in sections && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            {openItem.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
          </h2>
          {openItem !== "exhibitorProfile-topMajors" && (
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
                {sections[openItem].map(([label, field], index) => (
                  <tr key={index} className="hover:bg-gray-50">
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
          )}
          {openItem === "exhibitorProfile-generalInfo" && (
            <div className="mt-6">
              <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-1">
                Organization highlight (for PR purpose)
              </label>
              {isEditing ? (
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  rows={4}
                  maxLength={400}
                  value={additionalInfo}
                  onChange={(e) => setAdditionalInfo(e.target.value)}
                  className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 resize-none"
                  placeholder="Enter additional information (max 400 characters)"
                ></textarea>
              ) : (
                <p>{additionalInfo || "-"}</p>
              )}
            </div>
          )}
          {openItem === "exhibitorProfile-topMajors" && (
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
                      {isEditing ? (
                        <input
                          type="text"
                          name={`Famous #${index + 1} (from Booth No. for edit)`}
                          value={formData[`Famous #${index + 1} (from Booth No. for edit)`] || ""}
                          onChange={handleChange}
                          className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                        />
                      ) : (
                        formData[`Famous #${index + 1} (from Booth No. for edit)`] || "-"
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          <div className="mt-6">
            {isEditing ? (
              <button
                onClick={handleSave}
                className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
              >
                Save
              </button>
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
    </div>
  );
};

export default MainSection;