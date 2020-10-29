const fastify = require('fastify')();

let {Subject, Work, Day, Week, Schedule} = require('./DB');

fastify.register(require('fastify-cors'), { 
	origin: '*'
});

// Declare a route
fastify.post('/student/getSubjects', async (request, reply) => {
	let params = request.body.parsed;
	let ver = await Subject.base.hasUpdates(1, params.lastVersion || 0);
	if(ver !== undefined){
		return {
			hasUpdates: true,
			lastVersion: ver.version,
			data: await Subject.data(1)
		};
	}else{
		return {
			hasUpdates: false
		};
	}
});

//Dates: month.day.year



fastify.post('/student/getWorks', async (request, reply) => {
	let params = request.body.parsed;
	let ver = await Subject.base.hasUpdates(1, params.lastVersion || 0);
	if(ver !== undefined){
		return {
			hasUpdates: true,
			lastVersion: ver.version,
			data: await Work.data(1)
		};
	}else{
		return {
			hasUpdates: false
		};
	}
});

fastify.post('/student/getDays', async (request, reply) => {
	let params = request.body.parsed;
	if(Day.hasUpdates(params.lastVersion)){
		return {
			hasUpdates: true,
			lastVersion: Day.lastVersion,
			data: Day.data
		};
	}else{
		return {
			hasUpdates: false
		};
	}
});

fastify.post('/student/getWeeks', async (request, reply) => {
	let params = request.body.parsed;
	if(Week.hasUpdates(params.lastVersion)){
		return {
			hasUpdates: true,
			lastVersion: Week.lastVersion,
			data: Week.data
		};
	}else{
		return {
			hasUpdates: false
		};
	}
});

fastify.post('/student/getSchedule', async (request, reply) => {
	let params = request.body.parsed;
	if(Schedule.hasUpdates(params.lastVersion)){
		return {
			hasUpdates: true,
			lastVersion: Schedule.lastVersion,
			data: Schedule.data
		};
	}else{
		return {
			hasUpdates: false
		};
	}
});






// Run the server!
fastify.addContentTypeParser(
	"application/json",
	{ parseAs: "string" },
	function (req, body, done) {
		try {
			var newBody = {
				raw: body,
				parsed: JSON.parse(body),
			};
			done(null, newBody);
		} catch (error) {
			error.statusCode = 400;
			done(error, undefined);
		}
	}
);

const start = async () => {
	try {
		await fastify.listen(3000)
	} catch (err) {
		fastify.log.error(err)
		process.exit(1)
	}
}
start()