import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { db, storage } from '../../lib/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export default function CreateEventModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    eventName: '',
    description: '',
    date: '',
    venue: '',
    registrationLink: '',
    imageUrl: ''
  });

  const [imagePreview, setImagePreview] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'imageUrl') {
      const url = value.trim();
      if (url) {
        setImagePreview(url);
        setFormData(prev => ({
          ...prev,
          imageUrl: url
        }));
      } else {
        setImagePreview(null);
        setFormData(prev => ({
          ...prev,
          imageUrl: ''
        }));
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      console.log('Starting event creation...');
      let imageUrl = null;

      // Use the provided image URL
      if (formData.imageUrl) {
        console.log('Using provided image URL');
        imageUrl = formData.imageUrl;
      }

      // Prepare event data
      const eventData = {
        name: formData.eventName,
        description: formData.description,
        date: formData.date, // Store as YYYY-MM-DD format
        venue: formData.venue,
        registrationLink: formData.registrationLink || null,
        imageUrl,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      console.log('Saving event to Firestore:', eventData);

      try {
        // Save to Firestore
        const docRef = await addDoc(collection(db, 'events'), eventData);
        console.log('Event created successfully with ID:', docRef.id);

        // Reset form and close modal
        setFormData({
          eventName: '',
          description: '',
          date: '',
          venue: '',
          registrationLink: '',
          image: null
        });
        setImagePreview(null);
        onClose();
      } catch (firestoreError) {
        console.error('Error saving to Firestore:', firestoreError);
        throw new Error('Failed to save event: ' + firestoreError.message);
      }
    } catch (error) {
      console.error('Error creating event:', error);
      setError(error.message || 'Failed to create event. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50"
        >
          {/* Blurred backdrop */}
          <div 
            className="absolute inset-0 backdrop-blur-sm bg-black/30" 
            onClick={onClose} 
          />
          
          {/* Centered modal */}
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="bg-white/95 backdrop-blur-sm rounded-xl w-full max-w-xl p-6 relative overflow-y-auto max-h-[90vh] shadow-2xl border border-gray-100"
        >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>

        <h2 className="text-xl font-bold text-gray-900 mb-4">Create New Event</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Event Name */}
          <div>
            <label htmlFor="eventName" className="block text-sm font-medium text-gray-700">
              Event Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="eventName"
              name="eventName"
              value={formData.eventName}
              onChange={handleInputChange}
              placeholder="Enter event name"
              className="mt-1 w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 text-sm text-black"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows={3}
              placeholder="Enter event description"
              className="mt-1 w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 text-sm text-black"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Date */}
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="mt-1 w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 text-sm text-black"
                required
              />
            </div>

            {/* Venue */}
            <div>
              <label htmlFor="venue" className="block text-sm font-medium text-gray-700">
                Venue <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="venue"
                name="venue"
                value={formData.venue}
                onChange={handleInputChange}
                placeholder="Enter venue location"
                className="mt-1 w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 text-sm text-black"
                required
              />
            </div>
          </div>

          {/* Registration Link */}
          <div>
            <label htmlFor="registrationLink" className="block text-sm font-medium text-gray-700">
              Registration Link (Optional)
            </label>
            <input
              type="url"
              id="registrationLink"
              name="registrationLink"
              value={formData.registrationLink}
              onChange={handleInputChange}
              placeholder="https://"
              className="mt-1 w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 text-sm text-black"
            />
          </div>

          {/* Image URL Input */}
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700">
              Event Image URL (Optional)
            </label>
            
            {/* Image Preview */}
            {imagePreview && (
              <div className="relative w-full max-w-md mx-auto">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="rounded-lg shadow-md mb-2 w-full h-32 object-cover"
                />
                <button
                  type="button"
                  onClick={() => {
                    setImagePreview(null);
                    setFormData(prev => ({ ...prev, imageUrl: '' }));
                  }}
                  className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 focus:outline-none"
                >
                  <X size={14} />
                </button>
              </div>
            )}

            {/* Image URL input */}
            <div>
              <input
                type="url"
                id="imageUrl"
                name="imageUrl"
                value={formData.imageUrl || ''}
                onChange={handleInputChange}
                placeholder="Enter image URL"
                className="mt-1 w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 text-sm text-black"
              />
            </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="text-red-500 text-sm mt-2">
                {error}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex justify-end space-x-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                disabled={isSubmitting}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 flex items-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Creating...
                  </>
                ) : (
                  'Create Event'
                )}
              </button>
            </div>
          </form>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
