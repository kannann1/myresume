import React from 'react'

export default ({ title, url, icon, download }) => {
  return (
    <a className='button is-primary' href={url} target='_blank' rel='noreferrer' download={download}>
      {icon && <span className="icon"><i className={icon}></i></span>}
      <span>{title}</span>
      <style jsx>{`
        a {
          margin: 0.25rem;
          padding: 0 1.25rem;
          border-radius: 6px;
          font-weight: 600;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 2.5rem;
        }
        a:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
        }
        .icon {
          margin-right: 8px;
        }
        @media screen and (max-width: 768px) {
          a {
            font-size: 0.9rem;
            padding: 0 0.75rem;
            height: 2.25rem;
          }
        }
      `}
      </style>
    </a>
  )
}
