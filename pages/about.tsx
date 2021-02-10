import { Component } from 'react'
import Layout from '../components/Layout';
import { attributes, react as AboutContent } from '../content/about.md';

export default class Home extends Component {
  render() {
    let { title, navigation } = attributes;
    return (
      <Layout title={title} navigation={navigation}>
        <article>
          <h1>{title}</h1>
          <AboutContent />
        </article>
      </Layout>
    )
  }
}