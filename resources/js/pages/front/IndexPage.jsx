import React from 'react';
import { Card, Icon, Image,Container,Header,Grid,Table ,Segment} from 'semantic-ui-react';
const IndexPage = () => {
  return(<>
     <Container>
      <Header as='h2'>Dogs Roles with Humans</Header>
      <Grid divided='vertically'>
        <Grid.Row columns={5}>
        <Grid.Column>
          <Card>
            
              <Image src='https://i.ibb.co/ZMWhXVG/cat-main-0705140948-Mango-Juice.jpg' wrapped ui={false} />
          
            <Card.Content>
              <Card.Header>Matthew</Card.Header>
              <Card.Meta>
                <span className='date'>Joined in 2015</span>
              </Card.Meta>
              <Card.Description>
                Matthew is a musician living in Nashville.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='user' />
                22 Friends
              </a>
            </Card.Content>
          </Card>
          </Grid.Column>
          <Grid.Column>
          <Card>
            <Image src='https://i.ibb.co/ZMWhXVG/cat-main-0705140948-Mango-Juice.jpg' wrapped ui={false} />
            <Card.Content>
              <Card.Header>Matthew</Card.Header>
              <Card.Meta>
                <span className='date'>Joined in 2015</span>
              </Card.Meta>
              <Card.Description>
                Matthew is a musician living in Nashville.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='user' />
                22 Friends
              </a>
            </Card.Content>
          </Card>
          </Grid.Column>
          <Grid.Column>
          <Card>
            <Image src='https://i.ibb.co/ZMWhXVG/cat-main-0705140948-Mango-Juice.jpg' wrapped ui={false} />
            <Card.Content>
              <Card.Header>Matthew</Card.Header>
              <Card.Meta>
                <span className='date'>Joined in 2015</span>
              </Card.Meta>
              <Card.Description>
                Matthew is a musician living in Nashville.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='user' />
                22 Friends
              </a>
            </Card.Content>
          </Card>
          </Grid.Column>
          <Grid.Column>
          <Card>
            <Image src='https://i.ibb.co/ZMWhXVG/cat-main-0705140948-Mango-Juice.jpg' wrapped ui={false} />
            <Card.Content>
              <Card.Header>Matthew</Card.Header>
              <Card.Meta>
                <span className='date'>Joined in 2015</span>
              </Card.Meta>
              <Card.Description>
                Matthew is a musician living in Nashville.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='user' />
                22 Friends
              </a>
            </Card.Content>
          </Card>
          </Grid.Column>
          <Grid.Column>
          <Card>
            <Image src='https://i.ibb.co/ZMWhXVG/cat-main-0705140948-Mango-Juice.jpg' wrapped ui={false} />
            <Card.Content>
              <Card.Header>Matthew</Card.Header>
              <Card.Meta>
                <span className='date'>Joined in 2015</span>
              </Card.Meta>
              <Card.Description>
                Matthew is a musician living in Nashville.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='user' />
                22 Friends
              </a>
            </Card.Content>
          </Card>
          </Grid.Column>
          <Grid.Column>
          <Card>
            <Image src='https://i.ibb.co/ZMWhXVG/cat-main-0705140948-Mango-Juice.jpg' wrapped ui={false} />
            <Card.Content>
              <Card.Header>Matthew</Card.Header>
              <Card.Meta>
                <span className='date'>Joined in 2015</span>
              </Card.Meta>
              <Card.Description>
                Matthew is a musician living in Nashville.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='user' />
                22 Friends
              </a>
            </Card.Content>
          </Card>
        </Grid.Column>
          <Grid.Column>
          <Card>
            <Image src='https://i.ibb.co/ZMWhXVG/cat-main-0705140948-Mango-Juice.jpg' wrapped ui={false} />
            <Card.Content>
              <Card.Header>Matthew</Card.Header>
              <Card.Meta>
                <span className='date'>Joined in 2015</span>
              </Card.Meta>
              <Card.Description>
                Matthew is a musician living in Nashville.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='user' />
                22 Friends
              </a>
            </Card.Content>
          </Card>
        </Grid.Column>
          <Grid.Column>
          <Card>
            <Image src='https://i.ibb.co/ZMWhXVG/cat-main-0705140948-Mango-Juice.jpg' wrapped ui={false} />
            <Card.Content>
              <Card.Header>Matthew</Card.Header>
              <Card.Meta>
                <span className='date'>Joined in 2015</span>
              </Card.Meta>
              <Card.Description>
                Matthew is a musician living in Nashville.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='user' />
                22 Friends
              </a>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid.Row>
      </Grid>
      <Table celled fixed singleLine>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Status</Table.HeaderCell>
        <Table.HeaderCell>Description</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>John</Table.Cell>
        <Table.Cell>Approved</Table.Cell>
        <Table.Cell
          title={[
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
            'et dolore magna aliqua.',
          ].join(' ')}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jamie</Table.Cell>
        <Table.Cell>Approved</Table.Cell>
        <Table.Cell>Shorter description</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jill</Table.Cell>
        <Table.Cell>Denied</Table.Cell>
        <Table.Cell>Shorter description</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
    </Container>
  </>)
}

export default IndexPage;