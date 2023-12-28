import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import SyncAltOutlinedIcon from '@mui/icons-material/SyncAltOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';

export const Navitems = [
    {
        id: 0,
        text: 'Menu 1',
        name:'Student Attendence',
        icon: <WidgetsOutlinedIcon />,
        link: "/Dashboard/attendence",
    },
    {
        id: 1,
        text: 'Menu 2',
        name:'Attendence Report',
        icon: <Person2OutlinedIcon />,
        link: "/Dashboard/report",
    },
    {
        id: 2,
        text: 'Menu 3',
        icon: <SyncAltOutlinedIcon />,
        link: "/",
    },
    {
        id: 3,
        text: 'Menu 4',
        icon: <ArticleOutlinedIcon />,
        link: "/",
    },
    {
        id: 4,
        text: 'Menu 5',
        icon: <CircleOutlinedIcon />,
        link: "/",
    },

]