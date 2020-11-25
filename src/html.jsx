/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';
import React, { useEffect } from 'react';

export const initGA = () => {       
  ReactGA.initialize('G-CPETH0WF9M'); // put your tracking id here
} 
export default class HTML extends React.Component {

  useEffect(() => { initGA(); }, []);

  render() {
    return (
      <html lang="en-US" {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          /* Global site tag (gtag.js) - Google Analytics */
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-CPETH0WF9M"></script>
          <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-CPETH0WF9M');
          </script>
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes} className="light">
          {this.props.preBodyComponents}
          <div
            key="body"
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
