import Commodity from '@/components/index/operate/commodity'
import Notice from '@/components/index/operate/notice'

export const operateRoutes = [
    {
        path: "/commodity",
        component: Commodity
    },
    {
        path: "/notice",
        component: Notice
    },
]