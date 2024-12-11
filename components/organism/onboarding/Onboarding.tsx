import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from './style'
import TextAtom from '@/components/atoms/text/TextAtom'
import { Stack } from 'expo-router'
import ButtonAtom from '@/components/atoms/button/ButtonAtom'

const Onboarding = () => {
    return (
        <>
            <Stack.Screen options={{ headerShown: false }} />
            <View style={styles.container}>
                <Image src={'https://images.unsplash.com/photo-1441986300917-64674bd600d8?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHN0b3JlfGVufDB8fDB8fHwwaa'} style={{ width: '100%', height: '100%' }} />
                <View
                    style={{
                        ...StyleSheet.absoluteFillObject, // Mengisi seluruh layar
                        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Warna hitam dengan opacity 50%
                    }}
                />
                <View
                    style={{
                        ...StyleSheet.absoluteFillObject,
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                    }}
                >
                    <Text
                        style={{
                            fontSize: 48,
                            color: '#fff',
                            textAlign: 'center',
                            marginHorizontal: 20,
                            marginBottom: 20
                        }}
                    >
                        Welcome To Our Store
                    </Text>
                    <Text
                        style={{
                            fontSize: 16,
                            color: '#FCFCFC',
                            textAlign: 'center',
                            marginHorizontal: 20,
                            marginBottom: 30
                        }}
                    >
                        Welcome To Our Store
                    </Text>
                        <ButtonAtom variant='buttonLogout'><Text>Log Out</Text></ButtonAtom>
                </View>


            </View>
        </>
    )
}

export default Onboarding

