// import Loadable from './loadable'
import Loadable from 'react-loadable'
import {Loading} from '../components'



const Home = Loadable({
    loader: () => import('./Home'),
    loading : Loading
})

const Vaccinations = Loadable({
    loader: () => import('./Vaccinations'),
    loading : Loading
})

const Recommondations = Loadable({
    loader: ()=> import('./Recommondations'),
    loading: Loading
})

const Quiz = Loadable({
    loader: ()=> import('./Quiz'),
    loading: Loading
})

const Travel = Loadable({
    loader: ()=> import('./Travel'),
    loading: Loading
})

const Login = Loadable({
    loader: ()=> import('./Login'),
    loading: Loading
})

const Register = Loadable({
    loader: ()=> import('./Register'),
    loading: Loading
})

const Account = Loadable({
    loader: ()=> import('./Account'),
    loading: Loading
})

const AddNewGrandParent = Loadable({
    loader: ()=> import('./Account/AddNew'),
    loading: Loading
})

const EditGrandParent = Loadable({
    loader: ()=> import('./Account/Edit'),
    loading: Loading
})

const NotFound = Loadable({
    loader: () => import('./NotFound'),
    loading : Loading
})

export{
    Home,
    Vaccinations,
    Recommondations,
    Quiz,
    Travel,
    Login,
    Register,
    Account,
    NotFound,
    AddNewGrandParent,
    EditGrandParent
}