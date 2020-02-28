import React from 'react'
import { Link } from 'gatsby'
import './AuthorInfo.css'
import AuthorMeta from '../AuthorMeta/AuthorMeta'
import AuthorWebsite from '../AuthorWebsite/AuthorWebsite'

const Bio = props => {
  const { bio, morePostsUrl } = props
  if (bio) {
    return <p>{bio}</p>
  }
  return (
    <p>
      Read <Link to={morePostsUrl}>more posts</Link> by this author.
    </p>
  )
}

class AuthorInfo extends React.Component {
  render() {
    const { name, image, bio, url } = this.props.author
    if (image) {
      return (
        <section className="author">
          <h4>{name}</h4>
          <Bio bio={bio} />
          <AuthorMeta>
            <AuthorWebsite url={url} />
          </AuthorMeta>
        </section>
      )
    }
    return null
  }
}

export default AuthorInfo
