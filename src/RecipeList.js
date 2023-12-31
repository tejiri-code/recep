import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaInstagram, FaTwitterSquare } from 'react-icons/fa';
import { Link } from 'react-scroll';
import axios from 'axios';



import recipe from './assets/recipe.png';
import pancake from './assets/pancake.png';
import caprese from './assets/caprese.png';
import mango from './assets/mango.png';
import pepper from './assets/pepper.png';



const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white bg-black">
      <h1 className="w-full text-3xl font-bold text-[#851f1f]">ReCP</h1>
      <ul className="hidden md:flex">
        <li className="p-4 hover:scale-105 duration-300 hover:text-[#851f1f] cursor-pointer hover-nav-item">Home</li>
        <li className="p-4 hover:scale-105 duration-300 hover:text-[#851f1f] cursor-pointer hover-nav-item">
          <Link to="Cards" smooth={true} duration={700}>
            Recipes
          </Link>
        </li>
        <li className="p-4 hover:scale-105 duration-300 hover:text-[#851f1f] cursor-pointer hover-nav-item">
          <Link to="Analytics" smooth={true} duration={700}>
            About
          </Link>
        </li>
        <li className="p-4 hover:scale-105 duration-300 hover:text-[#851f1f] cursor-pointer hover-nav-item">Categories</li>
        <li className="p-4 hover:scale-105 duration-300 hover:text-[#851f1f] cursor-pointer hover-nav-item">
          <Link to="Contact" smooth={true} duration={700}>
            Contact
          </Link>
        </li>
      </ul>
      <div onClick={() => setNav(!nav)} className="block md:hidden cursor-pointer">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>



      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <ul className="p-4 uppercase">
          <li onClick={handleNav} className="p-4 hover:scale-105 duration-300 border-b border-gray-600 hover:text-[#851f1f]">Home</li>
          <Link to="Cards" smooth={true} duration={700} onClick={handleNav}>
          <li onClick={handleNav} className="p-4 hover:scale-105 duration-300 border-b border-gray-600 hover:text-[#851f1f]">
    Recipes
</li></Link>
<Link to="Analytics" smooth={true} duration={700} onClick={handleNav}>
          <li onClick={handleNav} className="p-4 hover:scale-105 duration-300 border-b border-gray-600 hover:text-[#851f1f]">
  About Us
</li></Link>
<li className="p-4 hover:scale-105 duration-300 border-b border-gray-600 hover:text-[#851f1f]">Categories</li>
          <li onClick={handleNav} className="p-4 hover:scale-105 duration-300 hover:text-[#851f1f]">Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 text-white">
      <img
        className="w-[100px] md:w-[400px] mx-auto my-4 slide-in-left" // Add the slide-in-left class
        src={pepper}
        alt="analytics"
      />
      <div className="flex flex-col justify-left">
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
          <p className="text-[#851f1f] font-bold p-2">DELICIOUS RECIPES</p>
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6"> Explore the Culinary World.</h1>
          <div className="flex justify-center items-center">
            <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">Discover Tasty Dishes </p>
          </div>
          <div>
            <p className="md:text-2xl text-xl font-bold text-gray-500">Try out new recipes and satisfy your taste buds.</p>
            <button className="bg-[#851f1f] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

function RecipeCard({ recipe }) {
  // Check if recipe is defined and has the required properties
  if (!recipe || !recipe.label || !recipe.ingredientLines || !recipe.image) {
    return (
      <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
        <p className="text-center">Recipe data not available</p>
      </div>
    );
  }

  return (
    <div id="recp" className="w-full shadow-xl flex flex-col p-4 my-4 bg-white rounded-lg hover:scale-105 duration-300">
      <img className="w-20 mx-auto " src={recipe.image} alt={recipe.label} />
      <h2 className="text-2xl font-bold text-center py-8">{recipe.label}</h2>
      <h3 className="text-lg font-medium mb-2">Ingredients:</h3>
      <ul className="list-disc pl-6 mb-4">
        {recipe.ingredientLines.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}




function Analytics() {
  return (
    <div id="Analytics" className="w-full bg-black py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={recipe} alt="recipe analytics" />
        <div className="flex flex-col justify-center">
          <p className="text-[#851f1f] font-bold">ABOUT ReCP</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl text-white font-bold py-2">Discover the Art of Food</h1>
          <p className="text-white">
            Welcome to ReCP, your ultimate destination for exploring and sharing the art of food. Whether you're a seasoned chef or a home cook, ReCP offers a centralized platform to access recipe analytics and trends, helping you make informed and delightful cooking decisions.

            <br />
            <br />

            Our vast collection of recipes covers a wide range of categories, from delectable breakfast dishes and refreshing salads to mouthwatering desserts and exotic cocktails. 

            <br />
            <br />

            At ReCP, we believe that food is not just a necessity; it's an experience, an art that brings people together. Our platform allows food enthusiasts like you to connect, share ideas, and gain valuable insights from a passionate community that shares the same love for culinary adventures.

            <br />
            <br />

            Join us on this gastronomic journey, where you can explore new flavors, learn cooking techniques, and create unforgettable memories with every dish you prepare.

            <br />
            <br />

            Are you ready to elevate your culinary skills? Get started with ReCP today!

          </p>
          <button className="text-[#851f1f] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 bg-white">Get Started</button>
        </div>
      </div>
    </div>
  );
}

function Newsletter() {
  return (
    <div className="w-full py-16 text-white px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 text-black">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Subscribe to Our Newsletter</h1>
          <p>Sign up to our newsletter and stay up to date with the latest recipes and cooking tips.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full ">
            <input className="p-3 w-full rounded-md font-medium bg-black text-black" type="email" placeholder="Enter your email address" />
            <button className="bg-[#851f1f] w-[200px] rounded-md font-medium ml-4 my-6 px-6 py-3 text-black">Subscribe</button>
          </div>
          <p>We care about the protection of your data. Read our <span className="text-[#851f1f]">Privacy Policy</span></p>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 bg-black text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#851f1f]">ReCP</h1>
        <p className="py-4">At ReCP, we believe that everyone should have the opportunity to explore the culinary world and enjoy delicious meals. We are dedicated to providing accessible and innovative recipe solutions to individuals of all backgrounds.</p>
        <div className="flex md:w-[75%] my-6 justify-between">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div>
        <h6 className="font-medium text-gray-400">Solutions</h6>
        <ul>
          <li className="py-2 text-sm">Breakfast</li>
          <li className="py-2 text-sm">Lunch</li>
          <li className="py-2 text-sm">Dinner</li>
          <li className="py-2 text-sm">Desserts</li>
        </ul>
      </div>
      <div>
        <h6 className="font-medium text-gray-400">Support</h6>
        <ul>
          <li className="py-2 text-sm">FAQ</li>
          <li className="py-2 text-sm">Contact Us</li>
          <li className="py-2 text-sm">Privacy Policy</li>
          <li className="py-2 text-sm">Terms of Service</li>
        </ul>
      </div>
      <div>
        <h6 className="font-medium text-gray-400">Company</h6>
        <ul>
          <li className="py-2 text-sm">About</li>
          <li className="py-2 text-sm">Team</li>
          <li className="py-2 text-sm">Careers</li>
          <li className="py-2 text-sm">Partnerships</li>
        </ul>
      </div>
    </div>
  );
} 

function RecipeList() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const appId = 'be02e134'; // Replace with your Edamam API App ID
      const appKey = '0827baaa491a61ee9bc1a1b556460fc9'; // Replace with your Edamam API App Key
      const response = await axios.get(
        `https://api.edamam.com/search?q=${encodeURIComponent(searchQuery)}&app_id=${appId}&app_key=${appKey}`
      );

      console.log('API response:', response.data);

      if (response.data && response.data.hits) {
        const recipes = response.data.hits.map((hit) => hit.recipe);
        setSearchResults(recipes);
      } else {
        setSearchResults([]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    if (searchQuery.trim() !== '') {
      handleSearch();
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  console.log('searchResults:', searchResults);

  return (
    <div className="App bg-black">
      <Navbar />
      <Hero />
      <div className="max-w-[1240px] mx-auto p-4">
        <div  id="Cards" className="flex items-center">
          <input
            className="w-full p-3 rounded-md font-medium bg-black text-white border border-gray-300"
            type="text"
            placeholder="Search for recipes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            className="ml-2 bg-[#851f1f] rounded-md px-4 py-2 text-white font-medium"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {searchResults.length > 0 ? (
            searchResults.map((recipe) => (
              <RecipeCard key={recipe.uri} recipe={recipe} />
            ))
          ) : (
            <div className="text-center">No recipes found. Try a different search query.</div>
          )}
        </div>
      </div>
      <Analytics />
      <Newsletter />
      <Footer />
    </div>
  );
}


export default RecipeList;
