import React from 'react'

export default ({ title, url }) => {
  return (
    <a className='button is-primary is-medium' href={url} target='_blank' rel='noreferrer'>
      {title}
      <style jsx>{`
                    a {
                        margin: 0 5px;
                        padding: 0 20px;
                        border-radius: 360px;
                    }
                `}
      </style>
    </a>
  )
}
