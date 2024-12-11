import { theme } from "@/constants/theme"
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


interface textAtomProps {
    children: React.ReactNode
    fontSize: keyof typeof theme.fonts.sizes // Menentukan ukuran font berdasarkan tema
    fontColor: keyof typeof theme.colors.text // Menentukan warna teks berdasarkan tema
    wrap?: "yes" | "no";
}


const TextAtom: React.FC<textAtomProps> = ({ children, fontSize = 'medium', fontColor = 'primary', wrap = "no", }) => {
    // Mendapatkan size teks dari tema
    const computedFont = theme.fonts.sizes[fontSize]
    
    // Mendapatkan warna teks dari tema
    const computedColor = theme.colors.text[fontColor];

    const additionalProps = wrap === "yes" ? { numberOfLines: 1, ellipsizeMode: "tail" as const } : {};
    return (
        <Text style={[{fontSize: computedFont, color: computedColor}]} {...additionalProps}>{children}</Text>
    )
}

export default TextAtom