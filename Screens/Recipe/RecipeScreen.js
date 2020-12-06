import React,{Component} from 'react';
import {
  FlatList,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

import Carousel, {Pagination} from 'react-native-snap-carousel';
import {
  getIngredientName,
  getCategoryName,
  getCategoryById,
} from '../../Data/MockDataAPI'
//import BackButton from '../../components/BackButton/BackButton';
import ViewIngredientsButton from '../../Component/ViewIngredientsButton/ViewIngredientsButton'
import { render } from 'react-dom';
const { width: viewportWidth } = Dimensions.get('window');

export default class  RecipeScreen extends Component {

    

  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0
    };
  }

  renderPhotos = ({ item }) => (
    <TouchableHighlight>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: item }} />
      </View>
    </TouchableHighlight>
  );

  onPressIngredient = item => {
    var name = getIngredientName(item);
    let ingredient = item;
    this.props.navigation.navigate('Ingredient', { ingredient, name });
  };


    render(){

         const { activeSlide } = this.state;
    const { navigation,route } = this.props;
    const {item} = route.params;
    
    const category = getCategoryById(item.categoryId);
    const title = getCategoryName(category.id);
    

        return(
            <ScrollView style = {styles.container}>
            <View style ={styles.CarouselContainer}>
            <View style = {styles.Carousel}>
            <Carousel
            ref = {c=>{this.slide1Ref=c}}
            data = {item.photosArray}
            renderItem={this.renderPhotos}
            sliderWidth={viewportWidth}
            itemWidth={viewportWidth}
            inactiveSlideScale={1}
            inactiveSlideOpacity={1}
            firstItem={0}
            loop={false}
            autoplay={false}
            autoplayDelay={500}
            autoplayInterval={3000}
            onSnapToItem={index=>this.setState( {activeSlide:index})}/>

            <Pagination
              dotsLength={item.photosArray.length}
              activeDotIndex={activeSlide}
              containerStyle={styles.paginationContainer}
              dotColor="rgba(255, 255, 255, 0.92)"
              dotStyle={styles.paginationDot}
              inactiveDotColor="white"
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
              carouselRef={this.slider1Ref}
              tappableDots={!!this.slider1Ref}
            />

</View>
</View>

<View style = {styles.infoRecpieContainer}>
<Text style = {styles.infoRecpieName}>{item.title}</Text>
<View style ={styles.infoContainer}>
<TouchableHighlight 
                       onPress={()=>{navigation.navigate('RecipeList',{category,title})}}>
<Text style = {styles.category}>{getCategoryName(item.categoryId).toUpperCase()}</Text>
</TouchableHighlight>
</View>
<View style={styles.infoContainer}>
            <Image style={styles.infoPhoto} source={require('../../assets/time.png')} />
            <Text style={styles.infoRecipe}>{item.time} minutes </Text>
</View>
<View style={styles.infoContainer}>
            <ViewIngredientsButton
              onPress={() => {
                let ingredients = item.ingredients;
                let title = 'Ingredients for ' + item.title;
                navigation.navigate('IngredientsDetails', { ingredients, title });
              }}
            />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoDescriptionRecipe}>{item.description}</Text>
          </View>
</View>
</ScrollView>



        );
    }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  carouselContainer: {
    minHeight: 250,
  },
  carousel: {},

  image: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: 250,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    width: viewportWidth,
    height: 250,
  },
  paginationContainer: {
    flex: 1,
    position: 'absolute',
    alignSelf: 'center',
    paddingVertical: 8,
    marginTop: 200,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 0,
  },
  infoRecpieContainer: {
    flex: 1,
    margin: 25,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize:16
    
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    fontStyle:'italic'
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  infoPhoto: {
    height: 20,
    width: 20,
    marginRight: 0,
  },
  infoRecipe: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  category: {
    fontSize: 14,
    fontWeight: 'bold',
    margin: 10,
    color: '#2cd18a',
  },
  infoDescriptionRecipe: {
    textAlign: 'left',
    fontSize: 16,
    marginTop: 30,
    margin: 15,
  },
  infoRecipeName: {
    fontSize: 28,
    margin: 10,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
});





