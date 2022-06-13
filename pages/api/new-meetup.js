import { MongoClient } from 'mongodb';

//API routes folder defines functions that contain server side code
//next takes this folder and creates apis for us to use
//never exposed to client all on server
//these api request are triggered anytime a request is sent to that route

//path of file, usually called handler
///api/new-meetup

async function handler(req, res) {
  //ensure only POST request to /api/new-meetup is triggered
  if (req.method === 'POST') {
    try {
      const data = req.body;
      const client = await MongoClient.connect(
        'mongodb+srv://jordan1234:jordan1234@cluster0.otme2.mongodb.net/meetups?retryWrites=true&w=majority'
      );
      const db = client.db();
      const meetupsCollection = db.collection('meetups');
      const result = await meetupsCollection.insertOne(data);
      console.log(result);
      client.close();

      res.status(201).json({message: 'Meetup inserted!'});
    } catch (err) {
      console.log('Error', err);
      res.status(500).json({message: 'Error adding meetup.'})
    }
  }
}

export default handler;
