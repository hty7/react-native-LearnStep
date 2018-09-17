import { Dimensions } from 'react-native'

let window = {
  width: Dimensions.get('window').width,
  heifht: Dimensions.get('window').height
}

export default {
  window
}