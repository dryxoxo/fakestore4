import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useMemo } from 'react'
import { theme } from '@/constants/theme';
import { styles } from './style';

interface ButtonAtomProps {
  children: React.ReactNode
  variant: 'buttonAddToChart' | 'buttonAdd' | 'decrementButton' | 'buttonAction' | 'buttonLogout'
  onPress?: () => void

}

const ButtonAtom: React.FC<ButtonAtomProps> = ({
  children,
  variant,
  onPress,
}) => {

  const finalStyleButton = useMemo(() => {
    switch (variant) {
      case 'buttonAddToChart':
        return styles.buttonAddToChart
      case 'buttonAdd':
        return styles.buttonAdd
      case 'decrementButton':
        return styles.buttonAdd
      case 'buttonAction':
        return styles.buttonAction
      case 'buttonLogout':
        return styles.buttonLogout
      default:
        return styles.buttonAddToChart
    }
  }, [variant])

  return (
    <TouchableOpacity style={[finalStyleButton]}>
      {children}
    </TouchableOpacity>
  )
}

export default ButtonAtom