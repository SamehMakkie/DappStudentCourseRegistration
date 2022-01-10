export default async function listStudentsInCourse(courseId, contract) {
  if (contract) {
    let list = [];
    let course = await contract.methods.courses(courseId).call();
    for (let i = 0; i < course.numOfStudents; i++) {
      let student = await contract.methods
        .accessStudentInCourse(courseId, i)
        .call();
      list.push({
        id: i + 1,
        name: student[0],
      });
    }
    return list;
  }
  return [];
}
