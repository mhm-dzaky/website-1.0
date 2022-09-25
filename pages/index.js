import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoDribbble, IoLogoDeviantart, IoLogoNpm, IoLogoCodepen, IoLogoWordpress, IoLogoStackoverflow, IoLogoMedium } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m an indie Student based in Indonesia!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Dzaky Abdurrahman
          </Heading>
          <p>UI/UX Design / Developer / Blockchain Developer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/Dzaky.jpeg"
              alt="Profile image"
              borderRadius="full"
              width="200%"
              height="200%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
        I have a need to produce results.
        I'm the type of person who takes challenges head-on
        instead of sweeping them under the rug and wishing
        they go. Even though I'm an optimist,
        I am also realistic about the current situation and how
        satisfy or not satisfy it. Besides the things I mentioned
        That's currently I live with my product called  {' '}
          
            <Link>The solve  </Link>
          
          {' '} {' '} {' '} Which is currently still in the development stage.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2006</BioYear>
          Born in Yogyakarta , Indonesia.
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Completed the UI/UX Design intensive in Yogyakarta.
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Take the final level of education in the field of Developer.
          </BioSection>
          
        
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
        My sef
        </Heading>
        <Paragraph>
          Art, Chill, Match,{' '}
          <Link href="https://dev.to/mhm_dzaky" target="_blank">
          Write in Dev
          </Link>
          , 
          <Link href="https://mhm-dzaky.github.io/cinema" target="_blank">
            {' '} And Cinematography
          </Link>
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
        Social
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/mhm-dzaky" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @mhm-dzaky
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://medium.com/@mhm-dzaky" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoMedium/>}
              >
                @mhm-dzaky
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/mhm__dzaky" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram/>}
              >
                @mhm__dzaky
              </Button>
            </Link>
          </ListItem>

          Kalau mau nambah link medsos..
          
        </List>


        
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
