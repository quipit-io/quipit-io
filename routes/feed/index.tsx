import React, { useState, useEffect } from 'react';
import { Take } from '../api/takes.interface';

const Feed = () => {
  const [data, setData] = useState<Take[]>([]);

  const fetchData = async () => {
    const resp = await fetch('/api/takes');
    const jsonData: Take[] = await resp.json();
    setData(jsonData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {data.map((take, index) => (
        <div key={index}>
          <h2>{take.username}</h2>
          <p>{take.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Feed;