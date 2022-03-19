import React from 'react'
import Background from './HeaderBackground';
import ProfileImage from './HeaderProfile';
import Brace from './HeaderBrace'
import Title from './HeaderTitle'
import Button from './HeaderButton'

const themes = {
    light: {
        background: '#f5f5f5',
        font: '#4a4a4a'
    },
    dark: {
        background: '#2f353f',
        font: '#e4e4e4'
    }
}

export default class Header extends React.Component {
    constructor() {
        super()
        this.state = {
            theme: 'light'
        }
    }

    toggleTheme() {
        let newtheme = this.state.theme === 'light' ? 'dark' : 'light'
        this.setState({
            theme: newtheme
        })
    }

    render() {
        let theme = themes[this.state.theme];
        return (
<section className="hero is-fullheight has-text-centered">
    <div className="hero-body">
        <div className="container">
            <div className="columns is-mobile">
                <Brace type="left" color={theme.font}/>
<ProfileImage toggle={this.toggleTheme.bind(this)} />
<Brace type="right" color={theme.font}/>
</div>
<div className="columns">
                    <div className="column">
                        <Title color={theme.font}/>
</div>
</div>
<div className="columns">
                            <div className="column">
                                <Button title="Resume" url="https://1drv.ms/w/s!ArpXJqhZiDCehjReT-Kj50XNJjWc?e=AWpgAK" />
                            
                            </div>
                            <div className="column">
                            <Button title="LinkedIn" url="https://www.linkedin.com/in/kannan91/" />
                            </div>
                            <div className="column">
                                    <Button title="Credentials" url="https://www.credly.com/users/kannann1" />
                            </div>
                            <div className="column">
                                <Button title="GitHub" url="https://github.com/kannann1" />
                            </div>
                        </div>
                    </div>
                    <Background color={theme.background}/>
</div>
</section>
        )
    }
}