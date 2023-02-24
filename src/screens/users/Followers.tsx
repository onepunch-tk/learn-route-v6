import { useOutletContext } from "react-router-dom";
import {IFollowers} from "../../utils/OutletContexts";

function Followers() {
    const {userName, userId} = useOutletContext<IFollowers>();
    return (
        <h1>Followers</h1>
    );
}

export default Followers;