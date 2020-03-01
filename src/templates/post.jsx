import { graphql } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import SEO from '../components/SEO/SEO'
import config from '../../data/SiteConfig'
import MainHeader from '../components/MainHeader/MainHeader'
import MainNav from '../components/MainNav/MainNav'
import BlogLogo from '../components/BlogLogo/BlogLogo'
import Drawer from '../components/Drawer/Drawer'
import Navigation from '../components/Nav/Nav'
import SiteWrapper from '../components/SiteWrapper/SiteWrapper'
import MainContent from '../components/MainContent/MainContent'
import PostHeader from '../components/PostHeader/PostHeader'
import PostFormatting from '../components/PostFormatting/PostFormatting'
import PostDate from '../components/PostDate/PostDate'
import PostFooter from '../components/PostFooter/PostFooter'
import AuthorImage from '../components/AuthorImage/AuthorImage'
import AuthorInfo from '../components/AuthorInfo/AuthorInfo'
import PostShare from '../components/PostShare/PostShare'
import ReadNext from '../components/ReadNext/ReadNext'
import PostTags from '../components/PostTags/PostTags'
import Footer from '../components/Footer/Footer'
import AuthorModel from '../models/author-model'
// import Disqus from '../components/Disqus/Disqus'
import Layout from '../components/layout'
import TOC from '../components/TOC/TOC'
import Utterences from '../components/Utterences/Utterences'

function parsePost(post, slug) {
  const result = post
  if (!result.id) {
    result.id = slug
  }
  if (!result.id) {
    result.category_id = config.postDefaultCategoryID
  }
  return result
}

const formatReadNext = value => ({
  path: value.fields.slug,
  title: value.frontmatter.title,
  cover: value.frontmatter.cover,
  excerpt: value.excerpt
})

class PostTemplate extends React.Component {
  state = {
    menuOpen: false
  }

  handleOnClick = evt => {
    evt.stopPropagation()
    if (this.state.menuOpen) {
      this.closeMenu()
    } else {
      this.openMenu()
    }
  }

  handleOnClose = evt => {
    evt.stopPropagation()
    this.closeMenu()
  }

  openMenu = () => {
    this.setState({ menuOpen: true })
  }

  closeMenu = () => {
    this.setState({ menuOpen: false })
  }

  render() {
    const { location, data } = this.props
    const { slug, next, prev } = this.props.pageContext
    const postNode = this.props.data.markdownRemark
    const post = parsePost(postNode.frontmatter, slug)
    const { cover, title, date, author, tags } = post
    const className = post.post_class ? post.post_class : 'post'
    const authorData = AuthorModel.getAuthor(
      this.props.data.authors.edges,
      author,
      config.blogAuthorId
    )
    const getNextData = () => (next ? formatReadNext(data.next) : null)
    const getPrevData = () => (prev ? formatReadNext(data.prev) : null)

    return (
      <Layout location={this.props.location}>
        <Drawer className="post-template" isOpen={this.state.menuOpen}>
          <Helmet>
            <title>{`${post.title} | ${config.siteTitle}`}</title>
          </Helmet>
          <SEO postPath={slug} postNode={postNode} postSEO image={cover} />
          <img className="hidden cover-image" src={cover} alt={post.title} />

          <SiteWrapper>
            <MainHeader className="post-head" cover={cover}>
              <MainNav>
                <BlogLogo logo={config.siteLogo} title={config.siteTitle} />
                {config.siteNavigation ? <Navigation /> : ''}
              </MainNav>
            </MainHeader>
            <MainContent>
              <PostFormatting className={className}>
                <PostHeader>
                  <h1 className="post-title">{title}</h1>
                  <section className="post-meta">
                    <PostDate date={date} />
                    <PostTags prefix=" on " tags={tags} />
                    <span
                      style={{ paddingLeft: 6, paddingRight: 6, fontSize: 13 }}
                    >
                      •
                    </span>
                    <span style={{ fontSize: 13 }}>
                      {`${postNode.timeToRead} min read`}
                    </span>
                  </section>
                </PostHeader>
                <TOC tableOfContents={postNode.tableOfContents} show={false} />
                <section
                  className="post-content"
                  dangerouslySetInnerHTML={{ __html: postNode.html }}
                />

                <PostFooter>
                  <AuthorImage author={authorData} />
                  <AuthorInfo prefix="/author" author={authorData} />
                  <PostShare
                    postNode={postNode}
                    postPath={location.pathname}
                    config={config}
                  />
                  <Utterences repo="mikqi/blog.rivki.id" />
                  {/* <Disqus postNode={postNode} /> */}
                </PostFooter>
              </PostFormatting>
            </MainContent>
            <ReadNext next={getNextData()} prev={getPrevData()} />

            {/* The tiny footer at the very bottom */}
            <Footer
              copyright={config.copyright}
              promoteGatsby={config.promoteGatsby}
            />
          </SiteWrapper>
        </Drawer>
      </Layout>
    )
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!, $next: String, $prev: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      tableOfContents
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date
        category
        tags
        author
      }
      fields {
        slug
      }
    }
    # prev post data
    prev: markdownRemark(fields: { slug: { eq: $prev } }) {
      excerpt(pruneLength: 112)
      frontmatter {
        title
        cover
        date
      }
      fields {
        slug
      }
    }
    # next post data
    next: markdownRemark(fields: { slug: { eq: $next } }) {
      excerpt(pruneLength: 112)
      frontmatter {
        title
        cover
        date
      }
      fields {
        slug
      }
    }
    # authors
    authors: allAuthorsJson {
      edges {
        node {
          uid
          name
          image
          url
          bio
        }
      }
    }
  }
`

export default PostTemplate
