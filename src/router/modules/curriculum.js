import Curriculum from '@/components/index/curriculum/curriculum'
import ReleaseOne from '@/components/index/curriculum/releaseone'
import ReleaseTwo from '@/components/index/curriculum/releasetwo'
import ReleaseThree from '@/components/index/curriculum/releasethree'
import VideoAdmin from '@/components/index/curriculum/viedo'

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
        path: "/viedo",
        component: VideoAdmin
    },
]