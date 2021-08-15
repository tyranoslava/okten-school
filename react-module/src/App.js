import {simpsons} from './data-file';
import Simpson from "./components/simpson/Simpson";

export default function App() {
    return (
        <div className={'simpsons'}>
            <Simpson name={simpsons[0].name} surname={simpsons[0].surname} age={simpsons[0].age}
                     info={simpsons[0].info} photo={simpsons[0].photo}/>
            <Simpson name={simpsons[1].name} surname={simpsons[1].surname} age={simpsons[1].age}
                     info={simpsons[1].info} photo={simpsons[1].photo}/>
            <Simpson name={simpsons[2].name} surname={simpsons[2].surname} age={simpsons[2].age}
                     info={simpsons[2].info} photo={simpsons[2].photo}/>
            <Simpson name={simpsons[3].name} surname={simpsons[3].surname} age={simpsons[3].age}
                     info={simpsons[3].info} photo={simpsons[3].photo}/>
            <Simpson name={simpsons[4].name} surname={simpsons[4].surname} age={simpsons[4].age}
                     info={simpsons[4].info} photo={simpsons[4].photo}/>
        </div>
    );
}