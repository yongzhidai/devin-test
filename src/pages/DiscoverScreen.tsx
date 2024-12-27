import React, { useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { AppList } from '../components/business/AppList';
import { useDiscoverStore } from '../store/discoverStore';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type DiscoverScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};

export default function DiscoverScreen({ navigation }: DiscoverScreenProps): JSX.Element {
  const { 
    filteredApplications,
    isLoading,
    error,
    fetchRecommendedApplications,
    filterByType,
    selectedType
  } = useDiscoverStore();

  useEffect(() => {
    fetchRecommendedApplications();
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
