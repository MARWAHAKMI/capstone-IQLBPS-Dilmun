function ItemsCard({ item }) {
  return (
    <div
      data-testid="item-card"
      className="lg:w-80 md:w-64 w-96 bg-background m-7 rounded-lg hover:shadow-secondary shadow-gray-400 shadow-lg hover:shadow-2xl duration-300"
    >
      <figure className="relative max-w-sm transition-all cursor-pointer">
        <a href="/">
          <img
            className="rounded-t-lg overflow-hidden mb-3 lg:h-80 md:h-64 h-96 shadow-md md:w-64 lg:w-80 w-96"
            src={item.file}
            alt="product"
          />
          <figcaption className="absolute top-3 right-1 px-4 text-lg">
            {item.type === 'Donated' ? (
              <span className="inline-block bg-background bg-opacity-80 rounded-xl px-3 py-1 text-xl font-bold text-primary mr-2 mb-2">
                {item.type}
              </span>
            ) : (
              <span className="inline-block bg-background bg-opacity-80 rounded-xl px-3 py-1 text-xl font-bold text-primary mr-2 mb-2">
                {item.price}
              </span>
            )}
          </figcaption>
        </a>
      </figure>
      <div className="px-5 pb-5">
        {item.title.length > 15 ? (
          <h5 className="text-3xl pb-2 font-extrabold text-primary">
            {item.title.slice(0, 1).toUpperCase()}
            {item.title.slice(1, 15)} ...
          </h5>
        ) : (
          <h5 className="text-3xl pb-2 font-extrabold text-primary">
            {item.title.slice(0, 1).toUpperCase()}
            {item.title.slice(1)}
          </h5>
        )}
        <span className="text-xl py-1 font-semibold text-primary">
          {item.type}
        </span>
        {item.description.length > 20 ? (
          <h5 className="text-base py-1 font-base text-primary">
            {item.description.slice(0, 1).toUpperCase()}
            {item.description.slice(1, 30)}...
          </h5>
        ) : (
          <h5 className="text-base py-1 font-base text-primary">
            {item.description.slice(0, 1).toUpperCase()}
            {item.description.slice(1)}
          </h5>
        )}
        <div className="">
          {typeof item.category === 'object' ? (
            item.category.slice(0, 3).map((cat) => {
              return (
                <span className="text-sm inline-block mr-1 font-semibold text-primary my-2 bg-tertiary py-2 px-4 bg-opacity-90 rounded-lg">
                  {cat}
                </span>
              );
            })
          ) : (
            <span className="text-sm inline-block mr-1 font-semibold text-primary my-2 bg-tertiary py-2 px-4 bg-opacity-90 rounded-lg">
              {item.category}
            </span>
          )}
          <h5 className="text-base py-1 font-base text-primary">
            {item.createdAt}
          </h5>
        </div>
        <button
          type="button"
          className="w-full my-2 duration-300 text-background bg-secondary hover:bg-primary focus:ring-1 focus:outline-none focus:ring-tertiary font-medium rounded-lg text-md px-5 py-2.5 text-center"
        >
          <a href={`mailto: ${item.owner.email}`}>Email Owner</a>
        </button>
      </div>
    </div>
  );
}
export default ItemsCard;