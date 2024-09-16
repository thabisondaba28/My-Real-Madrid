import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Display Real Madrid logo */}
      <View style={styles.mainPicture}>
        <Image
          style={styles.imageSize}
          source={{ uri: 'https://cdn.freelogovectors.net/wp-content/uploads/2023/10/real_madrid_club_de_futbol-logo-freelogovectors.net_.png' }} // Real Madrid logo URL
        />
      </View>

      {/* Description text */}
      <Text style={styles.welcomeText}>Real Madrid C.F.</Text>
      <Text style={styles.descriptionText}>
        Real Madrid Club de Fútbol, commonly referred to as Real Madrid, is a professional football club based in Madrid, Spain. 
        Founded in 1902, the club has a rich history and is known for its impressive success in both domestic and international football. 
        Real Madrid is one of the most successful and popular football clubs in the world, with numerous La Liga and UEFA Champions League titles.
      </Text>

    </View>
  );
}

// Styles for the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0', // Light background color
  },
  welcomeText: {
    paddingTop: 20,
    color: '#1f1f1f', // Dark text color
    fontWeight: 'bold',
    fontSize: 28,
    textAlign: 'center',
  },
  mainPicture: {
    paddingTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageSize: {
    width: 200, // Adjust width as needed
    height: 200, // Adjust height as needed
  },
  descriptionText: {
    paddingTop: 20,
    fontSize: 16,
    color: '#333', // Dark gray text color
    textAlign: 'center',
    lineHeight: 24,
  },
});
