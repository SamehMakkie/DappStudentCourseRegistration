pragma solidity ^0.5.0;

contract Registration {
    string public name;
    uint256 public numOfCourses = 3;

    mapping(uint256 => Course) public courses;

    struct Course {
        string name;
        string teacher;
        uint256 numOfStudents;
        mapping(uint256 => Student) students;
    }

    struct Student {
        uint256 id;
        string name;
        address stdAddress;
    }

    constructor() public {
        name = "Student Course Registration";
        courses[0] = Course("Course 1", "Teacher 1", 0);
        courses[0].students[0] = Student(1, "Student 1", msg.sender);
        courses[0].numOfStudents++;
        courses[1] = Course("Course 2", "Teacher 2", 0);
        courses[2] = Course("Course 3", "Teacher 3", 0);
    }

    event CourseRegistered(
        uint256 courseId,
        string courseName,
        string teacher,
        uint256 numOfStudents
    );
    event StudentRegistered(
        uint256 courseId,
        string courseName,
        uint256 id,
        string studentName
    );
    event CourseName(uint256 courseId, string name);
    event StudentNameAndId(uint256 id, string student);
    event NumberOfStudents(string message, uint256 number);

    event Test(string test);

    // Register a student to a course
    function register(
        uint256 courseId,
        uint256 id,
        string memory studentName
    ) public {
        Course storage selectedCourse = courses[courseId];
        Student memory newStudent = Student(id, studentName, msg.sender);
        uint256 numOfStudents = selectedCourse.numOfStudents;
        if (numOfStudents == 0) {
            selectedCourse.students[0] = newStudent;
        } else {
            selectedCourse.students[numOfStudents] = newStudent;
        }
        courses[courseId] = selectedCourse;
        courses[courseId].numOfStudents++;
        emit NumberOfStudents(
            "Number of Courses",
            courses[courseId].numOfStudents
        );
        emit CourseRegistered(
            courseId,
            courses[courseId].name,
            courses[courseId].teacher,
            courses[courseId].numOfStudents
        );
        emit StudentRegistered(
            courseId,
            courses[courseId].name,
            courses[courseId].students[numOfStudents + 1].id,
            courses[courseId].students[numOfStudents + 1].name
        );
    }

    // Delete student from course
    function deleteStudentFromCourse(uint256 courseId) public {
        Course storage selectedCourse = courses[courseId];

        for (uint256 i = 0; i < selectedCourse.numOfStudents; ++i) {
            if (selectedCourse.students[i].stdAddress == msg.sender) {
                emit StudentRegistered(
                    courseId,
                    courses[courseId].name,
                    courses[courseId].students[i].id,
                    courses[courseId].students[i].name
                );
                delete courses[courseId].students[i];
                emit StudentRegistered(
                    courseId,
                    courses[courseId].name,
                    courses[courseId].students[i].id,
                    courses[courseId].students[i].name
                );
            }
        }
    }

    function accessStudentInCourse(uint256 courseId, uint256 studentId)
        public
        view
        returns (string memory, address)
    {
        return (
            courses[courseId].students[studentId].name,
            courses[courseId].students[studentId].stdAddress
        );
    }

    function printStudentsInCourse(uint256 courseId) public {
        emit CourseName(courseId, courses[courseId].name);
        if (courses[courseId].numOfStudents != 0) {
            for (uint256 i; i < courses[courseId].numOfStudents; ++i) {
                emit StudentNameAndId(
                    courses[courseId].students[i].id,
                    courses[courseId].students[i].name
                );
            }
        }
    }

    function printCourses() public {
        for (uint256 i; i < numOfCourses; ++i) {
            emit CourseName(i, courses[i].name);
        }
    }

    function test() public {
        emit Test("message test");
    }
}
