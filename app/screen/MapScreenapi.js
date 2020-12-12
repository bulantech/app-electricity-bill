import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions, TextInput, Button, Text } from "react-native";
import MapView, { Callout, Marker } from "react-native-maps";
import MapTool from "../components/MapTool";

import { create } from "apisauce";

const camera = {
  center: {
    latitude: 16.742084,
    longitude: 100.194292,
  },
  pitch: 0,
  heading: 0,
  altitude: 0,
  zoom: 15,
};

//State for layer from API
const Map = ({navigation, route}) => {
  const [showLayer, setShowLayer] = useState(0);
  const [collectPoint, setCollectPoint] = useState([]);

//State for Add Marker---
const [createMarkerTool, setCreateMarkerTool] = useState(0);
const [markerTemp, setMarkerTemp] = useState([]);
const [markerName, setMarkerName] = useState("");



//UesEfect for update Point
useEffect(() => {
  if (route.params?.postback){
    setShowLayer(1);
    showCollectPoint();
  }

  if (route.param?.delete){
    setShowLayer(1);
    showCollectPoint();
  }
}, [route.params?.postback, route.params?.delete]);


//Show Point from sever
  async function showCollectPoint() {
    const apiCClient = create({
      baseURL:
        "https://www.geo-nred.nu.ac.th/research_s/2019/food/foodapp/showcollectpoint.php",
    });
    const getlistings = () => apiCClient.get();
    const response = await getlistings();
    setCollectPoint(response.data);
  }

  //Add Marker to Sever
  async function addPoint(){
    const lat = markerTemp[0].latitude;
    const lng = markerTemp[0].longitude;
    const name = markerName;
    const apiCClient = create({
      baseURL:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nu.ac.th%2F%3Fpage_id%3D6297&psig=AOvVaw0EKVnsMbcReiaVPMtuUEFL&ust=1607325328545000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPDXq83nuO0CFQAAAAAdAAAAABAD" + lat + "&lng=" + lng + "&name=" + name,
    });
    const sendPoint = () => apiCClient.get();
    const response = await sendPoint();
    showCollectPoint();
  }

  function collectPointMarker() {
    let pointMarker;
    if (collectPoint !== null) {
      pointMarker = collectPoint.map((item) => {
        const latLng = {
          latitude: item.location[0],
          longitude: item.location[1],
        };
        return (
          <Marker 
            key={item.id} 
            coordinate={latLng} 
            title={item.name}
          >
            <Callout
            onPress={() => {
              navigation.navigate("Details", {data: item});
              setShowLayer();
            }}><Text>{item.name}</Text></Callout>
            </Marker>
          );
        });
    }
    return pointMarker;
  }


let showMarkerTemp = markerTemp.map((item, i) => {
  return <Marker key={i} coordinate={item} title={item.name} />
});

  function inputAddMarker(){
    if (createMarkerTool === 1){
      return(
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Please Enter the name"
            onChangeText={(value) => {
              setMarkerName(value);
            }}
            />
            <Button
              title="Go"
              onPress={()=>{
                addPoint();
                setMarkerTemp([]); //Markerโล่ง
                setMarkerName(""); //ชื่อโล่ง
                setCreateMarkerTool(0);
              }}
            />
            <Button
              title="Cencel"
              color="tomato"
              onPress={()=>{
                setMarkerTemp([]);
                setCreateMarkerTool(0);
              }}
            />
        </View>
      );
    }
    else {
      <View style={styles.inputContainer}/>
    }
  }

  //const Map = () => {
  return (
    <View style={styles.mapContainer}>
      <MapView
        style={styles.mapStyle}
        //region={iregion}
        camera={camera}
        onPress= {(e) => {
          const latlng = {
            latitude: e.nativeEvent.coordinate.latitude,
            longitude : e.nativeEvent.coordinate.longitude
          }
          if (createMarkerTool === 1){
            setMarkerTemp([latlng])
          }
        }}
      >
        {collectPointMarker()}
        {showMarkerTemp}
      </MapView>
      <View style={styles.toolContainer}>
        <MapTool
          iconName="Layers"
          onPress={() => {
            if (showLayer === 1) {
              setShowLayer(0);
              showCollectPoint();
            } else {
              setShowLayer(1);
              setCollectPoint([]);
            }
          }}
        />
        <MapTool
          iconName="plus"
          onPress={() => {
            createMarkerTool === 0 ? setCreateMarkerTool(1) : setCreateMarkerTool(0)
          }}
        />
      </View>
      {inputAddMarker()}
    </View>
  );
};

function MapScreenApi({navigation, route}) {
  return <Map navigation={navigation} route={route}/>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mapContainer: {
    flex: 1,
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  toolContainer: {
    position: "absolute",
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    top: 45,
    right: 10,
  },
  inputContainer: {
    position: "absolute",
    top: 20,
    backgroundColor: "white",
    opacity: 0.9,
    flexDirection: "row",
  },
});

export default MapScreenApi;
 