
import Icon from '@/components/Icons';

const list = [
  {
    label: "Dashboard",
    route: "/dashboard",
    icon: <Icon.Dashboard className='size-5 text-purple-600' />,
  },
  {
    label: "Organizational Chart",
    icon: <Icon.OrgChart className='size-5 text-green-600' />,
    route: "/org-chart",
  },
  {
    label: "Settings",
    icon: <Icon.Settings className='size-5 text-purple-600' />,
    children: [
      {
        label: "Departments",
        route: "/department",
        icon: ""
      },
      {
        label: "Positions",
        route: "/position",
        icon: ""
      },
      {
        label: "Users",
        route: "/user",
        icon: ""
      }
    ]
  },
]
export default list;