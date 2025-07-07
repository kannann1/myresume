import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState('header');
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Make navbar sticky after scrolling past header
      setIsSticky(window.scrollY > 100);
      
      // Determine which section is currently in view
      const sections = [
        'header',
        'about', 
        'experiences', 
        'projects',
        'education', 
        'skills', 
        'certifications',
        'contact'
      ];
      const scrollPosition = window.scrollY + 100; // Offset for navbar height
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70, // Offset for navbar height
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
      setMenuActive(false); // Close mobile menu after clicking
    }
  };

  return (
    <nav className={`navbar is-fixed-top ${isSticky ? 'is-active' : ''}`} role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <a 
            className="navbar-item" 
            onClick={() => scrollToSection('header')}
            style={{ cursor: 'pointer' }}
          >
            <strong>Kannan</strong>
          </a>

          <a 
            role="button" 
            className={`navbar-burger ${menuActive ? 'is-active' : ''}`} 
            aria-label="menu" 
            aria-expanded="false" 
            onClick={() => setMenuActive(!menuActive)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className={`navbar-menu ${menuActive ? 'is-active' : ''}`}>
          <div className="navbar-end">
            <a 
              className={`navbar-item ${activeSection === 'about' ? 'is-active' : ''}`}
              onClick={() => scrollToSection('about')}
              style={{ cursor: 'pointer' }}
            >
              About
            </a>
            <a 
              className={`navbar-item ${activeSection === 'experiences' ? 'is-active' : ''}`}
              onClick={() => scrollToSection('experiences')}
              style={{ cursor: 'pointer' }}
            >
              Experience
            </a>
            <a 
              className={`navbar-item ${activeSection === 'projects' ? 'is-active' : ''}`}
              onClick={() => scrollToSection('projects')}
              style={{ cursor: 'pointer' }}
            >
              Projects
            </a>
            <a 
              className={`navbar-item ${activeSection === 'education' ? 'is-active' : ''}`}
              onClick={() => scrollToSection('education')}
              style={{ cursor: 'pointer' }}
            >
              Education
            </a>
            <a 
              className={`navbar-item ${activeSection === 'skills' ? 'is-active' : ''}`}
              onClick={() => scrollToSection('skills')}
              style={{ cursor: 'pointer' }}
            >
              Skills
            </a>
            <a 
              className={`navbar-item ${activeSection === 'certifications' ? 'is-active' : ''}`}
              onClick={() => scrollToSection('certifications')}
              style={{ cursor: 'pointer' }}
            >
              Certifications
            </a>
            <a 
              className={`navbar-item ${activeSection === 'contact' ? 'is-active' : ''}`}
              onClick={() => scrollToSection('contact')}
              style={{ cursor: 'pointer' }}
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .navbar {
          background-color: rgba(255, 255, 255, 0.95);
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          z-index: 1000;
        }
        .navbar.is-fixed-top {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          animation: slideDown 0.35s ease-out;
        }
        .navbar.is-active {
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }
        .navbar-item.is-active {
          background-color: #f5f5f5;
          color: #3273dc;
          font-weight: bold;
        }
        .navbar-burger {
          margin-left: auto;
          height: 3.25rem;
          width: 3.25rem;
        }
        .navbar-burger span {
          height: 2px;
          width: 20px;
          left: calc(50% - 10px);
          transition: all 0.3s ease-out;
        }
        .navbar-burger.is-active span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }
        .navbar-burger.is-active span:nth-child(2) {
          opacity: 0;
        }
        .navbar-burger.is-active span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }
        .navbar-menu.is-active {
          box-shadow: 0 8px 16px rgba(10, 10, 10, 0.1);
          max-height: calc(100vh - 3.25rem);
          overflow-y: auto;
        }
        @media screen and (max-width: 1023px) {
          .navbar-menu {
            padding: 0.5rem 0;
          }
          .navbar-menu .navbar-item {
            padding: 0.75rem 1.5rem;
            border-bottom: 1px solid rgba(0, 0, 0, 0.05);
          }
          .navbar-menu .navbar-item:last-child {
            border-bottom: none;
          }
        }
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
          }
          to {
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
