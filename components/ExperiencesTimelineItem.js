import React from 'react'

export default ({ time, side, color, children }) => {
  const lineColor = '#7f8c8d'

  return (
    <div>
      {
        side === 'left'
          ? (
            <div className='columns timeline'>
              <div className='circle is-hidden-mobile' />
              <div className='column left is-6 has-text-right'>
                <div className='arrow arrow-right' />
                <div className='detail detail-left'>
                  <p className='is-hidden-tablet'>{time}</p>
                  {children}
                </div>
              </div>
              <div className='column is-6 has-text-left is-hidden-mobile'>
                <div className='time'>{time}</div>
              </div>
            </div>
            )
          : (
            <div className='columns timeline'>
              <div className='circle is-hidden-mobile' />
              <div className='column is-6 has-text-right is-hidden-mobile'>
                <div className='time'>{time}</div>
              </div>
              <div className='column right is-6 has-text-left'>
                <div className='arrow arrow-left' />
                <div className='detail detail-right'>
                  <p className='is-hidden-tablet'>{time}</p>
                  {children}
                </div>
              </div>
            </div>
            )
                }
      <style jsx>{`
                    .timeline {
                        position: relative;
                    }
                    .timeline .left {
                        transform: translateX(2px);
                        border-right: 4px solid ${lineColor};
                    }
                    .timeline .right {
                        transform: translateX(-2px);
                        border-left: 4px solid ${lineColor};
                    }
                    .timeline .detail {
                        padding: 20px;
                        margin: 0 20px 20px;
                        border-radius: 5px;
                        background-color: #ffffff;
                        display: inline-block;
                    }
                    .timeline .detail-left {
                        border-right: 8px solid ${color};
                    }
                    .timeline .detail-right {
                        border-left: 8px solid ${color};
                    }
                    .timeline .time {
                        padding: 5px 10px;
                        margin: 10px 10px 0;
                        border-radius: 20px;
                        font-size: 0.8em;
                        color: #ffffff;
                        background-color: #c0392b;
                        display: inline-block;
                    }
                    .circle {
                        width: 20px;
                        height: 20px;
                        border-radius: 100%;
                        background-color: ${color};
                        position absolute;
                        top: 30px;
                        left: calc(50% - 10px);
                        z-index: 99;
                    }
                    .arrow {
                        position absolute;
                        width: 0;
                        height: 0;
                        border-top: 10px solid transparent;
                        border-bottom: 10px solid transparent;
                        top: 30px;
                    }
                    .arrow-left {
                        border-right: 20px solid ${color};
                        left: 14px;
                    }
                    .arrow-right {
                        border-left: 20px solid ${color};
                        right: 14px;
                    }
                    @media screen and (max-width: 769px) {
                        .timeline .left, .timeline .right {
                            border-right: 0px;
                            border-left: 0px;
                            transform: none;
                        }
                        .timeline .detail {
                            margin: 0 0 20px;
                            width: 100%;
                            box-sizing: border-box;
                        }
                        .timeline .detail-left, .timeline .detail-right {
                            border-left: 8px solid ${color};
                            border-right: 0;
                        }
                        .timeline .time {
                            margin: 0 0 10px;
                            display: inline-block;
                        }
                        .arrow {
                            display: none;
                        }
                        p.is-hidden-tablet {
                            font-weight: bold;
                            color: #c0392b;
                            margin-bottom: 10px;
                            font-size: 0.9em;
                        }
                    }
                `}
      </style>
    </div>
  )
}
