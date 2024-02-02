import { useState } from 'react'
import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  Pressable,
  Modal,
  StatusBar,
  ActivityIndicator,
  Alert,
} from 'react-native'

const logoImg = require('./assets/adaptive-icon.png')

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false)
  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <Button title="Alert" onPress={() => Alert.alert('Alert Called')} />
      <Button
        title="Alert 2"
        onPress={() => Alert.alert('Alert Called', 'DOB incorrect')}
      />
      <Button
        title="Alert 2"
        onPress={() =>
          Alert.alert('Alert Called', 'DOB incorrect', [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {
              text: 'OK',
              onPress: () => console.log('OK Pressed'),
            },
          ])
        }
      />
    </View>
  )
}
