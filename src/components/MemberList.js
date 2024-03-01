import React, { useState, useEffect } from 'react';

function MemberList() {
  const [data, setData] = useState(null);

  useEffect(() => {
        fetch('/members')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Failed to fetch members');
                }
                return res.json();
            })
            .then(data => {
                setData(data.members); 
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setData([]); 
            });
    }, []);

  return (
    <div>
      {data ? (
        data.map((member, i) => (
          <p key={i}>{member}</p> 
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default MemberList;
