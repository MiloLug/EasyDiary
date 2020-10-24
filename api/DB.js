//structure:
/*
DB:
	students:
		-id, [Work] (complete), name, some data... (Student)

	organizations:
		-id, [Group], some data... (Organization)

	groups:
		-id, [Student], [Subject], [Week] some data... (Group)

	subjects:
		-id, [Work]... (Subject)

	works:
		-id, Subject, some data... (Work)

	days:
		-id, [Subject]... (Day)

	weeks:
		-id, [Day] (7)... (Week)

	shedule:
		-id, [Week], date from, date to... (Schedule)
*/

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