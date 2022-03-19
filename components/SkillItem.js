import React from 'react'

export default class SkillItem extends React.Component {
    render() {
        let { img, color, value, name } = this.props
        return (
            <div className="column is-2-desktop has-text-center" style={{'display': 'flex'}}>
                <div className={'circle c100 p' + value + ' dark big orange tooltip'}>
                    <span>
                        <img src={img} alt=""/>
                    </span>
        <span className="tooltiptext">{name.toUpperCase()} : {value / 10}/10</span>
                    <div className="slice">
                        <div className="bar"></div>
                        <div className="fill"></div>
                    </div>
                    <style jsx>{`
                        img {
                            margin-top: 30px;
                            max-width: 60px;
                            -webkit-transition: -webkit-transform 0.5s ease-in-out;
                            transition: transform 0.5s ease-in-out;
                        }
                        .circle:hover img {
                            -webkit-transform: rotate(-720deg);
                            transform: rotate(-720deg);
                        }
                        .bar {
                            border-color: ${color} !important;
                        }
                        .fill {
                            border-color: ${color} !important;
                        }
                        .circle {
                            margin: 10px auto;
                            -webkit-transition: -webkit-transform 0.5s ease-in-out;
                            transition: transform 0.5s ease-in-out;
                        }
                        .circle:hover {
                            -webkit-transform: rotate(360deg) scale(1.4);
                            transform: rotate(360deg) scale(1.4);
                            z-index: 999;
                        }
                        .tooltip {
                            position: relative;
                            display: inline-block;
                            border-bottom: 1px dotted black;
                          }
                          
                          .tooltip .tooltiptext {
                            visibility: hidden;
                            width: 120px;
                            background-color: black;
                            color: #fff;
                            text-align: center;
                            border-radius: 6px;
                            padding: 5px 0;
                            font-size: 15px;
                            /* Position the tooltip */
                            position: absolute;
                            z-index: 1;
                          }
                          
                          .tooltip:hover .tooltiptext {
                            visibility: visible;
                          }
                    `}</style>
                </div>
            </div>
        )
    }
}