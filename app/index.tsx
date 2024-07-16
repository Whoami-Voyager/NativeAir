import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View, Button, TextInput, Alert, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import styles from './styles';

export default function Index() {
  const router = useRouter();

  const airplanes = [
    {
      id: 1,
      name: "F-14 Tomcat",
      image: "https://www.aircraftrecognitionguide.com/images/aircraft/Grumman/f-14b.jpg",
      description: "The F-14 Tomcat is a variable-sweep wing, twin-engine fighter aircraft developed by Grumman for the United States Navy. Introduced in the 1970s, the F-14 is renowned for its distinctive variable-geometry wings and its advanced avionics, which allowed it to adapt to different combat scenarios. Equipped with the powerful Phoenix, Sidewinder, and Sparrow missiles, the F-14 was designed for both air superiority and fleet defense missions. Its unique wing design enabled it to switch between high-speed, high-altitude flight and slow-speed, low-altitude maneuverability, making it highly versatile. The F-14's role in naval aviation was marked by its deployment in various conflicts, including the Persian Gulf War, where it demonstrated its effectiveness in both air-to-air combat and ground attack missions. Despite being retired from U.S. service, the F-14 remains an iconic and highly respected aircraft in aviation history."
    },
    {
      id: 2,
      name: "F-15 Eagle",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a6/F-15C_Eagle_from_the_44th_Fighter_Squadron_flies_during_a_routine_training_exercise_April_15%2C_2019.jpg",
      description: "The F-15 Eagle is a highly advanced and versatile twin-engine, all-weather tactical fighter aircraft developed by McDonnell Douglas (now Boeing) for the United States Air Force. First introduced in the 1970s, the F-15 was designed to gain and maintain air superiority in aerial combat. Its exceptional acceleration, speed, and maneuverability, coupled with advanced avionics and weapons systems, have made it one of the most effective fighter jets in the world. The F-15's powerful Pratt & Whitney engines enable it to reach speeds over Mach 2.5, and its design allows for unparalleled agility in dogfights, giving it a significant advantage over adversaries. The F-15 Eagle has been extensively used in various combat operations, demonstrating its effectiveness and reliability. It features an array of sophisticated radar and electronic systems that provide pilots with comprehensive situational awareness and targeting capabilities. The aircraft's armament includes a combination of air-to-air missiles, a 20mm M61 Vulcan cannon, and the capability to carry additional air-to-ground weapons, making it a versatile platform for multiple mission types. The F-15's success in air combat is underscored by its impressive combat record, with over 100 aerial combat victories and no losses, solidifying its reputation as a dominant force in the skies."
    },
    {
      id: 3,
      name: "F-16 Fighting Falcon",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/F-16_June_2008.jpg/1200px-F-16_June_2008.jpg",
      description: "The F-16 Fighting Falcon is a single-engine, multi-role fighter aircraft developed by General Dynamics (now Lockheed Martin) for the United States Air Force. Since its introduction in the late 1970s, the F-16 has become one of the most widely used and adaptable fighter jets in the world. Known for its agility and advanced avionics, the F-16 features a frameless bubble canopy, fly-by-wire controls, and a highly efficient turbofan engine that enables it to perform a wide range of combat missions. Its versatility is reflected in its ability to carry a variety of weapons and equipment, including air-to-air missiles, precision-guided bombs, and electronic warfare systems. The F-16 has been widely exported and used by numerous air forces worldwide, playing a crucial role in both air superiority and ground attack operations. Its combat record includes participation in various conflicts, showcasing its reliability and effectiveness in diverse scenarios."
    },
    {
      id: 4,
      name: "F-18 Hornet",
      image: "https://vintageaviationnews.com/wp-content/uploads/2013/05/USMC_FA-18_Hornet.jpeg",
      description: "The F/A-18 Hornet is a twin-engine, multirole combat aircraft developed by McDonnell Douglas (now Boeing) for the United States Navy and Marine Corps. Entering service in the 1980s, the F/A-18 was designed to perform both air superiority and strike missions, making it a versatile asset for naval aviation. Its design incorporates advanced avionics, a durable airframe, and a powerful engine, allowing it to operate effectively from aircraft carriers and perform a wide range of roles, from fleet defense to close air support. The Hornet features an integrated weapons system capable of carrying a diverse array of munitions, including air-to-air missiles, bombs, and electronic countermeasures. The F/A-18 has been a key component of U.S. naval air power, participating in numerous conflicts, including the Gulf War and the War on Terror, and remains a vital part of the U.S. Navy and Marine Corps fleets."
    },
    {
      id: 5,
      name: "F-22 Raptor",
      image: "https://upload.wikimedia.org/wikipedia/commons/1/1e/F-22_Raptor_edit1_%28cropped%29.jpg",
      description: "The F-22 Raptor is a fifth-generation, all-weather, twin-engine stealth tactical fighter aircraft developed by Lockheed Martin for the United States Air Force. Introduced in the mid-2000s, the F-22 represents a significant leap forward in aviation technology, featuring advanced stealth capabilities, supercruise ability (sustained supersonic flight without afterburners), and highly sophisticated avionics. Designed to achieve air dominance, the F-22 integrates advanced radar and sensor systems that provide exceptional situational awareness and targeting precision. Its stealth features reduce radar cross-section and enhance survivability in contested airspace. The F-22's advanced maneuverability and high-speed performance make it a formidable adversary in air-to-air combat, while its multirole capabilities allow it to conduct precision strikes against ground targets. Despite its high cost, the F-22 remains a critical component of U.S. air superiority, showcasing the pinnacle of modern fighter aircraft design."
    },
    {
      id: 6,
      name: "F-35 Lightning II",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/F-35A_flight_%28cropped%29.jpg/1200px-F-35A_flight_%28cropped%29.jpg",
      description: "The F-35 Lightning II is a family of stealth multirole fighters developed by Lockheed Martin for various branches of the U.S. military and allied nations. Designed as a fifth-generation aircraft, the F-35 comes in three variants: the conventional takeoff and landing (CTOL) F-35A, the carrier-based F-35C, and the short takeoff and vertical landing (STOVL) F-35B. Its advanced stealth features, integrated avionics, and sensor fusion capabilities allow it to operate effectively in contested environments, providing superior situational awareness and precision strike capabilities. The F-35's design emphasizes stealth, adaptability, and network-centric warfare, making it a versatile platform for a wide range of missions, from air superiority to ground attack. Its role includes conducting precision strikes, intelligence gathering, and support for allied operations, with an emphasis on interoperability and shared capabilities among allied forces. Despite facing scrutiny over its cost and development challenges, the F-35 represents a significant advancement in multirole fighter technology and is poised to play a key role in modern air combat."
    }
  ];

  const cards = airplanes.map((info) => {
    return (
      <TouchableOpacity
        key={info.id}
        style={styles.card}
        onPress={() => router.push({ pathname: 'details', params: { name: info.name, image: info.image, description: info.description } })}
      >
        <Text style={styles.captionText}>{info.name}</Text>
        <Image source={{ uri: info.image }} style={styles.image} />
      </TouchableOpacity>
    );
  });

  const [text, setText] = useState("");

  return (
    <GestureHandlerRootView>
      <StatusBar
        translucent={true}
      />
      <TextInput
        placeholder="type in here"
        onChangeText={(newText) => setText(newText)}
        defaultValue={text}
        style={styles.textInput}
      />
      <Button
        title="something"
        onPress={() => Alert.alert("hello there")}
        color="#841584"
      />
      <ScrollView>
        {cards}
      </ScrollView>
    </GestureHandlerRootView>
  );
}