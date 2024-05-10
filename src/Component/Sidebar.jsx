import React, { useState } from 'react';


const ProfilePageSidebar = () => {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (item) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="profile-page">
      <div className="sidebar">
        <div className="sidebar-item">
          <button
            className={`sidebar-header ${openItem === 'exhibitorProfile' ? 'active' : ''}`}
            onClick={() => toggleItem('exhibitorProfile')}
          >
            Exhibitor Profile
          </button>
          {openItem === 'exhibitorProfile' && (
            <ul>
              <p>
                  General Information
              </p>
              <p>               
                  Contact Person               
              </p>
              <p>             
                  Level of Studies Offer               
              </p>
              <p>             
                  Top 10 Majors               
              </p>
              <p>              
                  Promotion               
              </p>
              <p>                
                  Scholarship
              </p>
            </ul>
          )}
        </div>
        <div className="sidebar-item">
          <button
            className={`sidebar-header ${openItem === 'exhibitorSpace' ? 'active' : ''}`}
            onClick={() => toggleItem('exhibitorSpace')}>
            Exhibitor Space
          </button>
        </div>
        <div className="sidebar-item">
          <button
            className={`sidebar-header ${openItem === 'billingInfo' ? 'active' : ''}`}
            onClick={() => toggleItem('billingInfo')}>
            Billing Information
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePageSidebar;