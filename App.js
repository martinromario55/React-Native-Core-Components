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
} from 'react-native'

const logoImg = require('./assets/adaptive-icon.png')

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false)
  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <ActivityIndicator />
      <ActivityIndicator size="large" />
      <ActivityIndicator size="large" color="midnightblue" />
      <ActivityIndicator size="large" color="midnightblue" animating={false} />
    </View>
  )
}
