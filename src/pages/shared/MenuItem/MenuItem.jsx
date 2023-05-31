

const MenuItem = ({item}) => {
    const {name, image, price, recipe} = item

    return (
        <div className="flex space-x-4">
            <img style={{borderRadius : "0 200px 200px 200px"}} className="w-[120px]"  src={image} alt="" />
            <div>
                <h2>{name}-----------</h2>
                <p>{recipe}</p>
            </div>
                <p className="text-yellow-600 font-medium">$ {price}</p>
        </div>
    );
};

export default MenuItem;