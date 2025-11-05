import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { Calendar, Clock, MapPin, Users, DollarSign, CheckCircle2, AlertCircle } from 'lucide-react'
import e from 'cors'

export default function Modal({showModal = false, setShowModal, event}) {

  function handleRegister() {
    event.registerLink ? window.open(event.registerLink, "_blank") : alert("Registration link not available")
    setShowModal(false)
  }

  return (
    <Dialog open={showModal} onClose={setShowModal} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-5xl"
          >
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              {/* Event Header Image */}
              <div className="mb-6">
                <img
                  src={event.image || "/placeholder.svg"}
                  alt={event.name}
                  className="rounded-lg w-full h-64 object-cover"
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Content - Left Side */}
                <div className="lg:col-span-2">
                  <DialogTitle as="h3" className="text-3xl font-bold text-slate-900 mb-2">
                    {event.name || "No Name found"}
                  </DialogTitle>
                  
                  <div className="inline-block bg-orange-500 text-white text-sm px-3 py-1 rounded-full mb-4">
                    {event.tag || "Event"}
                  </div>

                  <div className="mt-4">
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">About This Event</h4>
                    <p 
                      className="text-slate-700 leading-relaxed" 
                      dangerouslySetInnerHTML={{ __html: (event.description || "No Description found").replace(/\n/g, "<br/>") }} 
                    />
                  </div>

                  {/* Highlights Section */}
                  {event.highlights && event.highlights.length > 0 && (
                    <div className="mt-6">
                      <h4 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                        <CheckCircle2 size={20} className="text-green-600" />
                        Event Highlights
                      </h4>
                      <ul className="space-y-2">
                        {event.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start gap-2 text-slate-700">
                            <span className="text-green-600 mt-1">✓</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Prerequisites */}
                  {event.prerequisites && (
                    <div className="mt-6">
                      <h4 className="text-lg font-semibold text-slate-900 mb-2 flex items-center gap-2">
                        <AlertCircle size={20} className="text-blue-600" />
                        Prerequisites
                      </h4>
                      <p className="text-slate-700">{event.prerequisites}</p>
                    </div>
                  )}
                </div>

                {/* Event Details - Right Side */}
                <div className="lg:col-span-1">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 space-y-4 sticky top-4">
                    <h4 className="text-xl font-bold text-slate-900 mb-4">Event Details</h4>
                    
                    {event.date && (
                      <div className="flex items-start gap-3">
                        <Calendar className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                        <div>
                          <p className="text-xs text-slate-600 font-medium">Date</p>
                          <p className="text-slate-900 font-semibold">{event.date}</p>
                        </div>
                      </div>
                    )}

                    {event.time && (
                      <div className="flex items-start gap-3">
                        <Clock className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                        <div>
                          <p className="text-xs text-slate-600 font-medium">Time</p>
                          <p className="text-slate-900 font-semibold">{event.time}</p>
                        </div>
                      </div>
                    )}

                    {event.venue && (
                      <div className="flex items-start gap-3">
                        <MapPin className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                        <div>
                          <p className="text-xs text-slate-600 font-medium">Venue</p>
                          <p className="text-slate-900 font-semibold">{event.venue}</p>
                        </div>
                      </div>
                    )}

                    {event.seats && (
                      <div className="flex items-start gap-3">
                        <Users className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                        <div>
                          <p className="text-xs text-slate-600 font-medium">Available Seats</p>
                          <p className="text-slate-900 font-semibold">{event.seats}</p>
                        </div>
                      </div>
                    )}

                    {event.fees && (
                      <div className="flex items-start gap-3">
                        <DollarSign className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                        <div>
                          <p className="text-xs text-slate-600 font-medium">Entry Fee</p>
                          <p className="text-slate-900 font-semibold">{event.fees}</p>
                        </div>
                      </div>
                    )}

                    <div className="pt-4 border-t border-indigo-200">
                      <button
                        type="button"
                        onClick={() => handleRegister()}
                        className="w-full justify-center rounded-lg bg-green-600 px-4 py-3 text-base font-semibold text-white shadow-sm hover:bg-green-500 transition-colors cursor-pointer"
                      >
                        Register Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                data-autofocus
                onClick={() => setShowModal(false)}
                className="inline-flex w-full justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 sm:w-auto cursor-pointer"
              >
                Close
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}