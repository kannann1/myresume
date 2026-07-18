// Single source of truth for all site content.
// Edit this file to update the site — no component changes needed.

export const site = {
  url: 'https://kannann1.netlify.app',
  title: 'Kannan N | Lead DevOps Engineer & Kubestronaut',
  description:
    'Lead DevOps Engineer with 12+ years of experience in Kubernetes, AWS, Azure, GitOps and platform engineering. CNCF Kubestronaut — CKA, CKAD, CKS, KCNA, KCSA.',
  keywords:
    'DevOps Engineer, Cloud Engineer, Kubernetes, Kubestronaut, Docker, AWS, Azure, CI/CD, GitOps, Terraform, Ansible, Platform Engineering',
  themeColor: '#060b18'
}

export const person = {
  name: 'Kannan Narayanasamy',
  shortName: 'Kannan',
  role: 'Lead DevOps Engineer',
  typedRoles: [
    'Lead DevOps Engineer',
    'CNCF Kubestronaut',
    'Platform & Cloud Architect',
    'GitOps Practitioner',
    'Open-Source Contributor'
  ],
  location: 'Bangalore, India',
  email: 'n.kannan200@gmail.com',
  phone: '+91-9591977331',
  photo: '/static/images/profile-2.png',
  resume: '/static/resume/Kannan_Resume.pdf',
  summary:
    'I design and operate the platforms other engineers build on — Kubernetes at scale, ' +
    'multi-cloud infrastructure as code, and CI/CD that ships in minutes, not days.',
  stats: [
    { value: '12+', label: 'Years of Experience' },
    { value: '19', label: 'Certifications' },
    { value: '99.95%', label: 'Uptime Delivered' },
    { value: '500+', label: 'Engineers Trained' }
  ],
  social: [
    { name: 'GitHub', url: 'https://github.com/kannann1', icon: 'fab fa-github' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/kannan91/', icon: 'fab fa-linkedin-in' },
    { name: 'Medium', url: 'https://medium.com/@Kannan91', icon: 'fab fa-medium-m' },
    { name: 'Credly', url: 'https://www.credly.com/users/kannann1', icon: 'fas fa-certificate' }
  ]
}

export const about = {
  intro:
    'Platform-first DevOps leader with hands-on Kubernetes expertise and 12+ years of experience ' +
    'architecting and operating high-scale infrastructure and developer platforms. ' +
    'A certified CKA, CKAD, CKS and CNCF Kubestronaut, I bring an automation-first mindset to everything I do.',
  highlights: [
    {
      icon: 'fas fa-rocket',
      title: 'Systemic impact',
      text: 'Led CI/CD and reliability initiatives that accelerated deployment speeds by 60%, kept uptime above 99.9%, and cut incident response time by 40%.'
    },
    {
      icon: 'fas fa-layer-group',
      title: 'Deep technical expertise',
      text: 'Kubernetes, Terraform, ArgoCD, Prometheus and GitOps. Designed and maintained platforms supporting millions of users — robust, scalable and secure.'
    },
    {
      icon: 'fas fa-people-group',
      title: 'Collaborative leadership',
      text: 'Partnered across engineering and product to align on platform goals. Mentored 15+ engineers and established best practices for reviews, docs and onboarding.'
    },
    {
      icon: 'fas fa-bullhorn',
      title: 'Passionate communicator',
      text: 'Regularly deliver talks, write technical articles and lead workshops to spread DevOps culture and continuous learning.'
    }
  ],
  conclusion:
    'I thrive on building resilient, automated infrastructure and developer-friendly platforms — ' +
    'ideally where engineering excellence, innovation and teamwork are top priorities.',
  interests: [
    { name: 'Coding', image: '/static/images/interest-1.svg' },
    { name: 'Reading', image: '/static/images/interest-2.svg' },
    { name: 'Photography', image: '/static/images/interest-3.svg' }
  ]
}

export const experience = [
  {
    company: 'Netcracker Technologies',
    url: 'https://www.netcracker.com',
    role: 'Lead DevOps Engineer',
    period: 'Nov 2024 — Present',
    color: '#818cf8',
    stack: ['Kubernetes', 'Terraform', 'Ansible', 'GitOps', 'Jenkins', 'Prometheus', 'EFK', 'qubership-envgene'],
    bullets: [
      'Led the system design of qubership-envgene, a templated environment generator automating reproducible Dev/Test/Prod environments with version-controlled inventory and encrypted secret handling.',
      'Designed its integration architecture with CI/CD pipelines (Jenkins, GitLab CI) and GitOps workflows for seamless provisioning from Git to Kubernetes clusters.',
      'Built multi-cloud Kubernetes infrastructure (AWS & GCP) with Terraform and Ansible for scalable, consistent environment deployments.',
      'Implemented blue/green deployment strategies, rollback capabilities and policies with delivery engineers — contributing to a 45% reduction in deployment incidents.',
      'Established security design patterns — namespace isolation, RBAC, Vault/SSM secrets — supporting zero critical vulnerabilities in deployments.',
      'Guided the DevOps team through design reviews, architectural best practices and GitOps principles.',
      'Contributed to platform governance (resource quotas, audit logging, policy-as-code) driving the broader cloud transformation strategy.'
    ]
  },
  {
    company: 'Oracle India',
    url: 'https://www.oracle.com',
    role: 'Senior Principal DevOps Consultant',
    period: 'Aug 2023 — Nov 2024',
    color: '#f87171',
    stack: ['Kubernetes', 'Helm', 'Jenkins', 'Ansible', 'Prometheus', 'EFK'],
    bullets: [
      'Designed and implemented high-availability Kubernetes clusters with automated disaster recovery, achieving 99.95% system availability.',
      'Built a comprehensive observability platform with Prometheus, Grafana and the EFK stack, reducing MTTR by 40%.',
      'Automated infrastructure provisioning with Terraform and Ansible, cutting deployment time by 65%.',
      'Implemented security best practices across the CI/CD pipeline — zero critical vulnerabilities in production.',
      'Led technical workshops on Kubernetes and cloud-native technologies for 20+ client engineers.'
    ]
  },
  {
    company: 'Blue Rose Technologies',
    url: 'https://bluerose-tech.com',
    role: 'Senior Software Engineer',
    period: 'May 2022 — Jul 2023',
    color: '#34d399',
    stack: ['Kubernetes', 'ArgoCD', 'Terraform', 'AWS', 'Prometheus', 'ELK'],
    bullets: [
      'Architected scalable, cost-efficient AWS cloud infrastructure for enterprise client platforms.',
      'Established a GitOps workflow with ArgoCD, reducing deployment cycles from days to hours.',
      'Built cloud-native microservices with Quarkus and Kotlin, improving service response time by 45%.',
      'Designed a real-time data processing pipeline handling 5TB+ of data daily.',
      'Drove infrastructure-as-code adoption with Terraform, enabling full environment provisioning in under 30 minutes.'
    ]
  },
  {
    company: 'property.xyz',
    url: 'https://property.xyz',
    role: 'Senior Software Engineer',
    period: 'Sep 2020 — May 2022',
    color: '#22d3ee',
    stack: ['Kubernetes', 'JenkinsX', 'AWS', 'GCP', 'Azure', 'Quarkus', 'React'],
    bullets: [
      'Architected and implemented scalable cloud infrastructure for a property data startup, balancing reliability with cost efficiency.',
      'Established a GitOps workflow with Jenkins X, reducing deployment cycles from days to hours.',
      'Built cloud-native microservices with Quarkus and Kotlin powering property data products.',
      'Designed an efficient data pipeline for UK property market data, optimised for startup budget constraints without compromising data integrity.'
    ]
  },
  {
    company: 'IBM UK',
    url: 'https://www.ibm.com',
    role: 'Cloud Engineer',
    period: 'Nov 2018 — Sep 2020',
    color: '#60a5fa',
    stack: ['AWS', 'EKS', 'Terraform', 'GitLab CI', 'Ansible', 'Spring Boot'],
    bullets: [
      'Led migration of 15+ applications from EC2 to EKS, improving resource utilisation by 55%.',
      'Implemented GitLab CI/CD pipelines that reduced build and deployment time by 70%.',
      'Designed immutable infrastructure with Terraform, enabling complete environment recreation in under 45 minutes.',
      'Built monitoring and alerting that reduced MTTR from hours to minutes.',
      'Automated routine operations with Ansible, saving 20+ hours of manual work weekly.'
    ]
  },
  {
    company: 'IBM India',
    url: 'https://www.ibm.com',
    role: 'Java Microservice Developer',
    period: 'Jun 2013 — Oct 2018',
    color: '#c084fc',
    stack: ['IBM Cloud', 'Kubernetes', 'Istio', 'Spring Boot', 'Prometheus', 'Grafana'],
    bullets: [
      'Built and maintained a DevOps platform serving 500+ developers across India.',
      'Implemented CI/CD automation that accelerated software delivery by 50%.',
      'Designed and deployed a service mesh architecture with Istio, improving service reliability by 35%.',
      'Created a monitoring solution with Prometheus, Grafana and PagerDuty, reducing incident response time by 60%.',
      'Developed and delivered cloud-native technology training to 500+ developers.'
    ]
  }
]

export const projects = [
  {
    name: 'qubership-envgene',
    url: 'https://github.com/Netcracker/qubership-envgene',
    role: 'System Analyst — LLD Specialist & Contributor',
    description:
      "Netcracker's open-source environment templating platform. Responsible for the low-level design that turns Git-managed templates into reproducible, secret-safe environments.",
    stack: ['Kubernetes', 'Java', 'CRDs', 'Terraform', 'Ansible', 'GitOps', 'Jenkins'],
    bullets: [
      'Designed the architectural components: CRD schema, templating engine modules, environment-generation data flow and secret encryption layers.',
      'Established integration patterns with GitOps pipelines for provisioning via Jenkins/GitLab CI alongside Terraform and Ansible.',
      'Defined secure secret handling, Git-based auditability and version-controlled environment definitions for consistency and compliance.',
      'Co-developed the GitHub Pages documentation: architecture diagrams, LLD, installation guides and usage workflows.'
    ]
  },
  {
    name: 'microservice-bootstrap-operator',
    url: 'https://github.com/kannann1/microservice-bootstrap-operator',
    role: 'Architect & Sole Developer',
    description:
      'A Java-based Kubernetes Operator that auto-generates microservice scaffolding — Deployments, Services, ConfigMaps and CRDs — from a single custom resource.',
    stack: ['Java', 'Kubernetes', 'Operator SDK', 'CRDs', 'GitHub Pages'],
    bullets: [
      'Developed all reconcile logic with the Kubernetes Operator SDK to manage the microservice lifecycle dynamically.',
      'Designed a declarative workflow: define a microservice spec in a CR and instantly provision uniform infrastructure.',
      'Created full GitHub Pages documentation with architecture diagrams, CRD examples and usage guides.',
      'End-to-end ownership: architecture, code and documentation.'
    ]
  }
]

export const education = [
  {
    school: 'Bharathidasan University',
    degree: 'Master of Business Administration',
    major: 'Computer Systems & HR',
    period: '2013 — 2015',
    icon: 'fas fa-user-graduate'
  },
  {
    school: 'SASTRA University',
    degree: 'B.Tech',
    major: 'Computer Science & Engineering',
    period: '2010 — 2013',
    detail: 'GPA 8.08',
    icon: 'fas fa-graduation-cap'
  }
]

export const skillGroups = [
  {
    name: 'Cloud & DevOps',
    icon: 'fas fa-cloud',
    description: 'Cloud platforms, containerization and infrastructure automation',
    skills: [
      { label: 'Kubernetes', value: 85, level: 'Expert', icon: 'fas fa-dharmachakra', color: '#326ce5' },
      { label: 'Docker', value: 85, level: 'Expert', icon: 'fab fa-docker', color: '#2496ed' },
      { label: 'Azure', value: 80, level: 'Expert', icon: 'fab fa-microsoft', color: '#0078d4' },
      { label: 'Terraform', value: 80, level: 'Advanced', icon: 'fas fa-cubes', color: '#7b42bc' },
      { label: 'Istio', value: 80, level: 'Advanced', icon: 'fas fa-network-wired', color: '#466bb0' },
      { label: 'AWS', value: 75, level: 'Advanced', icon: 'fab fa-aws', color: '#ff9900' },
      { label: 'IBM Cloud', value: 75, level: 'Advanced', icon: 'fas fa-cloud', color: '#1261fe' },
      { label: 'Ansible', value: 75, level: 'Advanced', icon: 'fas fa-cogs', color: '#ee0000' },
      { label: 'ArgoCD', value: 75, level: 'Advanced', icon: 'fas fa-code-branch', color: '#ef7b4d' },
      { label: 'Knative', value: 75, level: 'Advanced', icon: 'fas fa-server', color: '#0865ad' },
      { label: 'Oracle Cloud', value: 65, level: 'Intermediate', icon: 'fas fa-cloud', color: '#c74634' }
    ]
  },
  {
    name: 'Backend Development',
    icon: 'fas fa-server',
    description: 'Server-side languages and frameworks',
    skills: [
      { label: 'Java', value: 80, level: 'Expert', icon: 'fab fa-java', color: '#e76f00' },
      { label: 'Spring', value: 80, level: 'Expert', icon: 'fas fa-leaf', color: '#6db33f' },
      { label: 'Kafka', value: 80, level: 'Advanced', icon: 'fas fa-stream', color: '#8c9eff' },
      { label: 'Quarkus', value: 75, level: 'Advanced', icon: 'fas fa-bolt', color: '#4695eb' },
      { label: 'Node.js', value: 70, level: 'Advanced', icon: 'fab fa-node-js', color: '#339933' },
      { label: 'Kotlin', value: 55, level: 'Intermediate', icon: 'fas fa-code', color: '#7f52ff' },
      { label: 'Python', value: 50, level: 'Intermediate', icon: 'fab fa-python', color: '#3776ab' }
    ]
  },
  {
    name: 'Frontend Development',
    icon: 'fas fa-desktop',
    description: 'Client-side technologies and frameworks',
    skills: [
      { label: 'HTML5', value: 75, level: 'Advanced', icon: 'fab fa-html5', color: '#e34f26' },
      { label: 'CSS3', value: 70, level: 'Advanced', icon: 'fab fa-css3-alt', color: '#1572b6' },
      { label: 'JavaScript', value: 70, level: 'Advanced', icon: 'fab fa-js', color: '#f7df1e' },
      { label: 'React', value: 70, level: 'Advanced', icon: 'fab fa-react', color: '#61dafb' },
      { label: 'Bootstrap', value: 70, level: 'Advanced', icon: 'fab fa-bootstrap', color: '#7952b3' },
      { label: 'Next.js', value: 65, level: 'Intermediate', icon: 'fab fa-react', color: '#e2e8f0' },
      { label: 'jQuery', value: 60, level: 'Intermediate', icon: 'fas fa-code', color: '#0769ad' },
      { label: 'Sass', value: 50, level: 'Intermediate', icon: 'fab fa-sass', color: '#cc6699' }
    ]
  },
  {
    name: 'Databases & Storage',
    icon: 'fas fa-database',
    description: 'Database systems and data storage',
    skills: [
      { label: 'Oracle', value: 75, level: 'Advanced', icon: 'fas fa-database', color: '#f80000' },
      { label: 'PostgreSQL', value: 70, level: 'Advanced', icon: 'fas fa-database', color: '#639cd9' },
      { label: 'MongoDB', value: 70, level: 'Advanced', icon: 'fas fa-leaf', color: '#47a248' },
      { label: 'Elasticsearch', value: 70, level: 'Advanced', icon: 'fas fa-search', color: '#00bfb3' },
      { label: 'Redis', value: 60, level: 'Intermediate', icon: 'fas fa-server', color: '#dc382d' },
      { label: 'MySQL', value: 50, level: 'Intermediate', icon: 'fas fa-database', color: '#4479a1' }
    ]
  },
  {
    name: 'Tools & Practices',
    icon: 'fas fa-toolbox',
    description: 'Developer tooling and methodologies',
    skills: [
      { label: 'CI/CD', value: 85, level: 'Expert', icon: 'fas fa-sync-alt', color: '#4285f4' },
      { label: 'Git', value: 80, level: 'Expert', icon: 'fab fa-git-alt', color: '#f05032' },
      { label: 'Maven', value: 80, level: 'Expert', icon: 'fas fa-feather', color: '#c71a36' },
      { label: 'NPM', value: 80, level: 'Advanced', icon: 'fab fa-npm', color: '#cb3837' },
      { label: 'Jenkins', value: 75, level: 'Advanced', icon: 'fas fa-cog', color: '#d24939' },
      { label: 'Jenkins X', value: 60, level: 'Intermediate', icon: 'fas fa-cogs', color: '#73c3d5' },
      { label: 'Webpack', value: 40, level: 'Basic', icon: 'fas fa-cube', color: '#8dd6f9' }
    ]
  }
]

export const softSkillGroups = [
  {
    name: 'Leadership & Management',
    icon: 'fas fa-user-tie',
    skills: [
      { name: 'Team Leadership', icon: 'fas fa-users-cog', description: 'Led cross-functional teams of 5–15 members, fostering collaboration and driving results.' },
      { name: 'Project Management', icon: 'fas fa-tasks', description: 'Agile and traditional methodologies; consistently delivering on time and within budget.' },
      { name: 'Strategic Planning', icon: 'fas fa-chess', description: 'Develop and implement technical strategies aligned with business objectives.' },
      { name: 'Mentoring', icon: 'fas fa-chalkboard-teacher', description: 'Passionate about growing junior engineers into confident contributors.' }
    ]
  },
  {
    name: 'Communication & Collaboration',
    icon: 'fas fa-comments',
    skills: [
      { name: 'Technical Communication', icon: 'fas fa-comment-dots', description: 'Explain complex concepts to technical and non-technical stakeholders alike.' },
      { name: 'Documentation', icon: 'fas fa-file-alt', description: 'Strong technical writing; comprehensive docs for complex systems.' },
      { name: 'Cross-functional Collaboration', icon: 'fas fa-people-arrows', description: 'Effective across product, design and business teams.' },
      { name: 'Client Interaction', icon: 'fas fa-handshake', description: 'Present technical solutions to clients and address concerns effectively.' }
    ]
  },
  {
    name: 'Problem Solving & Innovation',
    icon: 'fas fa-lightbulb',
    skills: [
      { name: 'Critical Thinking', icon: 'fas fa-brain', description: 'Break complex issues into manageable, solvable components.' },
      { name: 'Innovation', icon: 'fas fa-lightbulb', description: 'Track record of solutions that improve performance and user experience.' },
      { name: 'Troubleshooting', icon: 'fas fa-tools', description: 'Diagnose and resolve complex issues in production environments.' },
      { name: 'Architecture Design', icon: 'fas fa-drafting-compass', description: 'Scalable, resilient system architectures for enterprise applications.' }
    ]
  }
]

export const proficiencyLevels = [
  { level: 'Expert', color: '#34d399', description: 'Deep knowledge and extensive experience; can architect complex solutions and mentor others.' },
  { level: 'Advanced', color: '#22d3ee', description: 'Strong working knowledge with practical experience across varied scenarios.' },
  { level: 'Intermediate', color: '#fbbf24', description: 'Good understanding with real-world practical experience.' },
  { level: 'Basic', color: '#94a3b8', description: 'Fundamental understanding with limited practical experience.' }
]

const CREDLY = 'https://www.credly.com/users/kannann1'
const LOGOS = {
  CNCF: '/static/images/certifications/kubernetes.svg',
  Microsoft: '/static/images/certifications/microsoft.svg',
  Oracle: '/static/images/certifications/oracle.svg',
  AWS: '/static/images/certifications/aws.svg'
}

export const certifications = [
  { id: 1, name: 'Kubestronaut', issuer: 'CNCF', date: 'Oct 2024', featured: true, tags: ['kubernetes', 'cloud-native'] },
  { id: 2, name: 'Kubernetes and Cloud Native Security Associate (KCSA)', issuer: 'CNCF', date: 'Oct 2024', tags: ['kubernetes', 'security'] },
  { id: 3, name: 'Certified Kubernetes Security Specialist (CKS)', issuer: 'CNCF', date: 'Oct 2024', tags: ['kubernetes', 'security'] },
  { id: 4, name: 'Kubernetes and Cloud Native Associate (KCNA)', issuer: 'CNCF', date: 'Sep 2024', tags: ['kubernetes', 'cloud-native'] },
  { id: 5, name: 'Certified Kubernetes Application Developer (CKAD)', issuer: 'CNCF', date: 'Aug 2024', tags: ['kubernetes', 'development'] },
  { id: 6, name: 'Certified Kubernetes Administrator (CKA)', issuer: 'CNCF', date: 'Aug 2024', tags: ['kubernetes', 'administration'] },
  { id: 7, name: 'Azure Solutions Architect Expert', issuer: 'Microsoft', date: 'Apr 2024', tags: ['azure', 'architecture'] },
  { id: 8, name: 'Azure Administrator Associate', issuer: 'Microsoft', date: 'Apr 2024', tags: ['azure', 'administration'] },
  { id: 9, name: 'OCI 2023 AI Certified Foundations Associate', issuer: 'Oracle', date: 'Mar 2024', tags: ['oci', 'ai'] },
  { id: 10, name: 'Oracle Certified Professional: Java SE 17 Developer', issuer: 'Oracle', date: 'Feb 2024', tags: ['java', 'development'] },
  { id: 11, name: 'OCI 2019 Certified Architect Professional', issuer: 'Oracle', date: 'Aug 2020', tags: ['oci', 'architecture'] },
  { id: 12, name: 'OCI 2019 Certified Architect Associate', issuer: 'Oracle', date: 'Jul 2020', tags: ['oci', 'architecture'] },
  { id: 13, name: 'OCI Foundations 2020 Certified Associate', issuer: 'Oracle', date: 'Jun 2020', tags: ['oci'] },
  { id: 14, name: 'OCI Developer 2020 Certified Associate', issuer: 'Oracle', date: 'May 2020', tags: ['oci', 'development'] },
  { id: 15, name: 'OCI Cloud Operations 2020 Certified Associate', issuer: 'Oracle', date: 'Apr 2020', tags: ['oci', 'operations'] },
  { id: 16, name: 'OCI Security 2020 Certified Associate', issuer: 'Oracle', date: 'Mar 2020', tags: ['oci', 'security'] },
  { id: 17, name: 'AWS Certified Solutions Architect — Associate', issuer: 'AWS', date: 'Aug 2018', tags: ['aws', 'architecture'] },
  { id: 18, name: 'Certified Scrum Master (CSM)', issuer: 'Scrum Alliance', date: 'Aug 2018', icon: 'fas fa-users', iconColor: '#009688', tags: ['agile', 'management'] },
  { id: 19, name: 'IBM Certified Application Developer — Cloud Platform V2', issuer: 'IBM', date: 'Aug 2017', icon: 'fas fa-cloud', iconColor: '#1f70c1', tags: ['ibm', 'development'] }
].map((c) => ({ verifyLink: CREDLY, logo: LOGOS[c.issuer], ...c }))
