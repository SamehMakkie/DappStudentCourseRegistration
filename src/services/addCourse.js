export default async function addCourse(
  courseId,
  studentId,
  studentName,
  contract,
  accountAddr
) {
  if (contract) {
    contract.methods
      .register(courseId, studentId, studentName)
      .send({ from: accountAddr })
      .once("receipt", (receipt) => {
        console.log("Successfully registered");
      });
  }
}
