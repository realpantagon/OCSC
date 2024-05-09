import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Airtable({ username }) {
  const [userRecord, setUserRecord] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
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
        console.log(response.data);
        setUserRecord(userRecord);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    if (username) {
      fetchUserData();
    }
  }, [username]);

  return (
    <div>

    </div>
  );
}

export default Airtable;
