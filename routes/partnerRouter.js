const express = require("express");
const bodyParser = require("body-parser");

const partnerRouter = express.Router();

partnerRouter.use(bodyParser.json());

partnerRouter
	.route("/")
	.all((req, res, next) => {
		res.statusCode = 200;
		res.setHeader("Content-Type", "text/plain");
		next();
	})
	.get((req, res) => {
		res.end("Will send all the partner to you");
	})
	.post((req, res) => {
		res.end(
			`Will add the partner: ${req.body.name} with description: ${req.body.description}`
		);
	})
	.put((req, res) => {
		res.statusCode = 403;
		res.end("PUT operation not supported on /partner");
	})
	.delete((req, res) => {
		res.end("Deleting all partners");
	});

partnerRouter
	.route("/:partnersId")
	.all((req, res, next) => {
		res.statusCode = 200;
		res.setHeader("Content-Type", "text/plain");
		next();
	})
	.get((req, res) => {
		res.end(`Will send the selected ${req.params.partnerId}to you`);
	})
	.post((req, res) => {
		res.end(
			`Will add the promotion: ${req.params.promotionId} with description: ${req.body.description}`
		);
	})
	.put((req, res) => {
		res.statusCode = 403;
		res.end("PUT operation not supported on /parteners");
	})
	.delete((req, res) => {
		res.end("Deleting all parteners");
	});
module.exports = partnerRouter;
