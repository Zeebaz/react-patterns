import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useTableSortCustom } from "../../hooks";

interface IData {
  name: string;
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
}

const rowsData: IData[] = [
  { name: "Frozen yoghurt", calories: 159, fat: 6.0, carbs: 24, protein: 4.0 },
  {
    name: "Ice cream sandwich",
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
  },
  { name: "Eclair", calories: 262, fat: 16.0, carbs: 24, protein: 6.0 },
  { name: "Cupcake", calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
  { name: "Gingerbread", calories: 356, fat: 16.0, carbs: 49, protein: 3.9 },
];

export default function CustomTable() {
  const { data, getColumnProps } = useTableSortCustom<IData>(rowsData);

  const logSort = (
    event: React.MouseEvent<HTMLTableCellElement, MouseEvent>
  ) => {
    console.log("logSort", event.currentTarget.id);
    console.log("logSort 2", event);
  };

  return (
    <TableContainer component={Paper} sx={{ marginTop: 3 }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              id="name"
              {...getColumnProps({
                onClick: logSort,
              })}
            >
              Dessert (100g serving)
            </TableCell>
            <TableCell align="right" id="calories" {...getColumnProps()}>
              Calories
            </TableCell>
            <TableCell align="right" id="fat" {...getColumnProps()}>
              Fat&nbsp;(g)
            </TableCell>
            <TableCell align="right" id="carbs" {...getColumnProps()}>
              Carbs&nbsp;(g)
            </TableCell>
            <TableCell align="right" id="protein" {...getColumnProps()}>
              Protein&nbsp;(g)
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

/* function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
]; */
