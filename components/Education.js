import React from 'react'
import Title from './Title'
import Item from './EducationItem'

export default () => {
  return (
    <section id='education' className='hero wrapper has-text-centered'>
      <Title title='Education' color='#ffffff' />
      <div className='container'>
        <Item
          time='2013 - 2015 (Masters of Business Administration)'
          name='Bharathidasan University'
          major='Computer Systems &amp; HR'
          color='#2ecc71'
        />
        <Item
          time='2010 - 2013 (BTech)'
          name='SASTRA University'
          gpa='8.08'
          color='#3498db'
          major='Computer Science &amp; Engineering'
        />
      </div>

      <style jsx>{`
                    .wrapper {
                        padding-top: 50px;
                        padding-bottom: 50px;
                        background: #c0392b url('/static/images/bg-edu.jpg');
                        background-size: cover;
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
                `}
      </style>
    </section>
  )
}
