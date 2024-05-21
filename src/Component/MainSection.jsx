import React from "react";

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
                    {userRecord.fields[
                      "Organization Name (from Booth No. for edit)"
                    ] || "-"}
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">Street Address</td>
                  <td className="px-6 py-4">
                    {userRecord.fields[
                      "Street Address (from Booth No. for edit)"
                    ] || "-"}
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">Street Address Line 2</td>
                  <td className="px-6 py-4">
                    {userRecord.fields[
                      "Street Address Line 2 (from Booth No. for edit)"
                    ] || "-"}
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">City</td>
                  <td className="px-6 py-4">
                    {userRecord.fields["City (from Booth No. for edit)"] || "-"}
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">State / Province</td>
                  <td className="px-6 py-4">
                    {userRecord.fields[
                      "State / Province (from Booth No. for edit)"
                    ] || "-"}
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">Postal / Zip Code</td>
                  <td className="px-6 py-4">
                    {userRecord.fields[
                      "Postal / Zip Code (from Booth No. for edit)"
                    ] || "-"}
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">Country</td>
                  <td className="px-6 py-4">
                    {userRecord.fields["Country (from Booth No. for edit)"] ||
                      "-"}
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="mt-6">
              <label
                htmlFor="additionalInfo"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
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
                    {userRecord.fields["Prefix (from Booth No. for edit)"] || "-"}
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">First Name</td>
                  <td className="px-6 py-4">
                    {userRecord.fields["First Name (from Booth No. for edit)"] ||
                      "-"}
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">Last Name</td>
                  <td className="px-6 py-4">
                    {userRecord.fields["Last Name (from Booth No. for edit)"] ||
                      "-"}
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">Position</td>
                  <td className="px-6 py-4">
                    {userRecord.fields["Position (from Booth No. for edit)"] ||
                      "-"}
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">Email</td>
                  <td className="px-6 py-4">
                    {userRecord.fields["Email (from Booth No. for edit)"] || "-"}
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">Phone Number</td>
                  <td className="px-6 py-4">
                    {userRecord.fields[
                      "Phone Number (from Booth No. for edit)"
                    ] || "-"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        {openItem === "exhibitorProfile-levelOfStudies" && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Level of Studies Offer
            </h2>
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
                    {userRecord.fields[
                      "Level of Studies Offered (from Booth No. for edit)"
                    ] || "-"}
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
                      {userRecord.fields[
                        `Famous #${index + 1} (from Booth No. for edit)`
                      ] || "-"}
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
                    {userRecord.fields[
                      "Promotion Detail (from Booth No. for edit)"
                    ] || "-"}
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
                    {userRecord.fields["Scholarship (from Booth No. for edit)"] ||
                      "-"}
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
                    {userRecord.fields[
                      "Total Booths Required (from Booth No. for edit)"
                    ] || "-"}
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">Institution Name on Booth Fascia</td>
                  <td className="px-6 py-4">
                    {userRecord.fields[
                      "Institution name to be put on booth fascia (from Booth No. for edit)"
                    ] || "-"}
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    National Flag on Booth & Media for PR
                  </td>
                  <td className="px-6 py-4">
                    {userRecord.fields[
                      "National flag on booth & Media for PR (from Booth No. for edit)"
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
                    {userRecord.fields[
                      "Organization Name 2 (from Booth No. for edit)"
                    ] || "-"}
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">Street Address</td>
                  <td className="px-6 py-4">
                    {userRecord.fields[
                      "Street Address 2 (from Booth No. for edit)"
                    ] || "-"}
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">Street Address Line 2</td>
                  <td className="px-6 py-4">
                    {userRecord.fields[
                      "Street Address Line 2 2 (from Booth No. for edit)"
                    ] || "-"}
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">City</td>
                  <td className="px-6 py-4">
                    {userRecord.fields["City 2 (from Booth No. for edit)"] || "-"}
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">State / Province</td>
                  <td className="px-6 py-4">
                    {userRecord.fields[
                      "State / Province 2 (from Booth No. for edit)"
                    ] || "-"}
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">Postal / Zip Code</td>
                  <td className="px-6 py-4">
                    {userRecord.fields[
                      "Postal / Zip Code 2 (from Booth No. for edit)"
                    ] || "-"}
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">Country</td>
                  <td className="px-6 py-4">
                    {userRecord.fields["Country 2 (from Booth No. for edit)"] ||
                      "-"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  };
  export default MainSection;

