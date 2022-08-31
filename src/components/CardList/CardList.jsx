import Card from '../Card/Card';
import '../CardList/CardList.styles.css';


const CardList = ({ monsters }) => {
    return (
        <div className='card-list '  >
            {monsters.map(monster => {
                return <Card monster={monster} />;
            })}
        </div>
    );
}
export default CardList;