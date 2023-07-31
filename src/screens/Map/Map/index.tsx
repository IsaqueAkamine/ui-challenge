import React, { useEffect, useRef, useState } from "react";
import { Alert } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  LocationObject,
  watchPositionAsync,
  LocationAccuracy,
} from "expo-location";

import { icons, SIZES } from "../../../constants";
import { utils } from "../../../utils";

import {
  BackButton,
  BackIcon,
  Container,
  MapContainer,
  Title,
} from "./map.style";

function Map() {
  const mapView = useRef();
  const navigation = useNavigation();
  const { toLoc } = useRoute().params;
  const googleMapApiKey = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY;
  const [fromLocation, setFromLocation] = useState<LocationObject | null>(null);
  const [angle, setAngle] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [duration, setDuration] = useState("");

  async function requestLocationPermissions() {
    const { granted } = await requestForegroundPermissionsAsync();

    if (granted) {
      const currentPosition = await getCurrentPositionAsync();
      setFromLocation(currentPosition);
    } else {
      Alert.alert("Permission denied", "Cannot load map");
    }
  }

  function PermissionNotAllow() {
    return <Title>Location permission not allow</Title>;
  }

  function handleErrorOnDirections(error: string) {
    Alert.alert(
      error,
      "Try to use an emulator and change your location to somewhere in U.S. "
    );
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
        setFromLocation(response);
      }
    );
  }, []);

  return (
    <Container>
      <MapContainer>
        <BackButton activeOpacity={0.6} onPress={() => navigation.goBack()}>
          <BackIcon name="left" size={18} />
        </BackButton>
        {fromLocation ? (
          <MapView
            ref={mapView}
            provider={PROVIDER_GOOGLE}
            style={{ flex: 1, width: "100%" }}
            initialRegion={{
              latitude: fromLocation.coords.latitude,
              longitude: fromLocation.coords.longitude,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
            }}
          >
            {fromLocation && (
              <Marker
                key="FromLoc"
                coordinate={{
                  latitude: fromLocation.coords.latitude,
                  longitude: fromLocation.coords.longitude,
                }}
                tracksViewChanges={false}
                icon={icons.navigator1}
                rotation={angle}
                anchor={{ x: 0.75, y: 0.6 }}
              />
            )}

            {toLoc && (
              <Marker
                key="ToLoc"
                coordinate={toLoc}
                tracksViewChanges={false}
                anchor={{ x: 0.5, y: 0.6 }}
              />
            )}

            {fromLocation && toLoc && (
              <MapViewDirections
                origin={{
                  latitude: fromLocation?.coords.latitude,
                  longitude: fromLocation?.coords.longitude,
                }}
                destination={toLoc}
                apikey={googleMapApiKey}
                strokeWidth={5}
                strokeColor="#060075"
                optimizeWaypoints={true}
                onError={(error) => handleErrorOnDirections(error)}
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
