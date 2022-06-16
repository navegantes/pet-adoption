import { NextPage } from "next";
import Title from "../../ui/components/Title/Title";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from "@mui/material";
import { useReport } from "../../data/hooks/pages/pets/useReport";

const Relatorio: NextPage = () => {
  const { listReport } = useReport();

  return (
    <>
      <Title
        title={'Reltorio de Adoção'}
        subtitle={'Veja a lista de pets adotados'}
      />
      <TableContainer
        component={Paper}
        sx={{masWidth: 830, mx: 'auto', p: {xs: 3, md: 5}}}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Pet</TableCell>
              <TableCell>E-mail</TableCell>
              <TableCell align={'right'}>Valor Mensal</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listReport.map((report) => (
              <TableRow key={report.id}>
                <TableCell>{report.pet.name}</TableCell>
                <TableCell>{report.email}</TableCell>
                <TableCell align={'right'}>{report.valor}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Relatorio;