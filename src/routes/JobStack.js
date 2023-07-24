import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { JobProvider } from "../contexts/job";

import { Jobs, SearchResults } from "../screens";

export function JobStack() {
  const JobStack = createNativeStackNavigator();
  return (
    <JobProvider>
      <JobStack.Navigator
        initialRouteName="SearchResult"
        screenOptions={{ headerShown: false }}
      >
        <JobStack.Screen name="SearchResult" component={SearchResults} />
        <JobStack.Screen name="Jobs" component={Jobs} />
      </JobStack.Navigator>
    </JobProvider>
  );
}
