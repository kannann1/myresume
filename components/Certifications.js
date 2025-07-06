import React, { useState, useEffect } from 'react'
import Title from './Title'

// Certificate data with icons, links, and tags
const certificationsData = [
  {
    id: 1,
    name: 'Kubestronaut',
    issuer: 'CNCF',
    date: 'October 13, 2024',
    logo: '/static/images/certifications/kubernetes.svg',
    icon: 'fab fa-kubernetes',
    iconColor: '#326CE5',
    verifyLink: 'https://www.credly.com/users/kannann1',
    tags: ['kubernetes', 'cloud-native', 'cncf']
  },
  {
    id: 2,
    name: 'Kubernetes and Cloud Native Security Associate (KCSA)',
    issuer: 'CNCF',
    date: 'October 13, 2024',
    icon: 'fab fa-kubernetes',
    iconColor: '#326CE5',
    verifyLink: 'https://www.credly.com/users/kannann1',
    tags: ['kubernetes', 'security', 'cloud-native', 'cncf']
  },
  {
    id: 3,
    name: 'Certified Kubernetes Security Specialist (CKS)',
    issuer: 'CNCF',
    date: 'October 10, 2024',
    icon: 'fab fa-kubernetes',
    iconColor: '#326CE5',
    verifyLink: 'https://www.credly.com/users/kannann1',
    tags: ['kubernetes', 'security', 'cloud-native', 'cncf']
  },
  {
    id: 4,
    name: 'Kubernetes and Cloud Native Associate Exam (KCNA)',
    issuer: 'CNCF',
    date: 'September 12, 2024',
    icon: 'fab fa-kubernetes',
    iconColor: '#326CE5',
    verifyLink: 'https://www.credly.com/users/kannann1',
    tags: ['kubernetes', 'cloud-native', 'cncf']
  },
  {
    id: 5,
    name: 'Certified Kubernetes Application Developer (CKAD)',
    issuer: 'CNCF',
    date: 'August 29, 2024',
    icon: 'fab fa-kubernetes',
    iconColor: '#326CE5',
    verifyLink: 'https://www.credly.com/users/kannann1',
    tags: ['kubernetes', 'development', 'cloud-native', 'cncf']
  },
  {
    id: 6,
    name: 'Certified Kubernetes Administrator (CKA)',
    issuer: 'CNCF',
    date: 'August 2, 2024',
    icon: 'fab fa-kubernetes',
    iconColor: '#326CE5',
    verifyLink: 'https://www.credly.com/users/kannann1',
    tags: ['kubernetes', 'administration', 'cloud-native', 'cncf']
  },
  {
    id: 7,
    name: 'Microsoft Certified: Azure Solutions Architect Expert',
    issuer: 'Microsoft',
    date: 'April 5, 2024',
    logo: '/static/images/certifications/microsoft.svg',
    icon: 'fab fa-microsoft',
    iconColor: '#00a4ef',
    verifyLink: 'https://www.credly.com/users/kannann1',
    tags: ['azure', 'cloud', 'architecture', 'microsoft']
  },
  {
    id: 8,
    name: 'Microsoft Certified: Azure Administrator Associate',
    issuer: 'Microsoft',
    date: 'April 5, 2024',
    icon: 'fab fa-microsoft',
    iconColor: '#00a4ef',
    verifyLink: 'https://www.credly.com/users/kannann1',
    tags: ['azure', 'cloud', 'administration', 'microsoft']
  },
  {
    id: 9,
    name: 'Oracle Cloud Infrastructure 2023 AI Certified Foundations Associate',
    issuer: 'Oracle',
    date: 'March 15, 2024',
    logo: '/static/images/certifications/oracle.svg',
    icon: 'fas fa-database',
    iconColor: '#f80000',
    verifyLink: 'https://www.credly.com/users/kannann1',
    tags: ['oracle', 'cloud', 'ai', 'oci']
  },
  {
    id: 10,
    name: 'Oracle Certified Professional: Java SE 17 Developer',
    issuer: 'Oracle',
    date: 'February 29, 2024',
    icon: 'fab fa-java',
    iconColor: '#f80000',
    verifyLink: 'https://www.credly.com/users/kannann1',
    tags: ['java', 'development', 'oracle']
  },
  {
    id: 11,
    name: 'Oracle Cloud Infrastructure 2019 Certified Architect Professional',
    issuer: 'Oracle',
    date: 'August 12, 2020',
    icon: 'fas fa-database',
    iconColor: '#f80000',
    verifyLink: 'https://www.credly.com/users/kannann1',
    tags: ['oracle', 'cloud', 'architecture', 'oci']
  },
  {
    id: 12,
    name: 'Oracle Cloud Infrastructure 2019 Certified Architect Associate',
    issuer: 'Oracle',
    date: 'July 20, 2020',
    icon: 'fas fa-database',
    iconColor: '#f80000',
    verifyLink: 'https://www.credly.com/users/kannann1',
    tags: ['oracle', 'cloud', 'architecture', 'oci']
  },
  {
    id: 13,
    name: 'Oracle Cloud Infrastructure Foundations 2020 Certified Associate',
    issuer: 'Oracle',
    date: 'June 15, 2020',
    icon: 'fas fa-database',
    iconColor: '#f80000',
    verifyLink: 'https://www.credly.com/users/kannann1',
    tags: ['oracle', 'cloud', 'oci']
  },
  {
    id: 14,
    name: 'Oracle Cloud Infrastructure Developer 2020 Certified Associate',
    issuer: 'Oracle',
    date: 'May 10, 2020',
    icon: 'fas fa-database',
    iconColor: '#f80000',
    verifyLink: 'https://www.credly.com/users/kannann1',
    tags: ['oracle', 'cloud', 'development', 'oci']
  },
  {
    id: 15,
    name: 'Oracle Cloud Infrastructure Cloud Operations 2020 Certified Associate',
    issuer: 'Oracle',
    date: 'April 5, 2020',
    icon: 'fas fa-database',
    iconColor: '#f80000',
    verifyLink: 'https://www.credly.com/users/kannann1',
    tags: ['oracle', 'cloud', 'operations', 'oci']
  },
  {
    id: 16,
    name: 'Oracle Cloud Infrastructure Security 2020 Certified Associate',
    issuer: 'Oracle',
    date: 'March 1, 2020',
    icon: 'fas fa-database',
    iconColor: '#f80000',
    verifyLink: 'https://www.credly.com/users/kannann1',
    tags: ['oracle', 'cloud', 'security', 'oci']
  },
  {
    id: 17,
    name: 'AWS Certified Solutions Architect – Associate',
    issuer: 'AWS',
    date: 'August 8, 2018',
    logo: '/static/images/certifications/aws.svg',
    icon: 'fab fa-aws',
    iconColor: '#FF9900',
    verifyLink: 'https://www.credly.com/users/kannann1',
    tags: ['aws', 'cloud', 'architecture']
  },
  {
    id: 18,
    name: 'Certified Scrum Master - CSM',
    issuer: 'Scrum Alliance',
    date: 'August 1, 2018',
    icon: 'fas fa-users',
    iconColor: '#009688',
    verifyLink: 'https://www.credly.com/users/kannann1',
    tags: ['scrum', 'agile', 'management']
  },
  {
    id: 19,
    name: 'IBM Certified Application Developer - Cloud Platform V2',
    issuer: 'IBM',
    date: 'August 17, 2017',
    icon: 'fab fa-ibm',
    iconColor: '#1F70C1',
    verifyLink: 'https://www.credly.com/users/kannann1',
    tags: ['ibm', 'cloud', 'development']
  }
];

// Get all unique tags from certifications
const getAllTags = () => {
  const tagsSet = new Set();
  certificationsData.forEach(cert => {
    cert.tags.forEach(tag => tagsSet.add(tag));
  });
  return Array.from(tagsSet);
};

// Get all unique issuers from certifications
const getAllIssuers = () => {
  const issuersSet = new Set();
  certificationsData.forEach(cert => {
    issuersSet.add(cert.issuer);
  });
  return Array.from(issuersSet);
};

const CertificationCard = ({ certification }) => {
  return (
    <div className="certification-card">
      <div className="card-header">
        <div className="logo-container">
          {certification.logo ? (
            <img src={certification.logo} alt={`${certification.issuer} logo`} className="cert-logo" />
          ) : (
            <i className={certification.icon} style={{ color: certification.iconColor, fontSize: '2rem' }}></i>
          )}
        </div>
        <div className="date">{certification.date}</div>
      </div>
      <div className="card-content">
        <h4 className="cert-title">{certification.name}</h4>
        <p className="issuer">Issued by: {certification.issuer}</p>
        <div className="tags">
          {certification.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
      </div>
      <div className="card-footer">
        <a href={certification.verifyLink} target="_blank" rel="noopener noreferrer" className="verify-link">
          <span className="icon">
            <i className="fas fa-certificate"></i>
          </span>
          <span>Verify</span>
        </a>
      </div>
    </div>
  );
};

const Certifications = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeIssuer, setActiveIssuer] = useState('all');
  const [filteredCertifications, setFilteredCertifications] = useState(certificationsData);
  
  const allTags = getAllTags();
  const allIssuers = getAllIssuers();
  
  useEffect(() => {
    let filtered = certificationsData;
    
    if (activeFilter !== 'all') {
      filtered = filtered.filter(cert => cert.tags.includes(activeFilter));
    }
    
    if (activeIssuer !== 'all') {
      filtered = filtered.filter(cert => cert.issuer === activeIssuer);
    }
    
    setFilteredCertifications(filtered);
  }, [activeFilter, activeIssuer]);

  return (
    <section id='certifications' className='hero wrapper'>
      <Title title='Certifications' color='#2c3e50' />
      
      <div className='container'>
        <div className="filters-container">
          <div className="filter-group">
            <h4 className="filter-title">Filter by Category:</h4>
            <div className="filter-options">
              <button 
                className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
                onClick={() => setActiveFilter('all')}
              >
                All
              </button>
              {allTags.map((tag, index) => (
                <button 
                  key={index} 
                  className={`filter-btn ${activeFilter === tag ? 'active' : ''}`}
                  onClick={() => setActiveFilter(tag)}
                >
                  {tag.charAt(0).toUpperCase() + tag.slice(1)}
                </button>
              ))}
            </div>
          </div>
          
          <div className="filter-group">
            <h4 className="filter-title">Filter by Issuer:</h4>
            <div className="filter-options">
              <button 
                className={`filter-btn ${activeIssuer === 'all' ? 'active' : ''}`}
                onClick={() => setActiveIssuer('all')}
              >
                All
              </button>
              {allIssuers.map((issuer, index) => (
                <button 
                  key={index} 
                  className={`filter-btn ${activeIssuer === issuer ? 'active' : ''}`}
                  onClick={() => setActiveIssuer(issuer)}
                >
                  {issuer}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="certifications-grid">
          {filteredCertifications.map(certification => (
            <CertificationCard key={certification.id} certification={certification} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .wrapper {
          padding-top: 50px;
          padding-bottom: 50px;
          background: #f5f7fa;
          color: #333333;
          font-size: 1.3em;
        }
        .filters-container {
          margin-bottom: 2rem;
          padding: 1rem;
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        }
        .filter-group {
          margin-bottom: 1rem;
        }
        .filter-title {
          font-size: 1rem;
          margin-bottom: 0.5rem;
          color: #2c3e50;
        }
        .filter-options {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .filter-btn {
          padding: 0.3rem 0.8rem;
          background-color: #f1f1f1;
          border: none;
          border-radius: 20px;
          font-size: 0.8rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .filter-btn:hover {
          background-color: #e0e0e0;
        }
        .filter-btn.active {
          background-color: #3498db;
          color: white;
        }
        .certifications-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.5rem;
        }
        .certification-card {
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          margin-bottom: 20px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .certification-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px;
          border-bottom: 1px solid #f0f0f0;
        }
        .logo-container {
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .cert-logo {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }
        .date {
          font-size: 0.8rem;
          color: #7f8c8d;
        }
        .card-content {
          padding: 1rem;
          flex-grow: 1;
        }
        .cert-title {
          font-size: 1rem;
          margin-bottom: 0.5rem;
          color: #2c3e50;
          font-weight: bold;
        }
        .issuer {
          font-size: 0.9rem;
          color: #7f8c8d;
          margin-bottom: 1rem;
        }
        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.3rem;
          margin-top: 0.5rem;
        }
        .tag {
          padding: 0.2rem 0.5rem;
          background-color: #e1f5fe;
          color: #0288d1;
          border-radius: 4px;
          font-size: 0.7rem;
        }
        .card-footer {
          padding: 1rem;
          border-top: 1px solid #f1f1f1;
          text-align: center;
        }
        .verify-link {
          display: inline-flex;
          align-items: center;
          color: #3498db;
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.2s ease;
        }
        .verify-link:hover {
          color: #2980b9;
        }
        .verify-link .icon {
          margin-right: 0.3rem;
        }
        @media screen and (max-width: 768px) {
          .certifications-grid {
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          }
        }
      `}</style>
    </section>
  )
}

export default Certifications
