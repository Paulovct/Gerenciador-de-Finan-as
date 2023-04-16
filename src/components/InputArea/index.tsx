import { Item } from "../../types/Item";
import * as C from "./styles";

type Props ={
	onAdd:(item:Item)=>void;
}

const InputArea = ({onAdd} : Props)=>{
	return(
		<C.Container>
			...
		</C.Container>
	);
}


export default InputArea;