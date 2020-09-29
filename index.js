const https = require("https");
const core = require("@actions/core")

const input = {
	value1: core.getInput("value1"),
	value2: core.getInput("value2"),
  value3: core.getInput("value3"),
  key: core.getInput("key"),
	event: core.getInput("event")
};

if(!input.key || !input.event){
  core.setFailed(`Miss required param key or event!`)
  return;
}
const output = {

};
if(input.value1){
  output.value1 = input.value1
}
if(input.value2){
  output.value2 = input.value2
}
if(input.value3){
  output.value3 = input.value3
}
const requestPayload = JSON.stringify(output);
const body = Buffer.from(requestPayload, 'utf-8');
core.debug(`requestPayload: ${requestPayload}`);
const requestOption = {
	port: 443,
	method: "POST",
	headers: {
		"Content-Type": "application/json",
		"Content-Length": body.length
	}
};
core.debug(`requestOption: ${JSON.stringify(requestOption,null,2)}`);

const webhookUrl = `https://maker.ifttt.com/trigger/${input.event}/with/key/${input.key}`
const requestNode = https.request(
	webhookUrl,
	requestOption,
	(result) => {
		core.debug(`Status Code: ${result.statusCode}`);
	}
);
requestNode.on(
	"error",
	(error) => {
		core.setFailed(error);
	}
);
requestNode.write(body);
requestNode.end();
