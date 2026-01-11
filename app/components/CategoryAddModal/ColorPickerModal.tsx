import { Modal, View, Pressable, StyleSheet, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import ColorPicker from "react-native-wheel-color-picker";
import { useEffect, useState } from "react";
import { globalStyles } from "@/app/styles/global";

type Props = {
  visible: boolean;
  initialColor?: string;
  onClose: () => void;
  onSelect: (color: string) => void;
};

export function ColorPickerModal({
  visible,
  initialColor = "#3B82F6",
  onClose,
  onSelect,
}: Props) {
  const [color, setColor] = useState(initialColor);

  useEffect(() => {
    setColor(initialColor);
  }, [initialColor, visible]);

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <Pressable style={styles.overlay} onPress={onClose}>
        <View style={{ flex: 1, width: "100%" }}>
          <View style={styles.container}>
            <View style={[globalStyles.row, globalStyles.spacebetween]}>
              <Text style={styles.title}>Selecionar cor</Text>

              <Pressable onPress={onClose} hitSlop={8}>
                <MaterialIcons name="close" size={22} />
              </Pressable>
            </View>
            <View>
              <View>
                <ColorPicker
                  color={color}
                  onColorChangeComplete={setColor}
                  thumbSize={28}
                  sliderSize={28}
                  noSnap
                  row={false}
                />
              </View>
              <Pressable
                style={[styles.confirmButton, { backgroundColor: color }]}
                onPress={() => {
                  onSelect(color);
                  onClose();
                }}
              >
                <Text style={styles.confirmText}>Confirmar cor</Text>
              </Pressable>
            </View>

          </View>
        </View>
      </Pressable>
    </Modal>
  );
}
const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.45)",
    justifyContent: "center",
    alignItems: "center",
  },
  

  container: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
  },

  title: {
    fontSize: 16,
    fontWeight: "600",
  },

  /* Button */
  confirmButton: {
    height: 48,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
  },
  confirmText: {
    color: "#FFF",
    fontWeight: "600",
  },
});
