// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

import React, { useState, useEffect } from 'react';

import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.titleText}>SACODE</Text>
      <Text style={styles.subtitleText}>Kam tanya Torang diskusi</Text>
    </View>
  )
}

const App = () => {
  const [members, setMembers] = useState([])

  async function getDetailFromApi() {
    try {
      const response = await fetch(
        'http://localhost:3000/members'
      );
      const json = await response.json();
      setMembers(json.data.members)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      getDetailFromApi()
    }, 3000);
  })

  if (members.length == 0) {
    return <SafeAreaView style={styles.container}>
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
       <ActivityIndicator size="large" color="black"/>
      </View>
    </SafeAreaView>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <ScrollView
        style={styles.container}
        contentInsetAdjustmentBehavior = "automatic"
      >
        {
          members.map((member) => {
            const backgroundColor = member.id % 2 == 0 ? "#68b6ef" : "#6e78ff"
            return <View 
              key={member.id}
              style={{
                ...styles.card, 
                backgroundColor: backgroundColor
              }}>
                <Text style={{...styles.cardText, fontSize: 28}}>{member.name}</Text>
                <Text style={{...styles.cardText, fontSize: 18, paddingTop: 8}}>{member.joinDate}</Text>
            </View>
          })
        }
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
  padding: 16,
    backgroundColor: "#abc4ff"
  },
  titleText: {
    fontSize: 28
  },
  subtitleText: {
    fontSize: 14
  },
  container: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#f2f5ff"
  },
  card: {
    height: 120,
    width: "100%",
    borderRadius: 8,
    marginTop: 10,
    justifyContent: "center"
  },
  cardText: {
    color: "white",
    paddingLeft: 16
  },
})

export default App;