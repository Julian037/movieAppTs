import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Image, StyleSheet, Text, View , Dimensions, ScrollView} from 'react-native'
import { Movie } from '../interfaces/movieInterface'
import { RootStackParams } from '../navigation/Navigation'

const screenHeight = Dimensions.get('screen').height

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'>{};


const DetailScreen = ({route} : Props) => {
  

  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  console.log('hola' , movie)
  return (
    <ScrollView>
      <View style={style.imageContainer}>
        <Image 
          source={{uri}}
          style = {style.posterImage}
        />
      </View>
      <View style={style.marginContainer}>
        <Text style={style.subTitle}>{movie.original_title}</Text>
        <Text style={style.title}>{movie.title}</Text>
        <Text>{}</Text>
      </View>
    </ScrollView>
  )
}

const style = StyleSheet.create({
  posterImage: {
    flex: 1,

  },
  imageContainer: {
    width: '100%',
    overflow: 'hidden',
    height: screenHeight * 0.7,
    backgroundColor: 'red',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.9,
    shadowRadius: 7,

    elevation: 10,

    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  marginContainer:{
    marginHorizontal:20,
    marginTop: 20,
  },
  subTitle: {
    fontSize: 16,
    opacity: 0.8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'

  }
})

export default DetailScreen