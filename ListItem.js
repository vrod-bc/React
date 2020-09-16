import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function ListItem({ item, deleteItem}) {
  return (
    <TouchableOpacity style={styles.listitem}>
      <View style={styles.listitem}>
          <Text style={styles.listItemText}>{item.text}</Text>
          <Icon name="remove" size={20} color="firebrick" 
          onPress={() => deleteItem(item.id)} />
      </View>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  listitem: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItemText: {
    fontSize: 18,
  },
});