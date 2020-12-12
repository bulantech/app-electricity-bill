import React, { useState, useRef, useEffect } from "react";
import MapView, { Callout, Marker } from "react-native-maps";
import {
  View,
  StyleSheet,
  Dimensions,
  Button,
  TextInput,
  Text,
} from "react-native";
import MapTool from "../components/MapTool";

import { MaterialCommnunityIcons } from "@expo/vector-icons";
import MapToolSearch from "../components/MapToolSearch";

const tourPlace = [
  {
    id: 1,
    name: "Watyai",
    coordinates: [16.8237, 100.26209],
  },
  {
    id: 2,
    name: "Kangsopa",
    coordinates: [16.871782, 100.835065],
  },
  {
    id: 3,
    name: "Phuhin",
    coordinates: [17.005759, 100.993721],
  },
  //ต้องเรียกฐานข้อมูลจากที่ใดที่นึงมาใช้เพื่อให้โค้ดสั้นลง
];

function MapScreen({ navigation, route }) {
  //State ข้อมูล list ของ Marker
  const [tourList, setTourList] = useState(tourPlace);
  //State เปลี่ยนประเภทของแผนที่ฐาน
  const [mapType, setMapType] = useState(0);
  //State ของการเปลี่ยนเครื่องมือค้นหา
  const [searchTool, setsearchTool] = useState(0);
  //State ของ TextInput
  const [searchName, setSearchName] = useState("");
  //State เพื่อเปิดเครื่องมือกรอกชื่อ Marker
  const [inputText, setInputText] = useState(0);

  //State เพื่อเปิดเครื่องมือเพิ่มจุด
  const [newMarkerTool, setNewMarkerTool] = useState(0);
  //State สำหรับจุดชั่วคราว
  const [markerTemp, setMarkerTemp] = useState([]);
  //State เก็บค่าชื่อ Marker ใหม่
  const [markerName, setMarkerName] = useState("");

  //Effect ใช้รับค่าจาก Detail เพื่อ Update
  useEffect(() => {
    if (route.params?.data) {
      const newTourlist = [...tourList];
      const newPoint = tourList.filter((item) => {
        return item.id === route.params.data.id;
      });

      newPoint[0].name = route.params.data.name;
      newTourlist.map(
        (item) => newPoint.findIndex((i) => i.id === item.id) || item
      );
      setTourList(newTourlist);
      console.log(tourList);
    }
  }, [route.params?.data]);

  const myMap = useRef();

  const iRegion = {
    latitude: 16.745884,
    longitude: 100.194292,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  };

  const iCamera = {
    center: {
      latitude: 16.745884,
      longitude: 100.194292,
    },
    pitch: 0,
    heading: 0,
    altitude: 0,
    zoom: 10,
  };

  let tourMarker = tourList.map((item) => {
    const latlng = {
      latitude: item.coordinates[0],
      longitude: item.coordinates[1],
    };
    return (
      <Marker key={item.id} coordinate={latlng} title={item.name}>
        <Callout
          onPress={() => {
            navigation.navigate("Details", { data: item });
          }}
          //ใช้ navigate ไปหน้าถัดไป
        >
          <Text style={{ color: "red" }}>{item.name}</Text>
        </Callout>
      </Marker>
    );
  });

  // const Maptools = () => {
  //   return (
  //     <View style={styles.container}>
  //       <Text>Test</Text>
  //     </View>
  //   );
  // };

  function creatNewTour(lat, lng) {
    const newTourPlace = {
      id: tourList.length + 1,
      name: "Test Tourpoint",
      coordinates: [lat, lng],
    };
    setTourList([...tourList, newTourPlace]);
  }

  function creatNewMarkerTemp(latlng) {
    setMarkerTemp([latlng]);
  }

  //เพิ่มจุดเข้าไปใน tourlist stste
  function addMarkerToList() {
    const newTourPoint = {
      id: tourList.length + 1,
      name: markerName,
      coordinates: [markerTemp[0].latitude, [markerTemp[0].longitude]],
    };
    setTourList([...tourList, newTourPoint]);
  }

  let showMarkerTemp = markerTemp.map((item, i) => {
    return <Marker key={i} coordinate={item} title={item.name}></Marker>;
  });

  let mapSearchTool =
    searchTool === 0 ? (
      <MapTool
        iconName="magnify"
        onPress={() => {
          setsearchTool(1);
        }}
      />
    ) : (
      <MapToolSearch
        onPressGo={() => console.log(searchName)}
        onPressCancel={() => setsearchTool(0)}
        onChangeTextInput={(value) => setSearchName(value)}
      />
    );

  let inputMarker =
    inputText === 1 ? (
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Please enter the name"
          onChangeText={(value) => {
            setMarkerName(value);
          }}
        ></TextInput>
        <Button
          title="Save"
          onPress={() => {
            addMarkerToList();
            setMarkerTemp([]);
            setMarkerName("");
            setNewMarkerTool();
            setInputText(0);
            setNewMarkerTool(0);
          }}
        />
        <Button
          title="Cancle"
          color="tomato"
          onPress={() => {
            setInputText(0);
            setMarkerTemp([]);
            setNewMarkerTemp(0);
          }}
        />
      </View>
    ) : (
      <View style={styles.inputContainer}></View>
    );

  return (
    <View style={styles.container}>
      <MapView
        ref={myMap}
        style={styles.mapContainer}
        region={iRegion}
        //camera={iCamera}>
        mapType={mapType === 0 ? "standard" : "satellite"}
        // customMapStyle={mapStyle}
        showsTraffic={true}
        onPress={(e) => {
          // const latlng = {
          //   latitude: e.nativeEvent.coordinate.latitude,
          //   longitude: e.nativeEvent.coordinate.longitude,
          // };
          // //onPress=คลิกปกติเพื่อให้ได้ผลลัพธ์
          // //onLongPress=คลิกค้างไว้เพื่อให้ได้ผลลัพธ์
          // // creatNewTour(
          // //   e.nativeEvent.coordinate.latitude,
          // //   e.nativeEvent.coordinate.longitude
          // // );
          // if (newMarkerTool === 1) {
          //   creatNewMarkerTemp(latlng);
          //   //setInputText(1);
          // }
        }}
      >
        {showMarkerTemp}
        {tourMarker}
      </MapView>
      <View style={styles.toolcontainer}>
        <MapTool
          iconName="home"
          onPress={() => myMap.current.animateToRegion(iRegion, 2000)}
        />

        {mapSearchTool}

        <MapTool
          iconName="layers"
          onPress={() => {
            mapType === 0 ? setMapType(1) : setMapType(0);
          }}
        />
        <MapTool
          iconName="plus"
          onPress={() => {
            if (newMarkerTool === 0) {
              setNewMarkerTool(1);
              setInputText(1);
            } else {
              setNewMarkerTool(0);
              setInputText(0);
              setMarkerTemp([]);
            }
          }}
        />
      </View>
      {inputMarker}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mapContainer: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  toolcontainer: {
    position: "absolute",
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    top: 20,
    left: 10,
  },
  inputContainer: {
    backgroundColor: "white",
    position: "absolute",
    bottom: 20,
    flexDirection: "row",
  },
});

export default MapScreen;
