import React from 'react'

async function Divs({searchParams}:{searchParams:Promise<{lang?:string}>}) {
    const {lang = "en"} = await searchParams;
    if(lang === "en"){
  return (
    <div>  <div className="w-full h-[500px] object-cover flex py-23 justify-center flex-col items-center rounded-md bg-blue-200">
        <h1 className="text-8xl font-bold text-center">THIS COLOR IS BLUE</h1>
        <p className=" text-center w-[80%] mx-auto">Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam vero odio eveniet blanditiis ab dignissimos est ullam cupiditate? Repellendus unde sapiente nihil inventore fuga amet tempora incidunt aspernatur cum voluptatem. Lorem, ipsum dolor sit amet consectetur adipisicing elit. A veritatis, voluptatibus ex dolorem nam ea optio molestiae. Impedit molestias consequatur id, dolore cupiditate labore iure molestiae quam quidem. Rerum, nostrum! ipsum, dolor sit amet consectetur adipisicing elit. Sed eaque fuga modi excepturi esse quasi voluptatem cum, inventore aspernatur eveniet quidem, nisi voluptas, doloremque tenetur porro aliquid natus explicabo? Temporibus!Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus nulla veritatis, labore sunt perspiciatis nostrum, voluptatum quae facere consectetur incidunt architecto eos ex ab harum quis eligendi velit temporibus at. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur vel nostrum vitae voluptatum quisquam unde reiciendis illo. Repudiandae ipsa temporibus, ullam omnis velit fugit veritatis error eum iste eius consectetur!</p>
        </div>
      </div>
  )
}
else{
    <div>
  <div className="w-full h-[500px] object-cover flex py-23 justify-center flex-col items-center rounded-md bg-blue-200">
    <h1 className="text-8xl font-bold text-center">این رنگ آبی است</h1>
    <p className="text-center w-[80%] mx-auto">
      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است. این متن تنها برای پر کردن فضا استفاده می‌شود. 
      اینجا می‌توانید توضیحاتی درباره موضوع مورد نظرتان بنویسید. 
      این متن درباره کار، ویژگی‌ها و جزئیات مختلفی صحبت می‌کند و می‌تواند با توجه به نیاز شما تغییر داده شود.
      همچنین این متن مثالی است برای نشان دادن چیدمان و نحوه نمایش پاراگراف در صفحه. 
      شما می‌توانید هر توضیحی که می‌خواهید در این بخش قرار دهید تا ظاهر صفحه کامل‌تر شود.
    </p>
  </div>
</div>
}
}

export default Divs