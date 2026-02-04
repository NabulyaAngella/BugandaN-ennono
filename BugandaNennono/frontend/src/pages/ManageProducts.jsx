import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function ManageProducts() {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    image: '',
    images: '',
    category: 'other',
    sizes: ''
  });

  const wearableCategories = ['clothing', 'accessories'];

  const categories = [
    { value: 'books', label: { en: 'Books', lg: 'Ebitabo' } },
    { value: 'clothing', label: { en: 'Traditional Clothing', lg: 'Engoye z\'Obuwangwa' } },
    { value: 'crafts', label: { en: 'Crafts & Art', lg: 'Emikono n\'Eby\'Obukodyo' } },
    { value: 'music', label: { en: 'Music & Instruments', lg: 'Ennyimba n\'Ebivuga' } },
    { value: 'jewelry', label: { en: 'Jewelry', lg: 'Amayinja ag\'Omuwendo' } },
    { value: 'food', label: { en: 'Food & Drinks', lg: 'Emmere n\'Ebyokunywa' } },
    { value: 'accessories', label: { en: 'Accessories', lg: 'Ebintu Ebirala' } },
    { value: 'art', label: { en: 'Art', lg: 'Eby\'Obukodyo' } },
    { value: 'other', label: { en: 'Other', lg: 'Ebirala' } }
  ];

  const t = (translations) => translations[language] || translations.en;

  // Check authentication
  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin/login');
    }
  }, [navigate]);

  // Fetch products
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/products');
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const url = editingProduct 
        ? `http://localhost:4000/api/products/${editingProduct._id}`
        : 'http://localhost:4000/api/products';
      
      const method = editingProduct ? 'PUT' : 'POST';
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          price: parseFloat(formData.price),
          images: formData.images ? formData.images.split(',').map(url => url.trim()).filter(url => url) : [],
          sizes: wearableCategories.includes(formData.category) && formData.sizes 
            ? formData.sizes.split(',').map(s => s.trim()).filter(s => s) 
            : []
        })
      });

      if (response.ok) {
        fetchProducts();
        resetForm();
        setShowAddModal(false);
      } else {
        const error = await response.json();
        alert(error.message || 'Error saving product');
      }
    } catch (error) {
      console.error('Error saving product:', error);
      alert('Error saving product');
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      description: product.description,
      price: product.price.toString(),
      image: product.image,
      images: product.images ? product.images.join(', ') : '',
      category: product.category || 'other',
      sizes: product.sizes ? product.sizes.join(', ') : ''
    });
    setShowAddModal(true);
  };

  const handleDelete = async (id) => {
    if (!confirm(t({ en: 'Are you sure you want to delete this product?', lg: 'Oli mukakafu nti oyagala okuggyawo ekintu kino?' }))) {
      return;
    }

    try {
      const response = await fetch(`http://localhost:4000/api/products/${id}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        fetchProducts();
      } else {
        alert('Error deleting product');
      }
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('Error deleting product');
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      price: '',
      image: '',
      images: '',
      category: 'other',
      sizes: ''
    });
    setEditingProduct(null);
  };

  const handleCloseModal = () => {
    setShowAddModal(false);
    resetForm();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-royal-600 to-royal-800">
      {/* Header */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">
            {t({ en: 'Manage Products', lg: 'Kukuuma Ebintu' })}
          </h1>
          <div className="flex gap-4">
            <button
              onClick={() => setShowAddModal(true)}
              className="bg-royal-600 text-white px-6 py-2 rounded-lg hover:bg-royal-700 transition"
            >
              {t({ en: 'Add Product', lg: 'Yongeza Ekintu' })}
            </button>
            <Link
              to="/admin/dashboard"
              className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition"
            >
              {t({ en: 'Back to Dashboard', lg: 'Ddayo ku Dashboard' })}
            </Link>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading ? (
          <div className="text-center text-white text-xl">
            {t({ en: 'Loading...', lg: 'Tukusindika...' })}
          </div>
        ) : products.length === 0 ? (
          <div className="text-center text-white text-xl">
            {t({ en: 'No products found. Add your first product!', lg: 'Tewali bintu. Yongeza ekintu kyakusooka!' })}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product._id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-3 line-clamp-2">{product.description}</p>
                  <p className="text-2xl font-bold text-royal-600 mb-4">
                    UGX {product.price.toLocaleString()}
                  </p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(product)}
                      className="flex-1 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                    >
                      {t({ en: 'Edit', lg: 'Kyusa' })}
                    </button>
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="flex-1 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
                    >
                      {t({ en: 'Delete', lg: 'Gyawo' })}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Add/Edit Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                {editingProduct 
                  ? t({ en: 'Edit Product', lg: 'Kyusa Ekintu' })
                  : t({ en: 'Add New Product', lg: 'Yongeza Ekintu Ekipya' })
                }
              </h2>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 font-semibold mb-2">
                    {t({ en: 'Product Name', lg: 'Erinnya ly\'Ekintu' })}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-500 focus:border-transparent"
                    placeholder={t({ en: 'Enter product name', lg: 'Wandiika erinnya ly\'ekintu' })}
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 font-semibold mb-2">
                    {t({ en: 'Description', lg: 'Ebikwata ku Kintu' })}
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-500 focus:border-transparent"
                    placeholder={t({ en: 'Enter product description', lg: 'Wandiika ebikwata ku kintu' })}
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 font-semibold mb-2">
                    {t({ en: 'Price (UGX)', lg: 'Omuwendo (UGX)' })}
                  </label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    required
                    min="0"
                    step="0.01"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-500 focus:border-transparent"
                    placeholder={t({ en: 'Enter price', lg: 'Wandiika omuwendo' })}
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 font-semibold mb-2">
                    {t({ en: 'Category', lg: 'Ekika' })}
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-500 focus:border-transparent"
                  >
                    {categories.map((cat) => (
                      <option key={cat.value} value={cat.value}>
                        {t(cat.label)}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 font-semibold mb-2">
                    {t({ en: 'Image URL', lg: 'URL y\'Ekifaananyi' })}
                  </label>
                  <input
                    type="url"
                    name="image"
                    value={formData.image}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-500 focus:border-transparent"
                    placeholder={t({ en: 'Enter image URL', lg: 'Wandiika URL y\'ekifaananyi' })}
                  />
                  {formData.image && (
                    <img
                      src={formData.image}
                      alt="Preview"
                      className="mt-3 w-full h-48 object-cover rounded-lg"
                      onError={(e) => e.target.style.display = 'none'}
                    />
                  )}
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">
                    {t({ en: 'Additional Images (comma-separated URLs)', lg: 'Ebifaananyi Ebirala (URLs nga zisengekeddwa comma)' })}
                  </label>
                  <textarea
                    name="images"
                    value={formData.images}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-500 focus:border-transparent"
                    placeholder={t({ en: 'https://example.com/image1.jpg, https://example.com/image2.jpg', lg: 'https://example.com/image1.jpg, https://example.com/image2.jpg' })}
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    {t({ en: 'Separate multiple image URLs with commas', lg: 'Awula URLs z\'ebifaananyi bingi n\'obukoma' })}
                  </p>
                </div>

                {wearableCategories.includes(formData.category) && (
                  <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">
                      {t({ en: 'Available Sizes (comma-separated)', lg: 'Sizes Eziriwo (zisengekeddwa comma)' })}
                    </label>
                    <input
                      type="text"
                      name="sizes"
                      value={formData.sizes}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-500 focus:border-transparent"
                      placeholder={t({ en: 'e.g. XS, S, M, L, XL, XXL', lg: 'e.g. XS, S, M, L, XL, XXL' })}
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      {t({ en: 'Enter sizes separated by commas (e.g. S, M, L, XL)', lg: 'Wandiika sizes zisengekeddwa ne commas' })}
                    </p>
                  </div>
                )}

                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="flex-1 bg-royal-600 text-white px-6 py-3 rounded-lg hover:bg-royal-700 transition font-semibold"
                  >
                    {editingProduct 
                      ? t({ en: 'Update Product', lg: 'Kyusa Ekintu' })
                      : t({ en: 'Add Product', lg: 'Yongeza Ekintu' })
                    }
                  </button>
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="flex-1 bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition font-semibold"
                  >
                    {t({ en: 'Cancel', lg: 'Sazaamu' })}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
