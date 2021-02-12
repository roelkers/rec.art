import React, { Component } from 'react'
import ArticleGrid from '../components/ArticleGrid';
import Layout from '../components/Layout';
import { attributes } from '../content/sculptures.md';

export default class Home extends Component {
  render() {
    let { title, articles, navigation } = attributes;
    return (
      <Layout title={title} navigation={navigation}>
        <article>
          <h1>{title}</h1>
          <ArticleGrid articles={articles}/> 
        </article>
      </Layout>
    )
  }
}