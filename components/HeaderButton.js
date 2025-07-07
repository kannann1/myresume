import React from 'react'

export default ({ title, url, icon, download }) => {
  return (
    <a className='button is-primary is-medium' href={url} target='_blank' rel='noreferrer' download={download}>
      {icon && <span className="icon"><i className={icon}></i></span>}
      <span>{title}</span>
      <style jsx>{`
                    a {
                        margin: 0 8px;
                        padding: 0 20px;
                        border-radius: 6px;
                        font-weight: 600;
                        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                        transition: all 0.3s ease;
                    }
                    a:hover {
                        transform: translateY(-2px);
                        box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
                    }
                    .icon {
                        margin-right: 8px;
                    }
                `}
      </style>
    </a>
  )
}
