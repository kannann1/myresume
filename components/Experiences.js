import React from 'react'
import Title from './Title'
import Timeline from './ExperiencesTimelineItem'

export default () => {
  return (
    <section id='experiences' className='hero wrapper has-text-centered'>
      <Title title='Experiences' color='#2c3e50' />
      <div className='container'>
      <Timeline side='left' time='Nov 204 - Now' color='#E199FF'>
      <div className="company-header">
            <h4>Netcracker Technologies</h4>
            <div className="company-link"><a href="https://www.netcracker.com" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i></a></div>
          </div>
          <i className='position'>Lead DevOps Engineer</i>
          <div className="tech-stack">Kubernetes | Terraform | Ansible | GitOps | Jenkins | Prometheus | EFK | qubership‑envgene</div>
          <ul className="achievement-list">
            <li>Led the system design of qubership‑envgene, a templated environment generator: architected the solution structure to automate reproducible Dev/Test/Prod environments with version-controlled inventory and encrypted secret handling</li>
            <li>Designed the integration architecture for qubership‑envgene with existing CI/CD pipelines (Jenkins, GitLab CI) and GitOps workflows, ensuring seamless provisioning and synchronization from Git to Kubernetes clusters</li>
            <li>Constructed multi-cloud Kubernetes clusters (AWS & GCP) infrastructure using Terraform and Ansible, enabling scalable and consistent environment deployments across cloud providers</li>
            <li>Collaborated with delivery engineers to implement blue/green deployment strategies, rollback capabilities, and policies—contributing to a <span className="metric">45%</span> reduction in deployment incidents</li>
            <li>Established security design patterns—including namespace-based isolation, RBAC, and integration with Vault/SSM for secrets—supporting zero critical vulnerabilities in deployments</li>
            <li>Guided DevOps team members through design reviews, architectural best practices, and GitOps principles to empower their work on tertiary automation components</li>
            <li>Contributed to platform governance frameworks (resource quotas, audit logging, policy-as-code), facilitating Netcracker’s broader cloud transformation strategy</li>
          </ul>
        </Timeline>
      <Timeline side='right' time='Aug 2023 - Nov 2024' color='#1E90FF'>
          <div className="company-header">
            <h4>Oracle India</h4>
            <div className="company-link"><a href="https://www.oracle.com" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i></a></div>
          </div>
          <i className='position'>Senior Principal DevOps Consultant</i>
          <div className="tech-stack">Kubernetes | Helm | Jenkins | Ansible | Prometheus | EFK</div>
          <ul className="achievement-list">
            <li>Designed and implemented high-availability Kubernetes clusters with automated disaster recovery, achieving <span className="metric">99.95%</span> system availability</li>
            <li>Built comprehensive observability platform with Prometheus, Grafana, and EFK stack, reducing MTTR by <span className="metric">40%</span></li>
            <li>Automated infrastructure provisioning with Terraform and Ansible, cutting deployment time by <span className="metric">65%</span></li>
            <li>Implemented security best practices across the CI/CD pipeline, resulting in zero critical vulnerabilities in production</li>
            <li>Led technical workshops for 20+ client engineers on Kubernetes and cloud-native technologies</li>
          </ul>
        </Timeline>
        <Timeline side='left' time='May 2022 - July 2023' color='#2E8B57'>
          <div className="company-header">
            <h4>Blue Rose Technologies</h4>
            <div className="company-link"><a href="https://bluerose-tech.com" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i></a></div>
          </div>
          <i className='position'>Senior Software Engineer</i>
          <div className="tech-stack">Kubernetes | ArgoCD | Terraform | AWS | Prometheus | ELK</div>
          <ul className="achievement-list">
            <li>Architected and implemented scalable cloud infrastructure for a property data startup, focusing on reliability and cost-efficiency</li>
            <li>Established GitOps workflow with ArgoCD, reducing deployment cycles from days to hours</li>
            <li>Built cloud-native microservices using Quarkus and Kotlin, improving service response time by <span className="metric">45%</span></li>
            <li>Implemented infrastructure-as-code practices with Terraform, enabling complete environment provisioning in under <span className="metric">30 minutes</span></li>
            <li>Designed and implemented real-time data processing pipeline handling <span className="metric">5TB+</span> of property data daily</li>
          </ul>
        </Timeline>
        <Timeline side='right' time='Sep 2020 - May 2022' color='#32CD32'>
          <div className="company-header">
            <h4>property.xyz</h4>
            <div className="company-link"><a href="https://property.xyz" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i></a></div>
          </div>
          <i className='position'>Senior Software Engineer</i>
          <div className="tech-stack">Kubernetes | JenkinsX | AWS | GCP | Azure | Quarkus | React</div>
          <ul className="achievement-list">
            <li>Architected and implemented scalable cloud infrastructure for a property data startup, focusing on reliability and cost-efficiency</li>
            <li>Established GitOps workflow with JenkinsX, reducing deployment cycles from days to hours</li>
            <li>Built cloud-native microservices using Quarkus and Kotlin, improving service response time by <span className="metric">45%</span></li>
            <li>Implemented infrastructure-as-code practices with Terraform, enabling complete environment provisioning in under <span className="metric">30 minutes</span></li>
            <li>Designed and implemented efficient data processing pipeline for UK property market data, optimizing for startup budget constraints while maintaining data integrity</li>
          </ul>
        </Timeline>

        <Timeline side='left' time='Nov 2018 - Sep 2020' color='#4169E1'>
          <div className="company-header">
            <h4>IBM UK</h4>
            <div className="company-link"><a href="https://www.ibm.com" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i></a></div>
          </div>
          <i className='position'>Cloud Engineer</i>
          <div className="tech-stack">AWS | EKS | Terraform | GitLab CI | Ansible | Spring Boot</div>
          <ul className="achievement-list">
            <li>Led migration of 15+ applications from EC2 to EKS, improving resource utilization by <span className="metric">55%</span></li>
            <li>Implemented GitLab CI/CD pipelines that reduced build and deployment time by <span className="metric">70%</span></li>
            <li>Designed and implemented immutable infrastructure with Terraform, enabling complete environment recreation in under <span className="metric">45 minutes</span></li>
            <li>Built monitoring and alerting system that reduced MTTR from hours to minutes</li>
            <li>Automated routine operations with Ansible, saving Weekly <span className="metric">20+</span> hours of manual work weekly</li>
          </ul>
        </Timeline>

        <Timeline side='right' time='June 2013 - Oct 2018' color='#8A2BE2'>
          <div className="company-header">
            <h4>IBM India</h4>
            <div className="company-link"><a href="https://www.ibm.com" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i></a></div>
          </div>
          <i className='position'>Java Microservice Developer</i>
          <div className="tech-stack">IBM Cloud | Kubernetes | Istio | Spring Boot | Prometheus | Grafana</div>
          <ul className="achievement-list">
            <li>Built and maintained DevOps platform serving <span className="metric">500+</span> developers across India</li>
            <li>Implemented CI/CD automation that accelerated software delivery by <span className="metric">50%</span></li>
            <li>Designed and deployed service mesh architecture with Istio, improving service reliability by <span className="metric">35%</span></li>
            <li>Created comprehensive monitoring solution with Prometheus, Grafana, and PagerDuty, reducing incident response time by <span className="metric">60%</span></li>
            <li>Developed and delivered technical training programs for cloud-native technologies to <span className="metric">500+</span> developers</li>
          </ul>
        </Timeline>
      </div>

      <style jsx>{`
                    .wrapper {
                        padding-top: 50px;
                        padding-bottom: 50px;
                        background: #bdc3c7;
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
                    p {
                        font-size: 0.8em;
                    }
                    i.position {
                        color: #c0392b;
                        font-weight: 500;
                        display: block;
                        margin-bottom: 5px;
                    }
                    @media screen and (max-width: 768px) {
                        i.position {
                            font-size: 0.9em;
                        }
                    }
                    .company-header {
                        display: flex;
                        align-items: center;
                        margin-bottom: 5px;
                    }
                    .company-link a {
                        color: #333;
                        font-size: 0.8em;
                        transition: color 0.3s ease;
                    }
                    .company-link a:hover {
                        color: #c0392b;
                    }
                    .tech-stack {
                        font-size: 0.8em;
                        color: #555;
                        margin: 8px 0;
                        background-color: rgba(0, 0, 0, 0.05);
                        border-radius: 4px;
                        padding: 5px 10px;
                        display: inline-block;
                    }
                    @media screen and (max-width: 768px) {
                        .tech-stack {
                            font-size: 0.75em;
                            padding: 4px 8px;
                            line-height: 1.4;
                            width: 100%;
                            box-sizing: border-box;
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
                    }
                    @media screen and (max-width: 768px) {
                        .achievement-list li {
                            font-size: 0.85em;
                            margin-bottom: 10px;
                            line-height: 1.5;
                        }
                    }
                    .achievement-list li:before {
                        content: "▹";
                        position: absolute;
                        left: 0;
                        color: #c0392b;
                    }
                    .metric {
                        color: #c0392b;
                        font-weight: 600;
                    }
                `}
      </style>
    </section>
  )
}
