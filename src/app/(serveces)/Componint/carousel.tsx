"use client";

import Slider from "react-slick";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="w-full max-w-6xl mx-auto my-10">
      <Slider {...settings}>
        <div className="w-full h-[500px] object-cover flex py-23 justify-center items-center rounded-md bg-blue-200">
        <h1 className="text-8xl font-bold text-center">THIS COLOR IS BLUE</h1>
        <p className=" text-center w-[80%] mx-auto">Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam vero odio eveniet blanditiis ab dignissimos est ullam cupiditate? Repellendus unde sapiente nihil inventore fuga amet tempora incidunt aspernatur cum voluptatem. Lorem, ipsum dolor sit amet consectetur adipisicing elit. A veritatis, voluptatibus ex dolorem nam ea optio molestiae. Impedit molestias consequatur id, dolore cupiditate labore iure molestiae quam quidem. Rerum, nostrum! ipsum, dolor sit amet consectetur adipisicing elit. Sed eaque fuga modi excepturi esse quasi voluptatem cum, inventore aspernatur eveniet quidem, nisi voluptas, doloremque tenetur porro aliquid natus explicabo? Temporibus!Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus nulla veritatis, labore sunt perspiciatis nostrum, voluptatum quae facere consectetur incidunt architecto eos ex ab harum quis eligendi velit temporibus at. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur vel nostrum vitae voluptatum quisquam unde reiciendis illo. Repudiandae ipsa temporibus, ullam omnis velit fugit veritatis error eum iste eius consectetur!</p>
        </div>
        <div className="w-full h-[500px] object-cover rounded-md py-23 bg-stone-400">
        <h1 className="text-8xl font-bold text-center">THIS COLOR IS GRAY</h1>
        <p className=" text-center w-[80%] mx-auto">Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam vero odio eveniet blanditiis ab dignissimos est ullam cupiditate? Repellendus unde sapiente nihil inventore fuga amet tempora incidunt aspernatur cum voluptatem. Lorem, ipsum dolor sit amet consectetur adipisicing elit. A veritatis, voluptatibus ex dolorem nam ea optio molestiae. Impedit molestias consequatur id, dolore cupiditate labore iure molestiae quam quidem. Rerum, nostrum! ipsum, dolor sit amet consectetur adipisicing elit. Sed eaque fuga modi excepturi esse quasi voluptatem cum, inventore aspernatur eveniet quidem, nisi voluptas, doloremque tenetur porro aliquid natus explicabo? Temporibus!Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus nulla veritatis, labore sunt perspiciatis nostrum, voluptatum quae facere consectetur incidunt architecto eos ex ab harum quis eligendi velit temporibus at. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur vel nostrum vitae voluptatum quisquam unde reiciendis illo. Repudiandae ipsa temporibus, ullam omnis velit fugit veritatis error eum iste eius consectetur!</p>
       
        </div>
        <div className="w-full h-[500px] object-cover rounded-md py-23 bg-pink-200" >
         <h1 className="text-8xl font-bold text-center">THIS COLOR IS PINK</h1>
        <p className=" text-center w-[80%] mx-auto">Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam vero odio eveniet blanditiis ab dignissimos est ullam cupiditate? Repellendus unde sapiente nihil inventore fuga amet tempora incidunt aspernatur cum voluptatem. Lorem, ipsum dolor sit amet consectetur adipisicing elit. A veritatis, voluptatibus ex dolorem nam ea optio molestiae. Impedit molestias consequatur id, dolore cupiditate labore iure molestiae quam quidem. Rerum, nostrum! ipsum, dolor sit amet consectetur adipisicing elit. Sed eaque fuga modi excepturi esse quasi voluptatem cum, inventore aspernatur eveniet quidem, nisi voluptas, doloremque tenetur porro aliquid natus explicabo? Temporibus!Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus nulla veritatis, labore sunt perspiciatis nostrum, voluptatum quae facere consectetur incidunt architecto eos ex ab harum quis eligendi velit temporibus at. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur vel nostrum vitae voluptatum quisquam unde reiciendis illo. Repudiandae ipsa temporibus, ullam omnis velit fugit veritatis error eum iste eius consectetur!</p>
       
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
