// api.js
const API_BASE_URL = 'https://api.edamam.com'; // Replace this with the actual API URL

export async function fetchRecipes() {
  try {
    const response = await fetch(`${API_BASE_URL}/recipes`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    return [];
  }
}
