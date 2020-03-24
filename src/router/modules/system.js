import Mechanism from '@/components/index/system/mechanism'
import Member from '@/components/index/system/member'
import Role from '@/components/index/system/role'
import Addmechanism from '@/components/index/system/addmechanism'
import Addmember from '@/components/index/system/addmember'
import Management from '@/components/index/system/management'
import AddRole from '@/components/index/system/addrole'
import MenuSystem from '@/components/index/system/menu'
import AddMenu from '@/components/index/system/addmenu'

export const systemRoutes = [
    {
        path: "/mechanism",
        component: Mechanism
    },
    {
        path: "/member",
        component: Member
    },
    {
        path: "/role",
        component: Role
    },
    {
        path: "/addmechanism",
        component: Addmechanism
    },
    {
        path: "/addmember",
        component: Addmember
    },
    {
        path: "/management",
        component: Management
    },
    {
        path: "/addrole",
        component: AddRole
    },
    {
        path: "/menu",
        component: MenuSystem
    },
    {
        path: "/addmenu",
        component: AddMenu
    }
]