import AddCircleIcon from '@mui/icons-material/AddCircle'
import ListIcon from '@mui/icons-material/List'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'

import paths from '../../constants/paths'
const listLinks = [
  {
    id: 1,
    label: 'Orders',
    link: paths.Orders,
    icon: ShoppingBagIcon
  },
  {
    id: 2,
    label: 'Products List',
    link: paths.ProductsList,
    icon: ListIcon
  },
  {
    id: 3,
    label: 'New Product',
    link: paths.NewProduct,
    icon: AddCircleIcon
  }
]

export default listLinks
