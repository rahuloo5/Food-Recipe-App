import React from 'react';
import {View,StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

import MenuButton from '../../Component/MenuButton/MenuButton';


export default class DrawerNav extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.content}>
      
        <View style={styles.container}>
          <MenuButton
            title="HOME"
            source={require('../../assets/home.png')}
            onPress={() => {
              navigation.navigate('Home');
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="CATEGORIES"
            source={require('../../assets/category.png')}
            onPress={() => {
              navigation.navigate('Categories');
              navigation.closeDrawer();
            }}
          />
          
        </View>
      </View>
    );
  }
}

DrawerNav.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
};
const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'flex-start',
    paddingHorizontal: 20,
  },
});

