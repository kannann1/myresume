import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
        <Head> 
        <title>Kannan's Resume</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link href="https://fonts.googleapis.com/css?family=Questrial" rel="stylesheet" />
                    <link rel="stylesheet" href="/static/css/bulma.css" />
                
            </Head>
        <body>
        {this.props.customValue}
                    <Main />
                    <NextScript />
        </body>
      </Html>
        )
    }
}