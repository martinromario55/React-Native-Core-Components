import { View, Text } from 'react-native'

export const Greet = ({ name }) => {
  return (
    <View>
      <Text>Hello, {name}.</Text>
    </View>
  )
}
