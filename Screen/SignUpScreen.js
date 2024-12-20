import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState(''); // Selected role
  const [showRoleDropdown, setShowRoleDropdown] = useState(false); // Dropdown visibility

  const roles = ["Admin", "Doctor", "User"]; // Role options

  const handleSelectRole = (selectedRole) => {
    setRole(selectedRole);
    setShowRoleDropdown(false);
  };

  // Validation function
  const validateForm = () => {
    if (!name.trim()) {
      Alert.alert("Validation Error", "Please enter your name.");
      return false;
    }
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      Alert.alert("Validation Error", "Please enter a valid email address.");
      return false;
    }
    if (!password.trim() || password.length < 6) {
      Alert.alert("Validation Error", "Password must be at least 6 characters long.");
      return false;
    }
    if (!role) {
      Alert.alert("Validation Error", "Please select a role.");
      return false;
    }
    return true;
  };

  // Handle submit
  const handleSubmit = () => {
    if (validateForm()) {
      Alert.alert("Success", "You have successfully signed up!");
      // Perform sign-up actions (e.g., API call)
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#4F4F4F" />
        </TouchableOpacity>
        <Text style={styles.title}>Sign Up</Text>
      </View>

      {/* Name Input */}
      <View style={styles.inputContainer}>
        <Icon name="person" size={20} color="#A9A9A9" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          placeholderTextColor="#A9A9A9"
          value={name}
          onChangeText={setName}
        />
      </View>

      {/* Email Input */}
      <View style={styles.inputContainer}>
        <Icon name="email" size={20} color="#A9A9A9" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          keyboardType="email-address"
          placeholderTextColor="#A9A9A9"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      {/* Password Input */}
      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#A9A9A9" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry
          value={password}
          placeholderTextColor="#A9A9A9"
          onChangeText={setPassword}
        />
        <Icon name="visibility-off" size={20} color="#A9A9A9" style={styles.iconRight} />
      </View>

      {/* Role Dropdown */}
      <View style={styles.inputContaine}>
        <Icon name="work" size={20} color="#A9A9A9" style={styles.icon} />
        <TouchableOpacity style={styles.dropdown} onPress={() => setShowRoleDropdown(!showRoleDropdown)}>
          <Text style={styles.input}>{role || "Select your role"}</Text>
          <Icon name={showRoleDropdown ? "arrow-drop-up" : "arrow-drop-down"} size={20} color="#A9A9A9" />
        </TouchableOpacity>
      </View>

      {showRoleDropdown && (
        <View style={styles.dropdownContainer}>
          {roles.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => handleSelectRole(item)} style={styles.dropdownItem}>
              <Text style={styles.dropdownItemText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.signUpButton} onPress={handleSubmit}>
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </TouchableOpacity>

      {/* Login Link */}
      <Text style={styles.loginText}>
        Already have an account?{' '}
        <Text style={styles.linkText} onPress={() => navigation.navigate('Login')}>Login</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,   
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4F4F4F',
    marginBottom: 30,
    textAlign: 'center',
    marginLeft: 20
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 2,
    marginBottom: 16,
  },
  inputContaine: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 14,
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  iconRight: {
    marginLeft: 'auto',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#4F4F4F',
  },
  dropdown: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dropdownContainer: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    marginVertical: 4,
  },
  dropdownItem: {
    padding: 10,
  },
  dropdownItemText: {
    fontSize: 16,
    color: '#4F4F4F',
  },
  signUpButton: {
    backgroundColor: '#00BFA6',
    borderRadius: 25,
    paddingVertical: 15,  
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  signUpButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginText: {
    fontSize: 14,
    color: '#4F4F4F',
    textAlign: 'center',
  },
  linkText: {
    color: '#00BFA6',
  },
});

export default SignUpScreen;
