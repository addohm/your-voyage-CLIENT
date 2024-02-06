import Courses from './Courses'
import t from '../../hooks/useT'

export default function CoursesMainPage() {
    return (
        <div className='h100vh fcc mb200'>
            <div>
                <div className='title tac mb15'>{t("Courses")}: </div>
                <Courses />
            </div>
        </div>
    )
}
