import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity ,ScrollView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Home = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Unishop</Text>
      <View style={[styles.searchBarContainer, isFocused && styles.focusedBorder]}>
        <Ionicons name="search" size={20} color="#B3C2FF" style={styles.searchIcon} />
        <TextInput
          style={styles.searchBar}
          placeholder="Search in the shop"
          placeholderTextColor="#C4C4C4"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </View>
      <ScrollView>
      {/* First row */}
      <View style={styles.row}>
        <TouchableOpacity style={styles.shopCard}>
          <Image source={require('../../assets/images/shop1.png')} style={styles.shopImage} />
          <Text style={styles.shopName}>Shop 1</Text>
          <Text style={styles.shopLocation}>Nyarungege</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.shopCard}>
          <Image source={require('../../assets/images/shop2.png')} style={styles.shopImage} />
          <Text style={styles.shopName}>Shop 2</Text>
          <Text style={styles.shopLocation}>Nyarungege</Text>
        </TouchableOpacity>
      </View>

      {/* Second row */}
      <View style={styles.row}>
        <TouchableOpacity style={styles.shopCard}>
          <Image source={require('../../assets/images/shop1.png')} style={styles.shopImage} />
          <Text style={styles.shopName}>Shop 3</Text>
          <Text style={styles.shopLocation}>Nyarungege</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.shopCard}>
          <Image source={require('../../assets/images/shop2.png')} style={styles.shopImage} />
          <Text style={styles.shopName}>Shop 4</Text>
          <Text style={styles.shopLocation}>Nyarungege</Text>
        </TouchableOpacity>
      </View>

      {/* Third row */}
      <View style={styles.row}>
        <TouchableOpacity style={styles.shopCard}>
          <Image source={require('../../assets/images/shop1.png')} style={styles.shopImage} />
          <Text style={styles.shopName}>Shop 5</Text>
          <Text style={styles.shopLocation}>Nyarungege</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.shopCard}>
          <Image source={require('../../assets/images/shop2.png')} style={styles.shopImage} />
          <Text style={styles.shopName}>Shop 6</Text>
          <Text style={styles.shopLocation}>Nyarungege</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    padding: 20,
    paddingTop: 40,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  shopCard: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 16,
    width: '48%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  shopImage: {
    width: '100%',
    height: 180,
    borderRadius: 5,
    marginBottom: 8,
  },
  shopName: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  shopLocation: {
    fontSize: 14,
    color: '#979797',
    marginTop: 4,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    paddingHorizontal: 12,
    marginBottom: 16,
    width: "90%",
    marginLeft: 18,
  },
  focusedBorder: {
    borderWidth: 1,
    borderColor: '#246BFD',
  },
  searchBar: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10,
  },
  searchIcon: {
    marginRight: 8,
  },
});

export default Home;
