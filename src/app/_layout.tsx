import {Slot} from 'expo-router'
import {DarkTheme,ThemeProvider} from '@react-navigation/native'

export default function RootLayout() {
  return (
    <ThemeProvider value={DarkTheme}>
      <Slot/>
    </ThemeProvider>
  )
  
}
