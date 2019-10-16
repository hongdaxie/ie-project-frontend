import{
    Home,
    Vaccinations,
    Recommondations,
    Quiz,
    Travel,
    NotFound,
    Login,
    Register,
    Account,
    AddNewGrandParent,
    EditGrandParent
} from '../views'


export const mainRoutes = [
    {
        pathname: "/Home",
        component: Home,
        title : "Home",
        isNav : true,
    },
    {
        pathname: "/Vaccinations",
        component: Vaccinations,
        title : "Vaccinations",
        isNav : true,
    },
    {
        pathname: "/Recommondations",
        component: Recommondations,
        title : "Recommondations",
        isNav : true,
    },
    {
        pathname: "/Quiz",
        component: Quiz,
        title : "Quiz",
        isNav : true,
    },
    {
        pathname: "/Travel",
        component: Travel,
        title : "Travel",
        isNav : true,
    },
    {
        pathname: "/Login",
        component: Login
    },
    {
        pathname: "/Register",
        component: Register
    },
    {
        pathname: "/Account",
        component: Account,
        exact: true,
    },
    {
        pathname: "/Account/addnew/:id",
        component: AddNewGrandParent,
    
    },
    {
        pathname: "/Account/edit/:id",
        component: EditGrandParent,
    
    },
    {
        pathname: "/404",
        component: NotFound
    }
]
