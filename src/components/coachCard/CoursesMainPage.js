import Courses from './Courses'
import t from '../../hooks/useT'

export default function CoursesMainPage() {
    return (
        <Courses title={<div className='title tac mb15 ls1'>{t("Choose your course")}:</div>} wrapClassName="mih100vh pt150 mb200" />
    )
}
