import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Component/Navbar';

function Profile() {
  const [userRecord, setUserRecord] = useState(null);
  const [username, setUsername] = useState('2024ocscexpo1');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          'https://api.airtable.com/v0/appuJ44jDsA3MjkPx/Approved%20Exhibitors',
          {
            headers: {
              Authorization: 'Bearer pat0OBMDNs4sQDmvL.46e6a60992296cd058398c5407b91169e9764861003a751a45e2e37c2fa4cc83',
            },
          }
        );
        const records = response.data.records;
        const userRecord = records.find(record => record.fields.Username === username);
        setUserRecord(userRecord);
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, [username]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <main className="flex-1 p-6">
        {isLoading ? (
          <div className="flex justify-center items-center h-full">
            <div className="text-gray-600 text-lg">Loading user data...</div>
          </div>
        ) : userRecord ? (
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">User Profile</h2>
            <table className="w-full border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2 text-left font-semibold">Field</th>
                  <th className="px-4 py-2 text-left font-semibold">Value</th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd:bg-gray-100">
                  <td className="px-4 py-2 font-medium">Organization Name</td>
                  <td className="px-4 py-2">{userRecord.fields['Organization Name'] || '-'}</td>
                </tr>
                <tr className="odd:bg-gray-100">
                  <td className="px-4 py-2 font-medium">Email</td>
                  <td className="px-4 py-2">{userRecord.fields['Email (from Booth no.)'] || '-'}</td>
                </tr>
                <tr className="odd:bg-gray-100">
                  <td className="px-4 py-2 font-medium">Booth No.</td>
                  <td className="px-4 py-2">{userRecord.fields['Booth no. (from Booth no.)'] || '-'}</td>
                </tr>
                <tr className="odd:bg-gray-100">
                  <td className="px-4 py-2 font-medium">Time Stamp</td>
                  <td className="px-4 py-2">{userRecord.fields['Time Stamp (from Booth no.)'] || '-'}</td>
                </tr>
                <tr className="odd:bg-gray-100">
                  <td className="px-4 py-2 font-medium">Status</td>
                  <td className="px-4 py-2">{userRecord.fields['Status (from Booth no.)'] || '-'}</td>
                </tr>
                <tr className="odd:bg-gray-100">
                  <td className="px-4 py-2 font-medium">Placement</td>
                  <td className="px-4 py-2">{userRecord.fields['Placement (from Booth no.)'] || '-'}</td>
                </tr>
                <tr className="odd:bg-gray-100">
                  <td className="px-4 py-2 font-medium">Organization Name 2</td>
                  <td className="px-4 py-2">{userRecord.fields['Organization Name 2 (from Booth no.)'] || '-'}</td>
                </tr>
                <tr className="odd:bg-gray-100">
                  <td className="px-4 py-2 font-medium">Street Addressdfdsfdsfdsfs</td>
                  <td className="px-4 py-2">{userRecord.fields['Street Address (from Booth no.)'] || '-'}</td>
                </tr>
                <tr className="odd:bg-gray-100">
                  <td className="px-4 py-2 font-medium">Street Address Line 2</td>
                  <td className="px-4 py-2">{userRecord.fields['Street Address Line 2 (from Booth no.)'] || '-'}</td>
                </tr>
                <tr className="odd:bg-gray-100">
                  <td className="px-4 py-2 font-medium">City</td>
                  <td className="px-4 py-2">{userRecord.fields['City (from Booth no.)'] || '-'}</td>
                </tr>
                <tr className="odd:bg-gray-100">
                  <td className="px-4 py-2 font-medium">State / Province</td>
                  <td className="px-4 py-2">{userRecord.fields['State / Province (from Booth no.)'] || '-'}</td>
                </tr>
                <tr className="odd:bg-gray-100">
                  <td className="px-4 py-2 font-medium">Postal / Zip Code</td>
                  <td className="px-4 py-2">{userRecord.fields['Postal / Zip Code (from Booth no.)'] || '-'}</td>
                </tr>
                <tr className="odd:bg-gray-100">
                  <td className="px-4 py-2 font-medium">Country</td>
                  <td className="px-4 py-2">{userRecord.fields['Country (from Booth no.)'] || '-'}</td>
                </tr>
                <tr className="odd:bg-gray-100">
                  <td className="px-4 py-2 font-medium">Street Address 2</td>
                  <td className="px-4 py-2">{userRecord.fields['Street Address 2 (from Booth no.)'] || '-'}</td>
                </tr>
                <tr className="odd:bg-gray-100">
                  <td className="px-4 py-2 font-medium">Street Address Line 2 2</td>
                  <td className="px-4 py-2">{userRecord.fields['Street Address Line 2 2 (from Booth no.)'] || '-'}</td>
                </tr>
                <tr className="odd:bg-gray-100">
                  <td className="px-4 py-2 font-medium">City 2</td>
                  <td className="px-4 py-2">{userRecord.fields['City 2 (from Booth no.)'] || '-'}</td>
                </tr>
                <tr className="odd:bg-gray-100">
                  <td className="px-4 py-2 font-medium">State / Province 2</td>
                  <td className="px-4 py-2">{userRecord.fields['State / Province 2 (from Booth no.)'] || '-'}</td>
                </tr>
                <tr className="odd:bg-gray-100">
                  <td className="px-4 py-2 font-medium">Postal / Zip Code 2</td>
                  <td className="px-4 py-2">{userRecord.fields['Postal / Zip Code 2 (from Booth no.)'] || '-'}</td>
                </tr>
                <tr className="odd:bg-gray-100">
                  <td className="px-4 py-2 font-medium">Country 2</td>
                  <td className="px-4 py-2">{userRecord.fields['Country 2 (from Booth no.)'] || '-'}</td>
                </tr>
                <tr className="odd:bg-gray-100">
                  <td className="px-4 py-2 font-medium">Total Booths Required</td>
                  <td className="px-4 py-2">{userRecord.fields['Total Booths Required (from Booth no.)'] || '-'}</td>
                </tr>
                <tr className="odd:bg-gray-100">
                  <td className="px-4 py-2 font-medium">Institution Name on Booth Fascia</td>
                  <td className="px-4 py-2">{userRecord.fields['Institution name to be put on booth fascia (from Booth no.)'] || '-'}</td>
                </tr>
                <tr className="odd:bg-gray-100">
                  <td className="px-4 py-2 font-medium">National Flag on Booth & Media for PR</td>
                  <td className="px-4 py-2">{userRecord.fields['National flag on booth & Media for PR (from Booth no.)'] || '-'}</td>
                </tr>
                <tr className="odd:bg-gray-100">
                  <td className="px-4 py-2 font-medium">Level of Studies Offered</td>
                  <td className="px-4 py-2">{userRecord.fields['Level of Studies Offered (from Booth no.)'] || '-'}</td>
                </tr>
                <tr className="odd:bg-gray-100">
                  <td className="px-4 py-2 font-medium">Scholarship</td>
                  <td className="px-4 py-2">{userRecord.fields['Scholarship (from Booth no.)'] || '-'}</td>
                </tr>
                <tr className="odd:bg-gray-100">
                  <td className="px-4 py-2 font-medium">Promotion Detail</td>
                  <td className="px-4 py-2">{userRecord.fields['Promotion Detail (from Booth no.)'] || '-'}</td>
                </tr>
                <tr className="odd:bg-gray-100">
                  <td className="px-4 py-2 font-medium">Website</td>
                  <td className="px-4 py-2">{userRecord.fields['Website (from Booth no.)'] || '-'}</td>
                </tr>
                <tr className="odd:bg-gray-100">
                  <td className="px-4 py-2 font-medium">Prefix</td>
                  <td className="px-4 py-2">{userRecord.fields['Prefix (from Booth no.)'] || '-'}</td>
                </tr>
                <tr className="odd:bg-gray-100">
                  <td className="px-4 py-2 font-medium">First Name</td>
                  <td className="px-4 py-2">{userRecord.fields['First Name (from Booth no.)'] || '-'}</td>
                </tr>
                <tr className="odd:bg-gray-100">
                  <td className="px-4 py-2 font-medium">Last Name</td>
                  <td className="px-4 py-2">{userRecord.fields['Last Name (from Booth no.)'] || '-'}</td>
                </tr>
                <tr className="odd:bg-gray-100">
                  <td className="px-4 py-2 font-medium">Position</td>
                  <td className="px-4 py-2">{userRecord.fields['Position (from Booth no.)'] || '-'}</td>
                </tr>
                <tr className="odd:bg-gray-100">
                  <td className="px-4 py-2 font-medium">Phone Number</td>
                  <td className="px-4 py-2">{userRecord.fields['Phone Number (from Booth no.)'] || '-'}</td>
                </tr>
                <tr className="odd:bg-gray-100">
                  <td className="px-4 py-2 font-medium">Furniture Order</td>
                  <td className="px-4 py-2">{userRecord.fields['Furniture order'] || '-'}</td>
                </tr>
                <tr className="odd:bg-gray-100">
                  <td className="px-4 py-2 font-medium">Furniture Service Link</td>
                  <td className="px-4 py-2">{userRecord.fields['r1 service(Furniture)'] || '-'}</td>
                </tr>
                <tr className="odd:bg-gray-100">
                  <td className="px-4 py-2 font-medium">Electric Service Link</td>
                  <td className="px-4 py-2">{userRecord.fields['r2 service(Electric)'] || '-'}</td>
                </tr>
                <tr className="odd:bg-gray-100">
                  <td className="px-4 py-2 font-medium">A/V & Computer Service Link</td>
                  <td className="px-4 py-2">{userRecord.fields['r3 service(A/V&Computer)'] || '-'}</td>
                </tr>
                <tr className="odd:bg-gray-100">
                  <td className="px-4 py-2 font-medium">Payment Link</td>
                  <td className="px-4 py-2">{userRecord.fields['Payment link'] || '-'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <div className="flex justify-center items-center h-full">
            <div className="text-gray-600 text-lg">No user data found.</div>
          </div>
        )}
      </main>
    </div>
  );
}

export default Profile;