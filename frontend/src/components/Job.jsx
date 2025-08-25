import React, { useEffect, useState } from "react";
import { MapPin, Clock, DollarSign } from "lucide-react";
import JobFilters from "../JobComponents/JobFilters";
import { Link } from "react-router-dom";
import "./Job.css";

const Job = () => {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState({
    search: "",
    location: "",
    experienceLevel: "",
    skills: [],
  });


  useEffect(() => {
    fetch("/JobsData.json")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data.jobsData)) {
          setJobs(data.jobsData); // case 1: { "jobsData": [ ... ] }
        } else if (Array.isArray(data)) {
          setJobs(data); // case 2: [ ... ]
        } else {
          console.error("Unexpected JSON structure:", data);
          setJobs([]); // fallback to empty
        }
      })
      .catch((err) => console.error("Error loading jobs:", err));
  }, []);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleClearFilters = () => {
    setFilters({
      search: "",
      location: "",
      experienceLevel: "",
      skills: [],
    });
  };

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      filters.search === "" ||
      job.role?.toLowerCase().includes(filters.search.toLowerCase()) ||
      job.company?.toLowerCase().includes(filters.search.toLowerCase());

    const matchesLocation =
      filters.location === "" || job.location === filters.location;

    const matchesExperience =
      filters.experienceLevel === "" ||
      job.experienceLevel === filters.experienceLevel;

    const matchesSkills =
      filters.skills.length === 0 ||
      filters.skills.every((skill) => job.skills?.includes(skill));

    return (
      matchesSearch && matchesLocation && matchesExperience && matchesSkills
    );
  });

  return (
    <div className="p-6">

      <JobFilters
        filters={filters}
        onFilterChange={handleFilterChange}
        onClearFilters={handleClearFilters}
      />

      <h2 style={{marginLeft:"300px",fontFamily:"Cursive",marginTop:"20px",marginBottom:"20px"}}>Available Jobs</h2>

      {filteredJobs.length > 0 ? (
        filteredJobs.map((job) => (
          <div
            key={job.id}
            className="job-card border rounded-xl shadow p-4 mb-6 bg-white"
          >
            {/* Header */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <img
                  src={job?.logo || "https://via.placeholder.com/48"}
                  alt={`${job?.company || "Unknown"} logo`}
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "8px",
                    objectFit: "contain",
                  }}
                />
                <div>
                  <h3
                    style={{
                      fontWeight: "bold",
                      fontSize: "18px",
                      color: "#111827",
                      margin: 0,
                    }}
                  >
                    {job?.role || "No role specified"}
                  </h3>
                  <p
                    style={{
                      color: "#3b82f6",
                      fontWeight: "600",
                      margin: "4px 0 0 0",
                    }}
                  >
                    {job?.company || "Unknown Company"}
                  </p>
                </div>
              </div>
              <div className="text-gray-600 text-sm">{job?.type || "N/A"}</div>
            </div>

            <div style={{ marginBottom: "16px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  fontSize: "14px",
                  color: "#6b7280",
                  marginBottom: "8px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  <MapPin className="w-4 h-4" />
                  {job?.location || "Not specified"}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  <Clock className="w-4 h-4" />
                  {job?.experienceLevel || "Not specified"}
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "#059669",
                  fontWeight: "600",
                  marginBottom: "16px",
                }}
              >
                <DollarSign className="w-4 h-4" />
                {job?.salaryRange || "Not disclosed"}
              </div>

              <div style={{ marginBottom: "16px" }}>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#111827",
                    marginBottom: "8px",
                  }}
                >
                  Required Skills:
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {job?.skills?.length > 0 ? (
                    job.skills.map((skill, index) => (
                      <span
                        key={index}
                        style={{
                          fontSize: "12px",
                          backgroundColor: "rgba(59, 130, 246, 0.1)",
                          color: "#3b82f6",
                          border: "1px solid rgba(59, 130, 246, 0.2)",
                          padding: "4px 8px",
                          borderRadius: "12px",
                        }}
                      >
                        {skill}
                      </span>
                    ))
                  ) : (
                    <span className="text-gray-500 text-sm">
                      No skills listed
                    </span>
                  )}
                </div>
              </div>

              <p
                style={{
                  fontSize: "14px",
                  color: "#6b7280",
                  lineHeight: "1.5",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  marginBottom: "16px",
                }}
              >
                {job?.description || "No description available."}
              </p>

              <Link
                to={`/jobs/${job.id}`}
                style={{
                  backgroundColor: "#3b82f6",
                  color: "white",
                  padding: "8px 16px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  textDecoration: "none",
                }}
              >
                View Details
              </Link>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No jobs found.</p>
      )}
    </div>
  );
};

export default Job;
