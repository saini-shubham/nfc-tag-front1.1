import {
  PDFViewer,
  PDFDownloadLink,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  BlobProvider
} from "@react-pdf/renderer";
import { saveAs } from "file-saver";
import { Button } from "reactstrap";
import ReactDOM from 'react-dom'; 
const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
    textAlign: "center",
    marginTop: "1%",
    marginBottom: "1%",
  },
  table: {
    display: "table",
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    //borderRightWidth: 1,
    //borderBottomWidth: 1
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row",
  },
  tableCol: {
    width: "25%",
    borderStyle: "solid",
    borderWidth: 1,
    //borderLeftWidth: 1,
    //borderTopWidth: 1
  },
  tableCell: {
    margin: "auto",
    marginTop: 10,
    fontSize: 10,
  },
});

const populatePdf = () => {
  <Document>
    <Page style={styles.body}>
      <Text style={styles.heading}>dfdsfs</Text>
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>S.No</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>House Details</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Address</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Time & date</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>React-PDF</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>3 User </Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>2019-02-20 - 2020-02-19</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>5€</Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>;
};

const GetPdf = () => {
  const handleDownload = async () => {
    //const pdfBlob = await populatePdf.toBlob();
    const pdfBlob = await new Promise((res)=>{
      const blobProvider = (
        <BlobProvider document={<populatePdf></populatePdf>}></BlobProvider>
      );
      //ReactDOM.render(blobProvider,document.createElement('div'))
      saveAs(populatePdf,"today.pdf")
    })
    
  };

  return (
    <>
      {/* <button onClick={handleDownload}></button> */}
      <Button color="primary" onClick={handleDownload}>
                  Get PDF
                </Button>
      <PDFDownloadLink document={<populatePdf></populatePdf>}></PDFDownloadLink>
    </>
  );
};

export default GetPdf;
