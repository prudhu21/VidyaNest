import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MapPin, Clock, DollarSign, Users, Calendar, ExternalLink } from "lucide-react";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    fetch("/JobsData.json")
      .then((res) => res.json())
      .then((data) => {
        const jobsArray = Array.isArray(data.jobsData) ? data.jobsData : data;
        const foundJob = jobsArray.find((j) => j.id.toString() === id);
        setJob(foundJob || null);
      })
      .catch((err) => console.error("Error loading job details:", err));
  }, [id]);

  if (!job) return <p className="p-6 text-gray-600">Job not found.</p>;

  const handleApply = () => {
    if (job.applicationLink && job.applicationLink.startsWith("http")) {
      window.open(job.applicationLink, "_blank", "noopener,noreferrer");
    } else {
      alert("Application link is not available");
    }
  };

  return (
    <div style={{padding:"40px"}}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '24px' }}>
            <img 
                src={job.logo} 
                alt={`${job.company} logo`}
                style={{ width: '64px', height: '64px', borderRadius: '8px', objectFit: 'contain' }}
            />
            <div style={{ flex: 1 }}>
                <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#111827', marginBottom: '8px' }}>{job.role}</h2>
                <p style={{ fontSize: '20px', color: '#3b82f6', fontWeight: '600', marginBottom: '12px' }}>{job.company}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', fontSize: '14px', color: '#6b7280' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <MapPin style={{ width: '16px', height: '16px' }} /> {job.location}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Clock style={{ width: '16px', height: '16px' }} />
                    {job.experienceLevel}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    {job.type}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#059669', fontWeight: '600' }}>
                    <DollarSign style={{ width: '16px', height: '16px' }} />
                    {job.salaryRange}
                </div>
                </div>
            </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <section>
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: '#111827' }}>Job Description</h3>
            <p style={{ color: '#6b7280', lineHeight: '1.6' }}>
                {job.description}
            </p>
            </section>
            <section>
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: '#678ee2ff' }}>Required Skills</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {job.skills.map((skill, index) => (
                <span
                key={index}
                className="px-3 py-1 text-sm bg-blue-50 text-blue-600 border border-blue-200 rounded-full"
                >
                {skill}
                </span>
            ))}
            </div>
        </section>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e5e7eb', margin: '8px 0' }} />
        
        <section>
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px', color: '#111827' }}>About {job.company}</h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', marginBottom: '16px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px' }}>
                    <Users style={{ width: '16px', height: '16px', color: '#3b82f6' }} />
                    <span style={{ fontWeight: '500' }}>Employees:</span>
                    <span style={{ color: '#6b7280' }}>{job.companyOverview.employees}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px' }}>
                    <Calendar style={{ width: '16px', height: '16px', color: '#3b82f6' }} />
                    <span style={{ fontWeight: '500' }}>Founded:</span>
                    <span style={{ color: '#6b7280' }}>{job.companyOverview.founded}</span>
                </div>
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                <h4 style={{ fontWeight: '600', marginBottom: '8px', color: '#111827' }}>Mission</h4>
                <p style={{ color: '#6b7280' }}>
                    {job.companyOverview.mission}
                </p>
                </div>
                
                <div>
                <h4 style={{ fontWeight: '600', marginBottom: '8px', color: '#111827' }}>Culture</h4>
                <p style={{ color: '#6b7280' }}>
                    {job.companyOverview.culture}
                </p>
                </div>
            </div>
        </section>

        <hr style={{ border: 'none', borderTop: '1px solid #e5e7eb', margin: '8px 0' }} />

        <section style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <p style={{ color: '#6b7280' }}>Ready to take the next step in your career?</p>
            <button onClick={handleApply}
            style={{ 
                backgroundColor: '#4083dbff', 
                color: 'white',
                padding: '12px 32px',
                fontSize: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                margin: '0 auto'
                }}>
            <ExternalLink style={{ width: '20px', height: '20px' }}/>
                Apply Now
            </button>
            <p style={{ fontSize: '12px', color: '#6b7280' }}>You'll be redirected to {job.company}'s official career page</p>
        </section>
    </div>
  );
};

export default JobDetails;
