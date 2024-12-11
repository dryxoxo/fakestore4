import { Animated, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { styles } from './style'
import { Delete, Success } from '@/constants/icons';
import TextAtom from '../text/TextAtom';

interface ToastProps {
    children?: React.ReactNode
    variant: 'success' | 'delete';
}

const typeConfig = {
    success: {
        color: '#4EA44B',
        icon: <Success height={25} width={25} />,
        text: 'Berhasil menambahkan item ke keranjang'
    },
    delete: {
        color: '#FF0000',
        icon: <Delete height={25} width={25} />,
        text: 'Berhasil menghapus item dari keranjang'
    }
}

const Toast: React.FC<ToastProps> = ({ children, variant }) => {
    const toastConfig = typeConfig[variant]

    const opacity = useRef(new Animated.Value(0)).current;
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        // Fade-in animation saat mount
        Animated.timing(opacity, {
            toValue: 1,
            duration: 250, // Durasi fade-in
            useNativeDriver: true,
        }).start();

        // Timer untuk menutup toast setelah 3 detik dengan animasi fade-out
        const timer = setTimeout(() => {
            Animated.timing(opacity, {
                toValue: 0,
                duration: 100250, // Durasi fade-out
                useNativeDriver: true,
            }).start(() => {
                setIsVisible(false); // Set isVisible ke false setelah animasi selesai
                // handleToast(false); // Mengatur handleToast ke false setelah unmount
            });
        }, 3000);

        return () => clearTimeout(timer); // Bersihkan timer saat unmount
    }, [opacity]);

    if (!isVisible) return null

    return (
        <Animated.View style={[styles.containerToast, { backgroundColor: toastConfig.color }]}>
            {toastConfig.icon}
            <TextAtom fontSize='medium' fontColor='onPrimary'>{toastConfig.text}</TextAtom>
        </Animated.View>
    )
}

export default Toast
