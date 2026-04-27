import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function CustomDrawer({ navigation, state }: any) {
  const activeRoute = state.routeNames[state.index];

  const goTo = (screen: string) => {
    navigation.navigate(screen);
    navigation.closeDrawer();
  };

  const getStyle = (screen: string) =>
    screen === activeRoute ? styles.selectedItem : styles.itemText;

  return (
    <View style={styles.container}>
      =
      <View>
        <TouchableOpacity style={styles.item} onPress={() => goTo('Home')}>
          <Text style={getStyle('Home')}>🏠 Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => goTo('Product')}>
          <Text style={getStyle('Product')}>📦 Products</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => goTo('About')}>
          <Text style={getStyle('About')}>ℹ️ About Us</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => goTo('Version')}>
          <Text style={getStyle('Version')}>♻ Version</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => goTo('Contact')}>
          <Text style={getStyle('Contact')}>📞 Contact Us</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomContainer}>
        <Text
          onPress={() => Alert.alert('Log out', 'You are logging out')}
          style={styles.logoutText}
        >
          🚪 Logout
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: 65,
    padding: 10,
  },

  item: {
    paddingVertical: 20,
    paddingHorizontal: 15,
  },

  itemText: {
    fontSize: 25,
    fontWeight: 'bold',
  },

  selectedItem: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#4F46E5', // blue highlight
  },

  bottomContainer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },

  logoutText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#E11D48',
    textAlign: 'center',
  },
});
