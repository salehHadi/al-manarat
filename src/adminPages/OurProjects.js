import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { Grid } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import axios from "axios";
import SidebarHeader from "../adminComponent/Sidebar-Header";

let rows;

// const [users, setUser] = React.useState([]);
try {
  await axios.get("/api/v1/all-project").then((res) => {
    console.log(res);
    rows = res.data.allProjects;
  });
} catch (error) {
  console.log(error);
}

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "All assigned Users",
  },
  {
    id: "userType",
    numeric: true,
    disablePadding: false,
    label: "userType",
  },
];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const { numSelected, selectedUsers } = props;

  const handleDeleteProject = async (event) => {
    selectedUsers.map(async (e) => {
      await axios
        .delete(`/api/v1/delete-project/${e}`)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    });
    setTimeout(function () {
      console.log("reload");
      window.location.reload(true);
    }, 5000);
  };

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        ""
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete" onClick={handleDeleteProject}>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function OurProjects() {
  // eslint-disable-next-line
  const [order, setOrder] = React.useState("asc");
  // eslint-disable-next-line
  const [orderBy, setOrderBy] = React.useState("userType");
  const [selected, setSelected] = React.useState([]);
  // eslint-disable-next-line
  const [page, setPage] = React.useState(0);
  // eslint-disable-next-line
  const [dense, setDense] = React.useState(true);
  // eslint-disable-next-line
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleClick = (event, _id) => {
    const selectedIndex = selected.indexOf(_id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, _id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage]
  );

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2, display: "flex" }}>
        <SidebarHeader />
        <div style={{ width: "100%", marginTop: "50px" }}>
          <EnhancedTableToolbar
            numSelected={selected.length}
            selectedUsers={selected}
          />
          <TableContainer>
            <Table
              sx={{ textAlign: "center" }}
              aria-labelledby="tableTitle"
              size={dense ? "small" : "medium"}
            >
              <div sx={{ width: "100px", height: "100px" }}>
                {visibleRows.map((row) => {
                  const isItemSelected = isSelected(row._id);

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row._id)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row._id}
                      selected={isItemSelected}
                      sx={{ cursor: "pointer", display: "inline-block" }}
                    >
                      {/* labels */}

                      <Box
                        className="project-card-box"
                        style={{ width: "160px" }}
                      >
                        <div style={{ width: "100%", height: "150px" }}>
                          <img
                            className="main-image"
                            src={row.photo.secure_url}
                            alt="img"
                          />
                          <p
                            className="progect-card-name"
                            style={{ top: "-120%" }}
                          >
                            {row.projectName}
                          </p>
                        </div>

                        <div className="project-card-text">
                          <Grid columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={12}>
                              <Typography
                                marginBottom={0}
                                sx={{ mt: 1, mb: 1 }}
                                variant="body1"
                                component="p"
                                color={"red"}
                                fontWeight={"bold"}
                              >
                                {row.status}
                              </Typography>
                            </Grid>
                            <Grid item xs={6}>
                              <Typography
                                marginBottom={0}
                                sx={{ mt: 1, mb: 1 }}
                                variant="body2"
                                component="p"
                              >
                                {row.floors}: عدد الأدوار
                              </Typography>
                            </Grid>
                            <Grid item xs={6}>
                              <Typography
                                marginBottom={0}
                                sx={{ mt: 1, mb: 1 }}
                                variant="body2"
                                component="p"
                              >
                                {row.area} :الحي
                              </Typography>
                            </Grid>
                            <Grid item xs={6}>
                              <Typography
                                marginBottom={0}
                                sx={{ mt: 1, mb: 1 }}
                                variant="body2"
                                component="p"
                              >
                                {row.roofs}: الملاحق عدد
                              </Typography>
                            </Grid>
                            <Grid item xs={6}>
                              <Typography
                                marginBottom={0}
                                sx={{ mt: 1, mb: 1 }}
                                variant="body2"
                                component="p"
                              >
                                {row.appartements}: عدد الشقق
                              </Typography>
                            </Grid>
                          </Grid>
                        </div>
                      </Box>
                    </TableRow>
                  );
                })}
                {emptyRows > 0 && (
                  <TableRow
                    style={{
                      height: (dense ? 33 : 53) * emptyRows,
                    }}
                  >
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </div>
            </Table>
          </TableContainer>
        </div>
      </Paper>
    </Box>
  );
}
