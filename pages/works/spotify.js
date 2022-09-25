import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'

const Work = () => (
  <Layout title="Spotify">
    <Container>
      <Title>
        Spotify <Badge>2022</Badge>
      </Title>
      <P>
      Spotify is a digital music, podcast and video service that gives you access to millions of songs and other content from creators around the world.<br></br>

Basic functions like playing music are free, but you can also choose to upgrade to Spotify Premium.<br></br>
<br></br>
With Premium or not, you can:<br></br>
<br></br>

1.Get recommendations based on your taste<br></br>
2.Building a music and podcast collection<br></br>
3.And much more!<br></br>
<br></br>
Spotify is available on a variety of devices, including computers, phones, tablets, speakers, TVs, and cars, and you can easily switch from one device to another with Spotify Connect.
<br></br>
<br></br>
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Role</Meta>
          <span>UX Researcher</span>
        </ListItem>
        
        <ListItem>
          <Meta>Methods</Meta>
          <span>Research Tree test</span>
        </ListItem>

        <ListItem>
          <Meta>Skills</Meta>
          <span>Synthesis</span>
        </ListItem>

        <ListItem>
          <Meta>Output</Meta>
          <span>Usability report to be presented to the team</span>
        </ListItem>

        <ListItem>
          <Meta>Collaboration</Meta>
          <span>Work together with other UX researchers, Product Managers</span>
        </ListItem>

        <ListItem>
          <Meta>Tools</Meta>
          <span>Figma,Google Slides, Discord</span>
        </ListItem>

      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Description</Center>
      </Heading>
        
      <p>

      <WorkImage src="/images/works/Spotify-1.svg" alt="walknote" />
      <WorkImage src="/images/works/Spotify-2.png" alt="walknote" />
	 We focused on understanding the discoverability of this playlist from the homepage:<br></br>
	<br></br>
	Accurate For you page according to customer interest<br></br>
	Get info about customer policies. Find euphoria customer ​<br></br>
	<br></br>
	Tree testing is a technique to evaluate the findability of items in an Application and is used to optimize the structure of the For you page. This is also known as sorting.<br></br>
	<br></br>
	We conducted a tree test as a UX Research method to evaluate:<br></br>
	<br></br>
	Can users find the music items they like? <br></br>
	<br></br>
	How sure are users that they have found the item correctly? <br></br>
	<br></br>
	Is there a feature that users are looking forward to? <br></br>
	<br></br>
	​ <Heading as="h4" fontSize={16} my={6}>
        My research process:
      </Heading> <br></br>
	<br></br>
	1. Get started The Product Manager came up with a request to evaluate user preferences. I asked him his hypothesis about which items were confusing to find. It comes with a list of backed up items with data from tracking as well. ​<br></br>
	<br></br>
	 ​<br></br>
	<br></br>
	2.Using Favorite rating By combining the percentage of participants who found the item along with how confident they were, it was possible to create a 'four block' diagram. Ideally the task will fall into the upper right quadrant (high success and high self-confidence). Each of the other three quadrants represented failure, however, the tasks in which most participants failed to complete i.e. 50% accuracy rate, but were confident that they had done i.e., Trust Rating 4.0 was classified as Favourite. ​<br></br>
	<br></br>
	3. Findings and Recommendations Web navigation is not intuitive enough, readability & accessibility should be improved due to most of the mentioned aspects like colors, contrast, fonts (US comparison supports this finding). Words and item categories should be clearer & distinguishable. ​<br></br>
	<br></br>
	4. Learning I found the tree test very good at evaluating navigational structures especially snythesising findings using Disaster Ratings, which was really pragmatic and eye opening for us UX Researchers and Product Managers to take action for next steps. We also have follow-up tests for CS contacts in other studies. ​<br></br>
	<br></br>
</p>

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
