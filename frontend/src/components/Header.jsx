import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { Modal, Button } from 'react-bootstrap';
import "./Header.css";
import Logo from "../assets/logo.jpg";

const Header = ({setActiveKey}) => {
  const DEFAULT_PROFILE_IMAGE =
    "https://img.freepik.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9xa_719432-2210.jpg";

  const [user, setUser] = useState({
    name: "USER",
    avatar:
      localStorage.getItem("profileImage") ||
      "https://ui-avatars.com/api/?name=Ashfaq&background=2563eb&color=fff",
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate(); 

  useEffect(() => {
    const updateUser = () => {
      const savedImg = localStorage.getItem("profileImage") || DEFAULT_PROFILE_IMAGE;
      const savedData = JSON.parse(localStorage.getItem("userData"));
      setUser({
        name: savedData?.username || "USER",
        avatar: savedImg,
      });
    };

    updateUser();
    window.addEventListener("profileUpdated", updateUser);
    return () => {
      window.removeEventListener("profileUpdated", updateUser);
    };
  }, []);

   const handleLogout = () => {
    localStorage.clear();
    navigate("/"); 
  };


  const handleProfileClick = () => {
    setDropdownOpen(false);
    if (setActiveKey) setActiveKey("eight");  // Activate Profile tab
  };

  return (
    <header className="header">
      <div className="header-left">
        <img src={Logo} alt="App Logo" className="header-app-icon" />
        <span className="site-name">VidyaNest</span>
      </div>

      <div className="header-right">
        <div
          className="user-info"
          onClick={() => setDropdownOpen(!dropdownOpen)}
          style={{ cursor: "pointer", position: "relative" }}
        >
          <img src={user.avatar} alt="User" className="user-avatar" />
          <span className="user-name">{user.name}</span>

          {dropdownOpen && (
            <div className="user-dropdown">
              <div className="dropdown-item" onClick={handleProfileClick}>
                Profile
              </div>
              <div className="dropdown-item" onClick={() => setShowLogoutModal(true)}>
                Logout
              </div>
            </div>
          )}
        </div>
      </div>
        
        {/* Logout Confirmation Modal */}
        <Modal show={showLogoutModal} onHide={() => setShowLogoutModal(false)} centered>
          <Modal.Body>
            <p><strong>Confirm Logout</strong></p>
            <p>Are you sure you want to logout?</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowLogoutModal(false)}>
              Cancel
            </Button>
            <Button variant="danger" onClick={handleLogout}>
              Logout
            </Button>
          </Modal.Footer>
        </Modal>
    </header>
  );
};

export default Header;
