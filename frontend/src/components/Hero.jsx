import React from 'react'
 
function Hero() {
  return (
    <>
    <main className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center bg-gray-200">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Best Buy store for Men & Women....
              <br className="hidden lg:inline-block" />Quality Product.
            </h1>
            <p className="mb-8 leading-relaxed">At Best Buy Clothing Store, we believe that style and comfort go hand in hand. Our curated collection features the latest trends and timeless classics, ensuring there’s something for everyone. Whether you’re looking for casual wear, business attire, or activewear, our diverse selection caters to all tastes and occasions. Our friendly staff is always on hand to help you find the perfect fit, while our commitment to quality ensures you can shop with confidence. Visit us today to refresh your wardrobe and discover fashion that inspires!.</p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img 
                className="object-cover object-center rounded" 
                alt="hero" 
                src="https://fieldcheck.biz/images/blog_cach_quan_ly_chuoi_cua_hang_thoi_trang/cach-quan-ly-chuoi-cua-hang-thoi-trang-hieu-qua.webp" />
          </div>
      </div>
    </main>

    </>
  )
}

export default Hero