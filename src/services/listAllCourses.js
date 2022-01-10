export default async function listAllCourses(contract) {
  if (contract) {
    let list = [];
    const numOfCourses = await contract.methods.numOfCourses().call();
    if (numOfCourses) {
      for (let i = 0; i < numOfCourses; i++) {
        let course = await contract.methods.courses(i).call();
        if (course) {
          list.push({
            courseId: i + 1,
            name: course.name,
            teacher: course.teacher,
            numOfStudents: course.numOfStudents,
          });
        } else {
          console.log("Something unexpected happened");
        }
      }
    }
    return list;
  }
  return [];

  /* 
    
    return format: 
    [
    {
      courseId: 1,
      name: "Course 1",
      teacher: "Teacher 1",
      numOfStudents: "10",
    },
    {
      courseId: 2,
      name: "Course 2",
      teacher: "Teacher 2",
      numOfStudents: "20",
    },
  ]
  
  */
}
