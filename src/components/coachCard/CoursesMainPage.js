import Courses from './Courses'
import t from '../../hooks/useT'

export default function CoursesMainPage() {
    return (
        <div className='mih100vh fcc mb200'>
            <div>
                <div className='title tac mb15 ls1'>{t("Choose your course")}:</div>
                <Courses />
            </div>
        </div>
    )
}
