import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  ViewStyle,
  TextStyle,
  ImageStyle,
  ImageBackground,
} from 'react-native';
import { AntDesign } from "@expo/vector-icons";
import happyManProfile from '../../assets/images/happy-man-profile.jpeg';

interface Styles {
  container: ViewStyle;
  header: ViewStyle;
  avatar: ImageStyle;
  headerText: ViewStyle;
  name: TextStyle;
  level: TextStyle;
  card: ViewStyle;
  pointsHeader: ViewStyle;
  pointsTitle: TextStyle;
  points: TextStyle;
  progressContainer: ViewStyle;
  progressHeader: ViewStyle;
  progressText: TextStyle;
  progressPercent: TextStyle;
  progressBar: ViewStyle;
  progressFill: ViewStyle;
  menu: ViewStyle;
  menuItem: ViewStyle;
  menuIcon: ViewStyle;
  iconPlaceholder: ViewStyle;
  menuContent: ViewStyle;
  menuTitle: TextStyle;
  menuSubtitle: TextStyle;
  menuArrow: TextStyle;
  impactCard: ViewStyle;
  impactTitle: TextStyle;
  impactText: TextStyle;
  headerContainer: ViewStyle;
  headerBackground: ViewStyle;
  headerOverlay: ViewStyle;
}

interface UserProfile {
  name: string;
  points: number;
  level: string;
  battlePassProgress: number;
  avatarUrl: string;
}

interface MenuItem {
  title: string;
  subtitle: string;
  icon?: React.ReactNode;
  onPress?: () => void;
}

interface MenuItemProps extends MenuItem {
  icon?: React.ReactNode;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, title, subtitle, onPress }) => (
  <TouchableOpacity style={styles.menuItem} onPress={onPress}>
    <View style={styles.menuIcon}>
      {icon || <AntDesign name="star" size={24} color="#E0E0E0" />}
    </View>
    <View style={styles.menuContent}>
      <Text style={styles.menuTitle}>{title}</Text>
      <Text style={styles.menuSubtitle}>{subtitle}</Text>
    </View>
    <Text style={styles.menuArrow}>›</Text>
  </TouchableOpacity>
);

const ProfileScreen: React.FC = () => {
  const userProfile: UserProfile = {
    name: "Hazerfen Çelebi",
    points: 4750,
    level: "Eco Pioneer",
    battlePassProgress: 75,
    avatarUrl: happyManProfile
  };

  console.log(userProfile.avatarUrl);

  const menuItems: MenuItem[] = [
    { 
      title: "Achievements", 
      subtitle: "12 Badges Earned",
      icon: <AntDesign name="Trophy" size={24} color="#32CD32" />,
      onPress: () => console.log("Achievements pressed")
    },
    { 
      title: "Friends", 
      subtitle: "Connect & Compare",
      icon: <AntDesign name="team" size={24} color="#32CD32" />,
      onPress: () => console.log("Friends pressed")
    },
    { 
      title: "Rewards", 
      subtitle: "View Store",
      icon: <AntDesign name="gift" size={24} color="#32CD32" />,
      onPress: () => console.log("Rewards pressed")
    },
    { 
      title: "Notifications", 
      subtitle: "Manage Alerts",
      icon: <AntDesign name="bells" size={24} color="#32CD32" />,
      onPress: () => console.log("Notifications pressed")
    },
    { 
      title: "Settings", 
      subtitle: "Account Preferences",
      icon: <AntDesign name="setting" size={24} color="#32CD32" />,
      onPress: () => console.log("Settings pressed")
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Profile Header */}
        <View style={styles.headerContainer}>
          <ImageBackground
            source={require('../../assets/images/transparent-background-profile-banner.jpeg')}
            style={styles.headerBackground}
          >
            <View style={styles.headerOverlay}>
              <View style={styles.header}>
                <Image
                  source={require('../../assets/images/happy-man-profile.jpeg')}
                  style={styles.avatar}
                />
                <View style={styles.headerText}>
                  <Text style={styles.name}>{userProfile.name}</Text>
                  <Text style={styles.level}>{userProfile.level}</Text>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>

        {/* Points Card */}
        <View style={styles.card}>
          <View style={styles.pointsHeader}>
            <Text style={styles.pointsTitle}>EcoPoints</Text>
            <Text style={styles.points}>{userProfile.points}</Text>
          </View>
          
          {/* Battle Pass Progress */}
          <View style={styles.progressContainer}>
            <View style={styles.progressHeader}>
              <Text style={styles.progressText}>GreenPass Progress</Text>
              <Text style={styles.progressPercent}>{userProfile.battlePassProgress}%</Text>
            </View>
            <View style={styles.progressBar}>
              <View 
                style={[
                  styles.progressFill,
                  { width: `${userProfile.battlePassProgress}%` }
                ]}
              />
            </View>
          </View>
        </View>

        {/* Menu Items */}
        <View style={styles.menu}>
          {menuItems.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </View>

        {/* Environmental Impact */}
        <View style={styles.impactCard}>
          <Text style={styles.impactTitle}>Your Environmental Impact</Text>
          <Text style={styles.impactText}>
            You've saved 2.5 tons of CO2 through eco-friendly flight choices!
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 4,
    borderColor: '#FFFFFF',
  },
  headerText: {
    marginLeft: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  level: {
    fontSize: 16,
    color: '#EDEDED',
  },
  card: {
    backgroundColor: '#FFFFFF',
    margin: 15,
    marginTop: 5,
    borderRadius: 15,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  pointsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  pointsTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  points: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#32CD32',
  },
  progressContainer: {
    marginTop: 10,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  progressText: {
    fontSize: 14,
    color: '#666666',
  },
  progressPercent: {
    fontSize: 14,
    color: '#666666',
  },
  progressBar: {
    height: 8,
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#32CD32',
    borderRadius: 4,
  },
  menu: {
    backgroundColor: '#FFFFFF',
    marginTop: 15,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  menuIcon: {
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconPlaceholder: {
    width: 24,
    height: 24,
    backgroundColor: '#E0E0E0',
    borderRadius: 12,
  },
  menuContent: {
    flex: 1,
    marginLeft: 15,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  menuSubtitle: {
    fontSize: 14,
    color: '#666666',
    marginTop: 2,
  },
  menuArrow: {
    fontSize: 20,
    color: '#CCCCCC',
  },
  impactCard: {
    backgroundColor: '#FFFFFF',
    margin: 15,
    padding: 15,
    borderRadius: 15,
    marginBottom: 30,
  },
  impactTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#32CD32',
    marginBottom: 8,
  },
  impactText: {
    fontSize: 14,
    color: '#666666',
    lineHeight: 20,
  },
  headerContainer: {
    height: 150,
  },
  headerBackground: {
    width: '100%',
    height: 120,
  },
  headerOverlay: {
    backgroundColor: 'rgba(76, 175, 80, 0.75)',
    flex: 1,
    justifyContent: 'flex-end',
  },
});

export default ProfileScreen;