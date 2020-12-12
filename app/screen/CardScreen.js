import React from "react";
import { View, StyleSheet, ScrollView, FlatList } from "react-native";
import AppCard from "../components/AppCard";

const tourplaces = [
  {
    id: 1,
    name: "ภูหินร่องกล้า",
    amphoe: "นครไทย",
    image: {
      uri:
        "https://s.isanook.com/tr/0/rp/r/w850/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL3RyLzAvdWQvMjgzLzE0MTc4NDUvdHVqNy5qcGc=.jpg",
    },
  },
  {
    id: 2,
    name: "ภูหินร่องกล้า",
    amphoe: "วังทอง",
    image: {
      uri:
        "https://www.xn--72c5aba9c2a3b8a2m8ae.com/wp-content/uploads/2014/04/0-Kaeng-so-Pha-Waterfall-01.jpg",
    },
  },
  {
    id: 3,
    name: "วัดใหญ่",
    amphoe: "เมือง",
    image: {
      uri:
        "https://www.travel2guide.com/Phitsanulok/image/%e0%b8%a7%e0%b8%b1%e0%b8%94%e0%b8%9e%e0%b8%a3%e0%b8%b0%e0%b8%a8%e0%b8%a3%e0%b8%b5%e0%b8%a3%e0%b8%b1%e0%b8%95%e0%b8%99%e0%b8%a1%e0%b8%ab%e0%b8%b2%e0%b8%98%e0%b8%b2%e0%b8%95%e0%b8%b8%e0%b8%a7%e0%b8%a3%e0%b8%a1%e0%b8%ab%e0%b8%b2%e0%b8%a7%e0%b8%b4%e0%b8%ab%e0%b8%b2%e0%b8%a3-2.jpg",
    },
  },
];

function CardScreen(props) {
  return (
    <View style={styles.container}>
      {/* <AppCard
        image={{
          uri:
            "https://s.isanook.com/tr/0/rp/r/w850/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL3RyLzAvdWQvMjgzLzE0MTc4NDUvdHVqNy5qcGc=.jpg",
        }}
        title="ภูหินร่องกล้า"
        subtitle="นครไทย"
      />
      <AppCard
        image={{
          uri:
            "https://www.xn--72c5aba9c2a3b8a2m8ae.com/wp-content/uploads/2014/04/0-Kaeng-so-Pha-Waterfall-01.jpg",
        }}
        title="แก่งโสภา"
        subtitle="วังทอง"
      />
      <AppCard
        image={{
          uri:
            "https://www.travel2guide.com/Phitsanulok/image/%e0%b8%a7%e0%b8%b1%e0%b8%94%e0%b8%9e%e0%b8%a3%e0%b8%b0%e0%b8%a8%e0%b8%a3%e0%b8%b5%e0%b8%a3%e0%b8%b1%e0%b8%95%e0%b8%99%e0%b8%a1%e0%b8%ab%e0%b8%b2%e0%b8%98%e0%b8%b2%e0%b8%95%e0%b8%b8%e0%b8%a7%e0%b8%a3%e0%b8%a1%e0%b8%ab%e0%b8%b2%e0%b8%a7%e0%b8%b4%e0%b8%ab%e0%b8%b2%e0%b8%a3-2.jpg",
        }}
        title="วัดใหญ่"
        subtitle="เมือง"
      /> */}
      <FlatList
        data={tourplaces}
        keyExtractor={(tour) => tour.id.toString()}
        renderItem={({ item }) => (
          <AppCard
            image={item.image}
            title={item.name}
            subtitle={item.amphoe}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
  },
});

export default CardScreen;
