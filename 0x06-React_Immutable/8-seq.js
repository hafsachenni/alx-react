import { Seq } from 'immutable';

export default function printBestStudents(grades) {
  const studentSeqnc = Seq(grades);
  const scores = studentSeqnc.filter(student => student.score >= 70).map(student => ({
    ...student,
    firstName: student.firstName.charAt(0).toUpperCase() + student.firstName.slice(1).toLowerCase(),
    lastName: student.lastName.charAt(0).toUpperCase() + student.lastName.slice(1).toLowerCase()
  }))
    .toObject();
  console.log(scores);
}
