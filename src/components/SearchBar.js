import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons'; 


const SearchBar = ({Term, onTermChange, onTermSubmit}) => {
  return <View style={styles.backgroundSearch}>
  <Feather name='search' style={styles.iconStyle} />
  <TextInput 
  style={styles.inputStyle} 
  placeholder='Search'
  autoCapitalize="none"
  autoCorrect={false}
  value={Term}
  onChangeText={onTermChange}
  onEndEditing={onTermSubmit}

  />
  </View>
};

const styles = StyleSheet.create({
backgroundSearch: {
    marginTop : 10,
	backgroundColor: '#F0EEEE',
	height: 50,
	borderRadius: 5,
	marginHorizontal: 15,
	flexDirection: 'row'
},
inputStyle: {
	flex: 1,
	fontSize: 18
},
iconStyle: {
	fontSize: 35,
	alignSelf: 'center',
	marginHorizontal: 15
}
  
});

export default SearchBar;
