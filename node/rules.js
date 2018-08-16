// TODO
function match(mentors, mentees) {
  let mentorIdx = 0;
  let mentor;
  let mentee;
  let menteeIdx = 0;
  let matchReason;

  setup(mentors)

  while (mentors.length > 0) {
    mentee = mentees[menteeIdx]
    if ((mentorIdx = firstMajorAndCollege(mentee, mentors)) > -1) {
      matchReason = "college & major"
    } else if ((mentorIdx = firstCollegeMatch(mentee, mentors)) > -1) {
      matchReason = "college"
    } else if ((mentorIdx = firstMajorMatch(mentee, mentors)) > -1) {
      matchReason = "major"
    } else {
      menteeIdx++;
      if (menteeIdx > mentees.length - 1) {
        break;
      }
      continue;
    }
    mentor = mentors[mentorIdx]
    pair(mentor.id, mentee, matchReason)
    if (isMentorFullyPaired(mentor.id)) {
      mentors = filterIdx(mentors, mentorIdx)
    }
    menteeIdx++
    if (menteeIdx > mentees.length - 1) {
      break;
    }
  }
}

function pair(mentorId, mentee, matchReason) {
  pairResults[mentorId].mentees.push(mentee)
  pairResults[mentorId].matchReasons.push(matchReason);
}

function showPairsOnly(pairResults) {
  const results = [];
  for (const mentorId in pairResults) {
    results.push({
      mentor: mentorId,
      mentees: prettyPrintLists(pairResults[mentorId].mentees, "id"),
      matchReason: prettyPrintLists(pairResults[mentorId].matchReasons)
    })
  }
  return results;
}

const prettyPrintLists = (lst, attr) => lst.reduce((acc, item, idx) =>
  acc + `${attr ? item[attr] : item}${idx === lst.length - 1 ? '' : ', '}`, "");


function removeUnpaired(pairResults) {
  const results = Object.assign(pairResults);
  for (const mentorId in results) {
    if (results[mentorId].mentees.length === 0) {
      unmatched.push(mentorId)
      delete results[mentorId]
    }
  }
  return results;
}

const isMentorFullyPaired = (mentorId) => {
  const mentor = pairResults[mentorId];
  return mentor.maxMenteesSize === mentor.mentees.length;
}

const filterIdx = (lst, index) => lst.filter((_, idx) => idx !== index)

const firstMajorMatch = (mentee, mentors) => mentors.findIndex(mentor => mentor.major === mentee.major)

const firstCollegeMatch = (mentee, mentors) => mentors.findIndex(mentor => mentor.college === mentee.college)

const firstMajorAndCollege = (mentee, mentors) => mentors.findIndex(mentor => mentor.college === mentee.college && mentor.major === mentee.major)


let pairResults = {}
let unmatched = [];

function setup(mentors) {
  mentors.forEach((mentor) => {
    pairResults[mentor.id] = {
      mentees: [],
      maxMenteesSize: 4,
      matchReasons: []
    }
  })
}

function main() {
  const mentees = require('./mentees.json')
  const mentors = require('./mentors.json')
  console.log(`${mentees.length} mentees and ${mentors.length} mentors`)

  match(mentors, mentees)
  pairResults = removeUnpaired(pairResults)
  pairResults = showPairsOnly(pairResults)

  console.log(pairResults)
  console.log(unmatched.length)
}

main()