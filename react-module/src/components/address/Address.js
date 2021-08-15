import Geo from "../geo/Geo"
export default function Address({street, suite, city, zipcode, geo}) {
    return (
        <div>
            <h4>Street: {street}</h4>
            <h4>Suite: {suite}</h4>
            <h4>City: {city}</h4>
            <h4>Zipcode: {zipcode}</h4>
            <h4>Geo: <Geo lat={geo.lat} lng={geo.lng}/></h4>

        </div>
    );
}
