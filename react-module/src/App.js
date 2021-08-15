import {usersList} from "./data-file";
import User from "./components/user/User"

export default function App() {
    return (
        <div className={'users'}>
            <User id={usersList[0].id} name={usersList[0].name} username={usersList[0].username}
                  email={usersList[0].email} address={usersList[0].address} phone={usersList[0].phone}
                  website={usersList[0].website} company={usersList[0].company.name}/>
            <User id={usersList[1].id} name={usersList[1].name} username={usersList[1].username}
                  email={usersList[1].email} address={usersList[1].address} phone={usersList[1].phone}
                  website={usersList[1].website} company={usersList[1].company.name}/>
            <User id={usersList[2].id} name={usersList[2].name} username={usersList[2].username}
                  email={usersList[2].email} address={usersList[2].address} phone={usersList[2].phone}
                  website={usersList[2].website} company={usersList[2].company.name}/>
            <User id={usersList[3].id} name={usersList[3].name} username={usersList[3].username}
                  email={usersList[3].email} address={usersList[3].address} phone={usersList[3].phone}
                  website={usersList[3].website} company={usersList[3].company.name}/>
            <User id={usersList[4].id} name={usersList[4].name} username={usersList[4].username}
                  email={usersList[4].email} address={usersList[4].address} phone={usersList[4].phone}
                  website={usersList[4].website} company={usersList[4].company.name}/>
            <User id={usersList[5].id} name={usersList[5].name} username={usersList[5].username}
                  email={usersList[5].email} address={usersList[5].address} phone={usersList[5].phone}
                  website={usersList[5].website} company={usersList[5].company.name}/>
            <User id={usersList[6].id} name={usersList[6].name} username={usersList[6].username}
                  email={usersList[6].email} address={usersList[6].address} phone={usersList[6].phone}
                  website={usersList[6].website} company={usersList[6].company.name}/>
            <User id={usersList[7].id} name={usersList[7].name} username={usersList[7].username}
                  email={usersList[7].email} address={usersList[7].address} phone={usersList[7].phone}
                  website={usersList[7].website} company={usersList[7].company.name}/>
            <User id={usersList[8].id} name={usersList[8].name} username={usersList[8].username}
                  email={usersList[8].email} address={usersList[8].address} phone={usersList[8].phone}
                  website={usersList[8].website} company={usersList[8].company.name}/>
            <User id={usersList[9].id} name={usersList[9].name} username={usersList[9].username}
                  email={usersList[9].email} address={usersList[9].address} phone={usersList[9].phone}
                  website={usersList[9].website} company={usersList[9].company.name}/>
        </div>
    );
}