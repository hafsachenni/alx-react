import { Seq } from 'immutable';

export default function printBestStudents(grades) {
  const studentSeqnc = Seq(grades);

  const filteredScores = studentSeqnc.filter((student) => {
    student.firstName.charAt(0).toUpperCase();
    return student.score > 70;
  });
  function cptfirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const execution = filteredScores.toJS();
  Object.keys(execution).map((key) => {
    execution[key].firstName = cptfirstLetter(execution[key].firstName);
    execution[key].lastName = cptfirstLetter(execution[key].lastName);
    return execution[key];
  });

  console.log(execution);
}
