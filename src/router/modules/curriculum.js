import Curriculum from '@/components/index/curriculum/curriculum'
import ReleaseOne from '@/components/index/curriculum/releaseone'
import ReleaseTwo from '@/components/index/curriculum/releasetwo'
import ReleaseThree from '@/components/index/curriculum/releasethree'
import VideoAdmin from '@/components/index/curriculum/video'
import UploadVideo from '@/components/index/curriculum/uploadvideo'
import editCurriculum from '@/components/index/curriculum/editcurriculum'
// import { Upload } from 'antd'

export const curriculumRoutes = [
    {
        path: "/curriculum",
        component: Curriculum
    },
    {
        path: "/releaseone",
        component: ReleaseOne
    },
    {
        path: "/releasetwo",
        component: ReleaseTwo
    },
    {
        path: "/releasethree",
        component: ReleaseThree
    },
    {
        path: "/video",
        component: VideoAdmin
    },
    {
        path: "/editcurriculum",
        component: editCurriculum
    },
    {
        path: "/uploadVideo",
        component: UploadVideo
    }
]