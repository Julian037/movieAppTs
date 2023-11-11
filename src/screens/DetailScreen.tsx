import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Image, StyleSheet, Text, View , Dimensions, ScrollView, ActivityIndicator, TouchableOpacity} from 'react-native'
import { Movie } from '../interfaces/movieInterface'
import { RootStackParams } from '../navigation/Navigation'
import useMovieDetails from '../hooks/useMovieDetails'
import MovieDetails from '../components/MovieDetails'
import Icon from 'react-native-vector-icons/Ionicons'

const screenHeight = Dimensions.get('screen').height

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'>{};

const DetailScreen = ({route, navigation} : Props) => {
  
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  
  const {isLoading, movieFull, cast} = useMovieDetails(movie.id)

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
      </View>
      { isLoading 
        ? 
          <ActivityIndicator
            size={30}
            color='grey'
            style={{marginTop:20}}
          />
        : 
          <MovieDetails 
            movieFull={movieFull!}
            cast={cast}
          />
      }
      <TouchableOpacity style={style.backButton} onPress={() => navigation.goBack()}>
        <Icon
          color='white'
          name='arrow-back-outline'
          size={60}
        />
      </TouchableOpacity>
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

  },
  backButton:{
    position:'absolute',
    zIndex: 999,
    elevation: 9,
    top: 30,
    left: 5,
  }
})

export default DetailScreen