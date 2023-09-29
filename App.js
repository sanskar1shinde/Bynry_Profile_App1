import React, { useState } from 'react';
import './App.css';
import AdminDashboard from './AdminDashboard';

function App() {
  const [profiles, setProfiles] = useState([
    {
      id: 1,
      name: 'Virat Kohli',
      photo: 'https://th.bing.com/th?id=OIP.R2C4oWgNQmTZtUojOibgWAHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
      address: 'Omkar 1973, Worli, Mumbai',
    },
    {
      id: 2,
      name: 'Amitabh Bachchan',
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfJrOXHFNx6Jec4Gyry5JMFE7Wmma1EI7HZQ&usqp=CAU',
      address: 'Jalsa, B/2, Kapol Housing Society, VL Mehta Road, Juhu, Mumbai - 400049',
    },
    {
      id: 3,
      name: 'Shah Rukh Khan',
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtFfRLgFIrpdLmlEAt2xvtH2N_fUvXjKDgHA&usqp=CAU',
      address: 'Mannat, Land End, Bandstand, Bandra (West), Mumbai, Maharashtra 400050, India',
    },
    {
      id: 4,
      name: 'Sharad Pawar',
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDkIZ-hMj7QC4PnEsPtY23hBI-b8lF845zrg&usqp=CAU',
      address: 'Baramati',
    },{
      id: 5,
      name: 'Nirmala Sitaraman',
      photo: 'https://www.bing.com/th?id=OIP.k8U8YGs1bEuicPQkh-eGBgHaFj&w=136&h=104&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
      address: 'Tiruchirapalli, Tamil Naidu',
    },{
      id: 6,
      name: 'Nita Ambani',
      photo: 'https://media.gettyimages.com/id/1185144335/photo/indias-football-sports-development-ltd-chairperson-nita-ambani-speaks-during-an-event-with.jpg?s=612x612&w=0&k=20&c=3ufhmiVM5_3_wErQJUsVF9hLZgKlRdT2Wv_7zREfIV4=',
      address: 'Residence Antilla, Ambani Tower, Altamount Road, 400 026, Mumbai, Maharashtra, India',
    },{
      id: 7,
      name: 'Mukesh Ambani',
      photo: 'https://th.bing.com/th?id=OIP.bwipOTRR-DnGhUbvhnFEKgHaEZ&w=324&h=192&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
      address: 'Residence Antilla, Ambani Tower, Altamount Road, 400 026, Mumbai, Maharashtra, India',
    },
    {
      id: 8,
      name: 'Marry com',
      photo: 'https://th.bing.com/th?id=OIP.n66aLXybDzD5glwZybuz7gHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
      address: 'Kiangathei, Manipur, India',
    },
    {
      id: 9,
      name: 'Pv sindhu',
      photo: 'https://th.bing.com/th?id=OIP.HDgIfLXErs-sZbTemWXwFAHaET&w=327&h=190&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
      address: 'Hyderabad',
    },
    {
      id: 10,
      name: 'Aashish dhawan',
      photo: 'https://th.bing.com/th?id=OIP.-rkvVLUQBFcTBOAE8cOHlQAAAA&w=227&h=227&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
      address: '301 , 310, 3rd floor, 22 Barakhamba Road, New Delhi 1100012.',
    },
    {
      id: 11,
      name: 'Mahendra Singh dhoni',
      photo: 'https://bollysuperstar.com/wp-content/uploads/2018/04/MS-Dhoni.jpg',
      address: 'Harmu Housing Colony, Ranchi, Jharkhand, India',
    },
    {
      id: 12,
      name: 'Niraj chopra',
      photo: 'https://th.bing.com/th?id=OIP._EBdO-2kPlMSKHId4tL4kwHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
      address: ' Khandra, Panipat, Haryana.',
    }, 
  ]);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [showAdminDashboard, setShowAdminDashboard] = useState(false);

  const handleDelete = (id) => {
    const isConfirmDelete = window.confirm('Are you sure you want to delete this profile?');
    if (isConfirmDelete) {
      setProfiles(profiles.filter((profile) => profile.id !== id));
      if (selectedProfile && selectedProfile.id === id) {
        setSelectedProfile(null);
      }
    }
  };

  const handleShowSummary = (id) => {
    const selected = profiles.find((profile) => profile.id === id);
    setSelectedProfile(selected);
  };

  const handleAdminClick = () => {
    setShowAdminDashboard(true);
  };

  return (
    <div className="App">
      <header className="App-header">
      <h1 style={{ display: 'flex', justifyContent: 'space-between' }}>
  Profile Mapper
  <button
  onClick={handleAdminClick}
  style={{
    position: 'absolute',
    top: '10px',  
    right: '10px',  
  }}
>
  Admin Dashboard
</button>
</h1>
      </header>
      <div className="profiles-container">
        {profiles.map((profile) => (
          <div className="profile-box" key={profile.id}>
            <img src={profile.photo} alt={profile.name} />
            <h2>{profile.name}</h2>
            <p>{profile.address}</p>
            <button onClick={() => handleDelete(profile.id)}>Delete</button>
            <button onClick={() => handleShowSummary(profile.id)}>Summary</button>
          </div>
        ))}
      </div>
      {showAdminDashboard ? (
        <AdminDashboard profiles={profiles} onDeleteProfile={handleDelete} />
      ) : (
        selectedProfile && (
          <div className="map-container">
            <iframe
              title="Address Map"
              width="100%"
              height="300"
              frameBorder="0"
              style={{ border: 0 }}
              src={`https://www.google.com/maps/embed/v1/place?q=${encodeURIComponent(
                selectedProfile.address
              )}&key=AIzaSyC2LiLkQ6Alf-eh4bTdniBpHiGoUIvdXtA`}
              allowFullScreen
            ></iframe>
          </div>
        )
      )}
    </div>
  );
}

export default App;
