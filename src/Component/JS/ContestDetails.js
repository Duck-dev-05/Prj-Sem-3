import React from "react";
import { useParams , Link} from "react-router-dom";

const ContestDetails = () => {
    const {id} = useParams();

    return (
        <div>
            <h2>Contest Details - {id}</h2>
            <p>Description</p>
            <Link to={`/sumbit/${id}`} className="btn btn-success">Participate</Link>
        </div>
    );
};

export default ContestDetails;