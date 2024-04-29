import React from 'react'
import Title from './Title'
import Group from './SkillItemGroup'
import circle from './../static/css/circle.css'

export default () => {
  const skillImgs = [
        {
      name: 'Cloud',
      list: [
        { name: 'azure', color: '#cb3736', value: '80' },
        { name: 'aws', color: '#F05032', value: '75' },
        { name: 'ibmcloud', color: '#18bbb0', value: '75' },
        { name: 'oci', color: '#6dcdff', value: '65' }
      ]
    },
        {
      name: 'Tools',
      list: [
        { name: 'git', color: '#F05032', value: '80' },
        { name: 'maven', color: '#18bbb0', value: '80' },
        { name: 'terraform', color: '#81ca2a', value: '80' },
        { name: 'npm', color: '#cb3736', value: '80' },
        { name: 'ansible', color: '#2c8ebb', value: '75' },
        { name: 'argocd', color: "cb3736", value: '75' }
        { name: 'kafka', color: '#dd0330', value: '80' },
        { name: 'istio', color: '#0784af', value: '80' },
        { name: 'knative', color: '#ff0000', value: '75' },
        { name: 'jenkinsx', color: '#8b57d9', value: '60' },
        { name: 'webpack', color: '#6dcdff', value: '40' }
      ]
    },
    {
      name: 'Back-ends',
      list: [
        { name: 'java', color: '#1e77b7', value: '80' },
        { name: 'spring', color: '#e74c3c', value: '80' },
        { name: 'quarkus', color: '#6dcdff', value: '75' },
        { name: 'nodejs', color: '#81ca2a', value: '70' },
        { name: 'kotlin', color: '#dd0330', value: '55' },
        { name: 'python', color: '#cb3736', value: '50' }
      ]
    },
    {
      name: 'Front-ends',
      list: [
        { name: 'html5', color: '#f16529', value: '75' },
        { name: 'css3', color: '#29a9df', value: '70' },
        { name: 'bootstrap', color: '#8b57d9', value: '70' },
        { name: 'javascript', color: '#f7df1e', value: '70' },
        { name: 'reactjs', color: '#61d9fa', value: '70' },
        { name: 'jquery', color: '#288cc4', value: '60' },
        { name: 'sass', color: '#cb6699', value: '50' },
        { name: 'angularjs', color: '#dd0330', value: '40' }
      ]
    },
    {
      name: 'Databases',
      list: [
        { name: 'oracle', color: '#ffcb2c', value: '75' },
        { name: 'postgres', color: '#18bbb0', value: '70' },
        { name: 'mongodb', color: '#6dcdff', value: '70' },
        { name: 'elasticsearch', color: '#cb3736', value: '70' },
        { name: 'mysql', color: '#0784af', value: '50' }
      ]
    }
  ]

  return (
    <section className='hero wrapper has-text-centered'>
      <style dangerouslySetInnerHTML={{ __html: circle }} />
      <Title title='Skills' color='#ffffff' />
      <div className='container'>
        {
                        skillImgs.map((item, key) => (
                          <Group key={key} name={item.name} items={item.list} />
                        ))
                    }
      </div>
      <style jsx>{`
                    .wrapper {
                        padding-top: 50px;
                        padding-bottom: 50px;
                        background: #2f353f;
                        background-size: cover;
                        color: #333333;
                        font-size: 1.3em;
                    }
                `}
      </style>
    </section>
  )
}
