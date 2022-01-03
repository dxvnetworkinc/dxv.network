import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import '../assets/sass/main.scss';

class Layout extends Component {
  constructor() {
    super();
    this.state = {
      isPreloaded: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isPreloaded: false });
    }, 100);
  }

  render() {
    const { children } = this.props;
    const { isPreloaded } = this.state;
    return (
      <StaticQuery
        query={graphql`
          query SiteMetaQuery {
            site {
              siteMetadata {
                title
                author
                description
                keywords
              }
            }
          }
        `}
        render={(data) => (
          <>
            <Helmet>
              <title>{data.site.siteMetadata.title}</title>
              <meta name="title" content={data.site.siteMetadata.title} />
              <meta name="author" content={data.site.siteMetadata.author} />
              <meta name="description" content={data.site.siteMetadata.description} />
              <meta name="keywords" content={data.site.siteMetadata.keywords} />
              <html lang="en" />
            </Helmet>
            <div className={isPreloaded ? 'main-body is-preload' : 'main-body'}>
              {children}
            </div>
          </>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
