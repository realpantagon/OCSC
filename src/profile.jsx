import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Component/Navbar';

const ProfilePageSidebar = ({ userRecord, openItem, setOpenItem }) => {
  const toggleItem = (item) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="profile-page w-1/4 bg-gray-200 p-4">
      <div className="sidebar">
        <div className="sidebar-item">
          <button
            className={`sidebar-header ${openItem === 'exhibitorProfile' ? 'active' : ''} w-full text-left p-2 font-semibold`}
            onClick={() => toggleItem('exhibitorProfile')}
          >
            Exhibitor Profile
          </button>
        </div>
        <div className="sidebar-item">
          <button
            className={`sidebar-header ${openItem === 'exhibitorSpace' ? 'active' : ''} w-full text-left p-2 font-semibold`}
            onClick={() => toggleItem('exhibitorSpace')}
          >
            Exhibitor Space
          </button>
        </div>
        <div className="sidebar-item">
          <button
            className={`sidebar-header ${openItem === 'billingInfo' ? 'active' : ''} w-full text-left p-2 font-semibold`}
            onClick={() => toggleItem('billingInfo')}
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
      {openItem === 'exhibitorProfile' && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Exhibitor Profile</h2>
          <div>
            <strong>General Information</strong>
            <ul className="ml-4">
              <li>Organization Name: {userRecord.fields['Organization Name'] || '-'}</li>
              <li>Street Address: {userRecord.fields['Street Address (from Booth no.)'] || '-'}</li>
              <li>Street Address Line 2: {userRecord.fields['Street Address Line 2 (from Booth no.)'] || '-'}</li>
              <li>City: {userRecord.fields['City (from Booth no.)'] || '-'}</li>
              <li>State / Province: {userRecord.fields['State / Province (from Booth no.)'] || '-'}</li>
              <li>Postal / Zip Code: {userRecord.fields['Postal / Zip Code (from Booth no.)'] || '-'}</li>
              <li>Country: {userRecord.fields['Country (from Booth no.)'] || '-'}</li>
            </ul>
          </div>
          <div>
            <strong>Contact Person</strong>
            <ul className="ml-4">
              <li>Prefix: {userRecord.fields['Prefix (from Booth no.)'] || '-'}</li>
              <li>First Name: {userRecord.fields['First Name (from Booth no.)'] || '-'}</li>
              <li>Last Name: {userRecord.fields['Last Name (from Booth no.)'] || '-'}</li>
              <li>Position: {userRecord.fields['Position (from Booth no.)'] || '-'}</li>
              <li>Email: {userRecord.fields['Email (from Booth no.)'] || '-'}</li>
              <li>Phone Number: {userRecord.fields['Phone Number (from Booth no.)'] || '-'}</li>
            </ul>
          </div>
          <div>
            <strong>Level of Studies Offer</strong>
            <ul className="ml-4">
              <li>Level of Studies Offered: {userRecord.fields['Level of Studies Offered (from Booth no.)'] || '-'}</li>
            </ul>
          </div>
          <div>
            <strong>Top 10 Majors</strong>
            {/* Render Top 10 Majors data */}
          </div>
          <div>
            <strong>Promotion</strong>
            {/* Render Promotion data */}
          </div>
          <div>
            <strong>Scholarship</strong>
            {/* Render Scholarship data */}
          </div>
        </div>
      )}
      {openItem === 'exhibitorSpace' && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Exhibitor Space</h2>
          <ul>
            <li>Total Booths Required: {userRecord.fields['Total Booths Required (from Booth no.)'] || '-'}</li>
            <li>Institution Name on Booth Fascia: {userRecord.fields['Institution name to be put on booth fascia (from Booth no.)'] || '-'}</li>
            <li>National Flag on Booth & Media for PR: {userRecord.fields['National flag on booth & Media for PR (from Booth no.)'] || '-'}</li>
          </ul>
        </div>
      )}
      {openItem === 'billingInfo' && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Billing Information</h2>
          <ul>
            <li>Organization Name: {userRecord.fields['Organization Name 2 (from Booth no.)'] || '-'}</li>
            <li>Street Address: {userRecord.fields['Street Address 2 (from Booth no.)'] || '-'}</li>
            <li>Street Address Line 2: {userRecord.fields['Street Address Line 2 2 (from Booth no.)'] || '-'}</li>
            <li>City: {userRecord.fields['City 2 (from Booth no.)'] || '-'}</li>
            <li>State / Province: {userRecord.fields['State / Province 2 (from Booth no.)'] || '-'}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

function Profile() {
    const [userRecord, setUserRecord] = useState(null);
    const [username, setUsername] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [openItem, setOpenItem] = useState(null);
  
    useEffect(() => {
      const storedUsername = localStorage.getItem('username');
      if (storedUsername) {
        setUsername(storedUsername);
      }
    }, []);
  
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
            <div className="text-gray-600 text-lg">Loading user data...</div>
          </div>
        ) : userRecord ? (
          <>
            <ProfilePageSidebar userRecord={userRecord} openItem={openItem} setOpenItem={setOpenItem} />
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