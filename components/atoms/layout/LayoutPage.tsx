import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from './style'


interface LayoutProps {
    children: React.ReactNode
}

const LayoutPage: React.FC<LayoutProps> = ({children}) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}

export default LayoutPage