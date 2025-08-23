import { useState } from "react";
import FullCalendar, { DateSelectArg, EventClickArg } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import type { FormData } from "../types/types";
import type { CalendarEvent } from "../types/types";

const services = [
  { name: "Haircut", duration: 1 },  
  { name: "Blow Dry", duration: 1 }, 
  { name: "Keratin Treatment", duration: 3 }, 
  { name: "Scalp Facial", duration: 1 },
  { name: "Deep Conditioning Treatment", duration: 1 }, 
  { name: "Root Retouch w/ haircut", duration: 2 }, 
  { name: "Root Retouch", duration: 2 }, 
  { name: "Faceframing Highlight", duration: 2 }, 
  { name: "Partial Highlight", duration: 2 }, 
  { name: "Full Highlight", duration: 3 },     
  { name: "Mini Highlight", duration: 1 },   
  { name: "All Over Color", duration: 3 },
  { name: "Glaze includes blow dry", duration: 1.5 }, 
  { name: "Color Correction", duration: 7 }, 
  { name: "All Over Color", duration: 3 }            
];

const BookingCalendar = () => {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<{ start: Date; end: Date } | null>(null);
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", phone: "", service: "" });

  const handleSelect = (info: DateSelectArg) => {
    setSelectedSlot({ start: info.start, end: info.end });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSlot) return;

    const startDate = selectedSlot.start;
    const serviceObj = services.find((service) => service.name === formData.service);
    if (!serviceObj) return;
    const endDate = new Date(startDate);
    endDate.setMinutes(endDate.getMinutes() + serviceObj.duration * 60);

    const hasConflict = events.some((event) => {
      const existingStart = new Date(event.start);
      const existingEnd = new Date(event.end);
      return startDate < existingEnd && endDate > existingStart;
    });

    if (hasConflict) {
      alert("This time overlaps with another reservation. Please choose a different slot.");
      return;
    }

    const newEvent = {
      id: String(Date.now()),
      title: `Reserved`,
      start: startDate.toISOString(),
      end: endDate.toISOString(),
    };

    setEvents((prev) => [...prev, newEvent]);
    setSelectedSlot(null);
    setFormData({ name: "", email: "", phone: "", service: "" });
  };

  const handleEventClick = (clickInfo: EventClickArg) => {
    if (window.confirm(`Cancel reservation: ${clickInfo.event.title}?`)) {
      setEvents((prev) => prev.filter((event) => event.id !== clickInfo.event.id));
    }
  };

  return (
    <div id="booking">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        allDaySlot={false}
        slotDuration="00:30:00"
        slotMinTime="10:00:00"
        slotMaxTime="20:00:00"
        selectable={true}
        selectMirror={true}
        selectOverlap={false}
        select={handleSelect}
        events={events}
        eventClick={handleEventClick}
        firstDay={3}
        weekends={true}
        hiddenDays={[0, 1, 2]} 
      />

      {selectedSlot && (
        <div id="booking-popup-box" onClick={() => setSelectedSlot(null)}>
          <div id="booking-popup" onClick={(e) => e.stopPropagation()}>
            <h2>Reserve Appointment</h2>
            <p>
              Selected: {selectedSlot.start.toLocaleString()}
            </p>
            <form onSubmit={handleSubmit} id="booking-form">
              <input
                type="text"
                placeholder="Name..."
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <input
                type="email"
                placeholder="Email..."
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <input
                type="text"
                placeholder="Phone..."
                pattern="[0-9]{10}"    
                title="Please enter a 10-digit phone number"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
              <select
                required
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              >
                <option value="">Select Service</option>
                {services.map((service) => (
                  <option key={service.name} value={service.name}>
                    {service.name} ({service.duration}h)
                  </option>
                ))}
              </select>
              <button type="submit">Confirm Reservation</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingCalendar;






