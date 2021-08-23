import React, { useState, useRef, useEffect } from "react";
import {
  View,
  StyleSheet,
  Button,
  Modal,
  Image,
  Text,
  TouchableOpacity,
  Animated,
} from "react-native";

/**
 * It's very unclear how this code works and what any of it does.
 * Names are confusing. What's ModalPoup?
 * There's not a single comment in this file that makes it easier to understand how this works.
 * Since this is using stuff we're not very familiar with, you should have everything
 *  carefully commented so that it's clear and easy to understand.
 */

const ModalPoup = ({ visible, children }) => {
  const [showModal, setShowModal] = useState(visible);
  const scaleValue = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    toggleModal();
  }, [visible]);
  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShowModal(false), 200);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };
  return (
    <Modal transparent visible={showModal}>
      <View style={styles.modalBackGround}>
        <Animated.View
          style={[
            styles.modalContainer,
            { transform: [{ scale: scaleValue }] },
          ]}
        >
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};
const ModalPopUp = ({ Value }) => {
  const [visible, setVisible] = useState(Value);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ModalPoup visible={visible}>
        <View style={{ alignItems: "center" }}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <Image
                source={require("../../assets/Cancel.png")}
                style={{ height: 30, width: 30 }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../../assets/Approved.png")}
            style={{ height: 150, width: 150, marginVertical: 10 }}
          />
        </View>

        <Text
          style={{
            marginVertical: 30,
            fontSize: 20,
            textAlign: "center",
            fontWeight: "bold",
            color: "#606d87",
          }}
        >
          This plant has been add to your Garden !
        </Text>
      </ModalPoup>
    </View>
  );
};

const styles = StyleSheet.create({
  modalBackGround: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
  },
  header: {
    width: "100%",
    height: 40,
    alignItems: "flex-end",
    justifyContent: "center",
  },
});

export default ModalPopUp;
