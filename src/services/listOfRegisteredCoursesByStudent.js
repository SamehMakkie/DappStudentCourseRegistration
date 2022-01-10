export default async function listOfRegisteredCoursesByStudent(
  address,
  contract
) {
  if (contract) {
    let courses = [];
    const numOfCourses = await contract.methods.numOfCourses().call();
    if (numOfCourses) {
      for (let i = 0; i < numOfCourses; i++) {
        let course = await contract.methods.courses(i).call();
        for (let j = 0; j < course.numOfStudents; j++) {
          let studentInCourse = await contract.methods
            .accessStudentInCourse(i, j)
            .call();
          if (studentInCourse[1] === address) {
            courses.push({
              id: i + 1,
              name: course.name,
              teacher: course.teacher,
            });
          }
        }
      }
      return courses;
    }
    return [];
  }
}
