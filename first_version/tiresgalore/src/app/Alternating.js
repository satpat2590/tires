import './globals.css'

const Alternating = () => {
    const imageData = [
      { src: 'joetireworkout.jpg', caption: 'Caption 1' },
      { src: 'joetireworkout.jpg', caption: 'Caption 2' },
      { src: 'joetireworkout.jpg', caption: 'Caption 3' },
      { src: 'joetireworkout.jpg', caption: 'Caption 4' },
    ];
  
    return (
      <div className="container mx-auto py-8">
      {imageData.map((item, index) => (
        <div key={index} className="flex flex-wrap mb-8">
          <div className={index % 2 === 0 ? 'w-1/2 order-1' : 'w-1/2 order-2'}>
            <img src={item.src} alt={item.caption} className="object-cover h-full w-full" />
          </div>
          <div className={index % 2 === 0 ? 'w-1/2 order-2 translate-y-[50%]' : 'w-1/2 order-1 translate-y-[50%]'}>
            <div className="float-in-caption">
              <p>{item.caption}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    );
};

export default Alternating;