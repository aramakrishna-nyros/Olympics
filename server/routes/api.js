const express = require("express");
const router = express.Router();
const MongoClient = require("mongodb").MongoClient;
const ObjectID = require("mongodb").ObjectID;


// Connect 
const connection = (closuer) => {
	return MongoClient.connect('mongodb://localhost:27017/olympic', (err, db) => {
		if(err) return console.log(err)

		closuer(db);
	});
};

// Error handling
const sendError = (err, res) => {
	response.status = 500;
	response.message = typeof err == 'object' ? err.message : err;
	res.status(501).json(response);
};


// Response handling
let response = {
	status: 200,
	data: [],
	message: null
};

// Get cyclings
router.get('/cyclings', (req,res) =>{
	connection((db) => {
		db.collection('cyclings')
		.find()
		.toArray()
		.then((cyclings) => {
			response.data = cyclings;
			res.json(response);
		})
		.catch((err) => {
			sendError(err, res);
		});
	});
});

router.get('/weightliftings', (req,res) =>{
	connection((db) => {
		db.collection('weightliftings')
		.find()
		.toArray()
		.then((weightliftings) => {
			response.data = weightliftings;
			res.json(response);
		})
		.catch((err) => {
			sendError(err, res);
		});
	});
});

router.post("/new_cycling", (req, res) => {
	connection((db) => {
		db.collection('cyclings')
	  	.insert(req.body)
	    .then(item => {
	      res.send(item);
	    })
	    .catch(err => {
	      res.status(400).send("unable to save to database");
	    });

	});
});

router.post("/new_weightlifting", (req, res) => {
	connection((db) => {
		db.collection('weightliftings')
	  	.insert(req.body)
	    .then(item => {
	      res.send(item);
	    })
	    .catch(err => {
	      res.status(400).send("unable to save to database");
	    });

	});
});



module.exports = router;