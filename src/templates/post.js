import React from 'react';
import { graphql, Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Layout } from '@components';
import { prismColors } from '../styles/PrismStyles';

const StyledPostContainer = styled.main`
  max-width: 1000px;
`;
const StyledPostHeader = styled.header`
  margin-bottom: 50px;
  .tag {
    margin-right: 10px;
  }
`;
const StyledPostContent = styled.div`
  margin-bottom: 100px;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 2em 0 1em;
  }

  p {
    margin: 1em 0;
    line-height: 1.5;
    color: var(--light-slate);
  }

  a {
    ${({ theme }) => theme.mixins.inlineLink};
  }

  code {
    background-color: transparent;
    color: var(--lightest-slate);
    border-radius: var(--border-radius);
    font-size: var(--fz-sm);
    padding: 0;
  }

  details {
    margin: 0 auto;
    background: ${prismColors.bg};
    margin-bottom: 0.5rem;
    box-shadow: 0 0.1rem 1rem -0.5rem rgba(0, 0, 0, 0.4);
    border-radius: 5px;
    overflow: hidden;
  }

  summary {
    padding: 1rem;
    display: block;
    background: ${prismColors.bg};
    padding-left: 2.2rem;
    position: relative;
    cursor: pointer;
    border-bottom: 1px solid ${prismColors.lineHighlight};
  }

  details > p {
    padding-left: 1em;
  }

  summary:before {
    content: '';
    border-width: 0.4rem;
    border-style: solid;
    border-color: transparent transparent transparent #fff;
    position: absolute;
    top: 1.3rem;
    left: 1rem;
    transform: rotate(0);
    transform-origin: 0.2rem 50%;
    transition: 0.25s transform ease;
  }

  /* THE MAGIC 🧙‍♀️ */
  details[open] > summary:before {
    transform: rotate(90deg);
  }

  details summary::-webkit-details-marker {
    display: none;
  }

  details > ul {
    padding-bottom: 1rem;
    margin-bottom: 0;
  }

  th,
  td {
    padding-right: 1rem;
  }
`;

const PostTemplate = ({ data, location }) => {
  const { frontmatter, html } = data.markdownRemark;
  const { title, date, tags } = frontmatter;

  return (
    <Layout location={location}>
      <Helmet title={title} />

      <StyledPostContainer>
        <span className="breadcrumb">
          <span className="arrow">&larr;</span>
          <Link to="/blog">All posts</Link>
        </span>

        <StyledPostHeader>
          <h1 className="medium-heading">{title}</h1>
          <p className="subtitle">
            <time>
              {new Date(date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span>&nbsp;&mdash;&nbsp;</span>
            {tags &&
              tags.length > 0 &&
              tags.map((tag, i) => (
                <Link key={i} to={`/blog/tags/${kebabCase(tag)}/`} className="tag">
                  #{tag}
                </Link>
              ))}
          </p>
        </StyledPostHeader>

        <StyledPostContent dangerouslySetInnerHTML={{ __html: html }} />
      </StyledPostContainer>
    </Layout>
  );
};

export default PostTemplate;

PostTemplate.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
};

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { slug: { eq: $path } }) {
      html
      frontmatter {
        title
        description
        date
        slug
        tags
      }
    }
  }
`;
