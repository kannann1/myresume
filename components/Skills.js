import React, { useState } from 'react'
import Title from './Title'
import circle from './../static/css/circle.css'

export default () => {
  const [activeTab, setActiveTab] = useState('technical')

  // Technical skills with proficiency levels and thematic groups
  const technicalSkills = [
    {
      name: 'Cloud & DevOps',
      description: 'Cloud platforms, containerization, and infrastructure automation',
      skills: [
        { name: 'azure', label: 'Azure', color: '#0078D4', value: '80', level: 'Expert', icon: 'fab fa-microsoft', iconColor: '#0078D4' },
        { name: 'aws', label: 'AWS', color: '#FF9900', value: '75', level: 'Advanced', icon: 'fab fa-aws', iconColor: '#FF9900' },
        { name: 'kubernetes', label: 'Kubernetes', color: '#326CE5', value: '85', level: 'Expert', icon: 'fas fa-dharmachakra', iconColor: '#326CE5' },
        { name: 'docker', label: 'Docker', color: '#2496ED', value: '85', level: 'Expert', icon: 'fab fa-docker', iconColor: '#2496ED' },
        { name: 'ibmcloud', label: 'IBM Cloud', color: '#1261FE', value: '75', level: 'Advanced', icon: 'fas fa-cloud', iconColor: '#1261FE' },
        { name: 'oci', label: 'Oracle Cloud', color: '#C74634', value: '65', level: 'Intermediate', icon: 'fas fa-cloud', iconColor: '#C74634' },
        { name: 'terraform', label: 'Terraform', color: '#7B42BC', value: '80', level: 'Advanced', icon: 'fas fa-cubes', iconColor: '#7B42BC' },
        { name: 'ansible', label: 'Ansible', color: '#EE0000', value: '75', level: 'Advanced', icon: 'fas fa-cogs', iconColor: '#EE0000' },
        { name: 'argocd', label: 'ArgoCD', color: '#EF7B4D', value: '75', level: 'Advanced', icon: 'fas fa-code-branch', iconColor: '#EF7B4D' },
        { name: 'istio', label: 'Istio', color: '#466BB0', value: '80', level: 'Advanced', icon: 'fas fa-network-wired', iconColor: '#466BB0' },
        { name: 'knative', label: 'Knative', color: '#0865AD', value: '75', level: 'Advanced', icon: 'fas fa-server', iconColor: '#0865AD' }
      ]
    },
    {
      name: 'Backend Development',
      description: 'Server-side programming languages and frameworks',
      skills: [
        { name: 'java', label: 'Java', color: '#007396', value: '80', level: 'Expert', icon: 'fab fa-java', iconColor: '#007396' },
        { name: 'spring', label: 'Spring', color: '#6DB33F', value: '80', level: 'Expert', icon: 'fas fa-leaf', iconColor: '#6DB33F' },
        { name: 'quarkus', label: 'Quarkus', color: '#4695EB', value: '75', level: 'Advanced', icon: 'fas fa-bolt', iconColor: '#4695EB' },
        { name: 'nodejs', label: 'Node.js', color: '#339933', value: '70', level: 'Advanced', icon: 'fab fa-node-js', iconColor: '#339933' },
        { name: 'kotlin', label: 'Kotlin', color: '#7F52FF', value: '55', level: 'Intermediate', icon: 'fas fa-code', iconColor: '#7F52FF' },
        { name: 'python', label: 'Python', color: '#3776AB', value: '50', level: 'Intermediate', icon: 'fab fa-python', iconColor: '#3776AB' },
        { name: 'kafka', label: 'Kafka', color: '#231F20', value: '80', level: 'Advanced', icon: 'fas fa-stream', iconColor: '#231F20' }
      ]
    },
    {
      name: 'Frontend Development',
      description: 'Client-side technologies and frameworks',
      skills: [
        { name: 'html5', label: 'HTML5', color: '#E34F26', value: '75', level: 'Advanced', icon: 'fab fa-html5', iconColor: '#E34F26' },
        { name: 'css3', label: 'CSS3', color: '#1572B6', value: '70', level: 'Advanced', icon: 'fab fa-css3-alt', iconColor: '#1572B6' },
        { name: 'javascript', label: 'JavaScript', color: '#F7DF1E', value: '70', level: 'Advanced', icon: 'fab fa-js', iconColor: '#F7DF1E' },
        { name: 'reactjs', label: 'React', color: '#61DAFB', value: '70', level: 'Advanced', icon: 'fab fa-react', iconColor: '#61DAFB' },
        { name: 'bootstrap', label: 'Bootstrap', color: '#7952B3', value: '70', level: 'Advanced', icon: 'fab fa-bootstrap', iconColor: '#7952B3' },
        { name: 'jquery', label: 'jQuery', color: '#0769AD', value: '60', level: 'Intermediate', icon: 'fas fa-code', iconColor: '#0769AD' },
        { name: 'sass', label: 'Sass', color: '#CC6699', value: '50', level: 'Intermediate', icon: 'fab fa-sass', iconColor: '#CC6699' },
        { name: 'nextjs', label: 'Next.js', color: '#000000', value: '65', level: 'Intermediate', icon: 'fab fa-react', iconColor: '#000000' }
      ]
    },
    {
      name: 'Databases & Storage',
      description: 'Database systems and data storage technologies',
      skills: [
        { name: 'oracle', label: 'Oracle', color: '#F80000', value: '75', level: 'Advanced', icon: 'fas fa-database', iconColor: '#F80000' },
        { name: 'postgres', label: 'PostgreSQL', color: '#336791', value: '70', level: 'Advanced', icon: 'fas fa-database', iconColor: '#336791' },
        { name: 'mongodb', label: 'MongoDB', color: '#47A248', value: '70', level: 'Advanced', icon: 'fas fa-leaf', iconColor: '#47A248' },
        { name: 'elasticsearch', label: 'Elasticsearch', color: '#005571', value: '70', level: 'Advanced', icon: 'fas fa-search', iconColor: '#005571' },
        { name: 'mysql', label: 'MySQL', color: '#4479A1', value: '50', level: 'Intermediate', icon: 'fas fa-database', iconColor: '#4479A1' },
        { name: 'redis', label: 'Redis', color: '#DC382D', value: '60', level: 'Intermediate', icon: 'fas fa-server', iconColor: '#DC382D' }
      ]
    },
    {
      name: 'Tools & Practices',
      description: 'Development tools and methodologies',
      skills: [
        { name: 'git', label: 'Git', color: '#F05032', value: '80', level: 'Expert', icon: 'fab fa-git-alt', iconColor: '#F05032' },
        { name: 'maven', label: 'Maven', color: '#C71A36', value: '80', level: 'Expert', icon: 'fas fa-feather', iconColor: '#C71A36' },
        { name: 'npm', label: 'NPM', color: '#CB3837', value: '80', level: 'Advanced', icon: 'fab fa-npm', iconColor: '#CB3837' },
        { name: 'jenkins', label: 'Jenkins', color: '#D24939', value: '75', level: 'Advanced', icon: 'fas fa-cog', iconColor: '#D24939' },
        { name: 'jenkinsx', label: 'Jenkins X', color: '#73C3D5', value: '60', level: 'Intermediate', icon: 'fas fa-cogs', iconColor: '#73C3D5' },
        { name: 'webpack', label: 'Webpack', color: '#8DD6F9', value: '40', level: 'Basic', icon: 'fas fa-cube', iconColor: '#8DD6F9' },
        { name: 'cicd', label: 'CI/CD', color: '#4285F4', value: '85', level: 'Expert', icon: 'fas fa-sync-alt', iconColor: '#4285F4' }
      ]
    }
  ]

  // Soft skills with descriptions
  const softSkills = [
    {
      name: 'Leadership & Management',
      skills: [
        { name: 'Team Leadership', description: 'Experience leading cross-functional teams of 5-15 members, fostering collaboration and driving results.' },
        { name: 'Project Management', description: 'Skilled in Agile and traditional project management methodologies, consistently delivering projects on time and within budget.' },
        { name: 'Strategic Planning', description: 'Ability to develop and implement technical strategies aligned with business objectives.' },
        { name: 'Mentoring', description: 'Passion for mentoring junior developers and helping team members grow their technical skills.' }
      ]
    },
    {
      name: 'Communication & Collaboration',
      skills: [
        { name: 'Technical Communication', description: 'Excellent at explaining complex technical concepts to both technical and non-technical stakeholders.' },
        { name: 'Documentation', description: 'Strong technical writing skills with experience creating comprehensive documentation for complex systems.' },
        { name: 'Cross-functional Collaboration', description: 'Effective at working across departments including product, design, and business teams.' },
        { name: 'Client Interaction', description: 'Experience presenting technical solutions to clients and addressing their concerns effectively.' }
      ]
    },
    {
      name: 'Problem Solving & Innovation',
      skills: [
        { name: 'Critical Thinking', description: 'Analytical approach to problem-solving with ability to break down complex issues into manageable components.' },
        { name: 'Innovation', description: 'Track record of introducing innovative solutions that improve system performance and user experience.' },
        { name: 'Troubleshooting', description: 'Expert at diagnosing and resolving complex technical issues in production environments.' },
        { name: 'Architecture Design', description: 'Experience designing scalable, resilient system architectures for enterprise applications.' }
      ]
    },
    {
      name: 'Personal Attributes',
      skills: [
        { name: 'Adaptability', description: 'Quick to learn new technologies and adapt to changing project requirements and priorities.' },
        { name: 'Time Management', description: 'Excellent at prioritizing tasks and managing multiple projects simultaneously.' },
        { name: 'Attention to Detail', description: 'Meticulous approach to code quality, testing, and documentation.' },
        { name: 'Continuous Learning', description: 'Committed to ongoing professional development and staying current with industry trends.' }
      ]
    }
  ]

  // Proficiency level descriptions
  const proficiencyLevels = [
    { level: 'Expert', description: 'Deep knowledge and extensive experience, capable of architecting complex solutions and mentoring others', color: '#28a745' },
    { level: 'Advanced', description: 'Strong working knowledge with practical experience in various scenarios and challenges', color: '#17a2b8' },
    { level: 'Intermediate', description: 'Good understanding with some practical experience in real-world applications', color: '#ffc107' },
    { level: 'Basic', description: 'Fundamental understanding with limited practical experience', color: '#6c757d' }
  ]

  // Render a technical skill item with circular progress indicator
  const TechnicalSkillItem = ({ skill }) => {
    return (
      <div className="column is-3-desktop is-4-tablet is-6-mobile has-text-center skill-item">
        <div className="skill-circle-container">
          <div className={`circle c100 p${skill.value} dark big orange`}>
            <span>
              {skill.icon ? (
                <i className={skill.icon} style={{ color: skill.iconColor || skill.color, fontSize: '30px', marginTop: '30px' }}></i>
              ) : (
                <img src={`/static/images/skills/${skill.name}.png`} alt={skill.label} />
              )}
            </span>
            <div className="slice">
              <div className="bar" style={{borderColor: skill.color}} />
              <div className="fill" style={{borderColor: skill.color}} />
            </div>
          </div>
          <div className="skill-tooltip">
            <strong>{skill.label}</strong><br />
            Proficiency: {parseInt(skill.value)/10}/10<br />
            Level: <span style={{color: getProficiencyColor(skill.level)}}>{skill.level}</span>
          </div>
        </div>
        <p className="skill-name">{skill.label}</p>
        <span className="skill-level" style={{backgroundColor: getProficiencyColor(skill.level)}}>{skill.level}</span>
      </div>
    )
  }

  // Render a soft skill item
  const SoftSkillItem = ({ skill }) => {
    return (
      <div className="soft-skill-item">
        <h4 className="soft-skill-name">{skill.name}</h4>
        <p className="soft-skill-description">{skill.description}</p>
      </div>
    )
  }

  // Helper function to get color for proficiency level
  const getProficiencyColor = (level) => {
    const levelObj = proficiencyLevels.find(l => l.level === level)
    return levelObj ? levelObj.color : '#6c757d'
  }

  return (
    <section id='skills' className='hero wrapper has-text-centered'>
      <style dangerouslySetInnerHTML={{ __html: circle }} />
      <Title title='Skills' color='#ffffff' />
      
      {/* Tab navigation */}
      <div className="container">
        <div className="tabs is-centered is-boxed">
          <ul>
            <li className={activeTab === 'technical' ? 'is-active' : ''}>
              <a onClick={() => setActiveTab('technical')}>
                <span className="icon is-small"><i className="fas fa-laptop-code"></i></span>
                <span>Technical Skills</span>
              </a>
            </li>
            <li className={activeTab === 'soft' ? 'is-active' : ''}>
              <a onClick={() => setActiveTab('soft')}>
                <span className="icon is-small"><i className="fas fa-users"></i></span>
                <span>Soft Skills</span>
              </a>
            </li>
            <li className={activeTab === 'proficiency' ? 'is-active' : ''}>
              <a onClick={() => setActiveTab('proficiency')}>
                <span className="icon is-small"><i className="fas fa-chart-line"></i></span>
                <span>Proficiency Levels</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Technical skills tab content */}
        {activeTab === 'technical' && (
          <div className="technical-skills-container">
            {technicalSkills.map((group, index) => (
              <div key={index} className="skill-group">
                <h3 className="group-title">{group.name}</h3>
                <p className="group-description">{group.description}</p>
                <div className="columns is-multiline is-mobile">
                  {group.skills.map((skill, skillIndex) => (
                    <TechnicalSkillItem key={skillIndex} skill={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Soft skills tab content */}
        {activeTab === 'soft' && (
          <div className="soft-skills-container">
            {softSkills.map((group, index) => (
              <div key={index} className="soft-skill-group">
                <h3 className="group-title">{group.name}</h3>
                <div className="columns is-multiline">
                  {group.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="column is-6-desktop is-12-tablet">
                      <SoftSkillItem skill={skill} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Proficiency levels tab content */}
        {activeTab === 'proficiency' && (
          <div className="proficiency-container">
            <div className="content">
              <p className="proficiency-intro">My technical skills are categorized into the following proficiency levels:</p>
              {proficiencyLevels.map((level, index) => (
                <div key={index} className="proficiency-level">
                  <span className="level-badge" style={{backgroundColor: level.color}}>{level.level}</span>
                  <span className="level-description">{level.description}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .wrapper {
          padding-top: 50px;
          padding-bottom: 50px;
          background: #2f353f;
          background-size: cover;
          color: #ffffff;
          font-size: 1.1em;
        }
        .tabs {
          margin-bottom: 2rem;
        }
        .tabs a {
          color: #ffffff;
          border-bottom-color: #4a4a4a;
        }
        .tabs li.is-active a {
          color: #3273dc;
          border-bottom-color: #3273dc;
          background-color: rgba(255, 255, 255, 0.9);
        }
        .tabs ul {
          border-bottom-color: #4a4a4a;
        }
        .group-title {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
          color: #ffffff;
          border-bottom: 2px solid #3273dc;
          display: inline-block;
          padding-bottom: 0.25rem;
        }
        .group-description {
          margin-bottom: 1.5rem;
          color: #b5b5b5;
          font-style: italic;
        }
        .skill-group {
          margin-bottom: 3rem;
        }
        .skill-name {
          margin-top: 0.5rem;
          font-weight: bold;
          color: #ffffff;
        }
        .skill-level {
          font-size: 0.75rem;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          color: white;
          display: inline-block;
          margin-top: 0.25rem;
        }
        .skill-item {
          margin-bottom: 2rem;
        }
        .soft-skill-group {
          margin-bottom: 2rem;
        }
        .soft-skill-item {
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 1rem;
          height: 100%;
          transition: transform 0.3s ease, background-color 0.3s ease;
        }
        .soft-skill-item:hover {
          transform: translateY(-5px);
          background-color: rgba(255, 255, 255, 0.15);
        }
        .soft-skill-name {
          font-weight: bold;
          color: #3273dc;
          margin-bottom: 0.5rem;
        }
        .soft-skill-description {
          color: #e0e0e0;
          font-size: 0.9rem;
        }
        .proficiency-container {
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 2rem;
          max-width: 800px;
          margin: 0 auto;
        }
        .proficiency-intro {
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
        }
        .proficiency-level {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
        }
        .level-badge {
          padding: 0.25rem 0.75rem;
          border-radius: 4px;
          color: white;
          font-weight: bold;
          margin-right: 1rem;
          min-width: 100px;
          text-align: center;
        }
        .level-description {
          color: #e0e0e0;
        }
        .skill-circle-container {
          position: relative;
          display: inline-block;
        }
        .skill-tooltip {
          display: none;
          width: 160px;
          background-color: rgba(0, 0, 0, 0.8);
          color: #fff;
          text-align: center;
          border-radius: 6px;
          padding: 10px;
          font-size: 14px;
          position: absolute;
          z-index: 100;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .skill-circle-container:hover .skill-tooltip {
          display: block;
          opacity: 1;
        }
        img {
          margin-top: 30px;
          max-width: 60px;
          transition: transform 0.5s ease-in-out;
        }
        .circle:hover img {
          transform: rotate(-720deg);
        }
        .circle {
          margin: 10px auto;
          transition: transform 0.5s ease-in-out;
        }
        .circle:hover {
          transform: rotate(360deg) scale(1.2);
          z-index: 999;
        }
      `}</style>
    </section>
  )
}
