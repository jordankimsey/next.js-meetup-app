import Head from 'next/head';
import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';

function HomePage(props) {
  return (
    <>
      <Head>
        <title>Meetups</title>
        <meta name='description' content='Browse from a huge list of meetups happening soon!'/>
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
}

//pros
//excutes first during build process, not excute on client side
//allows us to remove useeffect and usestate
// sets props then return everything, great for SEO to have everything loaded into app
//fetch data from an API or read files from filesystem
//must return object and usually set props properity
//optional for what we call inside props object
//can only be called in pages

//cons
//could be outdated data, generated during build process
//if we have more meetups then we wouldnt see new ones created

//solution
//we can pass in revalidate to rebuild site to fetch current data every __ seconds on server
//faster allows for caching on cdn instead of regenerating everytime

//this code isnt run on client so we can write server code here to call our own api without having to fetch outside
export async function getStaticProps() {
  //fetch data from our API without calling fetch or using axios
  const client = await MongoClient.connect(
    'mongodb+srv://jordan1234:jordan1234@cluster0.otme2.mongodb.net/meetups?retryWrites=true&w=majority'
  );
  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const meetups = await meetupsCollection.find().toArray();
  client.close();
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;

//Alternative to getStaticProps(), not best choice in this case
//does not run during build process but instead always on server after deployment
//runs for every request
//ideal if you need access to req, res and data updates multiple times per second
// export async function getServerSideProps(context) {
//   //optional prop accessible called context
//   //have access to req and res of requests that can be used for the server side props or auth and cookies
//   //dont return res object but props object instead
//   const req = context.req;
//   const res = context.res;

//   //fetch data from API or filesystem
//   //only runs on server
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   };
// }

// const DUMMY_MEETUPS = [
//   {
//     id: 'm1',
//     title: 'First meetup',
//     image:
//       'https://images.unsplash.com/photo-1522083165195-3424ed129620?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=997&q=80',
//     address: '12345 Brooklyn st New York, New York',
//     description: 'This is our first meet up',
//   },
//   {
//     id: 'm2',
//     title: 'Second meetup',
//     image:
//       'https://images.unsplash.com/photo-1517209806898-2be0a0caf519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=997&q=80',
//     address: '12345 Brooklyn st New York, New York',
//     description: 'This is our second meet up',
//   },
// ];
