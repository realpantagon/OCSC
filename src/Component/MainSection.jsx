import React from "react";

const MainSection = ({ userRecord, openItem }) => {
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
    "exhibitorSpace": [
      ["Total Booths Required", "Total Booths Required (from Booth No. for edit)"],
      ["Institution Name on Booth Fascia", "Institution name to be put on booth fascia (from Booth No. for edit)"],
      ["National Flag on Booth & Media for PR", "National flag on booth & Media for PR (from Booth No. for edit)"],
    ],
    "billingInfo": [
      ["Organization Name", "Organization Name 2 (from Booth No. for edit)"],
      ["Street Address", "Street Address 2 (from Booth No. for edit)"],
      ["Street Address Line 2", "Street Address Line 2 2 (from Booth No. for edit)"],
      ["City", "City 2 (from Booth No. for edit)"],
      ["State / Province", "State / Province 2 (from Booth No. for edit)"],
      ["Postal / Zip Code", "Postal / Zip Code 2 (from Booth No. for edit)"],
      ["Country", "Country 2 (from Booth No. for edit)"],
    ],
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
                  <th scope="col" className="px-6 py-4 font-medium text-gray-900">Field</th>
                  <th scope="col" className="px-6 py-4 font-medium text-gray-900">Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                {sections[openItem].map(([label, field], index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4">{label}</td>
                    <td className="px-6 py-4">{userRecord.fields[field] || "-"}</td>
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
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                rows={4}
                maxLength={400}
                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 resize-none"
                placeholder="Enter additional information (max 400 characters)"
              ></textarea>
            </div>
          )}
          {openItem === "exhibitorProfile-topMajors" && (
            <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-4 font-medium text-gray-900">Major</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                {[...Array(10)].map((_, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      {index + 1}. {userRecord.fields[`Famous #${index + 1} (from Booth No. for edit)`] || "-"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
};

export default MainSection;