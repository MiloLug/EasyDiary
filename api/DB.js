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
		-id, Subject.id, some data... (Work)

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
*/

//const cache = require("./Cache");
const mysql = require('mysql2/promise');

class BaseInstance{
	constructor(category){
		this.cat = category;
	}
	lastVersion(organization){
		
	}
}

module.exports.Subject = class Subject{
	static _lastVersion = 0;
	static _updateLocalVersion(){
		Subject._lastVersion = 23;
	}
	
	static get lastVersion(){
		return Subject._lastVersion;
	}

	static hasUpdates(version){
		Subject._updateLocalVersion();
		return version != Subject.lastVersion;
	}

	static get data(){
		return {
			10: {title:"Географыя"},
			1: {title:"Быологыя"}
		};
	}
}

module.exports.Work = class Work{
	static _lastVersion = 0;
	static _updateLocalVersion(){
		Work._lastVersion = 23;
	}
	
	static get lastVersion(){
		return Work._lastVersion;
	}

	static hasUpdates(version){
		Work._updateLocalVersion();
		return version != Work.lastVersion;
	}

	static get data(){
		return {
			10: {
				title: "Work 1 - giografeya",
				text: "prinesi mne pirozhok"
			},
			12: {
				title: "Work 2 - biolijia",
				text: "prinesi mne snyus"
			}
		};
	}
}

module.exports.Day = class Day{
	static _lastVersion = 0;
	static _updateLocalVersion(){
		Day._lastVersion = 23;
	}
	
	static get lastVersion(){
		return Day._lastVersion;
	}

	static hasUpdates(version){
		Day._updateLocalVersion();
		return version != Day.lastVersion;
	}

	static get data(){
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