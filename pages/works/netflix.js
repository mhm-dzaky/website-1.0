import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Netflix">
    <Container>
      <Title>
        Netflix <Badge>2021</Badge>
      </Title>
      <P>
      Netflix is a streaming service that offers a wide variety of award-winning TV shows,
       movies, anime, documentaries, and more on thousands of internet-connected devices.
<br></br>
<br></br>
You can watch as much as you want, whenever you want without a single commercial – 
all for one low monthly price. There's always something new to discover and new TV
 shows and movies are added every week!
      </P>
      <P>
        
      </P>
      <br></br>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>iOS, Android, Mac, Windows And web</span>
        </ListItem>
        <ListItem>
          <Meta>Role</Meta>
          <span>UI/UX Designer</span>
        </ListItem>
        <ListItem>
          <Meta>Sills</Meta>
          <span>Design, Prototyping, Color analysis, Making it easy for users</span>
        </ListItem>
        <ListItem>
          <Meta>Deliverables</Meta>
          <span>Extremes, proto persona, prioritisation matrix</span>
          <ListItem>
          <Meta>Output</Meta>
          <span>Training program, redesigned confluence page, UX 
            Research guidelines and templates</span>
        </ListItem>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Figma, Unsplash, Font Base</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Source</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Link href="http://renewal49.hateblo.jp/entry/20120710/1341925681">
            <Badge mr={2}>Figma</Badge>
            https://www.figma.com/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Link href="https://unsplash.com/">
            <Badge mr={2}>Unsplash</Badge>
            https://unsplash.com/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Link href="https://fontba.se/">
            <Badge mr={2}>Font Base</Badge>
            https://fontba.se/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <Heading as="h4" fontSize={16} my={6}>
        <Center>Description</Center>
      </Heading>
      </UnorderedList>
      <WorkImage src="/images/works/Netflix-1.svg" alt="walknote" />

      <Heading as="h4" fontSize={16} my={6}>
      Start by understanding and analyzing the decline status
      </Heading>
      We collect some data from research:<br></br>
      <br></br>

      Interview:<br></br>
      <br></br>
      In-depth Interviews with 6 Product Managers and 6 business analysts to understand their processes and to identify gaps in them<br></br>
<br></br>
We ask:
<br></br>
<br></br>
please explain to us how your product development process looks, and which part you still think can be optimized<br></br>
<br></br>
Results:<br></br>
<br></br>

Product Manager:
<br></br>
 they miss discovery research at an early stage of development
Business
<br></br> Analyst products:
<br></br>
 lost discovery research to find the right problem to solve<br></br>
 
<br></br>

Survey:<br></br>
<br></br>

We surveyed 27 business operations leaders to understand whether they had integrated qualitative and quantitative research into their processes <br></br>
<br></br>
We ask:
<br></br>
<br></br>


"Do you collect data about your customers' needs through market/user research?"
Then they need to evaluate through a rating scale from 1-7 (1 for never, 7 for always)<br></br>

<br></br>

Results:<br></br>
<br></br>

Low adoption of qualitative and quantitative research in their process (3.5 out of 7, ideally high would be above 4)
<br></br>

​
      




      
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
