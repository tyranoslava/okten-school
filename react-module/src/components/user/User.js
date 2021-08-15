import Address from "../address/Address";
export default function User({id, name, username, email, address, phone, website, company}) {
    return (
        <div>
            <div className={'user'}>
                <h2>ID: {id} - Name: {name} {username}</h2>
                <h4>Email: {email}</h4>
                <h2>Address: <Address street={address.street} suite={address.suite} city={address.city} zipcode={address.zipcode} geo={address.geo}/></h2>
                <h4>Phone: {phone}</h4>
                <h4>Website: {website}</h4>
                <h4>Company: {company}</h4>
            </div>
        </div>
    );
}
