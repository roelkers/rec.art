import { Component } from 'react'
import Layout from '../components/Layout';
import { attributes, react as ShopContent } from '../content/shop.md';

export default class Home extends Component {
  render() {
    let { title, navigation } = attributes;
    return (
      <Layout title={title} navigation={navigation}>
        <article>
          <h1>{title}</h1>
          <ShopContent />
          <div>
            {}
          </div>
        </article>
      </Layout>
    )
  }
}