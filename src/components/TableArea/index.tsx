import { Item } from "../../types/Item";
import * as C from "./styles"

type Props = {
	list:Item[];
}


//cpmponents
import TableItem from "../TableItem";



const TableArea = ({list}:Props)=>{
	return(
		<C.Table>
			<thead>
				<tr>
					<C.TableHeadColumn width={100}>
						Data
					</C.TableHeadColumn>
					<C.TableHeadColumn width={130}>
						Categoria
					</C.TableHeadColumn>
					<C.TableHeadColumn>
						Titulo
					</C.TableHeadColumn>
					<C.TableHeadColumn width={150}>
						Voltar
					</C.TableHeadColumn>
				</tr>
			</thead>
			<tbody>
				{list.map((item,index)=>
					<TableItem key={index} item={item} />
				)}
			</tbody>
		</C.Table>
	);
}


export default TableArea;