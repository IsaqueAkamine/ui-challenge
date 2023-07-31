import React, { useEffect, useRef, useState } from "react";
import { Alert } from "react-native";
// import { useNavigation } from "@react-navigation/native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  LocationObject,
  watchPositionAsync,
  LocationAccuracy,
} from "expo-location";
import { Ionicons } from "@expo/vector-icons";
import Header from "../../../components/Header";
import { icons, SIZES } from "../../../constants";
import { utils } from "../../../utils";

import { Container, MapContainer, Title } from "./map.style";

interface LocationProps {
  latitude: number;
  longitude: number;
}
interface MapProps {
  fromLoc: LocationProps;
  toLoc: LocationProps;
}

function Map({ fromLoc, toLoc }: MapProps) {
  // const navigation = useNavigation();
  const googleMapApiKey = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY;
  const mapView = useRef();
  const [location, setLocation] = useState<LocationObject | null>(null);
  const [fromLocation, setFromLocation] = useState<LocationObject | null>(null);
  const [toLocation, setToLocation] = useState<LocationObject | null>(null);
  const [angle, setAngle] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [duration, setDuration] = useState("");

  let origin = {
    latitude: 37.785834,
    longitude: -122.406417,
  };

  let destination = {
    latitude: 37.7946366,
    longitude: -122.4136961,
  };

  async function requestLocationPermissions() {
    const { granted } = await requestForegroundPermissionsAsync();

    if (granted) {
      const currentPosition = await getCurrentPositionAsync();
      console.log("LOCATION: ", currentPosition);
      setLocation(currentPosition);
      setFromLocation(currentPosition);
      setToLocation({
        ...currentPosition,
        coords: {
          ...currentPosition.coords,
          latitude: destination.latitude,
          longitude: destination.longitude,
        },
      });
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
            ref={mapView}
            provider={PROVIDER_GOOGLE}
            style={{ flex: 1, width: "100%" }}
            initialRegion={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
            }}
          >
            {fromLocation && (
              <Marker
                key="FromLoc"
                coordinate={{
                  latitude: location.coords.latitude,
                  longitude: location.coords.longitude,
                }}
                tracksViewChanges={false}
                icon={icons.navigator1}
                rotation={angle}
                anchor={{ x: 0.75, y: 0.6 }}
              />
            )}

            {toLocation && (
              <Marker
                key="ToLoc"
                coordinate={{
                  latitude: toLocation.coords.latitude,
                  longitude: toLocation.coords.longitude,
                }}
                tracksViewChanges={false}
                // icon={}
                anchor={{ x: 0.5, y: 0.6 }}
              />
            )}

            {fromLocation && toLocation && (
              <MapViewDirections
                origin={{
                  latitude: fromLocation?.coords.latitude,
                  longitude: fromLocation?.coords.longitude,
                }}
                destination={{
                  latitude: toLocation?.coords.latitude,
                  longitude: toLocation?.coords.longitude,
                }}
                apikey={googleMapApiKey}
                strokeWidth={5}
                strokeColor="#060075"
                optimizeWaypoints={true}
                onReady={(result) => {
                  setDuration(`${Math.ceil(result.duration)}`);

                  if (!isReady) {
                    // Fit the map based on the route
                    mapView?.current?.fitToCoordinates(result.coordinates, {
                      edgePadding: {
                        right: SIZES.width * 0.1,
                        bottom: 400,
                        left: SIZES.width * 0.1,
                        top: SIZES.height * 0.1,
                      },
                    });

                    if (result.coordinates.length >= 2) {
                      let angle = utils.calculateAngle(result.coordinates);
                      setAngle(angle);
                    }

                    setIsReady(true);
                  }
                }}
              />
            )}
          </MapView>
        ) : (
          <PermissionNotAllow />
        )}
      </MapContainer>
    </Container>
  );
}

export default Map;
