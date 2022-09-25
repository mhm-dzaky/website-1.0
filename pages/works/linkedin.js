import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Menkiki (麺利き)">
    <Container>
      <Title>
         Linkedin <Badge>2017</Badge>
      </Title>
      <P>
      LinkedIn is the world's largest professional network on the internet. You can use LinkedIn to find the right job or internship, connect and strengthen professional relationships, and learn the skills you need to succeed in your career. You can access LinkedIn from your desktop, LinkedIn mobile app, mobile web experience, or LinkedIn Lite Android mobile app.<br></br>
      <br></br>
A complete LinkedIn profile can help you connect with opportunities by showcasing your unique professional stories through experience, skills, and education.<br></br>
<br></br>
You can also use LinkedIn to host offline events, join groups, write articles, post photos and videos, and more.

<br></br>
      </P>
      <br></br>
      <br></br>
      The characteristics that we do not eliminate are as follows:
      <UnorderedList my={4}>
        <ListItem>Color = Blue</ListItem>
        <ListItem>Simple</ListItem>
        <ListItem>Open Source</ListItem>
      </UnorderedList>

      There are also What we fixed as follows:
      <UnorderedList my={4}>
        <ListItem>Designing to be more modern</ListItem>
        <ListItem>Expanding reach</ListItem>
        <ListItem>Get young people interested in trying
</ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Role</Meta>
          <span>UI/UX Designer</span>
        </ListItem>
        <ListItem>
          <Meta>Methods</Meta>
          <span>Design and coloring</span>
        </ListItem>
        <ListItem>
          <Meta>Output</Meta>
          
          Redesign to show to software tester
          
        </ListItem>
        <ListItem>
          <Meta>Collaboration</Meta>
          Individual
        </ListItem>
        <ListItem>
          <Meta>STACK</Meta>
          Figma, AWS
        </ListItem>
      </List>

      

  <WorkImage src="/images/works/Linkedin-1.SVG" alt="menkiki" />

  
<p>
Start by understanding and analyzing the Web<br></br>
<br></br>

In short, the process looks like this: Analysis of a website 
receives questions/Pooling from interested stakeholders then the
 researcher collects the results to a place which will later be 
 re-understood and made into a more attractive user interface.<br></br>
 <br></br>
 <br></br>
 Results From the results of our observations,
<br></br>
<br></br>
Pooling.In this pooling what we do is ask professional 
designer stakeholders questions, to understand their process
 and to identify gaps in it.
 <br></br>
 <br></br>
 We ask:<br></br>
What are the drawbacks of Linkedin?
<br></br>
<br></br>
Results :<br></br>
A user interface that is less convincing for beginners / lay people
<br></br>
<br></br>
Actions to be taken:
<br></br>
<br></br>

1.<br></br>
Redesigned so that visitors do not doubt Linkedin, because there are some ordinary customers who still doubt the website.
<br></br>
<br></br>
2.<br></br>
Added some features that professional stakeholders may really need
<br></br>
<br></br>

</p>


        
      
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
