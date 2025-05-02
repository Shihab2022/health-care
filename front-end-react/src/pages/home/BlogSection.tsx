const blogPosts = [
  {
    id: 1,
    image: '/src/img/blog1.jpg',
    alt: 'New product announcement',
    date: '22 Aug, 2023',
    title: 'We have announced our new product',
    excerpt:
      'Lorem ipsum dolor a sit ameti, consectetur adipisicing elit, sed do eiusmod tempor incididunt sed do incididunt sed.',
    link: 'blog-single.html',
  },
  {
    id: 2,
    image: '/src/img/blog2.jpg',
    alt: 'Dental health solutions',
    date: '15 Jul, 2023',
    title: 'Top five ways for solving teeth problems',
    excerpt:
      'Lorem ipsum dolor a sit ameti, consectetur adipisicing elit, sed do eiusmod tempor incididunt sed do incididunt sed.',
    link: 'blog-single.html',
  },
  {
    id: 3,
    image: '/src/img/blog3.jpg',
    alt: 'Business solutions',
    date: '05 Jan, 2023',
    title: 'We provide highly business solutions',
    excerpt:
      'Lorem ipsum dolor a sit ameti, consectetur adipisicing elit, sed do eiusmod tempor incididunt sed do incididunt sed.',
    link: 'blog-single.html',
  },
];
const BlogSection = () => {
  return (
    <section id='blog' className='py-16 bg-gray-50'>
      <div className='container mx-auto px-4'>
        {/* Section Title */}
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-4'>
            Keep up with Our Most Recent Medical News
          </h2>
          <div className='flex justify-center mb-4'>
            <img
              src='/src/img/section-img.png'
              alt='Section divider'
              className='h-2'
            />
          </div>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            Lorem ipsum dolor sit amet consectetur adipiscing elit praesent
            aliquet. pretiumts
          </p>
        </div>

        {/* Blog Posts */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className='bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300'
            >
              {/* Blog Image */}
              <div className='overflow-hidden'>
                <img
                  src={post.image}
                  alt={post.alt}
                  className='w-full h-48 object-cover hover:scale-105 transition-transform duration-500'
                />
              </div>

              {/* Blog Content */}
              <div className='p-6'>
                <div className='text-sm text-blue-600 font-medium mb-2'>
                  {post.date}
                </div>
                <h3 className='text-xl font-bold text-gray-800 mb-3 hover:text-blue-600 transition-colors duration-300'>
                  <a href={post.link}>{post.title}</a>
                </h3>
                <p className='text-gray-600 mb-4'>{post.excerpt}</p>
                <a
                  href={post.link}
                  className='inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300'
                >
                  Read More
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-4 w-4 ml-1'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M14 5l7 7m0 0l-7 7m7-7H3'
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
