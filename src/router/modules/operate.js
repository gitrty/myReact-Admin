import Commodity from '@/components/index/operate/commodity'
import Notice from '@/components/index/operate/notice'
import Exchange from '@/components/index/operate/exchange'

export const operateRoutes = [
    {
        path: "/commodity",
        component: Commodity
    },
    {
        path: "/notice",
        component: Notice
    },
    {
        path: "/exchange",
        component: Exchange
    },
]