export default async function removeCourse(courseId, contract, address) {
  if (contract) {
    await contract.methods
      .deleteStudentFromCourse(courseId)
      .send({ from: address })
      .once("receipt", (receipt) => {
        console.log("Deleted student from course");
      });
  }
}
