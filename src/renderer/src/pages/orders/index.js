import Orders from "./Orders";
import CutMaterial from "./CutMaterial";
import Process from "./Process";
import NewOrder from "./NewOrder";

export default [
    {
        path: '/orders',
        name: 'Orders',
        element: <Orders/>, 
        Children: [
            {
                path: '/neworder',
                name: 'NewOrder',
                element: <NewOrder/>
            },
            {
                path: '/cutmaterial',
                name: 'CutMaterial',
                element: <CutMaterial/>
            },
            {
                path: '/process',
                name: 'Process',
                element: <Process/>
            }
        ]
    },
]