import React from 'react'
import Head from 'next/head'
import { GetStaticProps } from 'next'

import RocketseatLogo from '../assets/rocketseat.svg'
import { Container } from '../styles/pages/Home'

interface Props {
  name?: string
}

const Home: React.FC<Props> = ({ name }) => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <RocketseatLogo />
      <h1>ReactJS Structure + {name}</h1>
      <p>A ReactJS + Next.js structure made by Rocketseat.</p>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      name: 'TypeScript'
    }
  }
}

// export const getServerSideProps: GetServerSideProps = async () => {
//   return {
//     props: {
//       name: 'TypeScript'
//     }
//   }
// }

export default Home
