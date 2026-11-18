
import React from "react";
import "./App.css";


export const user = {
  name: "Tanisha Tanwar",
  role: "MERN Stack Developer",
  bio: "Passionate developer skilled in React, Node.js, Express.js and MongoDB..",
  isAvailable: true
};


export const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Tech Soutions",
    location: "Mohali",
    salary: "₹25,000/month",
    isNew: true
  },
  {
    id: 2,
    title: "MERN Stack Developer",
    company: "Web Innovations",
    location: "Chandegarh",
    salary: "₹30,000/month",
    isNew: false
  },
  {
    id: 3,
    title: "React Developer",
    company: "Digital Hub",
    location: "Pune",
    salary: "₹28,000/month",
    isNew: true
  },
  {
    id: 4,
    title: "Junior Full Stack Developer",
    company: "Code Works",
    location: "puna",
    salary: "₹35,000/month",
    isNew: false
  }
];

function Header() {
  return (
    <header className="header">
      <h1>Nexus Dev Portal</h1>
      <nav>
        <a href="#profile">Profile</a>
        <a href="#jobs">Jobs</a>
        <a href="#footer">Contact</a>
      </nav>
    </header>
  );
}


function ProfileSection({ user }) {
  return (
    <section className="profile" id="profile">
      <div className="avatar">
        {user.name.charAt(0)}
      </div>

      <div className="profile-info">
        <h2>{user.name}</h2>
        <h3>{user.role}</h3>
        <p>{user.bio}</p>

        {user.isAvailable ? (
          <span className="available">Hiring Me</span>
        ) : (
          <span className="unavailable">Not Looking</span>
        )}
      </div>
    </section>
  );
}

function JobCard({ job }) {
  return (
    <div className="job-card">
      <div className="job-top">
        <h3>{job.title}</h3>
        {job.isNew && (
          <span className="hot">Hot</span>
        )}
      </div>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Salary:</strong> {job.salary}</p>
    </div>
  );
}


function JobBoard() {
  return (
    <>
      <section className="job-section" id="jobs">
        <h2>Latest Job Openings</h2>
        <p className="subtitle">
          Explore the latest opportunities for developers.
        </p>

        <div className="job-container">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </section>
    </>
  );
}


function Footer() {
  return (
    <footer className="footer" id="footer">
      <p>20278 Nexus done by this in this . All Rights Reserved.</p>
      <p>i know I'm the best </p>
    </footer>
  );
}


function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <ProfileSection user={user} />
        <JobBoard />
      </main>
      <Footer />
    </div>
  );
}

export default App;
