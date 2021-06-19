import React from "react";
import { Document, Page, Text, StyleSheet, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  flex: {
    flexDirection: "row",
    justifyContent: "space-between",
    border: "1px solid lightgray",
    alignItems: "center",
  },
  section: {
    width: "420px",
    margin: "10px 30px",
    padding: 10,
    flexGrow: 1,
  },
  field: {
    fontSize: "12px",
    color: "blue",
    marginLeft: "5px",
  },
  textContainer: {
    flexDirection: "row",
    marginLeft: "8px",
    alignItems: "center",
  },
});

const Subject = ({ formData }) => {
  const {
    programmeChoice1,
    programmeChoice2,
    programmeChoice3,
    electiveChoice1,
    electiveChoice2,
    electiveChoice3,
    subject,
    subject2,
    subject3,
    subject4,
    subject5,
    subject6,
    subject7,
    fullmarks,
    fullmarks2,
    fullmarks3,
    fullmarks4,
    fullmarks5,
    fullmarks6,
    fullmarks7,
    grade,
  } = formData;

  return (
    <>
      {/** Subject */}
      <View style={styles.section}>
        <Text
          style={{
            backgroundColor: "black",
            borderRadius: "8px",
            padding: "8px",
            textAlign: "center",
            color: "white",
          }}
        >
          Subjects
        </Text>
        <h2>Programme- Which Subject seeking Honours/BA Pass/ Bsc Pass:</h2>
        <View>
          <Text>Preference Choice 1 :</Text>
          <Text style={styles.field}>{programmeChoice1}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text>Preference Choice 2 :</Text>
          <Text style={styles.field}>{programmeChoice2}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text>Preference Choice 3 :</Text>
          <Text style={styles.field}>{programmeChoice3}</Text>
        </View>
        <h2>Elective Course to be taken:</h2>
        <View style={styles.textContainer}>
          <Text>Preference Choice 1 :</Text>
          <Text style={styles.field}>{electiveChoice1}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text>Preference Choice 2:</Text>
          <Text style={styles.field}>{electiveChoice2}</Text>
        </View>
        <View style={styles.flex}>
          <View style={styles.flex}>
            <Text>Preference Choice 3 :</Text>
            <Text style={styles.field}>{electiveChoice3}</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default Subject;
