import AddManyPosts from "../../addManyPosts/AddManyPosts";
import Courses from "../../coachCard/Courses";
import AddCourse from "./AddCourse";

export default function AddCoursesPage() {
    return (
        <AddManyPosts
            type="courses"
            addPath="addCourse"
            lastInputName="courseLabelColor"
            addTitle="Add Courses"
            previewTitle="Preview Courses"
            AddPosts={AddCourse}
            PreviewPosts={Courses}
            addPostsClassName="f g20"
        />
    )
}
