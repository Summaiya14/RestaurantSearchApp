import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
const [term, setTerm] = useState('');
const [searchApi, results, errorMsg] = useResults();

const filterResultsByPrice = (price) => {
	return results.filter(result => {
		return result.price === price;
	});
};

  return <View style={{flex: 1}}>
  <SearchBar
  term = {term}
  onTermChange = {setTerm}
  onTermSubmit={() => searchApi(term)}
  />
  {errorMsg ? <Text>{errorMsg}</Text> : null}
  <ScrollView>
  <ResultsList results={filterResultsByPrice('$')} title='Cost Effective'/>
  <ResultsList results={filterResultsByPrice('$$')} title='Bit Pricier'/>
  <ResultsList results={filterResultsByPrice('$$$')} title='Big Spender'/>
  </ScrollView>
  </View>
};

const styles = StyleSheet.create({
  
});

export default SearchScreen;
