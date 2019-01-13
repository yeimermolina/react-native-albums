import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => (
  <Card>
    <CardSection>
      <View style={styles.thumbnailContainerStyle}>
        <Image style={styles.thumbnailStyle} source={{ uri: album.thumbnail_image }} />
      </View>
      <View style={styles.headerContentStyle}>
        <Text style={styles.headerTextStyle}>{album.title}</Text>
        <Text>{album.artist}</Text>
      </View>
    </CardSection>
    <CardSection>
      <Image style={styles.albumCoverStyle} source={{ uri: album.image }} />
    </CardSection>
    <CardSection>
      <Button />
    </CardSection>
  </Card>
);

const styles = {
  headerContentStyle: {
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  albumCoverStyle: {
    width: null,
    flex: 1,
    height: 300
  }
};

export default AlbumDetail;
