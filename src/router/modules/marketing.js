import Coupon from '@/components/index/marketing/coupon'
import Limited from '@/components/index/marketing/limited'
import AddLimited from '@/components/index/marketing/addlimited'

export const marketingRoutes = [
    {
        path: "/coupon",
        component: Coupon
    },
    {
        path: "/limited",
        component: Limited
    },
    {
        path: "/addlimited",
        component: AddLimited
    },
]