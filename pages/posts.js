import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbPortfolio from '../public/images/contents/culture.png'
import thumbHowToUseInkdrop from '../public/images/contents/skolah.jpg'
import thumbFishWorkflow from '../public/images/contents/youtube-fish-workflow.jpg'
import thumbMyDeskSetup from '../public/images/contents/youtube-my-desk-setup.jpg'
import thumb500PaidUsers from '../public/images/contents/blog-500-paid-users.jpg'
import thumbFinancialGoal from '../public/images/contents/blog-financial-goal.png'
import thumbHowToPriceYourself from '../public/images/contents/blog-how-to-price-yourself.jpg'
import thumb50xFaster from '../public/images/contents/youtube-50x-faster.jpg'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Popular Posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Attract users with culture
            "
            thumbnail={thumbPortfolio}
            href="https://medium.com/@mhm-dzaky/attract-users-with-culture-52bbe1517a0e"
          />
          
          <GridItem
            title="Mistakes of some school websites in Indonesia

            "
            thumbnail={thumbHowToUseInkdrop}
            href="https://medium.com/@mhm-dzaky/kesalahan-beberapa-website-1e48c29753d6"
          />

          
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
