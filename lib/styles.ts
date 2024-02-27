import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    backgroundColor: "#fff",
  },
  topbar: {
    width: "100%",
    height: 16,
    padding: 16,
  },
  scrollView: {
    width: "100%",
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "#ddd",
    padding: 12,
    margin: 8,
    borderRadius: 8,
    flexDirection: "row",
    gap: 8,
  },
  image: {
    width: 100,
    height: 100,
  },
  post: {
    flexDirection: "column",
    margin: 8,
    padding: 12,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#ddd",
  },
});

export const container = StyleSheet.compose(styles.root, styles.container);
export const topbar = StyleSheet.compose(styles.root, styles.topbar);
export const card = StyleSheet.compose(styles.root, styles.card);
