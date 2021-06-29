import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    width: "40px",
  },
  body: {
    fontSize: 12.5,
  },
}))(TableCell);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },

  tableCon: {
    display: "flex",
    // alignItems: "center",
    width: "92%",
    margin: "5%",
  },
});

function createData(
  slno,
  image,
  name,
  designation,
  qualification,
  profession,
  address
) {
  return {
    slno,
    image,
    name,
    designation,
    qualification,
    profession,
    address,
  };
}

const rows = [
  createData(
    1,
    "/images/malakar.jpeg",
    "Sri Gopendra Kumar Malakar",
    "Chairman",
    "B.E.C.E",
    "Engineer-in-chief & Vice Chairman T.H&C.B.",
    `Dhaleswar, Agartala`
  ),
  createData(
    2,
    "/images/sdeep.jpeg",
    "Sri Saumyadeep Sarkar",
    "Secretary",
    "BE, MBA",
    "Entrepreneur",
    `Shyamali Bazar`
  ),
  createData(
    3,
    "/images/nbpaul.jpeg",
    "Sri Niren Baran Pal",
    "Trustee",
    "B.Com",
    "Retd. Cheif Manager of LICI",
    "Dream Exotica, Agartala"
  ),
  createData(
    4,
    "/images/ashokray.jpeg",
    "Sri Ashoke Kr. Ray",
    "Trustee",
    "M.Com, CAIIB, DCA",
    "Retd. AGM, SBI",
    "Dhaleswar"
  ),
  createData(
    5,
    "/images/mknath.jpeg",
    "Sri M.K Nath",
    "Trustee",
    "M.A",
    "IAS(Retd)",
    "Krishnanagar, Agartala"
  ),
  createData(
    6,
    "/images/nbhatt.jpeg",
    "Sri Narendu Bhattacharya",
    "Trustee",
    "M.Sc.",
    "Deputy Register Tripura University(Retd)",
    ""
  ),
  createData(
    7,
    "/images/bnath.jpeg",
    "Sri Bikash Nath",
    "Trustee",
    "M.A",
    "Educational Entrepreneur ",
    `Kadamtala, Dharmanagar`
  ),
  createData(
    8,
    "/images/mithu.jpeg",
    "Smt Mithu Bhowmik",
    "Trustee",
    "B.A",
    "Social Acvtivist ",
    `Dhaleswar`
  ),
  createData(
    9,
    "/images/biswajit.jpeg",
    "Sri Biswajit Nath",
    "Trustee",
    "B.Tech, MBA",
    " Entrepreneur",
    "Dhaleswar"
  ),
  createData(
    10,
    "/images/dchakra.jpeg",
    "Sri Dipak Chakraborty",
    "Trustee",
    "BA",
    "Entrepreneur",
    "Salt Lake, Kolkata"
  ),
  createData(
    11,
    "/images/mitali.jpeg",
    "Smt Mitali Chakraborty",
    "Trustee",
    "B.E.C.E",
    "",
    "Bordowali"
  ),
  createData(
    12,
    "/images/sampa.jpeg",
    "Smt. Shampa Majumder",
    "Trustee",
    "B.E.C.E",
    "",
    "Dhaleswar, Agartala"
  ),
];

export default function TrusteeMobile() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.tableCon}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>SL No</StyledTableCell>
            <StyledTableCell align="center">Image</StyledTableCell>
            <StyledTableCell align="left">Name</StyledTableCell>
            <StyledTableCell align="left">Designation</StyledTableCell>
            <StyledTableCell align="left">Qualification</StyledTableCell>
            <StyledTableCell align="left">Profession</StyledTableCell>
            <StyledTableCell align="left">Address</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.slno}>
              <StyledTableCell component="th" scope="row">
                {row.slno}
              </StyledTableCell>
              <StyledTableCell align="center">
                <img
                  src={row.image}
                  style={{ borderRadius: "50%", height: "75px", width: "75px" }}
                />
              </StyledTableCell>
              <StyledTableCell align="left">{row.name}</StyledTableCell>
              <StyledTableCell align="left">{row.designation}</StyledTableCell>
              <StyledTableCell align="left">
                {row.qualification}
              </StyledTableCell>
              <StyledTableCell align="left">{row.profession}</StyledTableCell>
              <StyledTableCell align="left">{row.address}</StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
