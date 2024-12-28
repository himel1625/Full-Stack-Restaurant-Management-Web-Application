const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const port = process.env.PORT || 4000;
const app = express();
const cookieParser = require('cookie-parser');
const corsOptions = {
  origin: [
    'http://localhost:5173',
    'https://dinemaster-6b18e.web.app',
    'https://dinemaster-6b18e.firebaseapp.com',
  ],
  credentials: true,
  optionalSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.s9ap0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Jobs & Bids Db Collection
    const db = client.db('DineMaster');
    const FoodCollection = db.collection('food');
    const purchaseCollection = db.collection('foodOrder');
    //verifyToken token
    const verifyToken = (req, res, next) => {
      const token = req.cookies?.token;
      if (!token)
        return res.status(401).send({ message: 'unauthorized access' });
      jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
          return res.status(401).send({ message: 'unauthorized access' });
        }
        req.user = decoded;
      });
      next();
    };
    // generate jwt
    app.post('/jwt', async (req, res) => {
      const email = req.body;
      // create token
      const token = jwt.sign(email, process.env.SECRET_KEY, {
        expiresIn: '2d',
      });
      res
        .cookie('token', token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
        })
        .send({ success: true });
    });
    // logout || clear cookie from browser
    app.post('/logout', async (req, res) => {
      res
        .clearCookie('token', {
          maxAge: 0,
          secure: process.env.NODE_ENV === 'production',
          sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
        })
        .send({ success: true });
    });
    // save a foodData in DB
    app.post('/add-food', async (req, res) => {
      const foodData = req.body;
      const result = await FoodCollection.insertOne(foodData);
      res.send(result);
    });
    // get 6 limit food jobs data from DB
    app.get('/limit-food', async (req, res) => {
      const result = await FoodCollection.find().limit(6).toArray();
      res.send(result);
    });
    app.get('/one-food', async (req, res) => {
      const search = req.query.search;
      const page = parseInt(req.query.page);
      const size = parseInt(req.query.size);
      let query = {
        foodName: {
          $regex: search,
          $options: 'i',
        },
      };
      const result = await FoodCollection.find(query)
        .skip(page * size)
        .limit(size)
        .toArray();
      res.send(result);
    });
    app.get('/food', async (req, res) => {
      const result = await FoodCollection.find().toArray();
      res.send(result);
    });
    app.get('/FoodDetails/:id', verifyToken, async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await FoodCollection.findOne(filter);
      res.send(result);
    });
    app.get('/my-food/:email', verifyToken, async (req, res) => {
      const email = req.params.email;
      const decodedEmail = req.user?.email;
      if (decodedEmail !== email)
        return res.status(401).send({ message: 'unauthorized access' });
      const query = { seller: email };
      const result = await FoodCollection.find(query).toArray();
      res.send(result);
    });
    app.delete('/my-food/:id', verifyToken, async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await FoodCollection.deleteOne(query);
      res.send(result);
    });
    app.get('/purchase/:id', verifyToken, async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await FoodCollection.findOne(query);
      res.send(result);
    });
    app.post('/PurchaseFood', async (req, res) => {
      const purchaseFood = req.body;
      const result = await purchaseCollection.insertOne(purchaseFood);
      res.send(result);
    });
    app.get('/myOrderFood/:email', verifyToken, async (req, res) => {
      const email = req.params.email;
      const decodedEmail = req.user?.email;
      if (decodedEmail !== email)
        return res.status(401).send({ message: 'unauthorized access' });
      const query = { buyer: email };
      const result = await purchaseCollection.find(query).toArray();
      res.send(result);
    });
    app.delete('/myOrderFood/:id', verifyToken, async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await purchaseCollection.deleteOne(query);
      res.send(result);
    });
    app.post('/addSell/:id', async (req, res) => {
      const id = req.params.id;
      const Quantity = parseInt(req.query.Quantity);
      const filter = { _id: new ObjectId(id) };
      const update = {
        $inc: {
          sell: Quantity,
        },
      };
      const result = await FoodCollection.updateOne(filter, update);
      res.send(result);
    });

    // await client.db('admin').command({ ping: 1 });
    // console.log(
    //   'Pinged your deployment. You successfully connected to MongoDB!',
    // );
  } finally {
  }
}

run().catch(console.dir);
app.get('/', (req, res) => {
  res.send('Hello from DineMaster Server....');
});

app.listen(port, () => console.log(`Server running on port ${port}`));
