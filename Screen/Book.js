import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  Modal,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {Children, useEffect, useState} from 'react';
import axios from 'axios';

const Book = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newAllYear, setAllYear] = useState('');
  const [newAllPrice, setAllPrice] = useState('');
  const [newAllCPU, setAllCPU] = useState('');
  const [newAllHardDisk, setAllHardDisk] = useState('');


  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://api.restful-api.dev/objects');
        console.log('API Response:', response.data);
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);


  const createAddItem = async () => {
    const newItem = {
      name: newTitle,
      data:{
        year: newAllYear,
        price: parseFloat(newAllPrice),
        'CPU model': newAllCPU,
        'Hard disk size': newAllHardDisk,
      },
    };
    try{
      const response = await axios.post(
        'https://api.restful-api.dev/objects',
        newItem,
      );
      console.log('Item added', response?.data);
      setUsers([...users, response.data]);
      setIsModalVisible(false);
    }catch(error){
      console.log('Error adding item:', error.message);
    }

  }

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#00BFA6" />
        <Text>Loading users...</Text>
      </View>
    );
  }


  // reverse String

  function reverseString(str){
    return str.split('').reverse().join('');
  }

  function reverseSting(str){
    return str.split('').reverse().join('');
  }


  function factorial(n){
    if (n === 0 || n ===1) return 1;
    return n * factorial(n-1);
  }

  console.log(factorial(5));








  


  return (
    <View style={styles.container}>
      <Text style={styles.title}>User List</Text>

      <FlatList
        data={users}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.userContainer}>
            <Text style={styles.userText}>ID: {item.id}</Text>
            <Text style={styles.userText}>Username: {item.username}</Text>
            <Text style={styles.userText}>Name: {item.name}</Text>        
          </View>
        )}
      />

      {/* Button to open modal */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => setIsModalVisible(true)}>
        <Text style={styles.buttonText}>Add New Item</Text>
      </TouchableOpacity>

      {/* Modal to add new item */}
      <Modal
        visible={isModalVisible}
        animationType="slide"
        onRequestClose={() => setIsModalVisible(false)}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Add New Item</Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor={'#000'}
            value={newTitle}
            onChangeText={setNewTitle}
          />
          <TextInput
            style={styles.input}
            placeholder="Year"
            placeholderTextColor={'#000'}
            value={newAllYear}
            onChangeText={setAllYear}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Price"
            placeholderTextColor={'#000'}
            value={newAllPrice}
            onChangeText={setAllPrice}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="CPU Model"
            placeholderTextColor={'#000'}
            value={newAllCPU}
            onChangeText={setAllCPU}
          />
          <TextInput
            style={styles.input}
            placeholder="Hard Disk Size"
            placeholderTextColor={'#000'}
            value={newAllHardDisk}
            onChangeText={setAllHardDisk}
          />

          <TouchableOpacity style={styles.submitButton} onPress={createAddItem}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => setIsModalVisible(false)}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default Book;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  userContainer: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
  },
  userText: {
    fontSize: 16,
    color: '#333',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  button: {
    padding: 10,
    backgroundColor: '#00BFA6',
    borderRadius: 5,
    marginVertical: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    borderRadius: 5,
    color: '#000',
  },
  submitButton: {
    padding: 10,
    backgroundColor: '#00BFA6',
    borderRadius: 5,
    marginBottom: 10,
  },
  cancelButton: {
    padding: 10,
    backgroundColor: '#FF6347',
    borderRadius: 5,
  },
});
