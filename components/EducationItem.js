import React from 'react'

export default ({ color, name, time, gpa, major }) => {
  return (
    <div className='columns wrapper'>
      <div className='column item is-10 is-offset-1 is-6-desktop is-offset-3-desktop is-10-mobile is-offset-1-mobile'>
        <div className='columns'>
          <div className='column is-9 has-text-left school'>
            <p>{time}</p>
            <h4 className='name'>
              {name}
            </h4>
            {major && <i>Major: {major}</i>}
          </div>
          {gpa &&
            <div className='column is-3 has-text-right gpa'>
              <p>GPA</p>
              <h4>{gpa}</h4>
            </div>}
        </div>
      </div>

      <style jsx>{`
                    .wrapper {
                        padding-top: 15px;
                        padding-bottom: 15px;   
                    }
                    .item {
                        border-left: 8px solid ${color};
                        background-color: #ffffff;
                        box-shadow: 10px 10px 0px #333333;
                    }
                    .school .time {

                    }
                    .school .name {
                        font-weight: bold;
                        font-size: 1.3em;
                        color: ${color};
                    }
                    .gpa h4 {
                        font-size: 1.8em;
                        color: #e74c3c;
                    }
                    @media screen and (max-width: 768px) {
                        .wrapper {
                            padding-top: 10px;
                            padding-bottom: 10px;
                        }
                        .item {
                            box-shadow: 5px 5px 0px #333333;
                            padding: 10px;
                        }
                        .school .name {
                            font-size: 1.1em;
                            margin-bottom: 5px;
                        }
                        .school p {
                            font-size: 0.9em;
                        }
                        .school i {
                            font-size: 0.85em;
                        }
                        .gpa h4 {
                            font-size: 1.5em;
                        }
                        .gpa p {
                            font-size: 0.9em;
                        }
                    }
                `}
      </style>
    </div>
  )
}
