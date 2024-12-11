import { StyleSheet, Text, TextInput, View, TextInputProps, KeyboardTypeOptions } from 'react-native'
import React, { useMemo } from 'react'
import { styles } from './style'

interface InputAtomProps {
    onChange?: () => void,
    variant: 'inputCount' | 'inputUsername' | 'inputPassword' | 'inputEmail' | 'inputSearch'
}
const InputAtom: React.FC<InputAtomProps> = ({ onChange, variant }) => {
    const finalStyleInput = useMemo(() => {
        switch (variant) {
            case 'inputCount':
                return styles.inputSearch;
            case 'inputUsername':
                return styles.inputUsername;
            case 'inputPassword':
                return styles.inputUsername;
            case 'inputEmail':
                return styles.inputUsername;
            case 'inputSearch':
                return styles.inputSearch;
            default:
                return styles.inputSearch;
        }
    }, [variant])

    const inputProps: TextInputProps = useMemo(() => {
        switch (variant) {
          case 'inputUsername':
            return {
              placeholder: 'Username',
              secureTextEntry: false, // Tidak disembunyikan
            };
          case 'inputPassword':
            return {
              placeholder: 'Password',
              secureTextEntry: true, // Tipe password (disembunyikan)
            };
          case 'inputEmail':
            return {
              placeholder: 'Email',
              secureTextEntry: false,
              keyboardType: 'email-address', // Atur keyboard untuk email
            };
          case 'inputSearch':
            return {
              placeholder: 'Search...',
              secureTextEntry: false,
            };
          case 'inputCount':
            return {
              placeholder: 'Count',
              secureTextEntry: false,
              keyboardType: 'numeric', // Atur keyboard untuk angka
            };
          default:
            return {
              placeholder: '',
              secureTextEntry: false,
            };
        }
      }, [variant]);

    return (
        <TextInput style={[finalStyleInput]} {...inputProps}/>
    )
}

export default InputAtom