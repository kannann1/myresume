import React from 'react'
import Title from './Title'

export default () => {
  return (
    <section id='projects' className='hero wrapper has-text-centered'>
      <Title title='Projects' color='#2c3e50' />
      <div className='container'>
        <div className="project">
          <div className="project-header">
            <h4>qubership‑envgene</h4>
            <div className="project-link"><a href="https://github.com/Netcracker/qubership-envgene" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></div>
          </div>
          <i className='role'>System Analyst – LLD Specialist & Contributor (Netcracker Team)</i>
          <div className="tech-stack">
            <span className="tech-badge"><i className="fab fa-kubernetes"></i> Kubernetes</span>
            <span className="tech-badge"><i className="fab fa-java"></i> Java</span>
            <span className="tech-badge"><i className="fas fa-cubes"></i> CRDs</span>
            <span className="tech-badge"><i className="fas fa-cogs"></i> Terraform</span>
            <span className="tech-badge"><i className="fab fa-ansible"></i> Ansible</span>
            <span className="tech-badge"><i className="fab fa-git-alt"></i> GitOps</span>
            <span className="tech-badge"><i className="fab fa-jenkins"></i> Jenkins</span>
          </div>
          <div className="project-description">
            <p>Served as the System Analyst responsible for crafting the Low-Level Design (LLD) of qubership‑envgene, Netcracker's open-source environment templating platform.</p>
            
            <ul className="achievement-list">
              <li>Designed detailed architectural components: CRD schema, templating engine modules, data flow for environment generation, and secret encryption layers.</li>
              <li>Established integration design patterns with GitOps pipelines, enabling seamless environment provisioning via Jenkins/GitLab CI alongside Terraform and Ansible.</li>
              <li>Defined secure processes for secret handling, Git-based auditability, and version-controlled environment definitions to ensure consistency and compliance.</li>
              <li>Co-developed and maintained GitHub Pages documentation, including architecture diagrams, LLD diagrams, installation guides, and usage workflows for developer teams.</li>
            </ul>
            
            <div className="project-actions">
              <a href="https://github.com/Netcracker/qubership-envgene" target="_blank" rel="noopener noreferrer" className="project-action-button">
                <i className="fab fa-github"></i> View on GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="project">
          <div className="project-header">
            <h4>microservice‑bootstrap‑operator</h4>
            <div className="project-link"><a href="https://github.com/kannann1/microservice-bootstrap-operator" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></div>
          </div>
          <i className='role'>Architect & Sole Developer</i>
          <div className="tech-stack">
            <span className="tech-badge"><i className="fab fa-java"></i> Java</span>
            <span className="tech-badge"><i className="fab fa-kubernetes"></i> Kubernetes</span>
            <span className="tech-badge"><i className="fas fa-cubes"></i> CRDs</span>
            <span className="tech-badge"><i className="fas fa-book"></i> GitHub Pages</span>
          </div>
          <div className="project-description">
            <p>Sole architect and developer of a Java-based Kubernetes Operator designed to auto-generate microservice scaffolding—including custom resource definitions (CRDs), Deployments, Services, and ConfigMaps—via a single custom resource.</p>
            
            <ul className="achievement-list">
              <li>Developed all reconcile logic using the Kubernetes Operator SDK to dynamically handle microservice lifecycle operations in a production-like environment.</li>
              <li>Designed a declarative workflow, enabling developers to define microservice specs in a CR and instantly provision uniform infrastructure, significantly accelerating environment setup and ensuring consistency.</li>
              <li>Created comprehensive GitHub Pages documentation, featuring architectural diagrams, CRD examples, installation instructions, and usage guides to improve developer adoption and support.</li>
              <li>Demonstrates full ownership of platform tool development, end-to-end architecture, coding, and documentation, showcasing deep Kubernetes-native and Java platform engineering skills.</li>
            </ul>
            
            <div className="project-actions">
              <a href="https://github.com/kannann1/microservice-bootstrap-operator" target="_blank" rel="noopener noreferrer" className="project-action-button">
                <i className="fab fa-github"></i> View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .wrapper {
          padding-top: 50px;
          padding-bottom: 50px;
          background: #ecf0f1;
          color: #333333;
          font-size: 1.3em;
        }
        @media screen and (max-width: 768px) {
          .wrapper {
            padding-top: 30px;
            padding-bottom: 30px;
            font-size: 1.1em;
          }
        }
        .project {
          margin-bottom: 40px;
          padding: 20px;
          border-radius: 8px;
          text-align: left;
          background-color: #fff;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        @media screen and (max-width: 768px) {
          .project {
            margin-bottom: 30px;
            padding: 15px;
          }
        }
        h4 {
          font-size: 1.2em;
          font-weight: bold;
          display: inline-block;
          margin-right: 8px;
        }
        @media screen and (max-width: 768px) {
          h4 {
            font-size: 1.1em;
          }
        }
        .project-header {
          display: flex;
          align-items: center;
          margin-bottom: 5px;
        }
        .project-link a {
          color: #333;
          font-size: 1.2em;
          transition: color 0.3s ease;
        }
        .project-link a:hover {
          color: #3498db;
        }
        i.role {
          color: #3498db;
          font-weight: 500;
          display: block;
          margin-bottom: 5px;
        }
        @media screen and (max-width: 768px) {
          i.role {
            font-size: 0.9em;
          }
        }
        .tech-stack {
          margin: 12px 0;
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        @media screen and (max-width: 768px) {
          .tech-stack {
            margin: 10px 0;
            gap: 6px;
          }
        }
        .tech-badge {
          display: inline-flex;
          align-items: center;
          background-color: #f0f0f0;
          color: #333;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 0.75em;
          font-weight: 500;
        }
        @media screen and (max-width: 768px) {
          .tech-badge {
            padding: 3px 6px;
            font-size: 0.7em;
          }
        }
        .tech-badge i {
          margin-right: 4px;
          color: #3498db;
        }
        .project-description p {
          font-size: 0.9em;
          margin: 10px 0;
          line-height: 1.5;
        }
        @media screen and (max-width: 768px) {
          .project-description p {
            font-size: 0.85em;
            margin: 8px 0;
          }
        }
        .achievement-list {
          text-align: left;
          padding: 0;
          margin: 10px 0 0;
          list-style-type: none;
        }
        .achievement-list li {
          margin-bottom: 8px;
          position: relative;
          padding-left: 15px;
          line-height: 1.4;
          font-size: 0.9em;
        }
        @media screen and (max-width: 768px) {
          .achievement-list li {
            font-size: 0.8em;
            margin-bottom: 10px;
            line-height: 1.5;
          }
        }
        .achievement-list li:before {
          content: "•";
          position: absolute;
          left: 0;
          color: #666;
        }
        .project-actions {
          margin-top: 16px;
          display: flex;
          gap: 12px;
        }
        @media screen and (max-width: 768px) {
          .project-actions {
            margin-top: 14px;
            flex-direction: column;
            gap: 10px;
          }
        }
        .project-action-button {
          display: inline-flex;
          align-items: center;
          background-color: #3498db;
          color: white;
          padding: 8px 16px;
          border-radius: 4px;
          font-size: 0.9em;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        @media screen and (max-width: 768px) {
          .project-action-button {
            padding: 10px 16px;
            font-size: 0.85em;
            justify-content: center;
            width: 100%;
          }
        }
        .project-action-button:hover {
          background-color: #2980b9;
          transform: translateY(-2px);
        }
        .project-action-button i {
          margin-right: 6px;
        }
      `}</style>
    </section>
  )
}
