import React from 'react';
import './App.css';
import StaffLabel from './components/StaffLabel';

function App() {
  const staffDetails = {
    name: 'Dr. Godwin Sameul',
    role: 'Consultant Physician',
    rating: 4.8,
    startTime: 12,
    endTime: 17,
    imageLink: 'https://si.wsj.net/public/resources/images/BN-SS512_2YjoP_OR_20170330060433.jpg?width=620&height=415'
  }
  return (
    <section style={{ width: 644, height: 114 }}>
      <StaffLabel staffDetails={staffDetails} />
    </section>
  );
}

export default App;
