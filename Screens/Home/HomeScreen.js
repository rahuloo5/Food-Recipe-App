import React,{Component} from 'react'
import {
  FlatList,
  
  Text,
  View,
  TouchableHighlight,
  Image,
  Dimensions,
  StyleSheet
} from 'react-native';

import {recipes} from '../../Data/DataArrays'
//import MenuImage from '../../components/MenuImage/MenuImage';
//import DrawerActions from 'react-navigation';
import {getCategoryName} from '../../Data/MockDataAPI'
const {width, height} = Dimensions.get('window');
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

const recipeNumColums = 2;
// item size
const RECIPE_ITEM_HEIGHT = 150;
const RECIPE_ITEM_MARGIN = 20;

export default class HomeScreen extends Component {
                 constructor(props) {
                   super(props);
                 }

                

                 renderRecipe = ({item}) => (
                   <TouchableHighlight
                     underlayColor="orange"
                     onPress={() =>{this.props.navigation.navigate('Recipe',{
                         item
                     })}}
                   >
                     <View Style={styles.container}>
                       <Image
                         style={styles.photo}
                         source={{uri: item.photo_url}}
                       />
                       <Text style={styles.title}>{item.title}</Text>
                       <Text style={styles.category}>
                         {getCategoryName(item.categoryId)}
                       </Text>
                     </View>
                   </TouchableHighlight>
                 );

                 render() {
                   return (
                     <View style ={{paddingLeft:25 }}>
                       <FlatList
                         vertical
                         showsVerticalScrollIndicator={false}
                         numColumns={2}
                         data={recipes}
                         renderItem={this.renderRecipe}
                         keyExtractor={(item) => `${item.recipeId}`}
                       />
                     </View>
                   );
                 }
               }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: RECIPE_ITEM_MARGIN,
    margin: 20,
    
    width:
      (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) /
      recipeNumColums,
    height: RECIPE_ITEM_HEIGHT +80,
    borderColor: 'black',
    borderWidth: 0.3,
    borderRadius: 15,
  },
  photo: {
    width:
      (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) /
      recipeNumColums,
    height: RECIPE_ITEM_HEIGHT,
    borderRadius: 15,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  title: {
    flex: 1,
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#444444',
    marginTop: 3,
    marginRight: 5,
    marginLeft: 5,
  },
  category: {
    marginTop: 5,
    marginBottom: 5,
    marginLeft:25,
    fontSize:15
  },
});
