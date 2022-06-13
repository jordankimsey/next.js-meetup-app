import { MongoClient, ObjectId } from 'mongodb';
import MeetupDetail from '../../components/meetups/MeetupDetail';
import Head from 'next/head';

function MeetupDetails(props) {
  return (
    <>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name='description' content={props.meetupData.description} />
      </Head>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </>
  );
}

//must add getStaticPaths if using getStaticProps inside page component file if its dynamic
//not needed if using getServerSideProps
//next needs to know to prebuild all pages with the supported id because its dynamic
//if user enters id thats not pre generated user will see 404 error
export async function getStaticPaths() {
  const client = await MongoClient.connect(
    'mongodb+srv://jordan1234:jordan1234@cluster0.otme2.mongodb.net/meetups?retryWrites=true&w=majority'
  );
  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  client.close();
  return {
    //must include fallback key that tells next if it include all values or just some of them
    fallback: 'blocking',
    //must fetch and return all possible ids
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  //cannot use useRouter to access meetupid to fetch
  //can use context prop and have access to params which holds property that we defined to have meetupID on
  const meetupId = context.params.meetupId;
  //fetch data for single meetup using above meetupId
  const client = await MongoClient.connect(
    'mongodb+srv://jordan1234:jordan1234@cluster0.otme2.mongodb.net/meetups?retryWrites=true&w=majority'
  );
  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });
  client.close();
  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
  };
}

export default MeetupDetails;
