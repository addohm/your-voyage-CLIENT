import { useContext } from "react";
import AddManyPosts from "../../addManyPosts/AddManyPosts";
import Courses from "../../coachCard/Courses";
import AddCourse from "./AddCourse";
import { Context } from "../../../Context";

export default function AddCoursesPage() {

    const { lang } = useContext(Context)

    return (
        <AddManyPosts
            type="courses"
            addPath="addCourse"
            lastInputName="courseLabelColor"
            addTitle={`Add Courses (${lang.toUpperCase()})`}
            previewTitle="Courses Preview"
            AddPosts={AddCourse}
            PreviewPosts={Courses}
            addPostsClassName="f jcc g20 px"
        />
    )
}
