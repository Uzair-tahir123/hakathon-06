import Image from "next/image";

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Going all-in with minimalist design",
      image: "/Group 173.png",
      description:
        "Minimalist design is a trend that's here to stay. Here's how to incorporate it into your projects.",
      date: "October 12, 2024",
    },
    {
      id: 2,
      title: "Exploring new ways of decorating",
      image: "/Group 174.png",
      description:
        "Decorating your home can be exciting! Check out these new trends to refresh your space.",
      date: "November 5, 2024",
    },
    {
      id: 3,
      title: "Handmade pieces that took time to make",
      image: "/Group 175.png",
      description:
        "Handmade crafts add a unique touch to your home. Learn more about their value and artistry.",
      date: "November 18, 2024",
    },
  ];

  const categories = [
    "Interior Design",
    "Minimalism",
    "Decorating Tips",
    "Furniture",
    "Handmade Crafts",
  ];

  const recentPosts = [
    { title: "Modern interior styles to try", date: "October 8, 2024" },
    { title: "Why minimalism is the future", date: "September 25, 2024" },
    { title: "Choosing the perfect coffee table", date: "September 15, 2024" },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] bg-cover bg-center" style={{ backgroundImage: "url('/shophero.png')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <h1 className="text-white text-4xl font-bold">Blog</h1>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="text-center py-4 bg-white shadow-md">
        <p className="text-gray-600 font-medium">
          <span className="font-bold text-gray-800">Home</span> &gt; Blog
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto py-12 px-4 lg:px-0 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Blog Posts */}
        <div className="col-span-2 space-y-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image src={post.image} alt={post.title} width={800} height={400} className="w-full h-[200px] object-cover" />
              <div className="p-6">
                <h2 className="text-lg font-bold text-gray-800">{post.title}</h2>
                <p className="text-gray-600 text-sm mt-2">{post.date}</p>
                <p className="text-gray-700 mt-4">{post.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Categories */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-gray-800">Categories</h3>
            <ul className="mt-4 space-y-2">
              {categories.map((category, index) => (
                <li key={index} className="text-gray-600 hover:text-gray-800 cursor-pointer">
                  {category}
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-gray-800">Recent Posts</h3>
            <ul className="mt-4 space-y-4">
              {recentPosts.map((post, index) => (
                <li key={index} className="text-gray-600">
                  <p className="font-medium hover:text-gray-800 cursor-pointer">{post.title}</p>
                  <p className="text-sm text-gray-500">{post.date}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
