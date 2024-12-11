import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from './style'
import ButtonDetail from '@/components/molecules/detailProduct/action/button/ButtonDetail'
import ImageDetail from '@/components/molecules/detailProduct/image/ImageDetail'
import TitleDetail from '@/components/molecules/detailProduct/content/title/TitleDetail'
import DescriptionDetail from '@/components/molecules/detailProduct/content/description/DescriptionDetail'
import ActionGroup from '@/components/molecules/detailProduct/action/actionGroup/ActionGroup'
import { StatusBar } from 'expo-status-bar'

const DetailProducts = () => {
    return (
        <View style={styles.containerMain}>
            <StatusBar style='dark' />
            <ScrollView contentContainerStyle={styles.container}>
                <KeyboardAvoidingView behavior='position'>
                    <ImageDetail />
                    <TitleDetail />
                    <ActionGroup />
                    <DescriptionDetail />
                </KeyboardAvoidingView>
            </ScrollView>
            <ButtonDetail />
        </View>
    )
}

export default DetailProducts