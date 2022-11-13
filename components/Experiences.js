import React from 'react'
import Title from './Title'
import Timeline from './ExperiencesTimelineItem'

export default () => {
  return (
    <section className='hero wrapper has-text-centered'>
      <Title title='Experiences' color='#2c3e50' />
      <div className='container'>
      <Timeline side='right' time='May 2022 - Now' color='#4d8B22'>
          <h4 style={{ color: '#4d8B22' }}>Blue Rose Technologies</h4>
          <i className='position'>Senior Devops Consultant</i><br />
          <ul style={{ textAlign: 'left', padding: '0', margin: '0', listStyleType: 'disc' }}>
            <li>Responsible for CICD implementation for Oracle stack products and other custom implementations.</li>
            <li>Build Jenkins pipelines for build and deployment.</li>
            <li>Working on OEP application which is a Java based custom solution for middleware in Oracle Communication product stack</li>
            <li>Responsible for securing communications using SSL across the platform.</li>
            <li>Implement the monitoring system in Kubernetes cluster using Prometheus, Grafana, stack</li>
            <li>Implement the logging system using EFK stack</li>
          </ul>
        </Timeline>
        <Timeline side='left' time='Sep 2020 - May 2022' color='#228B22'>
          <h4 style={{ color: '#228B22' }}>property.xyz</h4>
          <i className='position'>Senior Software Engineer</i><br />
          <ul style={{ textAlign: 'left', padding: '0', margin: '0', listStyleType: 'circle' }}>
            <li>Fully responsible for end to end development, deployment and maintenance of highly scalable property data platform</li>
            <li>Built several Microservices based cloud native services using Quarkus Java / Kotlin</li>
            <li>Built frontend application using React &amp; NextJS</li>
            <li>Applied CI/CD practices and deployed containerized applications and managed them with Kubernetes, Helm &amp; Knative.</li>
            <li>Manage entire platform using GitOps strategy(JenkinsX)</li>
            <li>Manage applications running across different cloud platforms like AWS, Azure and GCP</li>
          </ul>
        </Timeline>
        <Timeline side='right' time='Nov 2018 - Sep 2020' color='#3498db'>
          <h4 style={{ color: '#3498db' }}>IBM UK</h4>
          <i className='position'>Software Engineer - Microservices &amp; DevOps</i><br />
          <ul style={{ textAlign: 'left', padding: '0', margin: '0', listStyleType: 'disc' }}>
            <li>Built 10+ Spring Boot services which were part of Microservices based system for a public sector client</li>
            <li>Demonstrated a strong drive to learn and advocate for development best practices(TDD, BDD, code reviews, peer programming, etc)</li>
            <li>Built filtering services using GraphQL and NodeJS</li>
            <li>Involved in migration of applications from Virtual Machines(EC2) to Kubernetes clusters(EKS)</li>
            <li>Created and implemented DevOps pipeline(GitlabCI) to deliver Infrastructure as Code</li>
            <li>Built workflows to create immutable infrastructure in AWS using Terraform</li>
            <li>Developed Ansible playbooks and automated the execution of routine Linux scripts</li>
          </ul>
        </Timeline>
        <Timeline side='left' time='Aug 2015 - Oct 2018' color='#9b59b6'>
          <h4 style={{ color: '#9b59b6' }}>IBM India</h4>
          <i className='position'>Microservices(Cloud) Engineer</i><br />
          <ul style={{ textAlign: 'left', padding: '0', margin: '0', listStyleType: 'circle' }}>
            <li>Develop 5 Spring Boot based Microservices applications by following BDD</li>
            <li>Conducted training to provide technical expertise to 500+ developers across India</li>
            <li>Established continuous build environment using IBM Cloud(previously Bluemix) Toolchain to speed up software development by 50%</li>
            <li>Created 3 distinct solutions to manage and monitor containerized workloads and Cloud Foundry services</li>
            <li>Implemented strong DevOps platform using Istio Service Mesh, Prometheus, Grafana, and PagerDuty</li>
          </ul>
        </Timeline>
        <Timeline side='right' time='Aug 2015 - Oct 2018' color='#e67e22'>
          <h4 style={{ color: '#e67e22' }}>IBM India</h4>
          <i className='position'>System Engineer - Billing Systems</i><br />
          <ul style={{ textAlign: 'left', padding: '0', margin: '0', listStyleType: 'disc' }}>
            <li>Built 2 services / adapters for integration of Billing system with other network elements in OSS/BSS stack with Spring Integrations &amp; JMS</li>
            <li>Built a secure invoice delivery system for leading Telecom company in Saudi Arabia</li>
            <li>Developed iScripts and iRule in Pipeline and changed Registry architecture for Telecommunication rating and realtime discounting modules</li>
            <li>Implemented opcodes using PCM-C for billing, discounting and invoicing</li>
            <li>Built 4 multi threaded applications / resuable assets for account creation, device management, billing and invocing</li>
            <li>Identified as the SME for rating, discounting, provisioning, settlement and billing life cycle management on Revenue management systems</li>
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
                    h4 {
                        font-size: 1.2em;
                        font-weight: bold;
                    }
                    p {
                        font-size: 0.8em;
                    }
                    i.position {
                        color: #c0392b;
                    }
                `}
      </style>
    </section>
  )
}
