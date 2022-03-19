import React from 'react'
import Title from './Title'

class Certification extends React.Component {
    render() {
        let {time, side, color, children} = this.props
        let lineColor = "#7f8c8d"

        return (
            <div>
              
              <div className="columns timeline">
                            <div className="circle is-hidden-mobile"></div>
                            <div className="column left is-6 has-text-right">
                                <div className="arrow arrow-right"></div>
                                <div className="detail detail-left">
                                    <p className="is-hidden-tablet">{time}</p>
                                    {children}
                                </div>
                            </div>
                            <div className="column is-6 has-text-left is-hidden-mobile">
                                <div className="time">{time}</div>
                            </div>
                        </div>
                    
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
                        .timeline .left {
                            border-right: 0px;
                        }
                        .timeline .right {
                            border-left: 0px;
                        }
                    }
                    .legend { list-style: none; }
.legend li { float: left; margin-right: 10px; }
.legend span { border: 1px solid #ccc; float: left; width: 12px; height: 12px; margin: 2px; }
.legend .superawesome { background-color: #ff00ff; }
.legend .awesome { background-color: #00ffff; }
.legend .kindaawesome { background-color: #0000ff; }
.legend .notawesome { background-color: #000000; }
                `}</style>
            </div>
        )
    }
}

export default class Certifications extends React.Component {
    render() {
        let lineColor = "#7f8c8d"
        return (
            <section className="hero wrapper has-text-centered">  
                            <Title title="Certifications" color='#2c3e50'/>
         
             <div className="container">
             <Certification time="August 12, 2020" color="#228B22">
                    <h4 style={{'color': '#228B22'}}>Oracle Cloud Infrastructure 2019 Certified Architect Professional</h4>
        </Certification>
        <Certification time="August 08, 2018" color="#228B22">
                    <h4 style={{'color': '#228B22'}}>AWS Certified Solutions Architect – Associate</h4>
        </Certification>
             <Certification time="August 01, 2018" color="#e67e22">
                    <h4 style={{'color': '#e67e22'}}>Certified Scrum Master - CSM</h4>
        </Certification>
             <Certification time="August 17, 2017" color="#228B22">
                    <h4 style={{'color': '#228B22'}}>IBM Certified Application Developer - Cloud Platform V2</h4>
        </Certification>
             <Certification time="May 30, 2015" color="#9b59b6">
                    <h4 style={{'color': '#9b59b6'}}>Oracle Communications Billing and Revenue Management 7 Advanced Certified Implementation Specialist</h4>
        </Certification>
        <Certification time="April 29, 2014" color="#3498db">
                    <h4 style={{'color': '#3498db'}}>Oracle Certified Associate, Java SE 7 Programmer</h4>
        </Certification>
        <Certification time="March 02, 2013" color="#3498db">
                    <h4 style={{'color': '#3498db'}}>Microsoft Certified Professional Programming in HTML5 with JavaScript and CSS3</h4>
        </Certification>
        </div>
        <ul className="legend">
    <li><span className="cloud"></span> Cloud Certs</li>
    <li><span className="programming"></span> Programming Certs</li>
    <li><span className="management"></span> Management Certs</li>
    <li><span className="othersystems"></span> Other Certs</li>
</ul><style jsx>{`
                    .legend { list-style: none; }
.legend li { float: left; margin-right: 10px; }
.legend span { border: 1px solid #ccc; float: left; width: 12px; height: 12px; margin: 2px; }
.legend .cloud { background-color: #228B22; }
.legend .programming { background-color: #3498db; }
.legend .management { background-color: #e67e22; }
.legend .othersystems { background-color: #9b59b6; }
                `}</style>
        </section>
)
    }
}