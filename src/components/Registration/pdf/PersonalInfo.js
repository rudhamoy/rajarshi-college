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

const PersonalInfo = ({ formData }) => {
  const {
    firstName,
    lastName,
    middleName,
    email,
    gender,
    dob,
    nationality,
    aadhaar,
    category,
    fatherName,
    motherName,
    pwd,
    annualIncome,
    minority,
    martial,
    employment,
  } = formData;

  return (
    <>
      {/** Personal Section */}
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
          Personal Info
        </Text>
        <View style={styles.flex}>
          <View style={styles.flex}>
            <Text>Gender:</Text>
            <Text style={styles.field}>{gender}</Text>
          </View>
          <View style={styles.flex}>
            <Text>First Name:</Text>
            <Text style={styles.field}>{firstName}</Text>
          </View>
        </View>
        <View>
          <Text>Middle Name:</Text>
          <Text style={styles.field}>{middleName}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text>Last Name:</Text>
          <Text style={styles.field}>{lastName}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text>Email:</Text>
          <Text style={styles.field}>{email}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text>Date of Birth:</Text>
          <Text style={styles.field}>{dob}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text>Nationality:</Text>
          <Text style={styles.field}>{nationality}</Text>
        </View>
        <View style={styles.flex}>
          <View style={styles.flex}>
            <Text>Category:</Text>
            <Text style={styles.field}>{category}</Text>
          </View>
          <View style={styles.flex}>
            <Text>Aadhaar:</Text>
            <Text style={styles.field}>{aadhaar}</Text>
          </View>
        </View>

        {/** Family Details */}
        <View>
          <Text
            style={{
              backgroundColor: "black",
              borderRadius: "8px",
              padding: "8px",
              textAlign: "center",
              color: "white",
            }}
          >
            Family Details
          </Text>

          <View style={styles.textContainer}>
            <Text>Father's Name:</Text>
            <Text style={styles.field}>{fatherName}</Text>
          </View>
          <View style={styles.textContainer}>
            <Text>Mother's Name:</Text>
            <Text style={styles.field}>{motherName}</Text>
          </View>
          <View style={styles.textContainer}>
            <Text>Whether person specially abled?(PWD):</Text>
            <Text style={styles.field}>{pwd}</Text>
          </View>

          <View style={styles.textContainer}>
            <Text>Annual Income:</Text>
            <Text style={styles.field}>{annualIncome}</Text>
          </View>
          <View style={styles.textContainer}>
            <Text>Minority Group(Y/N):</Text>
            <Text style={styles.field}>{minority}</Text>
          </View>
          <View style={styles.textContainer}>
            <Text>Martial Status:</Text>
            <Text style={styles.field}>{martial}</Text>
          </View>
          <View style={styles.flex}>
            <View style={styles.flex}>
              <Text>Employment:</Text>
              <Text style={styles.field}>{employment}</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default PersonalInfo;
