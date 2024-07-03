import React from "react";
import CoursesCard from "./CoursesCard";
import OnlineCourses from "./OnlineCourses";
import BackCourse from "./BackCourse";

const CoursesHome = () => {
  return (
    <>
      <BackCourse title="Explore Courses" />
      <CoursesCard />
      <OnlineCourses />
    </>
  );
};

export default CoursesHome;
