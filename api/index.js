const fastify = require('fastify')();

let {Subject, Work, Day, Week, Schedule} = require('./DB');

fastify.register(require('fastify-cors'), { 
	origin: '*'
});

// Declare a route
fastify.post('/student/getSubjects', async (request, reply) => {
	let params = request.body.parsed;
	if(Subject.hasUpdates(params.lastVersion)){
		return {
			hasUpdate: true,
			lastVersion: Subject.lastVersion,
			data: Subject.data
		};
	}else{
		return {
			hasUpdate: false
		};
	}
});

//Dates: month.day.year



fastify.post('/student/getWorks', async (request, reply) => {
	let params = request.body.parsed;
	if(Work.hasUpdates(params.lastVersion)){
		return {
			hasUpdate: true,
			lastVersion: Work.lastVersion,
			data: Work.data
		};
	}else{
		return {
			hasUpdate: false
		};
	}
});

fastify.post('/student/getDays', async (request, reply) => {
	let params = request.body.parsed;
	if(Day.hasUpdates(params.lastVersion)){
		return {
			hasUpdate: true,
			lastVersion: Day.lastVersion,
			data: Day.data
		};
	}else{
		return {
			hasUpdate: false
		};
	}
});

fastify.post('/student/getWeeks', async (request, reply) => {
	let params = request.body.parsed;
	if(Week.hasUpdates(params.lastVersion)){
		return {
			hasUpdate: true,
			lastVersion: Week.lastVersion,
			data: Week.data
		};
	}else{
		return {
			hasUpdate: false
		};
	}
});

fastify.post('/student/getSchedule', async (request, reply) => {
	let params = request.body.parsed;
	if(Schedule.hasUpdates(params.lastVersion)){
		return {
			hasUpdate: true,
			lastVersion: Schedule.lastVersion,
			data: Schedule.data
		};
	}else{
		return {
			hasUpdate: false
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