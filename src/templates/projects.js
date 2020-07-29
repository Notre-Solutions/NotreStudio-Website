import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

const projects = ({ data }) => {
  return (
    <Layout current="pricing">
      <div></div>
    </Layout>
  );
};

export default projects;
export const pageQuery = graphql`
  query ProjectsPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        projectsPage {
          title
          description
        }
      }
    }
  }
`;
