import React from 'react'
import { ActivityIndicator, Dimensions, FlatList, Text, View } from 'react-native'
import { useMovies } from '../hooks/useMovies'
import Carousel from 'react-native-snap-carousel';
import MoviePoster from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// import { FlatList } from 'react-native-gesture-handler';

const {width:windowWidth} = Dimensions.get('window')

const HomeScreen = () => {

  const {peliculasEnCine , isLoading} = useMovies();
  const {top} = useSafeAreaInsets()

  if ( isLoading ){
    return (
      <View style={{flex: 1, justifyContent: 'center' , alignContent: 'center'}}>
        <ActivityIndicator color='red' size={100}/>
      </View>
    )
  }

  return (
    <View style={{marginTop: top + 20}}>
      {/* <MoviePoster movie={peliculasEnCine[1]}/> */}
      <View style={{
        height: windowWidth + 40
      }}>
        <Carousel 
          data={peliculasEnCine}
          renderItem={({item} : any) => <MoviePoster movie={item}/>}
          sliderWidth={windowWidth}
          itemWidth={300}
        />
      </View>

      <View style={{backgroundColor:'red' , height: 250}}>
        <Text style={{fontSize:30, fontWeight: 'bold'}}>En cine</Text>
        <FlatList
          data={peliculasEnCine}
          renderItem={({item} : any) => <MoviePoster movie={item}/>}
          keyExtractor={(item) => item.id.toString()}
          horizontal={true}
        />
      </View>

    </View>
  )
}

export default HomeScreen