import React, { useState, useEffect } from 'react'
import Title from './Title'

const Skills = () => {
  const [activeTab, setActiveTab] = useState('technical')
  const [animateSkills, setAnimateSkills] = useState(false)

  // Add animation effect when skills section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateSkills(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    
    const skillsSection = document.getElementById('skills')
    if (skillsSection) observer.observe(skillsSection)
    
    return () => {
      if (skillsSection) observer.disconnect()
    }
  }, [])

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

  // Render a technical skill item with icon and progress bar
  const TechnicalSkillItem = ({ skill }) => {
    return (
      <div className="column is-3-desktop is-4-tablet is-6-mobile has-text-center skill-item">
        <div className={`skill-card ${animateSkills ? 'animate' : ''}`}>
          <div className="skill-icon">
            <i className={skill.icon} style={{ color: skill.iconColor || skill.color }}></i>
          </div>
          <div className="skill-info">
            <p className="skill-name">{skill.label}</p>
            <div className="skill-bar">
              <div 
                className="skill-progress" 
                style={{
                  width: animateSkills ? `${skill.value}%` : '0%', 
                  backgroundColor: skill.color,
                  transition: `width 1s ease-in-out ${Math.random() * 0.5}s`
                }}
              ></div>
            </div>
            <span className="skill-level" style={{color: getProficiencyColor(skill.level)}}>{skill.level}</span>
          </div>
        </div>
      </div>
    )
  }

  // Render a soft skill item with icon
  const SoftSkillItem = ({ skill }) => {
    // Map skill categories to appropriate icons
    const getSkillIcon = (name) => {
      const iconMap = {
        'Team Leadership': 'fas fa-users-cog',
        'Project Management': 'fas fa-tasks',
        'Strategic Planning': 'fas fa-chess',
        'Mentoring': 'fas fa-chalkboard-teacher',
        'Technical Communication': 'fas fa-comment-dots',
        'Documentation': 'fas fa-file-alt',
        'Cross-functional Collaboration': 'fas fa-people-arrows',
        'Client Interaction': 'fas fa-handshake',
        'Critical Thinking': 'fas fa-brain',
        'Innovation': 'fas fa-lightbulb',
        'Troubleshooting': 'fas fa-tools',
        'Architecture Design': 'fas fa-drafting-compass',
        'Adaptability': 'fas fa-sync-alt',
        'Time Management': 'fas fa-clock',
        'Attention to Detail': 'fas fa-search',
        'Continuous Learning': 'fas fa-graduation-cap'
      }
      return iconMap[name] || 'fas fa-star'
    }
    
    return (
      <div className={`soft-skill-item ${animateSkills ? 'animate' : ''}`}>
        <div className="soft-skill-icon">
          <i className={getSkillIcon(skill.name)}></i>
        </div>
        <div className="soft-skill-content">
          <h4 className="soft-skill-name">{skill.name}</h4>
          <p className="soft-skill-description">{skill.description}</p>
        </div>
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
                <h3 className="group-title">
                  <i className={group.name.includes('Cloud') ? 'fas fa-cloud' : 
                    group.name.includes('Backend') ? 'fas fa-server' : 
                    group.name.includes('Frontend') ? 'fas fa-desktop' : 
                    group.name.includes('Database') ? 'fas fa-database' : 
                    'fas fa-tools'} 
                  style={{marginRight: '10px'}}/>
                  {group.name}
                </h3>
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
                <h3 className="group-title">
                  <i className={group.name.includes('Leadership') ? 'fas fa-user-tie' : 
                    group.name.includes('Communication') ? 'fas fa-comments' : 
                    group.name.includes('Problem') ? 'fas fa-lightbulb' : 
                    'fas fa-user-check'} 
                  style={{marginRight: '10px'}}/>
                  {group.name}
                </h3>
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
          background: #2c3e50;
          color: #ffffff;
          font-size: 1.3em;
        }
        @media screen and (max-width: 768px) {
          .wrapper {
            padding-top: 30px;
            padding-bottom: 30px;
            font-size: 1.1em;
          }
        }
        .tabs {
          margin-bottom: 2rem;
        }
        @media screen and (max-width: 768px) {
          .tabs {
            margin-bottom: 1rem;
          }
          .tabs ul {
            flex-wrap: wrap;
            justify-content: center;
          }
          .tabs li {
            flex-basis: 33.33%;
          }
          .tabs a {
            padding: 0.5rem 0.25rem;
            font-size: 0.8rem;
          }
        }
        .tabs a {
          color: #ffffff;
        }
        .tabs li.is-active a {
          color: #2c3e50;
          border-bottom-color: #3498db;
        }
        .skill-group, .soft-skill-group {
          margin-bottom: 3rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          padding: 1.5rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s;
        }
        .skill-group:hover, .soft-skill-group:hover {
          transform: translateY(-5px);
        }
        .group-title {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
          color: #3498db;
          display: flex;
          align-items: center;
          border-bottom: 2px solid rgba(52, 152, 219, 0.3);
          padding-bottom: 0.5rem;
        }
        .group-description {
          margin-bottom: 1.5rem;
          font-size: 1rem;
          color: #bdc3c7;
        }
        .skill-card {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 1rem;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: transform 0.3s, box-shadow 0.3s;
          margin-bottom: 1rem;
        }
        .skill-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
        .skill-card.animate {
          animation: fadeIn 0.5s ease-in-out;
        }
        @media screen and (max-width: 768px) {
          .skill-card {
            padding: 0.75rem;
            margin-bottom: 0.5rem;
          }
          .skill-item {
            padding: 0.25rem;
          }
        }
        .skill-icon {
          font-size: 2.5rem;
          margin-bottom: 0.75rem;
          height: 60px;
          width: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        @media screen and (max-width: 768px) {
          .skill-icon {
            font-size: 1.75rem;
            height: 45px;
            width: 45px;
            margin-bottom: 0.5rem;
          }
        }
        .skill-info {
          width: 100%;
        }
        .skill-name {
          margin-bottom: 0.5rem;
          font-weight: bold;
          font-size: 0.9rem;
        }
        .skill-bar {
          height: 6px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 3px;
          margin-bottom: 0.5rem;
          overflow: hidden;
        }
        .skill-progress {
          height: 100%;
          border-radius: 3px;
        }
        .skill-level {
          font-size: 0.7rem;
          font-weight: 500;
        }
        .soft-skill-item {
          background: rgba(255, 255, 255, 0.1);
          padding: 1.5rem;
          border-radius: 8px;
          height: 100%;
          display: flex;
          align-items: flex-start;
          transition: transform 0.3s;
        }
        .soft-skill-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
        .soft-skill-item.animate {
          animation: fadeIn 0.5s ease-in-out;
        }
        @media screen and (max-width: 768px) {
          .soft-skill-item {
            padding: 1rem;
            margin-bottom: 0.5rem;
          }
        }
        .soft-skill-icon {
          font-size: 1.5rem;
          margin-right: 1rem;
          color: #3498db;
          min-width: 30px;
          text-align: center;
        }
        @media screen and (max-width: 768px) {
          .soft-skill-icon {
            font-size: 1.25rem;
            margin-right: 0.75rem;
            min-width: 24px;
          }
        }
        .soft-skill-content {
          flex: 1;
        }
        .soft-skill-name {
          color: #3498db;
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
        }
        .soft-skill-description {
          font-size: 0.9rem;
          color: #ecf0f1;
        }
        @media screen and (max-width: 768px) {
          .soft-skill-name {
            font-size: 1rem;
            margin-bottom: 0.25rem;
          }
          .soft-skill-description {
            font-size: 0.8rem;
            line-height: 1.4;
          }
        }
        .proficiency-container {
          max-width: 800px;
          margin: 0 auto;
          text-align: left;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          padding: 1.5rem;
        }
        @media screen and (max-width: 768px) {
          .proficiency-container {
            padding: 1rem;
            margin: 0 0.5rem;
          }
        }
        .proficiency-level {
          display: inline-block;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          margin: 0.5rem;
          font-weight: 500;
        }
        @media screen and (max-width: 768px) {
          .proficiency-level {
            padding: 0.35rem 0.75rem;
            margin: 0.25rem;
            font-size: 0.8rem;
          }
        }
        .proficiency-description {
          margin-top: 0.5rem;
          font-size: 0.9rem;
        }
        @media screen and (max-width: 768px) {
          .proficiency-description {
            font-size: 0.8rem;
            line-height: 1.4;
          }
        }
        .level-badge {
          padding: 3px 10px;
          border-radius: 10px;
          color: white;
          font-size: 0.8em;
          margin-right: 1rem;
          min-width: 80px;
          text-align: center;
        }
        .level-description {
          font-size: 0.9em;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}

export default Skills
