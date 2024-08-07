import Orders from "./Orders";
import CutMaterial from "./CutMaterial";
import Process from "./Process";

export default [
    {
        path: '/orders',
        name: 'Orders',
        element: <Orders/>, 
        Children: [
            {
                path: 'cutmaterial',
                name: 'CutMaterial',
                element: <CutMaterial/>
            },
            {
                path: 'process',
                name: 'Process',
                element: <Process/>
            }
        ]
    },
]