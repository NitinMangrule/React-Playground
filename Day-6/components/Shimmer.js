import Card from './Card';

const Shimmer = () => {
    return (
        <div className="restaurant-list">
            {Array(20).fill("").map((e) => <Card className="shimmerBG" key={Math.random()}/>)}
       </div>
       
    )
}
export default Shimmer;