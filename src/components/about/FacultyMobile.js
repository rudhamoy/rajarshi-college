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
  department,
  nameoffaculty,
  designation,
  qualificationexperience,
  award
) {
  return {
    slno,
    image,
    department,
    nameoffaculty,
    designation,
    qualificationexperience,
    award,
  };
}

const rows = [
  createData(
    1,
    "/images/jnath-pic.jpg",
    "Chemistry",
    "Dr. Jayasree Nath",
    "Assistant Professor",
    "M.Sc., Ph.D. in Chemistry, (2015) T.U., GATE/2010, SLET/2018",
    `Best Presentation(State Level Seminer on Frontier Areas of Chemistry) /2010
J.K.Mittal Award(National Conference on Surfactents, Emilsions and Biocolloids)/2011`
  ),
  createData(
    2,
    "/images/rgosh.jpg",
    "Chemistry",
    "Dr. Ranjit Ghosh",
    "Assistant Professor",
    "M.Sc.in Chemistry, (2008) T.U., NET/2013, GATE/2013, B.Ed 2019",
    `PhD in 2017 from Tripura University`
  ),
  createData(
    3,
    "/images/pchaky.jpg",
    "English",
    "Dr.PrasantaChakraborty",
    "Assistant Professor",
    "PhD on Australian literature Assam University (2002), Retd.Professor, ICFAI University, Tripura. 34 years working in Govt. Colleges of Tripura",
    ``
  ),
  createData(
    4,
    "/images/mrahaman.jpg",
    "History",
    "Dr. Md. Mojahid Rahaman ",
    "Assistant Professor",
    "MA in Modern History, Teaching Experience: 37 years in different Degree College in Tripura, Retd. as Principal (I/C), Ramthakur College, Agartala, Guest Lecturer, IGNOU, TU. Guest Lecturer, Distance Education, Ramthakur College, Agartala. Author of the Book “Tripura in the Liberation Movment of Bangladesh”, Akshansha Publishing House, New Delhi, Cultural Activists, attached with varoius cultural organizations, Agartala",
    ``
  ),
  createData(
    5,
    "/images/knath.jpg",
    "History",
    "Mr. Kanu Nath",
    "Assistant Professor",
    "MA Ancient Indian History Tripura University (2004), M.Phil (2007), Diploma in Anthropology in 2010, NESLET, 16 years teaching experience in different Degree colleges in Tripura, Author of multiple history books Tripura Secondary Education",
    ``
  ),
  createData(
    6,
    "/images/dde.jpg",
    "Mathematics",
    "Dr. Dipankar De ",
    "Assistant Professor",
    "M.Sc., Ph.D. in Mathematics Retd. Associate Professor of Govt. Degree College Visiting Lecturer (4 yrs, in appl. Math Deptt., MBB University)",
    ``
  ),
  createData(
    7,
    "/images/ddey.jpg",
    "Physics",
    "Dr. Dibyendu Dey",
    "Assistant Professor",
    "M.Sc., Ph.D. in Physics, (2015)T.U. ",
    `Gold Medal in MSc in Physics/2009
DST, INSPIRE Fellowship for Ph.D/2011
Best presentation award (Physics Academy of North East) /2011`
  ),
  createData(
    8,
    "/images/mitusaha.jpg",
    "Physics",
    "Dr. Mitu Saha",
    "Assistant Professor",
    "M.Sc. (Physics) in 2009 & Ph.D (Physics) in 2018 Tripura University, ",
    `DST Women Scientist-A (WOS-A, DST) 2015, CSIR-Research Associate (CSIR-RA) 2019.`
  ),
  createData(
    9,
    "/images/tdas.jpg",
    "Political Science",
    "Mr. Tapas Dasgupta ",
    "Assistant Professor",
    "M.A in Political Science, University of Calcutta, India. Teaching Experience in Degree Colleges around 35 years Teaching Experience in Post graduate level: Guest Lecturer T.U., Counselor at PG course , Distance Education, Counselor at IGNOU PG course ",
    ``
  ),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.tableCon}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>SL No</StyledTableCell>
            <StyledTableCell align="center">Image</StyledTableCell>
            <StyledTableCell align="left">Department</StyledTableCell>
            <StyledTableCell align="left">Name of the Faculty</StyledTableCell>
            <StyledTableCell align="left">Designation</StyledTableCell>
            <StyledTableCell align="left">
              Qualification & Experience
            </StyledTableCell>
            <StyledTableCell align="left">Award</StyledTableCell>
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
              <StyledTableCell align="left">{row.department}</StyledTableCell>
              <StyledTableCell align="left">
                {row.nameoffaculty}
              </StyledTableCell>
              <StyledTableCell align="left">{row.designation}</StyledTableCell>
              <StyledTableCell align="left">
                {row.qualificationexperience}
              </StyledTableCell>
              <StyledTableCell align="left">{row.award}</StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
