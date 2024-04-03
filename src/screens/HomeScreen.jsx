import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FlatList, Linking, View } from 'react-native';
import NewsItem from '../components/NewsItem';
import styles from "../config/styles";

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await axios.get('https://api.spaceflightnewsapi.net/v4/articles/?limit=5');
      setArticles(response.data.results);
    } catch (error) {
      console.error('Error fetching articles: ', error);
    }
  };

  const openArticle = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.containerHome}>
      <FlatList
        data={articles}
        renderItem={({ item }) => <NewsItem item={item} onPress={() => openArticle(item.url)} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.newsListHome}
      />
    </View>
  );
};

const LogoutButton = () => {
  const navigation = useNavigation();
  navigation.navigate('LoginScreen');
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="🚀 SPACE NEWS" component={HomeScreen} />
      <Tab.Screen name="That's all for today!" component={LogoutButton} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
