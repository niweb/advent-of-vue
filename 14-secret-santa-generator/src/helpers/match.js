export const hasDuplicateInArray = arr => {
  return new Set(arr).size !== arr.length
}

export const hasDuplicates = list => {
  const nameList = list.map(person => person.name)
  const emailList = list.map(person => person.email)
  return hasDuplicates(nameList) || hasDuplicates(emailList)
}

const getRandomInt = (max) => Math.floor(Math.random() * (max + 1))
const getRandomItem = (arr) => arr[getRandomInt(arr.length - 1)]


const isSamePerson = (a, b) => a.email === b.email

const getRandomOtherPerson = (person, people) => {
  const possibleMatches = people.filter(p => !isSamePerson(person, p))

  if (possibleMatches.length === 0) {
    throw new Error('No more matches left')
  }
  else {
    return getRandomItem(possibleMatches)
  }
}

const generateMatchList = (people) => {
  let remainingReceivers = [...people]
  const matches = []

  people.forEach((giver) => {
    const receiver = getRandomOtherPerson(giver, remainingReceivers)
    remainingReceivers = remainingReceivers.filter(p => !isSamePerson(receiver, p))
    matches.push({giver, receiver})
  })

  return matches;
}

export const matchPeople = people => {
  let secretSantaList = null
  while(!secretSantaList) {
    try {
      secretSantaList = generateMatchList(people)
    } catch {
      // an invalid list was generated, try again
      secretSantaList = null;
    }
  }
  return secretSantaList;
}
