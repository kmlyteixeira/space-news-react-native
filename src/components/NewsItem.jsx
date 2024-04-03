import { MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from "../config/styles";

const NewsItem = ({ item, onPress }) => {
  const [liked, setLiked] = useState(false);

  const handleLikePress = () => {
    setLiked(!liked);
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.containerNews}>
        <Image source={{ uri: item.image_url }} style={styles.imageNews} />
        <View style={styles.textContainerNews}>
          <Text style={styles.titleNews}>{item.title}</Text>
          <Text style={styles.summaryNews}>{item.summary}</Text>
          <View style={styles.actionsContainerNews}>
            <TouchableOpacity onPress={handleLikePress}>
              <MaterialIcons name="star" size={24} color={liked ? 'gold' : 'black'} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onPress}>
              <Text style={styles.moreButtonNews}>More...</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NewsItem;
