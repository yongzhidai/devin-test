import React, { useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { AppList } from '../components/business/AppList';
import { useApplicationStore } from '../store/applicationStore';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type StudioScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};

export default function StudioScreen({ navigation }: StudioScreenProps): JSX.Element {
  const { 
    filteredApplications,
    isLoading,
    error,
    fetchApplications,
    filterByType,
    selectedType
  } = useApplicationStore();

  useEffect(() => {
    fetchApplications();
  }, []);

  if (isLoading) {
    return (
      <View style={[styles.container, styles.centered]}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <AppList 
        applications={filteredApplications}
        onFilterChange={filterByType}
        selectedType={selectedType}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
