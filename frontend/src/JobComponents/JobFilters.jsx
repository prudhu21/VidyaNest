import { X, Search } from "lucide-react";
import { skillsOptions, locationOptions, experienceLevels } from "../../public/JobsData.json";

const JobFilters = ({
  filters = { search: "", location: "", experienceLevel: "", skills: [] },
  onFilterChange = () => {},
  onClearFilters = () => {},
}) => {
  const handleSkillAdd = (skill) => {
    if (!filters.skills.includes(skill)) {
      onFilterChange("skills", [...filters.skills, skill]);
    }
  };

  const handleSkillRemove = (skill) => {
    onFilterChange(
      "skills",
      filters.skills.filter((s) => s !== skill)
    );
  };

  return (
    <div style={{ backgroundColor: "#ffffff", border: "1px solid #e5e7eb", padding: "16px", borderRadius: "8px" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
        <h1 style={{ fontSize: "18px", fontWeight: "600" }}>Filter Jobs</h1>
        <button
          onClick={onClearFilters}
          style={{
            padding: "6px 12px",
            border: "1px solid #ccc",
            borderRadius: "6px",
            backgroundColor: "white",
            cursor: "pointer",
          }}
        >
          Clear All
        </button>
      </div>

      <div style={{ marginBottom: "16px" }}>
        <label htmlFor="search" style={{ fontSize: "14px", fontWeight: "500", marginBottom: "8px", display: "block" }}>
          Search
        </label>
        <div style={{ position: "relative" }}>
          <Search
            style={{
              width: "16px",
              height: "16px",
              position: "absolute",
              left: "12px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#9ca3af",
            }}
          />
          <input
            id="search"
            name="search"
            type="text"
            placeholder="Search by role, company..."
            value={filters.search}
            onChange={(e) => onFilterChange("search", e.target.value)}
            autoComplete="off"
            style={{
              width: "100%",
              padding: "8px 12px 8px 40px",
              border: "1px solid #ddd",
              borderRadius: "6px",
            }}
          />
        </div>
      </div>
      <div style={{ marginBottom: "16px" }}>
        <label htmlFor="location" style={{ fontSize: "14px", fontWeight: "500", marginBottom: "8px", display: "block" }}>
          Location
        </label>
        <select
          id="location"
          name="location"
          value={filters.location || "all"}
          onChange={(e) => onFilterChange("location", e.target.value === "all" ? "" : e.target.value)}
          autoComplete="off"
          style={{ width: "100%", padding: "8px", border: "1px solid #ddd", borderRadius: "6px" }}
        >
          <option value="all">Any location</option>
          {locationOptions.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
      </div>

      <div style={{ marginBottom: "16px" }}>
        <label htmlFor="experienceLevel" style={{ fontSize: "14px", fontWeight: "500", marginBottom: "8px", display: "block" }}>
          Experience Level
        </label>
        <select
          id="experienceLevel"
          name="experienceLevel"
          value={filters.experienceLevel || "all"}
          onChange={(e) =>
            onFilterChange("experienceLevel", e.target.value === "all" ? "" : e.target.value)
          }
          autoComplete="off"
          style={{ width: "100%", padding: "8px", border: "1px solid #ddd", borderRadius: "6px" }}
        >
          <option value="all">Any level</option>
          {experienceLevels.map((level) => (
            <option key={level} value={level}>
              {level}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="skills" style={{ fontSize: "14px", fontWeight: "500", marginBottom: "8px", display: "block" }}>
          Skills
        </label>
        <select
          id="skills"
          name="skills"
          onChange={(e) => e.target.value && handleSkillAdd(e.target.value)}
          autoComplete="off"
          style={{ width: "100%", padding: "8px", border: "1px solid #ddd", borderRadius: "6px" }}
        >
          <option value="">Add skill</option>
          {skillsOptions
            .filter((skill) => !filters.skills.includes(skill))
            .map((skill) => (
              <option key={skill} value={skill}>
                {skill}
              </option>
            ))}
        </select>

        {filters.skills.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "8px" }}>
            {filters.skills.map((skill) => (
              <div
                key={skill}
                style={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "rgba(59, 130, 246, 0.1)",
                  color: "#3b82f6",
                  border: "1px solid rgba(59, 130, 246, 0.2)",
                  borderRadius: "16px",
                  padding: "4px 8px",
                  fontSize: "13px",
                  gap: "4px",
                }}
              >
                {skill}
                <button
                  onClick={() => handleSkillRemove(skill)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "2px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <X style={{ width: "12px", height: "12px" }} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default JobFilters;
