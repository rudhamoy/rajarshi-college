import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import PersonalInfo from "../pdf/PersonalInfo";
import Subject from "../pdf/Subject";

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

const Submit = ({ formData }) => {
  return (
    <div>
      <h1>Download your registration</h1>

      <PDFDownloadLink
        document={
          <Document>
            <Page size="A4" style={styles.page}>
              <PersonalInfo formData={formData} />
            </Page>
          </Document>
        }
        fileName="registration.pdf"
      >
        Download PDF
      </PDFDownloadLink>
    </div>
  );
};

export default Submit;
