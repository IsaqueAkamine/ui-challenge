import React, { useEffect, useState } from "react";
// import { useNavigation } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  LocationObject,
  watchPositionAsync,
  LocationAccuracy,
} from "expo-location";
import Header from "../../../components/Header";

import { Container, MapContainer, Title } from "./map.style";
import { Alert } from "react-native";

function Map() {
  // const navigation = useNavigation();
  const [location, setLocation] = useState<LocationObject | null>(null);

  async function requestLocationPermissions() {
    const { granted } = await requestForegroundPermissionsAsync();

    if (granted) {
      const currentPosition = await getCurrentPositionAsync();
      console.log("LOCATION: ", currentPosition);
      setLocation(currentPosition);
    } else {
      Alert.alert("Permission denied", "Cannot load map");
    }
  }

  function PermissionNotAllow() {
    return <Title>Location permission not allow</Title>;
  }

  useEffect(() => {
    requestLocationPermissions();
  }, []);

  useEffect(() => {
    watchPositionAsync(
      {
        accuracy: LocationAccuracy.Highest,
        timeInterval: 1000,
        distanceInterval: 1,
      },
      (response) => {
        setLocation(response);
      }
    );
  }, []);

  return (
    <Container>
      <Header
        title="Job location"
        titleStyle={{ color: "#060075" }}
        iconColor="#060075"
        conteinerStyle={{ marginTop: 14, paddingHorizontal: 22 }}
      />
      <MapContainer>
        {location ? (
          <MapView
            style={{ flex: 1, width: "100%" }}
            initialRegion={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
            }}
          >
            <Marker
              coordinate={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
              }}
            />
          </MapView>
        ) : (
          <PermissionNotAllow />
        )}
      </MapContainer>
    </Container>
  );
}

export default Map;
