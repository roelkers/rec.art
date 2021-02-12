import React from 'react'
import styled from 'styled-components'
import { Article } from '../interfaces'

interface ArticleGridProps {
  articles: Article[]
}

const Grid = styled.div`
  display: grid;
  grid-template-rows: 44rem;
  grid-template-columns: repeat(3,22rem);
  grid-gap: 2.5rem;
  @media screen and (min-width: 1024px) {
    grid-template-rows: 60rem;
    grid-template-columns: repeat(3,30rem);
  } 
  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(4,30rem);
  } 
`
const GridItem = styled.div`
  color: ${props => props.theme.colors.black};
  width: 22rem; 
  height: 44rem;
  background-color: #eeeeff;
  border-radius: 1rem; 
  @media screen and (min-width: 1024px) {
     width: 30rem;
     height: 60rem;
  } 
`

const ImgContainer = styled.img`
  position: relative;
  width: 22rem;
  height: 32rem; 
  border-radius: 1rem;
  object-fit:cover;
  @media screen and (min-width: 1024px) {
     width: 30rem;
     height: 50rem;
  } 
`

const GridContent = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

const Paragraph = styled.p`
  font-size: 1.3rem; 
`

const ArticleGrid = (props: ArticleGridProps) => {
  const { articles } = props
  return (
    <Grid>
      {articles.map(a => (
        <GridItem key={a.name}>
          <ImgContainer 
            src={require('../public/img/bronze_sculpture.jpg')} >
          </ImgContainer>
          <GridContent>
            <h4>{a.name}</h4>
            <Paragraph>{a.shortDescription}</Paragraph>
            <h4>Preis: {a.price},-</h4>
          </GridContent>
        </GridItem>
      ))}
    </Grid>
  )
}

export default ArticleGrid