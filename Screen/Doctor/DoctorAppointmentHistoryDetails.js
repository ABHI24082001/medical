import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'; // To use an icon for the back button

const DoctorAppointmentHistoryDetails = ({route, navigation}) => {
  // Destructure appointment data from route.params
  const {appointmentData} = route.params;

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Icon name="arrowleft" size={24} color="#4B5563" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Appointment Details</Text>
        <View style={{width: 24}} />
      </View>

      {/* Appointment Details Section */}
      <View style={styles.detailsContainer}>
        <Text style={styles.detailText}>
          Doctor:{' '}
          <Text style={styles.boldText}>{appointmentData.doctorName}</Text>
        </Text>
        <View style={styles.divider} />

        <Text style={styles.detailText}>
          Hospital:{' '}
          <Text style={styles.boldText}>{appointmentData.hospitalName}</Text>
        </Text>
        <View style={styles.divider} />

        <Text style={styles.detailText}>
          Treatment:{' '}
          <Text style={styles.boldText}>{appointmentData.Treatment}</Text>
        </Text>
        <View style={styles.divider} />

        <Text style={styles.detailText}>
          Location:{' '}
          <Text style={styles.boldText}>{appointmentData.location}</Text>
        </Text>
        <View style={styles.divider} />

        <Text style={styles.detailText}>
          Date:{' '}
          <Text style={styles.boldText}>{appointmentData.appointmentDate}</Text>
        </Text>
        <View style={styles.divider} />

        <Text style={styles.detailText}>
          Time: <Text style={styles.boldText}>{appointmentData.time}</Text>
        </Text>
        <View style={styles.divider} />

        <Text style={styles.detailText}>
          Duration:{' '}
          <Text style={styles.boldText}>{appointmentData.duration}</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    backgroundColor: '#FFFFFF',
    elevation: 3,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
  },
  detailsContainer: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    marginTop: 16,
    borderRadius: 20,
    marginLeft: 15,
    marginRight: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  detailText: {
    fontSize: 16,
    color: '#4B5563',
    marginBottom: 12,
  },
  boldText: {
    fontWeight: '700',
    color: '#111827',
  },
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 12,
  },
});

export default DoctorAppointmentHistoryDetails;
