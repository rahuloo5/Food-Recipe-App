import React, { Component } from 'react';
import {FlatList, Text, View, Image, TouchableHighlight} from 'react-native';

import {getIngredientName, getAllIngredients} from '../../Data/MockDataAPI';
import {StyleSheet, Dimensions} from 'react-native';
// screen sizing
const {width, height} = Dimensions.get('window');
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

const numColumns = 3;
// item size
const RECIPE_ITEM_HEIGHT = 100;
const RECIPE_ITEM_OFFSET = 10;
const RECIPE_ITEM_MARGIN = RECIPE_ITEM_OFFSET * 2;

export default  class IngredientDetail extends Component {
                  
    
    
    
   
                  renderIngredient = ({item}) => (
                     
                    <TouchableHighlight
                      underlayColor="rgba(73,182,77,1,0.9)"
                      //onPress={}
                    >
                      <View style={styles.container}>
                        <Image
                          style={styles.photo}
                          source={{uri: item[0].photo_url}}
                        />
                        <Text style={styles.title}>{item[0].name}</Text>
                        <Text style={{color: 'grey'}}>{item[1]}</Text>
                      </View>
                    </TouchableHighlight>
                  );

                  render() {
                    const { route} = this.props;
                    const {ingredients, details} = route.params;
                    console.log({ingredients})
                    
                    const ingredientArray = getAllIngredients(ingredients);

                    return (
                      <View>
                        <FlatList
                          vertical
                          numColumns={3}
                          showsVerticalScrollIndicator={false}
                          data={ingredientArray}
                          renderItem={this.renderIngredient}
                          keyExtractor={(item) => `${item.recipeId}`}
                        />
                      </View>
                    );
                  }
                }


                const styles = StyleSheet.create({
                  container: {
                    flex: 1,
                    alignItems: 'center',
                    margin: RECIPE_ITEM_OFFSET,
                    marginTop: 30,
                    width:
                      (SCREEN_WIDTH - RECIPE_ITEM_MARGIN) / numColumns -
                      RECIPE_ITEM_OFFSET,
                    height: RECIPE_ITEM_HEIGHT + 60,
                  },
                  title: {
                    margin: 10,
                    marginBottom: 5,
                    color: 'black',
                    fontSize: 13,
                    textAlign: 'center',
                  },
                  photo: {
                    width:
                      (SCREEN_WIDTH - RECIPE_ITEM_MARGIN) / numColumns -
                      RECIPE_ITEM_OFFSET,
                    height: RECIPE_ITEM_HEIGHT,
                    borderRadius: 60,
                  },
                });