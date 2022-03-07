import { ListArrow } from "../utilitaries/icons";

export default function LinkFilter(props){
    return <li>
                <ListArrow/><a href={props.link} title={props.titulo}>{props.titulo}</a>
            </li>
}