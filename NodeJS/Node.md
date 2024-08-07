                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         

```javascript
// 导入模块1
module.exports = Calculator;
const Calculator = require('./test-module-1');
// 导入模块2
module.exports = {Calculator};
const {Calculator} = require('./test-module-1');
// 导入模块3
module.exports = class {
    constructor() {

    }
    add(a, b) {
        return a + b;
    }
    minus(a, b) {
        return a - b;
    }
    multiply(a, b) {
        return a * b;
    }
}
const Calculator = require('./test-module-1');
// 导入模块4
exports.add = (a, b) => {
    return a + b;
}

exports.multiply = (a, b) => {
    return a * b;
}

exports.minus = (a, b) => {
    return a - b;
}
const calculator = require('./test-module-2');
console.log(calculator.add(3, 7))
```

```javascript
// promises
const readFilePromise = function(file) {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            if(err) reject(err);
            resolve(data.toString());
        })
    })
}

const writeFilePromise = function(file, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, data, (err) => {
            if(err) reject(err);
            resolve('Write File Success.');
        })
    })
}

const promise1 = superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
const promise2 = superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
const promise3 = superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
const allResult = await Promise.all([promise1, promise2, promise3]);
```

```javascript
// Express
// API: Application Programming Interface
// REST API: Representational States Transfer
// 原则：
// 1. Separate API into logical resources
// 2. Expose structured, resource-based URLs
// 3. Use HTTP methods(verbs)
// 4. Send data as JSON
// 5. Be stateless
```

```javascript
// Express 
// post 发送的数据保存在req.body里面
// get router的参数存在req.params里面	// app.get('/api/v1/tours/:id', (req, res, next) => {}）
// ？后面传的参数在req.query里面			// localhost:8000/api/v1/tours/5?foo=bar
// app.get('/api/v1/tours/:id/:x/:y?', (req, res, next) => {}）		// y是可选参数
```

```javascript
const tourRouter = express.Router();
tourRouter.route('/tours').get(getAllTours).post(createTour);
tourRouter.route('/tours/:id').get(getTourById).patch(updateTourById).delete(deleteTourById);
app.use('/api/v1', tourRouter);
```

```javascript
// param middleware
router.param('id', (req, res, next, value) => {
    console.log(`Tour id is ${value}`);
    next();
})
```

```javascript
// chain multiple middlewares
router.route('/tours').post(tourController.checkBody, tourController.createTour);

// express serve static file
app.use(express.static(`${__dirname}/public`));
// get env environment variable
console.log(app.get('env'));
// get all environment variable
console.log(process.env);
```

```javascript
// MongoDB
mongosh -u admin -p EPM_user_2017 --authenticationDatabase admin
show dbs
db.createUser({user: 'natours',pwd: 'EPM_user_2017',roles:[{role: 'readWrite',db: 'natours'}]})
mongosh -u natours -p EPM_user_2017 --authenticationDatabase natours
use natours
show collections

// insert documents
db.tours.insertOne({ name: "The Forest Hiker", price: 999, rating: 4.7 })
db.tours.insertMany([ { name: "The Sea Explorer", price: 499, rating: 4.8 }, { name: "The Snow Adventure", price: 998, rating: 4.9, difficulty: "easy" } ])

// query docuemnts
db.tours.find()
db.tours.find( { name: "The Forest Hiker" } )
db.tours.find( { price: { $lte: 500 } } )							// less than or equal
db.tours.find( { price: { $lte: 500 }, rating: { $gte: 4.99 } } )	// greater than or equal
db.tours.find({ $or: [ { price: { $lte: 500 } }, { rating: { $gte: 4 } } ] })
// determine which fields return
db.tours.find({ $or: [ { price: { $lte: 500 } }, { rating: { $gte: 4.8 } } ] }, { name: 1, _id: 0 })

// update documents
db.tours.updateOne( {name: "The Forest Hiker" }, { $set: {price: 1999, rating: 1, difficulty: "middum" } } )
db.tours.updateMany( { price: { $gte: 498 }, rating: { $gte: 4.8 } }, { $set: { premium: true } } )
db.tours.replaceOne({  }, {  })
db.tours.replaceMany({  }, {  })

// delete documents
db.tours.deleteOne( { rating: { $lte: 4.8 } } )
db.tours.deleteMany( { rating: { $lte: 4.8 } } )
```

