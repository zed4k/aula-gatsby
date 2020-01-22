import React from "react";
import { StaticQuery, graphql } from "gatsby";

const Profile = () => (
  // <> fragment
  <StaticQuery
    query={graphql`
      query MySiteMetadata {
        site {
          siteMetadata {
            title
            position
            description
            author
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: { title, position, description },
      },
    }) => (
      <div className="Profile-wrapper">
        <h1>{title}</h1>
        <h2>{position}</h2>
        <p>{description}</p>
      </div>
    )}
  />
);

export default Profile;