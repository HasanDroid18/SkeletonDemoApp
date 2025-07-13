import { View, Text } from 'react-native'
import React from 'react'
import Props from '../constants'


const Container = ({ screenTitle }:Props) => {
  return (
    <View className="items-center mb-5">
        <Text className='text-5xl font-bold text-blue-500 text-center'>{screenTitle}</Text>
        
    </View>
  )
}

export default Container