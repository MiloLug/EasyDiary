//structure:
/*
DB:
	students:
		-id, --[Work] (complete), name, some data... (Student)
		relations:
			rel_stud_work_complete:
				- Student.id, Work.id

	organizations:
		-id, --[Group], some data... (Organization)

	groups:
		-id, Organization.id, --[Student], --[Subject], --[Schedule] some data... (Group)
		relations:
			rel_group_stud:
				- Group.id, Student.id
			rel_group_subj:
				- Group.id, Subjec.id
			rel_group_sch:
				- Group.id, Schedule.id

	subjects:
		-id, --[Work]..., title (Subject)

	works:
		-id, Subject.id, text, version ... (Work)

	days:
		-id, --[Subject]... (Day)
		relations:
			rel_day_subj:
				- Day.id, Subject.id, subj_order

	weeks:
		-id, Schedule.id, [Day.id] (7)... (Week)

	schedules:
		-id, --[Week], date from, date to... (Schedule)
		relations:
			rel_sch_week:
				- Schedule.id, Week.id, sch_order

	updaters:
		-id, [Group.id], group_v, subj_v, work_v, day_v, week_v, sch_v (Updater)
*/

/**
 * UPDATE works w, updaters u SET u.work_v = u.work_v+1, w.version = u.work_v+1 WHERE u.group_id = 1 AND w.id = 2
 */
/** */
/** */
/** */
/** */
/** */
/** */

//const cache = require("./Cache");
const mysql = require('mysql2/promise');

const db = (()=>{
	const pool = mysql.createPool({
		host:'localhost',
		user: 'root',
		database: 'easydiary'
	});
	return pool;
})();

class BaseInstance{
	constructor(category){
		this.cat = category;
	}
	async hasUpdates(group, current_v){
		let [rows, fields] = await db.execute(`SELECT ${this.cat}_v version FROM updaters WHERE group_id = ? AND ${this.cat}_v <> ?`, [
			group,
			current_v
		]);
		return rows[0];
	}
	async updateBaseVersion(group){
		return (await db.execute(`UPDATE updaters SET ${this.cat}_v = ${this.cat}_v + 1 WHERE group_id = ?`, [
			group
		]))[0].affectedRows !== 0;
	}
	async getLastVersion(group){
		return (await db.execute(`SELECT ${this.cat}_v version FROM updaters WHERE group_id = ?`, [
			group
		]))[0][0];
	}
	async data(){return [];}
}

module.exports.Subject = new class Subject extends BaseInstance{
	constructor(){
		super("subj");
	}
	
	async data(group){
		let [rows, fields] = await db.execute(
`SELECT 
	S.id,
	S.title
FROM
	subjects S
INNER JOIN rel_group_subj RGS ON
	RGS.subj_id = S.id
	AND RGS.group_id = ?`, [
			group
		]);
		return rows;
	}
}

module.exports.Work = new class Work extends BaseInstance{
	constructor(){
		super("work");
	}

	async data(group, version = 0){
		let [rows, fields] = await db.execute(
`SELECT 
	*
FROM
	works
WHERE
	group_id = ?
AND version > ?`, [
			group,
			version
		]);
		return rows;
	}
}

module.exports.Day = new class Day extends BaseInstance{
	constructor(){
		super("day");
	}

	async data(group){
		return {
			1: {
				works: [10, 12],
				subjects: [10, 10, 1, 10, 1, 10]
			},
			2: {
				works: [],
				subjects: [10, 10, 1, 10]
			},
			3: {
				works: [],
				subjects: [10, 10, 1, 10]
			},
			4: {
				works: [10, 12],
				subjects: [10, 10, 10, 10, 10]
			},
			5: {
				works: [],
				subjects: [1, 10, 1, 10, 1, 1]
			},
			6: {
				works: [10, 12],
				subjects: [10, 10, 10, 10, 1, 10]
			},
			7: {
				works: [],
				subjects: [10, 10, 10, 10]
			},
			8: {
				works: [],
				subjects: [10, 10, 10, 10]
			},
			9: {
				works: [10, 12],
				subjects: [10, 10, 10, 10, 10]
			},
			10: {
				works: [],
				subjects: [10, 1, 1, 10, 1, 1]
			}
		};
	}
}

module.exports.Week = class Week{
	static _lastVersion = 0;
	static _updateLocalVersion(){
		Week._lastVersion = 23;
	}
	
	static get lastVersion(){
		return Week._lastVersion;
	}

	static hasUpdates(version){
		Week._updateLocalVersion();
		return version != Week.lastVersion;
	}

	static get data(){
		return {
			1: {
				days: [1,2,3,4,5, null, null]
			},
			2: {
				days: [6,7,8,9,10, null, null]
			}
		};
	}
}


module.exports.Schedule = class Schedule{
	static _lastVersion = 0;
	static _updateLocalVersion(){
		Schedule._lastVersion = 23;
	}
	
	static get lastVersion(){
		return Schedule._lastVersion;
	}

	static hasUpdates(version){
		Schedule._updateLocalVersion();
		return version != Schedule.lastVersion;
	}

	static get data(){
		return [{
			id: 1,
			from: 1602882000000, // 10/17/2020
			to: 1608156000000, // 12/17/2020
			weeks: [1,2]
		}];
	}
}