// Task 1: create an empty class called School
class School {

  // Task 2: create an empty constructor() that accepts 3 parameters: name, level, numberOfStudents. 
    constructor(name, level, numberOfStudents) {

      // Task 3: set the School properties. prepend all the properties with an underscore.
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }

    // Task 4: create getters for name, level, numberOfStudents
    get name() {
      return this._name;
    }
    get level() {
      return this._level;
    }
    get numberOfStudents() {
      return this._numberOfStudents;
    }

    // Task 5: create a setter for numberOfStudents. The method should first check if newNumberOfStudents is a number. if it is, then set the numberOfStudents property. If not, log: 'Invalid input: numberOfStudents must be set to a Number.'
    set numberOfStudents(value) {
      if (value.isNaN()) {
        console.log('Invalid input: numberOfStudents must be set to a Number.');
      } else {
        this._numberOfStudents = value;
      }
    } 

    // Task 6: create a method called quickFacts that logs the following string to the console: 'SCHOOL NAME educates NUMBER OF STUDENTS students at the LEVEL school level.'
    quickFacts() {
      console.log(`${this.name} educates ${this.numberOfStudents} at the ${this.level} school level.`);
    }

    // Task 7: create a method called pickSubstituteTeacher. This method will receive one parameter: substituteTeachers. The substituteTeachers parameter will take an array of strings. Inside the method, randomply generate a whole number between 1 and less than the length of the substituteTeachers array.
    static pickSubstituteTeacher(substituteTeachers) {
      const randInt = Math.floor(Math.random() * substituteTeachers.length);
      return substituteTeachers[randInt];
    }
}

/// Primary School Class ///

// Task 8: create the PrimarySchool class that extends the School class. The only additional property PrimarySchool class has is pickupPolicy.
class PrimarySchool extends School {

  // Task 9: create constructor() that accepts the arguments: name, numberOfStudents, pickupPolicy.
  constructor (name, numberOfStudents, pickupPolicy) {

    // Task 10: call super on the first line of PrimarySchool's constructor(). Pass it any arguments that the parent ()
      super(name, 'primary', numberOfStudents);

      // Task 11: use the remaining argument to set the pickupPolicy property.
      this._pickupPolicy = pickupPolicy;
  }

  // Task 12: Add  pickupPolicy getter
  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

/// HighSchool Class ///

// Task 13: create a HighSchool class that extends the School class. Create an empty HighSchool class that extends School. Create a constructor() that accepts arguments for name, numberOfStudents, and sportsTeams. On the first line of the constructor(), call super and pass it name, 'high', and numberOfStudents as arguments. On the next line, set the sportsTeams property using this._ Under the constructor(), create a getter for sportsTeams. Use console.log() to print the sportsTeams value to the console.
class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, 'high', numberOfStudents);
    this._sportsTeam = sportsTeams;
  }
  get sportsTeams() {
    return this._sportsTeam;
  }
}

// Task 14: create a PrimarySchoolinstance with the following properties: name: 'Lorraine Hansbury', number of students: 514, pickup policy: 'Students must be picked up by a parent, guardian, or a family member over the age of 13.' Save the instance  to a constant variable: lorraineHansbury.
const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', '514', 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

// Task 15: call .quickFacts() on the lorraineHansbury instance.
lorraineHansbury.quickFacts();

// Task 16: call .pickSubstituteTeacher() on school and pas the following array as an arguement: ['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']
const sub = School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);

// Task 17: create a HighSchool instance with the following properties: name: 'Al E. Smith', Number of Students: 415, Sports Teams: ['Baseball', 'Basketball', 'Volleyball', Track and Field']. Save the instance to a constant variable name alSmith.
const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

// Task 18: Get the value saved to the sportsTeam property in alSmith.
console.log(alSmith.sportsTeams);