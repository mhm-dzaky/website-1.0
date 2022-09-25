import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbInkdrop from '../public/images/works/umlx99.jpg'
import thumbWalknote from '../public/images/works/netflix.jpg'
import thumbFourPainters from '../public/images/works/spotify.jpeg'
import thumbMenkiki from '../public/images/works/Linkedin.jpeg'
import thumbMargelo from '../public/images/works/margelo_eyecatch.png'
import thumbModeTokyo from '../public/images/works/modetokyo_eyecatch.png'
import thumbStyly from '../public/images/works/styly_eyecatch.png'
import thumbPichu2 from '../public/images/works/pichu2_eyecatch.png'
import thumbFreeDBTagger from '../public/images/works/freedbtagger_eyecatch.png'
import thumbAmembo from '../public/images/works/amembo_eyecatch.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="umlx99" title="Umlx99" thumbnail={thumbInkdrop}>
          Community that contains video games.

          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="netflix"
            title="Netflix"
            thumbnail={thumbWalknote}
          >
            Designing the netflix App for the better

          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="spotify"
            title="Spotify"
            thumbnail={thumbFourPainters}
          >
            User research.Improved existing factors
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="linkedin" thumbnail={thumbMenkiki} title="Linkedin">
          improve existing factors and attract new customers to increase company value

          </WorkGridItem>
        </Section>
        
        
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        
          
        </Section>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
