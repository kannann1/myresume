import React from 'react'

export default ({ title, url, icon, download }) => {
  return (
    <a className='button is-primary is-medium' href={url} target='_blank' rel='noreferrer' download={download}>
      {icon && <span className="icon"><i className={icon}></i></span>}
      <span>{title}</span>
      <style jsx>{`
                    a {
                        margin: 0 5px;
                        padding: 0 20px;
                        border-radius: 360px;
                    }
                    .icon {
                        margin-right: 8px;
                    }
                `}
      </style>
    </a>
  )
}
