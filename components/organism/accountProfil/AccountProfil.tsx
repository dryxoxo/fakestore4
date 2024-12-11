import { View } from 'react-native'
import React from 'react'
import { styles } from './style'
import HeaderProfil from '@/components/molecules/account/headerProfil/HeaderProfil'
import ListContentProfil from '@/components/molecules/account/listContentProfil/ListContentProfil'
import { About, IdCard, Maps, Payment, Question, Voucher, Notification } from '@/constants/icons'
import ButtonLogout from '@/components/molecules/account/buttonLogout/ButtonLogout'
import { StatusBar } from 'expo-status-bar'

const AccountProfil = () => {
  return (
    <View style={styles.container}>
      <StatusBar style='dark'/>
      <View style={styles.profil}>
        <HeaderProfil uri='https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg' name='Baim Avicenna' email='testing@gmail.com' />
        <View style={styles.menuProfil}>
          <ListContentProfil Icon={IdCard} text={'My Detail'} />
          <ListContentProfil Icon={Maps} text={'Address'} />
          <ListContentProfil Icon={Payment} text={'Payments'} />
          <ListContentProfil Icon={Voucher} text={'Promo Code'} />
          <ListContentProfil Icon={Notification} text={'Notification'} />
          <ListContentProfil Icon={Question} text={'FAQ'} />
          <ListContentProfil Icon={About} text={'About'} />
        </View>
      </View>
      <ButtonLogout/>
    </View>
  )
}

export default AccountProfil