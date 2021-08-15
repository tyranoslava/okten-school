import './Simpson.css'

export default function Simpson({name, surname, age, info, photo}) {
    return (
        <div className={'container'}>
            <div className={'simpson'}>
                <h2>{name} {surname}</h2>
                <h3>Age is {age}</h3>
                <div className={'wrap'}>
                    <p>{info}</p>
                    <img src={photo} alt=""/>
                </div>
            </div>
        </div>
    );
}