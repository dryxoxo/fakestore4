import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TextAtom from '@/components/atoms/text/TextAtom'
import { styles } from './style'

const TitleDetail = () => {
  return (
    <View style={styles.contentWrapper}>
    <View>
      <TextAtom fontColor='primary' fontSize='large'>Test Title</TextAtom>
      <TextAtom fontColor='muted' fontSize='large'>Category</TextAtom>
    </View>
  </View>
  )
}

export default TitleDetail
